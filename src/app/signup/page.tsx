"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Store user details in localStorage (for demo purposes only)
    localStorage.setItem(
      "user",
      JSON.stringify({ firstName, lastName, email, password })
    );

    router.push("/login"); // Redirect to login page after signup
  };

  return (
    <div className="flex flex-col items-center my-28">
      <h1 className="font-bold text-3xl text-gray-900 mb-2">CREATE ACCOUNT</h1>
      <form onSubmit={handleSignup} className="flex flex-col w-[420px] mt-5">
        <label className="text-sm text-gray-700">First Name</label>
        <input
          type="text"
          className="w-full h-12 border border-gray-300 px-3 mt-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label className="text-sm text-gray-700 mt-5">Last Name</label>
        <input
          type="text"
          className="w-full h-12 border border-gray-300 px-3 mt-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label className="text-sm text-gray-700 mt-5">Email</label>
        <input
          type="email"
          className="w-full h-12 border border-gray-300 px-3 mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="text-sm text-gray-700 mt-5">Password</label>
        <input
          type="password"
          className="w-full h-12 border border-gray-300 px-3 mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-orange-600 text-white w-[110px] h-[43px] mt-5 hover:bg-gray-900"
        >
          Create
        </button>
      </form>
    </div>
  );
}