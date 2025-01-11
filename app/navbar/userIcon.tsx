"use client";

import { User as UserIcon, ShoppingBag, Heart, UserRoundX } from "lucide-react";
import { useAuth, AuthContextType } from "@/app/context/authContext";
import { useModal } from "@/app/context/modalContext";

const UserIcons = () => {
  //devo capire meglio la differenza tra null e undefined e perchè poi mi obbliga a fare il cast
  const { user } = useAuth() as AuthContextType;
  const { openModal } = useModal();

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
              openModal("cart");
            }}
          />
          <Heart
            size={30}
            className="cursor-pointer"
            onClick={() => openModal("favorites")}
          />
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
