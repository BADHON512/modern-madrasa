import FounderPage from '@/components/FounderPage'
import Footer from '@/components/Layouts/Footer'
import Header from '@/components/Layouts/Header'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Header/>
            <div className="max-w-7xl mx-auto px-5 py-10">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-100">আমাদের সম্পর্কে</h1>
                    <p className="text-lg text-gray-300 mt-3">
                        দারুল এহসান ক্যাডেট মাদ্রাসা — আধুনিক ও ইসলামিক শিক্ষার সমন্বিত একটি শিক্ষা প্রতিষ্ঠান।
                    </p>
                </div>

                {/* About Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">আমাদের লক্ষ্য ও উদ্দেশ্য</h2>
                    <p className="text-gray-700 leading-7">
                        আমাদের মূল লক্ষ্য হল আধুনিক শিক্ষার পাশাপাশি কুরআন ও হাদিসের শিক্ষার মাধ্যমে একটি নৈতিক ও সুশৃঙ্খল প্রজন্ম গড়ে তোলা। আমরা চাই শিক্ষার্থীরা বিশ্বমানের জ্ঞান অর্জনের পাশাপাশি ইসলামের আলোকে নৈতিক শিক্ষা লাভ করুক।
                    </p>
                </div>

                {/* Key Features */}
                <div className="mt-10 grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-gray-800">✍️ একাডেমিক শিক্ষা</h3>
                        <p className="text-gray-700 mt-2">আমরা বাংলা, ইংরেজি, গণিত, বিজ্ঞানসহ সকল বিষয়ের মানসম্মত শিক্ষা প্রদান করি।</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                        <h3 className="text-xl font-semibold text-gray-800">📖 ইসলামিক শিক্ষা</h3>
                        <p className="text-gray-700 mt-2">আমাদের মাদ্রাসায় নূরানী, নাজেরা, হিফজুল কুরআন এবং মাসালা-মাসায়েল শিক্ষার সুব্যবস্থা রয়েছে।</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                        <h3 className="text-xl font-semibold text-gray-800">💻 প্রযুক্তিগত শিক্ষা</h3>
                        <p className="text-gray-700 mt-2">প্রতিটি শিক্ষার্থীর জন্য কম্পিউটার শিক্ষা বাধ্যতামূলক, যাতে তারা প্রযুক্তির সাথে এগিয়ে যেতে পারে।</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                        <h3 className="text-xl font-semibold text-gray-800">🏆 নিয়মিত মূল্যায়ন</h3>
                        <p className="text-gray-700 mt-2">সাপ্তাহিক, মাসিক ও সেমিস্টার পরীক্ষার মাধ্যমে শিক্ষার্থীদের মূল্যায়ন করা হয়।</p>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="mt-10 bg-gray-200 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">আমাদের ভিশন ও মিশন</h2>
                    <p className="text-gray-700 leading-7">
                        আমরা চাই প্রতিটি শিক্ষার্থী নৈতিক, সামাজিক ও একাডেমিক দিক থেকে শ্রেষ্ঠত্ব অর্জন করুক। ইসলামিক শিক্ষার পাশাপাশি তাদের আধুনিক জ্ঞানে সমৃদ্ধ করা আমাদের প্রধান উদ্দেশ্য।
                    </p>
                </div>
                <FounderPage/>
            </div>
        <Footer/>
        </div>
    )
}

export default page