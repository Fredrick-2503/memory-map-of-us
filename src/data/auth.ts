import { MemoryLocation } from "./memories";

// Encrypted payload interface
export interface EncryptedPayload {
  salt: string;
  iv: string;
  ciphertext: string;
  iterations: number;
}

// Convert Base64 to ArrayBuffer
const base64ToArrayBuffer = (base64: string): ArrayBuffer => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};

/**
 * Decrypts the memory locations using a client-side derived key from the passcode.
 * Throws an error if decryption fails (e.g. incorrect passcode).
 */
export const decryptMemories = async (
  passcode: string,
  encryptedData: EncryptedPayload
): Promise<MemoryLocation[]> => {
  const encoder = new TextEncoder();
  const passcodeBuffer = encoder.encode(passcode);
  const saltBuffer = base64ToArrayBuffer(encryptedData.salt);
  const ivBuffer = base64ToArrayBuffer(encryptedData.iv);
  const ciphertextBuffer = base64ToArrayBuffer(encryptedData.ciphertext);

  // Import raw passcode as key material for derivation
  const baseKey = await window.crypto.subtle.importKey(
    "raw",
    passcodeBuffer,
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  // Derive an AES-GCM 256-bit key from the passcode and salt using PBKDF2
  const aesKey = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltBuffer,
      iterations: encryptedData.iterations || 10000,
      hash: "SHA-256",
    },
    baseKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["decrypt"]
  );

  // Decrypt the ciphertext (which includes the AES-GCM auth tag at the end)
  const decryptedBuffer = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: ivBuffer,
      tagLength: 128, // 16 bytes auth tag
    },
    aesKey,
    ciphertextBuffer
  );

  const decoder = new TextDecoder();
  const decryptedText = decoder.decode(decryptedBuffer);
  return JSON.parse(decryptedText) as MemoryLocation[];
};
