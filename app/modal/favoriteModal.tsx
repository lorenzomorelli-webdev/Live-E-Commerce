"use client";

import React from "react";
import { useModal } from "@/app/context/modalContext";
import { CartItem } from "@/utils/utils";

const FavoriteModal = () => {
  const { currentModal, modalData, closeModal } = useModal();

  if (currentModal !== "favorites") return null;

  return (
    <div className="modal favorite-modal">
      <h2>Preferiti</h2>
      <ul>
        {(modalData as CartItem[]).map((item: CartItem) => (
          <li key={item.product.id}>{item.product.name}</li>
        ))}
      </ul>
      <button onClick={closeModal}>Chiudi</button>
    </div>
  );
};

export default FavoriteModal;
