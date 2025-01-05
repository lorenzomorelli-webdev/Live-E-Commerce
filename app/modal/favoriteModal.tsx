"use client";

import React from "react";
import { useModal } from "@/app/context/modalContext";
import { CartItemWithProduct } from "@/utils/utils";

const FavoriteModal = () => {
  const { currentModal, modalData, closeModal } = useModal();

  if (currentModal !== "favorites") return null;

  return (
    <div className="modal favorite-modal">
      <h2>Preferiti</h2>
      <ul>
        {(modalData as CartItemWithProduct[]).map((item: CartItemWithProduct) => (
          <li key={item.productId}>{item.product.name}</li>
        ))}
      </ul>
      <button onClick={closeModal}>Chiudi</button>
    </div>
  );
};

export default FavoriteModal;
