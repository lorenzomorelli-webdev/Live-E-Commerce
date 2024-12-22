"use client";

import { User as UserIcon, ShoppingBag, Heart, UserRoundX } from "lucide-react";
import { useEffect, useState } from "react";
import supabase from "@/utils/supabase/client";
import Link from "next/link";
import { signout } from "@/utils/auth-actions";
import { User } from "@supabase/supabase-js";

const UserIcons = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div className="flex items-center justify-center gap-5">
      {user ? (
        <>
          <Link href="/logout" onClick={() => signout()}>
            <UserIcon size={30} />
          </Link>
          <ShoppingBag size={30} />
          <Heart size={30} />
        </>
      ) : (
        <Link href="/login">
          <UserRoundX size={30} />
        </Link>
      )}
    </div>
  );
};

export default UserIcons;
