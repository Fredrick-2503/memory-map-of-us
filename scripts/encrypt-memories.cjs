const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const passcode = '250306';
const srcFile = path.join(__dirname, '..', 'src', 'data', 'memories.ts');
const destFile = path.join(__dirname, '..', 'src', 'data', 'memories_encrypted.json');

console.log('Starting memories encryption process...');

if (!fs.existsSync(srcFile)) {
  console.error(`Source file not found at ${srcFile}`);
  process.exit(1);
}

try {
  const content = fs.readFileSync(srcFile, 'utf8');
  
  // Locate the start of the memoryLocations array
  const declStr = 'export const memoryLocations';
  const declIndex = content.indexOf(declStr);
  if (declIndex === -1) {
    throw new Error('Could not find declaration of memoryLocations');
  }
  
  const eqIndex = content.indexOf('=', declIndex);
  if (eqIndex === -1) {
    throw new Error('Could not find assignment operator (=) after memoryLocations declaration');
  }
  
  const jsonStart = content.indexOf('[', eqIndex);
  if (jsonStart === -1) {
    throw new Error('Could not find start of array ([) after declaration');
  }
  
  const jsonEnd = content.lastIndexOf(']') + 1;
  if (jsonEnd === 0) {
    throw new Error('Could not find end of array (])');
  }
  
  const jsonText = content.slice(jsonStart, jsonEnd);
  
  // Validate it parses as valid JSON
  const data = JSON.parse(jsonText);
  console.log(`Successfully parsed memories data. Found ${data.length} locations.`);
  
  const plaintext = JSON.stringify(data);
  
  // Crypto setup
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const iterations = 10000;
  
  // Derive a 256-bit (32-byte) key using PBKDF2 with SHA-256
  const key = crypto.pbkdf2Sync(passcode, salt, iterations, 32, 'sha256');
  
  // Encrypt using AES-256-GCM
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const authTag = cipher.getAuthTag();
  
  // Web Crypto decrypt expects: Ciphertext + AuthTag concatenated
  const ciphertextWithTag = Buffer.concat([encrypted, authTag]);
  
  const payload = {
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    ciphertext: ciphertextWithTag.toString('base64'),
    iterations: iterations
  };
  
  // Ensure target directory exists
  const destDir = path.dirname(destFile);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  fs.writeFileSync(destFile, JSON.stringify(payload, null, 2));
  console.log(`Encryption complete. Encrypted memories saved to ${destFile}`);
} catch (error) {
  console.error('Encryption failed:', error.message);
  process.exit(1);
}
