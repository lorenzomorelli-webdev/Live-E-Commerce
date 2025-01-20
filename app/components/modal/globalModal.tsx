"use client";

import React from "react";
import AuthModal from "@/app/components/modal/authModal";
import CartModal from "@/app/components/modal/cartModal";
import ProductModal from "@/app/components/modal/productModal";
import FavoriteModal from "@/app/components/modal/favoriteModal";

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
