"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (password: string) => {
    return /^(?=.*[A-Z])(?=.*\W).{9,}$/.test(password); // Capital letter + Symbol + >8 chars
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email format.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must start with a capital letter, contain a symbol, and be longer than 8 characters.");
      return;
    }

    // Fetch user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        // Simulate login success
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        router.push("/login2"); // Redirect to My Account page
      } else {
        setError("Invalid email or password.");
      }
    } else {
      setError("No user found. Please sign up first.");
    }
  };

  return (
    <div className="mt-32 flex flex-col items-center">
      <h1 className="font-bold text-3xl text-gray-900 mb-2">LOGIN</h1>
      <form onSubmit={handleLogin} className="flex flex-col w-[420px] mt-5">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full h-12 border border-gray-300 px-3 mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="text-sm font-medium text-gray-700 mt-5">Password</label>
        <input
          type="password"
          className="w-full h-12 border border-gray-300 px-3 mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          type="submit"
          className="bg-orange-600 text-white w-[110px] h-[43px] mt-5 hover:bg-gray-900"
        >
          Sign in
        </button>
        <button
          type="button"
          className="underline"
          onClick={() => router.push("/signup")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}