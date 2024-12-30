"use client";

import React from "react";
import { useModal } from "@/app/context/modalContext";

const FavoriteModal = () => {
  const { currentModal, modalData, closeModal } = useModal();

  if (currentModal !== "favorites") return null;

  return (
    <div className="modal favorite-modal">
      <h2>Preferiti</h2>
      <ul>
        {modalData?.favorites?.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={closeModal}>Chiudi</button>
    </div>
  );
};

export default FavoriteModal;
