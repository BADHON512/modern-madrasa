'use client';

import Footer from '@/components/Layouts/Footer';
import Header from '@/components/Layouts/Header';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
    return (
        <div className="">
            <Header />
            <div className="w-[95%] max-w-7xl mx-auto py-10 px-4 lg:px-8">
                {/* Image Section */}
                <div className="w-full flex justify-center items-center">
                    <Image
                        src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1741953331/483906271_1618053085486704_4500863366463822881_n_iel1bx.jpg"
                        alt="image not found"
                        width={1200}
                        height={700}
                        layout=''
                        className="rounded-lg shadow-lg object-contain  max-h-[500px] w-full"
                    />
                </div>

                {/* Title */}
                <h1 className="text-gray-400 mt-12 text-2xl md:text-3xl font-semibold text-center lg:text-left">
                    বিশেষ দিক সমূহ
                </h1>

                {/* Content Section */}
                <p className="mt-6 text-sm md:text-base leading-relaxed  text-justify">
                    <strong className="">অন্যান্য প্রতিষ্ঠানের তুলনায় দারুল এহসান ক্যাডেট মাদ্রাসার শিক্ষা কার্যক্রম ব্যতিক্রম কেন?</strong>
                    <br /><br />
                    প্রতিটি শ্রেণীতে, প্রত্যেক শিক্ষার্থীর জন্য কুরআন, হাদিস, মাসালা-মাসায়েল এবং আরবি অন্যান্য বিষয়সহ জেনারেল বিষয়সমূহ —
                    অর্থাৎ বাংলা, ইংরেজি, গণিত, বাংলাদেশ ও বিশ্বপরিচয়, বিজ্ঞানসহ সকল বিষয়ে বাধ্যতামূলক পাঠদান করা হয়।
                    <br /><br />
                    প্রতিটি ক্লাসে শিক্ষার্থীদের জন্য ইংলিশ স্পোকেন এবং কম্পিউটার শিক্ষা বাধ্যতামূলক। কুরআন-হাদিসের পাশাপাশি
                    জেনারেল শিক্ষা ব্যবস্থা চালু রাখা হয়েছে, যাতে কোন শিক্ষার্থী কুরআন-হাদিস পড়তে না চাইলে একাডেমিক শিক্ষার
                    পাশাপাশি বাধ্যতামূলকভাবে ইসলামের মৌলিক শিক্ষা লাভ করতে পারে।
                    <br /><br />
                    শিক্ষার্থীদের সুরা ইয়াসিন, সুরা আর রহমান, সুরা ওয়াকিয়া, সুরা হাশর, সুরা বাকারা এবং ৩০ পারাসহ অন্যান্য সুরা
                    মুখস্থ করানো হয়। এছাড়াও, প্রতিটি শিক্ষার্থীর জন্য ১০০টি হাদিস মুখস্থ করা, সহজে আইন-মাসায়েল শেখানো এবং
                    আসমাউল হুসনা মুখস্থ করা বাধ্যতামূলক। এসব শিক্ষার মাধ্যমে আপনার সন্তানকে আদর্শ মানুষ এবং খাঁটি মুমিন হিসেবে
                    গড়ে তোলার প্রচেষ্টা করা হয়।
                </p>

                {/* Bullet Points Section */}
                <div className="mt-6 bg-gray-100 p-5 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">📌 পড়াশোনার মান উন্নয়নে যা নিশ্চিত করা হয়:</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>✅ প্রতিটি শিক্ষার্থীকে নিয়মিত শ্রেণিকক্ষে উপস্থিত থাকতে বাধ্য করা হয়।</li>
                        <li>✅ প্রতিদিনের লেখাপড়ার মান নিশ্চিত করতে প্রতিটি বিষয়ের শ্রেণিক পাঠ মূল্যায়ন করা হয়।</li>
                        <li>✅ দৈনিক হাজিরা ও ইউনিফর্মের উপর নম্বর প্রদান করা হয়, যা সেমিস্টার ফাইনাল পরীক্ষার ফলাফলের সাথে সংযোজন করা হয়।</li>
                        <li>✅ অন্য শিক্ষক দ্বারা সেমিস্টার ফাইনাল পরীক্ষার খাতা মূল্যায়ন করা হয়, ফলে পছন্দের শিক্ষার্থীকে বেশি নম্বর দেওয়ার সুযোগ থাকে না।</li>
                        <li>✅ প্রতিটি শিক্ষার্থীকে নির্ধারিত সময়ে বোর্ড পরীক্ষায় অংশগ্রহণ ও সার্টিফিকেট প্রাপ্তি নিশ্চিত করা হয়।</li>
                    </ul>
                </div>

                <p className="mt-6  text-center md:text-left">
                    আমাদের সুনিয়ন্ত্রিত শিক্ষা ব্যবস্থা ও কঠোর তদারকি আপনার সন্তানকে সুশৃঙ্খল, দক্ষ ও যোগ্য মানুষ হিসেবে গড়ে তুলতে সহায়তা করবে।
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Page;