import { GetLoginUser } from '@/@backend/getLoginUser'
import Footer from '@/components/Layouts/Footer'
import Header from '@/components/Layouts/Header'
import React from 'react'



const page = async () => {
    const { User } = await GetLoginUser()
    const tuitionFees = [
        { grade: "প্রি প্লে থেকে নার্সারি", monthlyFee: "৫০০ টাকা", dayCare: "১০০০ টাকা", residentialFee: "৪০০০" },
        { grade: "প্রথম - তৃতীয় শ্রেণী", monthlyFee: "৮০০ টাকা", dayCare: "১২০০ টাকা", residentialFee: "৪,৫০০ টাকা" },
        { grade: "চতুর্থ - পঞ্চম শ্রেণী", monthlyFee: "১০০০ টাকা", dayCare: "১৫০০ টাকা", residentialFee: "৫,০০০ টাকা" },
        { grade: "ষষ্ঠ শ্রেণী", monthlyFee: "১২০০ টাকা", dayCare: "১৫০০ টাকা", residentialFee: "৫,০০০ টাকা" },
        { grade: "নাজেরা ও হিফজ", monthlyFee: "১৫০০ টাকা", dayCare: "১৮০০ টাকা", residentialFee: "৫,০০০ টাকা" },
    ];
    const fees = [
        { description: "ভর্তির ফরম", amount: "২০০ টাকা" },
        { description: "ভর্তি ফি", amount: "৫০০ টাকা" },
        { description: "সেশন ফি", amount: "১০০ টাকা" },
        { description: "উন্নয়ন ফি", amount: "১০০ টাকা" },
        { description: "ফ্রি", amount: "৮০ টাকা" },
        { description: "খেলা", amount: "৩০ টাকা" },
        { description: "বিবিধ", amount: "২০ টাকা" },
        { description: "মোট টাকা", amount: "১০০০ টাকা" },
    ];
    const data = [
        { description: "ভর্তির ফরম", residential: "২০০ টাকা", nonResidential: "২০০ টাকা" },
        { description: "ভর্তি ফি", residential: "১০০০ টাকা", nonResidential: "১০০০ টাকা" },
        { description: "সেশন ফি", residential: "৫০০ টাকা", nonResidential: "৫০০ টাকা" },
        { description: "উন্নয়ন ফি", residential: "২০০ টাকা", nonResidential: "২০০ টাকা" },
        { description: "পাঠাগার ফি", residential: "১২০ টাকা", nonResidential: "১২০ টাকা" },
        { description: "বিবিধ", residential: "৫০ টাকা", nonResidential: "৫০ টাকা" },
        { description: "মোট টাকা", residential: "২১৯০ টাকা", nonResidential: "২১৯০ টাকা" }
    ];
    return (
        <div>
            <Header LoginUser={User} />
            <div>
                <div className="w-[90%] lg:max-w-7xl mx-auto my-10">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-100">একাডেমিক তথ্য</h1>
                        <p className="text-gray-100 mt-2">আমাদের একাডেমিক কার্যক্রম এবং কোর্সসমূহ</p>
                    </div>

                    {/* Academic Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* প্রিপ্লে থেকে দশম শ্রেণী */}
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <h2 className="text-xl font-semibold text-gray-800">প্রিপ্লে থেকে দশম শ্রেণী</h2>
                            <p className="text-gray-600 mt-2">সাধারণ শিক্ষা বোর্ডের সিলেবাস অনুযায়ী পাঠদান করা হয়।</p>
                        </div>

                        {/* আদর্শ নূরানী নাজরা */}
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <h2 className="text-xl font-semibold text-gray-800">আদর্শ নূরানী নাজরা</h2>
                            <p className="text-gray-600 mt-2">শুদ্ধভাবে কুরআন তেলাওয়াত শেখানোর জন্য বিশেষ ক্লাস।</p>
                        </div>

                        {/* নাজেরা ও মক্তব */}
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <h2 className="text-xl font-semibold text-gray-800">নাজেরা ও মক্তব</h2>
                            <p className="text-gray-600 mt-2">বাচ্চাদের জন্য মৌলিক ইসলামিক শিক্ষা ও কুরআন শিক্ষা।</p>
                        </div>

                        {/* হেফজুল কুরআন */}
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <h2 className="text-xl font-semibold text-gray-800">হেফজুল কুরআন</h2>
                            <p className="text-gray-600 mt-2">সম্পূর্ণ কুরআন মুখস্থ করার জন্য বিশেষ কোর্স।</p>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] lg:max-w-7xl mx-auto my-10">
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <div className="max-w-4xl md:w-1/2 mx-auto p-6 shadow-lg rounded-lg mt-10 bg-white">
                            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">ভর্তি ফি</h2>
                            <p className="text-center mb-8 text-2xl text-gray-600">
                                প্রি-প্লে থেকে তৃতীয় শ্রেণি পর্যন্ত:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-300">
                                    <thead>
                                        <tr className="bg-blue-500 text-white">
                                            <th className="p-3 text-left">বিবরণ</th>
                                            <th className="p-3 text-left">টাকার পরিমাণ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fees.map((fee, index) => (
                                            <tr key={index} className="border-b border-gray-300">
                                                <td className="p-3 text-gray-700">{fee.description}</td>
                                                <td className="p-3 text-gray-700">{fee.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
























                        <div className="max-w-4xl md:w-1/2 mx-auto p-6 shadow-lg rounded-lg mt-10 bg-white">
                            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">তৃতীয় শ্রেণী থেকে অন্যান্য সকল শ্রেণী</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-300">
                                    <thead>
                                        <tr className="bg-[#26c054] text-white">
                                            <th className="p-3 border">বিবরণ</th>
                                            <th className="p-3 border">আবাসিক</th>
                                            <th className="p-3 border">অনাবাসিক</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index} className="text-center border">
                                                <td className="p-3 border text-gray-700">{item.description}</td>
                                                <td className="p-3 border text-gray-700">{item.residential}</td>
                                                <td className="p-3 border text-gray-700">{item.nonResidential || "-"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-6">
        📌 দৈনিক খাবার রুটিন
      </h1>
      <p className="text-gray-100 text-center mb-8">
        আমাদের একাডেমিতে দৈনিক খাবারের রুটিন নিম্নরূপ:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-4 py-2">বার</th>
              <th className="border border-gray-300 px-4 py-2">🍽️ সকাল</th>
              <th className="border border-gray-300 px-4 py-2">🍛 দুপুর</th>
              <th className="border border-gray-300 px-4 py-2">🌙 রাত</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["শনিবার", "গোস্ত খিচুরী", "ভাত, মাছ, ডাল", "ভাত, মুড়িঘন্ট, ডাল"],
              ["রবিবার", "ভাত, ভর্তা, ডাল", "ভাত, মাছ, ডাল", "ভাত, ডিম, ডাল"],
              ["সোমবার", "ভাত, ভাজি, ডাল", "ভাত, গোড়, ডাল", "ভাত, মুড়িঘন্ট, দুধ"],
              ["মঙ্গলবার", "সবজি খিচুরী", "ভাত, মাছ, ডাল", "ভাত, ডিম, ডাল"],
              ["বুধবার", "ভাত, ভাজি, ডাল", "ভাত, গোস্ত, ডাল", "ভাত, ভর্তা, ডাল"],
              ["বৃহস্পতিবার", "ভোনা খিচুরী", "ভাত, ডিম, ডাল", "ভাত, গোস্ত, ডাল"],
              ["শুক্রবার", "ভাত, মাছ, শাক", "বিরিয়ানী/ পোলাউ", "ভাত, ভর্তা, ডাল"],
            ].map((day, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-50"}>
                {day.map((item, i) => (
                  <td key={i} className="border border-gray-300 px-4 py-2 text-black text-center">
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-300 mt-4">
        ⚠️ বি: দ্র: সার্বিক পরিস্থিতি বিবেচনায় রুটিন সামান্য পরিবর্তন হতে পারে।
      </p>
    </div>







                <div className="max-w-7xl mx-auto px-4 py-10">
                    <h1 className="text-3xl font-bold text-center text-gray-100 mb-6">
                        মাসিক বেতন
                    </h1>
                    <p className="text-gray-100 text-center mb-8">
                        আমাদের একাডেমিতে বিভিন্ন শ্রেণীর জন্য নির্ধারিত মাসিক বেতন এবং আবাসিক খরচ নিম্নরূপ:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-blue-500 text-white">
                                    <th className="border border-gray-300 px-4 py-2">শ্রেণী</th>
                                    <th className="border border-gray-300 px-4 py-2">মাসিক বেতন</th>
                                    <th className="border border-gray-300 px-4 py-2">ডে কেয়ার</th>
                                    <th className="border border-gray-300 px-4 py-2">আবাসিক খরচ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tuitionFees.map((fee, index) => (
                                    <tr key={index} className="text-center bg-white odd:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2 text-black">{fee.grade}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-black">{fee.monthlyFee}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-black">{fee.dayCare}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-black">{fee.residentialFee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page