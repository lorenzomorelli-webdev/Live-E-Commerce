"use client";

import { User as UserIcon, ShoppingBag, Heart, UserRoundX } from "lucide-react";
import { useAuth, AuthContextType } from "@/app/context/authContext";
import { useModal } from "@/app/context/modalContext";
import { useCart } from "@/app/context/cartContext";

const UserIcons = () => {
  //devo capire meglio la differenza tra null e undefined e perchè poi mi obbliga a fare il cast
  const { user } = useAuth() as AuthContextType;
  const { openModal } = useModal();
  const { fetchCart } = useCart();

  return (
    <div className="flex items-center justify-center gap-5">
      {user ? (
        <>
          <UserIcon
            size={30}
            className="cursor-pointer"
            onClick={() => openModal("auth")}
          />
          <ShoppingBag
            size={30}
            className="cursor-pointer"
            onClick={() => {
              fetchCart(user.id);
              openModal("cart");
            }}
          />
          <Heart size={30} />
        </>
      ) : (
        <UserRoundX
          size={30}
          className="cursor-pointer"
          onClick={() => openModal("auth")}
        />
      )}
    </div>
  );
};

export default UserIcons;
