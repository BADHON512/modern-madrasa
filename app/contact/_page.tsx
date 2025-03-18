"use client";


import GoogleMap from "@/components/Home/GoogleMap";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import React, { useEffect, useState } from "react";
type Props = {User:any}



const Contact = ({User}:Props) => {

  return (
<div>
    <Header LoginUser={User}/>
<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-5">
      <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">যোগাযোগ করুন</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium">আপনার নাম</label>
            <input
              type="text"
              required
              placeholder="আপনার নাম লিখুন"
              className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">আপনার ইমেইল</label>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">আপনার ফোন নাম্বার</label>
            <input
              type="text"
              required
              placeholder="+৮৮০ ১৭১৫৯৬৭৩৪"
              className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">আপনার বার্তা</label>
            <textarea
              rows={4}
              required
              placeholder="আপনার বার্তা লিখুন"
              className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            বার্তা পাঠান
          </button>
        </form>

        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <h3 className="text-xl font-semibold text-green-400">ঠিকানা</h3>
          <p className="mt-2">📍 ক্যাম্পাস ১: কলেজ দ্বিতীয় তলা, মানিকগঞ্জ সদর, মানিকগঞ্জ</p>
          <p className="mt-2">📍 ক্যাম্পাস ২: বেওথা রোড, বিজয় মেলা মাঠ সংলগ্ন দক্ষিণ পাশের ভবন, মানিকগঞ্জ পৌরসভা, মানিকগঞ্জ</p>
          <p className="mt-4 font-semibold">📞 মোবাইল: ০১৭১৫৯৯৬৭৩৪</p>
          <p className="mt-4 font-semibold">📞 মোবাইল: ০১৬১৬০১৬৫১৬</p>
        </div>
      </div>
    </div>
     <GoogleMap/>
    <Footer/>
</div>
  );
};

export default Contact;