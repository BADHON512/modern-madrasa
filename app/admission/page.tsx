"use client";


import { GetLoginUser } from "@/@backend/getLoginUser";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import React, { useEffect, useState } from "react";

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    guardian: "",
    contact: "",
    address: "",
    documents: null,
  });
const [User,setUser]=useState()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({ ...prevState, documents: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("আপনার আবেদন জমা হয়েছে!");
  };

  useEffect(() => {
    async function Fetcher() {
      const {User}=await GetLoginUser()
      setUser(User)
    }

    Fetcher()
  }, [])
  

  return (
    <div>
      <Header LoginUser={User} />
      <div className="min-h-screen bg-gray-900 text-white p-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* বাম সাইডে ফর্ম */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-green-400 mb-6">ভর্তি ফর্ম</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">শিক্ষার্থীর নাম</label>
                <input
                  type="text"
                  required
                  placeholder="আপনার নাম লিখুন"
                  name="name"
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">আপনার জন্মতারিখ</label>
                <input
                  type="date"
                  required
                  name="dob"
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">অভিভাবকের নাম</label>
                <input
                  type="text"
                  required
                  placeholder="অভিভাবকের নাম লিখুন"
                  name="guardian"
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">যোগাযোগ নম্বর</label>
                <input
                  type="text"
                  required
                  placeholder="যোগাযোগ নম্বর লিখুন"
                  name="contact"
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">ঠিকানা</label>
                <input
                  type="text"
                  required
                  placeholder="ঠিকানা লিখুন"
                  name="address"
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">প্রয়োজনীয় কাগজপত্র সংযুক্ত করুন:</label>
                <input
                  type="file"
                  required
                  onChange={handleFileChange}
                  className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                আবেদন করুন
              </button>
            </form>
          </div>

          {/* ডান সাইডে ভর্তি সংক্রান্ত তথ্য */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-6">ভর্তির জন্য প্রয়োজনীয় কাগজপত্র</h3>
            <ul className="list-disc pl-6 text-green-200 space-y-3 text-lg">
              <li>২ কপি পাসপোর্ট সাইজের রঙিন ছবি</li>
              <li>জন্ম নিবন্ধনের সনদের ফটোকপি</li>
              <li>পূর্ববর্তী প্রতিষ্ঠানের ছাড়পত্র</li>
              <li>পিতা-মাতা জাতীয় পরিচয়পত্রের ফটোকপি</li>
            </ul>
            <p className="text-lg text-green-200 text-center mt-8">
              অনলাইন ভর্তি ফর্ম পূরণ করুন অথবা{" "}

            </p>
            <a
              href="https://res.cloudinary.com/dfng3w9jm/image/upload/fl_attachment/v1741953073/Darul_Ihsan_Cadet_Madrasah_form_i6krfq.jpg"
              download="Darul_Ihsan_Cadet_Madrasah_form.jpg"
              className="w-full block text-center px-5 py-2 mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300"
            >
              ফর্ম ডাউনলোড করুন
            </a>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdmissionPage;
