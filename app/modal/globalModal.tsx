"use client";

import React from "react";
import AuthModal from "@/app/modal/authModal";
import CartModal from "@/app/modal/cartModal";
import ProductModal from "@/app/modal/productModal";
import FavoriteModal from "@/app/modal/favoriteModal";

const GlobalModals = () => {
  return (
    <>
      <AuthModal />
      <CartModal />
      <ProductModal />
      <FavoriteModal />
      {/* Aggiungi altri modali qui */}
    </>
  );
};

export default GlobalModals;
