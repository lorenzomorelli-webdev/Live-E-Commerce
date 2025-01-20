"use client";

import supabase from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Tipizzazione del contesto
export interface AuthContextType {
  user: User | null;
}

// Creazione del contesto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider per avvolgere l'applicazione
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Recupero dell'utente all'inizio
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

// Custom hook per accedere al contesto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
