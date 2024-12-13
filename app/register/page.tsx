"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex align-middle justify-center py-[60px] bg-orange">
      <div className="w-fit">
        <h1 className="text-2xl pb-[20px] text-center">Sign in</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            className="text-2xl"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="text-2xl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="text-2xl">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
