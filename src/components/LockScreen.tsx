import React, { useState, useEffect, useRef } from "react";
import { Heart, Lock, Unlock, Loader2, Delete } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { decryptMemories } from "../data/auth";
import encryptedData from "../data/memories_encrypted.json";
import { MemoryLocation } from "../data/memories";

interface LockScreenProps {
  onUnlock: (decryptedMemories: MemoryLocation[], passcode: string, remember: boolean) => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [code, setCode] = useState<string>("");
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false);
  const [isDecrypting, setIsDecrypting] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [isCryptoSupported, setIsCryptoSupported] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input on mount and keep it focused
  useEffect(() => {
    if (!window.crypto || !window.crypto.subtle) {
      setIsCryptoSupported(false);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleScreenClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Process passcode verification
  const verifyCode = async (enteredCode: string) => {
    setIsDecrypting(true);
    try {
      // Attempt decryption with the typed passcode
      const decrypted = await decryptMemories(enteredCode, encryptedData);
      
      // If decryption succeeds, trigger success flow
      setFadeOut(true);
      setTimeout(() => {
        onUnlock(decrypted, enteredCode, rememberMe);
      }, 500);
    } catch (err) {
      // Decryption failed (incorrect passcode)
      setIsIncorrect(true);
      setCode("");
      
      // Haptic feedback if supported
      if (navigator.vibrate) {
        navigator.vibrate(100);
      }

      toast.error("Incorrect Passcode. Try again, Love!", {
        description: "Please enter the correct 6-digit code.",
        duration: 3000,
      });

      // Reset shake animation
      setTimeout(() => {
        setIsIncorrect(false);
      }, 500);
    } finally {
      setIsDecrypting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(value);
    
    if (value.length === 6) {
      verifyCode(value);
    }
  };

  const handleKeypadPress = (num: string) => {
    if (code.length < 6 && !isDecrypting) {
      const newCode = code + num;
      setCode(newCode);
      if (newCode.length === 6) {
        verifyCode(newCode);
      }
    }
  };

  const handleBackspace = () => {
    if (code.length > 0 && !isDecrypting) {
      setCode(code.slice(0, -1));
    }
  };

  return (
    <div
      onClick={handleScreenClick}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-tr from-love-100 via-secondary to-love-200 p-6 select-none transition-all duration-500 ease-in-out
      ${fadeOut ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
    >
      {/* Floating background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          >
            <Heart size={20 + Math.random() * 30} className="text-love-400" fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Hidden native input to handle keyboard seamlessly on both desktop & mobile */}
      <input
        ref={inputRef}
        type="tel"
        pattern="[0-9]*"
        inputMode="numeric"
        maxLength={6}
        value={code}
        onChange={handleInputChange}
        disabled={isDecrypting}
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        aria-label="Passcode entry"
      />

      {/* Lock Card Container */}
      <div
        className={`w-full max-w-md bg-white/45 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-2xl z-10 flex flex-col items-center transition-all duration-300
        ${isIncorrect ? "animate-shake border-love-400" : ""}`}
        onClick={(e) => e.stopPropagation()} // Prevent refocussing input multiple times when clicking the card itself
      >
        {/* Header Icon */}
        <div className="w-16 h-16 rounded-full bg-love-100 flex items-center justify-center text-love-600 mb-6 shadow-inner animate-pulse-gentle">
          {code.length === 6 && !isIncorrect && !isDecrypting ? (
            <Unlock className="w-8 h-8 text-love-500" />
          ) : (
            <Lock className="w-8 h-8" />
          )}
        </div>

        {/* Title */}
        <h1 className="font-handwritten text-3xl text-love-700 mb-2">Our Memory Map</h1>
        <p className="font-sans text-sm text-foreground/70 text-center mb-8">
          Enter the 6-digit code to unlock our special moments
        </p>

        {!isCryptoSupported && (
          <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs text-center font-sans space-y-1">
            <span className="font-semibold block">⚠️ Secure Context Required</span>
            <p>
              Your browser blocks the decryption engine because this site is loaded over non-secure HTTP.
            </p>
            <p className="font-medium">
              Please access via <strong>http://localhost:8080/</strong> or use HTTPS.
            </p>
          </div>
        )}

        {/* Code Dots */}
        <div className="flex gap-4 mb-8">
          {[...Array(6)].map((_, i) => {
            const isFilled = i < code.length;
            const isActive = i === code.length;
            return (
              <div
                key={i}
                className={`w-4 h-4 rounded-full border transition-all duration-200
                ${isFilled ? "bg-love-500 border-love-500 scale-110 shadow-[0_0_8px_rgba(244,63,94,0.6)]" : "border-love-300 bg-white/30"}
                ${isActive ? "scale-105 border-love-500 bg-love-50/50" : ""}`}
              />
            );
          })}
        </div>

        {/* Loader during decryption derivation */}
        {isDecrypting ? (
          <div className="flex flex-col items-center justify-center h-52 mb-6">
            <Loader2 className="w-8 h-8 text-love-500 animate-spin mb-2" />
            <span className="text-xs text-love-600 font-serif italic animate-pulse-gentle">
              Decrypting memories...
            </span>
          </div>
        ) : (
          /* Virtual Keypad (0-9) */
          <div className="grid grid-cols-3 gap-x-6 gap-y-3 mb-6 w-full max-w-[280px]">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
              <button
                key={num}
                onClick={() => handleKeypadPress(num)}
                type="button"
                className="w-16 h-16 rounded-full bg-white/60 hover:bg-love-50 active:bg-love-100 text-foreground font-serif text-2xl flex items-center justify-center shadow-sm border border-white/20 transition-all active:scale-95 duration-100"
              >
                {num}
              </button>
            ))}
            {/* Backspace Button */}
            <button
              onClick={handleBackspace}
              type="button"
              className="w-16 h-16 rounded-full text-foreground/60 hover:text-love-600 flex items-center justify-center transition-colors active:scale-95 duration-100"
              aria-label="Backspace"
            >
              <Delete className="w-6 h-6" />
            </button>
            {/* Number 0 */}
            <button
              onClick={() => handleKeypadPress("0")}
              type="button"
              className="w-16 h-16 rounded-full bg-white/60 hover:bg-love-50 active:bg-love-100 text-foreground font-serif text-2xl flex items-center justify-center shadow-sm border border-white/20 transition-all active:scale-95 duration-100"
            >
              0
            </button>
            <div className="w-16 h-16" /> {/* Placeholder for alignment */}
          </div>
        )}

        {/* Remember me option */}
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(!!checked)}
            className="border-love-300 text-love-600 focus-visible:ring-love-500 data-[state=checked]:bg-love-500 data-[state=checked]:border-love-500"
          />
          <label
            htmlFor="remember"
            className="text-xs text-foreground/60 cursor-pointer font-sans select-none hover:text-foreground/80"
          >
            Remember this device
          </label>
        </div>
      </div>

      <div className="fixed bottom-4 text-[10px] text-foreground/40 font-sans tracking-wider">
        🔐 SECURED BY AES-256 CLIENT-SIDE ENCRYPTION
      </div>
    </div>
  );
};

export default LockScreen;
