"use client";
import Image from "next/image";
import React from "react";

const FounderPage = () => {
    return (
        <div>

            <div className="my-10 py-10 bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-center p-5">
                <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
                    {/* প্রতিষ্ঠাতার ছবি */}
                    <div className="flex items-center justify-center mb-8">
                        <Image
                            height={1000}
                            width={1000}
                            src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1742188442/madrash/sdmicuptjgmnpropadpk.jpg" // এখানে তোমার প্রতিষ্ঠাতার ছবি যুক্ত করো
                            alt="Founder Image"
                            className="w-32 h-32 rounded-full border-4 border-green-400 shadow-xl"
                        />
                    </div>

                    {/* সেকশন শিরোনাম */}
                    <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-6">প্রতিষ্ঠাতা পরিচালক</h2>

                    {/* প্রতিষ্ঠাতা পরিচালক তথ্য */}
                    <div className="text-lg text-gray-200 space-y-4">
                        <p className="font-semibold text-xl">হাফেজ মাওলানা কাজী মোঃ হাফিজ উদ্দিন</p>
                        <div className="text-lg">
                            <p>এডুকেশন </p>
                            <ul className="list-inside list-disc pl-5">
                                <li>এম.এ (কামিল)</li>
                                <li>বি.এস.সি (গণিত) জাঃ বিঃ</li>
                                <li>এস.পি.এস.এস (ঢাঃ বিঃ)</li>
                                <li>এল.এল.বি (জা: বি:)</li>
                                <li> পি.জি.ডি.আই.টি (জা: বি:)</li>
                                <li>এম.এস.এম (অধ্যয়নরত) জাঃ বিঃ</li>
                            </ul>
                        </div>
                    </div>

                    {/* সংক্ষিপ্ত বর্ণনা */}
                    <div className="mt-8 text-center">
                        <p className="text-lg text-yellow-300 font-semibold">
                            প্রতিষ্ঠাতা পরিচালক, হাফিজ উদ্দিনের নেতৃত্বে আমাদের প্রতিষ্ঠান শিক্ষা ক্ষেত্রে এক নতুন দিগন্ত উন্মোচন করছে।
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FounderPage;
