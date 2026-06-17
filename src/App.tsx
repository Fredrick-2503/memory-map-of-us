
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LockScreen from "./components/LockScreen";
import { decryptMemories } from "./data/auth";
import encryptedData from "./data/memories_encrypted.json";
import { MemoryLocation } from "./data/memories";

// Add Leaflet library
import 'leaflet/dist/leaflet.css';

const queryClient = new QueryClient();

const App = () => {
  const [memories, setMemories] = useState<MemoryLocation[] | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const autoDecrypt = async () => {
      const savedPasscode = 
        localStorage.getItem("memory_map_passcode") || 
        sessionStorage.getItem("memory_map_passcode");

      if (savedPasscode) {
        try {
          const decrypted = await decryptMemories(savedPasscode, encryptedData);
          setMemories(decrypted);
        } catch (err) {
          console.warn("Stored passcode was invalid, clearing...", err);
          localStorage.removeItem("memory_map_passcode");
          sessionStorage.removeItem("memory_map_passcode");
        }
      }
      setIsInitializing(false);
    };

    autoDecrypt();
  }, []);

  const handleUnlock = (decryptedMemories: MemoryLocation[], passcode: string, remember: boolean) => {
    if (remember) {
      localStorage.setItem("memory_map_passcode", passcode);
    } else {
      sessionStorage.setItem("memory_map_passcode", passcode);
    }
    setMemories(decryptedMemories);
  };

  if (isInitializing) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-tr from-love-100 via-secondary to-love-200">
        <div className="animate-pulse-gentle font-serif text-love-700 italic">
          Initializing secure environment...
        </div>
      </div>
    );
  }

  if (!memories) {
    return (
      <>
        <Sonner />
        <LockScreen onUnlock={handleUnlock} />
      </>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index memories={memories} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
