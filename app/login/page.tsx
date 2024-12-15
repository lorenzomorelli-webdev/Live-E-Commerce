import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex justify-center text-2xl">
      <form className="flex flex-col bg-orange p-[30px]">
        <h2 className="text-center font-semibold">LOGIN/SIGNUP</h2>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          required
        />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  );
}
