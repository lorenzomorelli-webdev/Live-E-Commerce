"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push("/Home");
    }
  };

  return (
    <div className="flex align-middle justify-center py-[60px] bg-orange">
      <div className="w-fit">
        <h1 className="text-2xl pb-[20px] text-center">Login</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
