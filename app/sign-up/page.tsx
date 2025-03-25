"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { MdCloudUpload } from "react-icons/md";
import Image from "next/image";
import { SignUpAdmin } from "@/@backend/admin/signUpAdmin";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
    avatar: "",
    role: "",
  });

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      const imageUrl = event.target?.result;
      setForm({ ...form, avatar: imageUrl as string });
    };

    fileReader.readAsDataURL(file);
  };


  const handleSubmit = async (e) => {
    if(form.role===""){
      toast.error("Please select a role")
  
    }
    e.preventDefault();

   const { error,message} = await SignUpAdmin({
      name: form.fullName,
      email: form.email,
      password: form.password,
      role: form.role,
      avatar: form.avatar,
    });
  if(message){
    toast.success(message)
    router.push("/login")
  }
  if(error){
    toast.error(error)

  }

  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-[90%] md:w-[400px]">
        <p className="text-center text-gray-400 mb-4  lg:text-2xl">
          দারুল ইহসান ক্যাডেট মাদ্রাসা
        </p>



        <div className="flex items-center justify-center mb-4">
          <hr className="w-1/3 border-gray-600" />
          <span className="mx-2 text-gray-400">অথবা</span>
          <hr className="w-1/3 border-gray-600" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">

          <div className=" flex justify-center">
            {form.avatar && (
              <Image
                height={1000}
                width={1000}
                src={form.avatar}
                alt="Uploaded Preview"
                className="w-20 h-20 rounded-full object-cover mt-2"
              />
            )}

          </div>
          <input
            type="email"
            name="email"
            placeholder="আপনার ইমেইল দিন"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="পাসওয়ার্ড"
            autoComplete="true"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <input
            type="text"
            name="fullName"
            placeholder="পূর্ণ নাম"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md"
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />
          <select
            defaultValue={form.role}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            required
          >
            <option value="" disabled selected>
              একটি অপশন নির্বাচন করুন
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="super_admin">Super Admin</option>
          </select>

          <div className="flex flex-col items-center space-y-2">
            <label className="cursor-pointer flex items-center space-x-2 bg-gray-800 border border-gray-700 p-2 rounded-md w-full">
              <MdCloudUpload className="text-xl text-gray-400" />
              <span className="text-gray-400">প্রোফাইল ছবি আপলোড করুন</span>
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImage(e)}
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 my-5 rounded-md cursor-pointer"
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
