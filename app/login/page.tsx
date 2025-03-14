"use client"

import Link from "next/link";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add authentication logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0af6] text-white px-4">
      <div className="bg-gray-900  p-8 rounded-lg shadow-lg w-full max-w-md text-center">
      <p className="text-center text-gray-400 mb-4">
        দারুল ইহসান ক্যাডেট মাদ্রাসা
        </p>
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1741757437/483891980_1033750798673164_202715880075837876_n_x0vm9p.jpg" alt="Madrasah Logo" width={80} height={80} className="rounded-full object-center" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">লগইন করুন</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="ইমেইল"
            autoComplete="email"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="পাসওয়ার্ড"
            autoComplete="current-password"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-300"
          >
            লগইন করুন
          </button>
        </form>

        <div className="flex items-center justify-center my-4">
          <hr className="w-1/3 border-gray-600" />
          <span className="mx-2 text-gray-400">অথবা</span>
          <hr className="w-1/3 border-gray-600" />
        </div>


        <p className="text-gray-400">নতুন একাউন্ট তৈরি করুন? 
          <Link href="/sign-up" className="text-blue-400 cursor-pointer ml-1">সাইন আপ</Link>
        </p>
      </div>
    </div>
  );
}
