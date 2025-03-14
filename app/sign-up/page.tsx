"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "profilePic") {
      setForm({ ...form, profilePic: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // এখানে ব্যাকেন্ড API-তে ডাটা পাঠানোর লজিক যোগ করতে হবে
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <p className="text-center text-gray-400 mb-4">
        দারুল ইহসান ক্যাডেট মাদ্রাসা
        </p>

 

        <div className="flex items-center justify-center mb-4">
          <hr className="w-1/3 border-gray-600" />
          <span className="mx-2 text-gray-400">অথবা</span>
          <hr className="w-1/3 border-gray-600" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">

    <div className=" flex justify-center">
    {form.profilePic && (
              <img
                src={URL.createObjectURL(form.profilePic)}
                alt="Uploaded Preview"
                className="w-20 h-20 rounded-full object-cover mt-2"
              />
            )}
            
    </div>
          <input
            type="email"
            name="email"
            placeholder="মোবাইল নম্বর বা ইমেইল"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="পাসওয়ার্ড"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="fullName"
            placeholder="পুরো নাম"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="ইউজারনেম"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
            onChange={handleChange}
            required
          />
          <div className="flex flex-col items-center space-y-2">
            <label className="cursor-pointer flex items-center space-x-2 bg-gray-800 border border-gray-700 p-2 rounded-md w-full">
              <MdCloudUpload className="text-xl text-gray-400" />
              <span className="text-gray-400">প্রোফাইল ছবি আপলোড করুন</span>
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
            </label>
        
          </div>

          <p className="text-xs text-gray-400 text-center mt-5">
            সাইন আপ করে, আপনি আমাদের <span className="text-blue-400">শর্তাবলী</span>,
            <span className="text-blue-400"> গোপনীয়তা নীতি</span> এবং
            <span className="text-blue-400"> কুকি নীতি</span> মেনে নিচ্ছেন।
          </p>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 my-5 rounded-md"
          >
            সাইন আপ করুন
          </button>
        </form>

        <Link href="/login" className="text-center text-gray-400 mt-4">
          ইতিমধ্যে একটি অ্যাকাউন্ট আছে? <span className="text-blue-400">লগইন করুন</span>
        </Link>
      </div>
    </div>
  );
}
