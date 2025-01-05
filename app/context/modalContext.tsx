'use client'

import React, { createContext, useState, ReactNode, useContext } from "react";

// Tipizzazione dei modali
type ModalType = "auth" | "cart" | "favorites" | "product";

export interface ModalContextType {
  currentModal: ModalType | null;
  modalData: unknown;
  openModal: (type: ModalType, data?: unknown) => void;
  closeModal: () => void;
}

// Creazione del contesto
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// ModalProvider per avvolgere l'applicazione
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [currentModal, setCurrentModal] = useState<ModalType | null>(null);
  const [modalData, setModalData] = useState<unknown>(null);

  const openModal = (type: ModalType, data?: unknown) => {
    setCurrentModal(type);
    setModalData(data || null);
  };

  const closeModal = () => {
    setCurrentModal(null);
    setModalData(null);
  };

  return (
    <ModalContext.Provider value={{ currentModal, modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook per utilizzare il contesto
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
