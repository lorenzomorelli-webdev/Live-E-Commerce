"use client";

import supabase from "@/utils/supabase/client";
import { signup as _signup, signout as _signout, login as _login } from "@/utils/auth-actions";
import { User } from "@supabase/supabase-js";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Tipizzazione del contesto
export interface AuthContextType {
  user: User | null;
  login: (formData: FormData) => Promise<void>;
  logout: () => Promise<void>;
  signup: (formData: FormData) => Promise<void>;
  getUserId: () => string | null;
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
  const login = async (formData: FormData) => {
    await _login(formData);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  };

  /**
   * Logout - aggiorna lo stato locale
   */
  const logout = async () => {
    await _signout();
    setUser(null);
  };

  /**
   * Signup - crea l'utente e aggiorna lo stato
   */
  const signup = async (formData: FormData) => {
    await _signup(formData);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  };

  /**
   * Ritorna l'ID dell'utente
   */
  const getUserId = () => {
    return user ? user.id : null;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, getUserId }}>
      {children}
    </AuthContext.Provider>
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