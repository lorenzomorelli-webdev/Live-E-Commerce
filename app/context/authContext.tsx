"use client";

import supabase from "@/utils/supabase/client";
import { signup as _signup, signout as _signout, login as _login } from "@/utils/auth-actions";
import { User } from "@supabase/supabase-js";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Tipizzazione del contesto
export interface AuthContextType {
  user: User | null;
  login: (formData: FormData) => void;
  logout: () => void;
  signup: (formData: FormData) => void;
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

  /**
   * Login - gestisce lo stato utente
   */
  const login = (formData: FormData) => {
    _login(formData);
  };

  /**
   * Logout - aggiorna lo stato locale
   */
  const logout = () => {
    _signout();
  };

  /**
   * Signup - crea l'utente e aggiorna lo stato
   */
  const signup = (formData: FormData) => {
    _signup(formData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>{children}</AuthContext.Provider>
  );
};

// Custom hook per accedere al contesto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
