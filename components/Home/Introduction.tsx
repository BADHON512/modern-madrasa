import Image from 'next/image'
import React from 'react'

type Props = {}

const Introduction = (props: Props) => {
    const sections = [
        {
            title: "সভাপতির বাণী",
            entries: [
                "พฤศจิกายน - สงฆา ผ้าพระ",
                "Reading",
            ],
        },
        {
            title: "กิจดร ผ้าวดร",
            entries: [
                "พฤศจิกายน - สงฆา ผ้าพระ",
                "Reading",
            ],
        },
    ];

    return (
        <div className="w-[90%] max-w-7xl mx-auto bg-white mt-20 shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row gap-5 p-5 ">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1741719327/482410565_2287225808339186_1109085491186225578_n_btrtwr.jpg"
                        alt="image not found"
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-gray-800 text-2xl md:text-3xl font-semibold leading-relaxed">
                        জয়রা লতিফিয়া নূরানীয়া হাফিজিয়া দারুল উলুম মাদ্রাসা, মানিকগঞ্জ
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base leading-6">
                        একবিংশ শতাব্দীর চ্যালেঞ্জ মোকাবেলা এবং মেধা বিকাশ ও নৈতিকতার আত্মবিশ্বাসী সুনাগরিক গড়ে তোলার লক্ষ্যে বিজ্ঞানভিত্তিক শ্রেণি কার্যক্রম, পদ্ধতিগত শিক্ষা, নিয়মিত পরীক্ষা, ধারাবাহিক অনুশীলন, শিক্ষাদানে আধুনিক শিক্ষা উপকরণ ব্যবহার করা হয়, রাজনীতি এবং ধূমপানমুক্ত, নিরাপদ ও সুশৃঙ্খল শিক্ষার পরিবেশ।
                    </p>

                    <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 w-fit">
                        আরো পড়ুন
                    </button>
                </div>
            </div>

            <div className="w-full my-20">
                <div className="flex flex-wrap gap-5 justify-center g">
                    <div className="w-[90%] md:w-[400px] border border-gray-300">
                        <div className="flex justify-center items-center gap-y-3 flex-col p-3">
                            <h1 className="bg-amber-500 p-3 w-full text-center font-semibold">
                                সভাপতির বাণী
                            </h1>
                            <Image src={"https://res.cloudinary.com/dfng3w9jm/image/upload/v1741554094/OIP_udlf6p.jpg"} alt='image not found' height={500} width={300} className='mx-auto mt-3' />
                            <h1 className='text-black text-center font-bold'> কাজী মোঃ হাফিজ উদ্দিন-লিমন</h1>
                            <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 ">
                                বিস্তারিত পড়ুন
                            </button>
                        </div>
                    </div>
                    <div className="w-[90%] md:w-[400px] border border-gray-300">
                        <div className="flex justify-center items-center gap-y-3 flex-col p-3">
                            <h1 className="bg-amber-500 p-3 w-full text-center font-semibold">
                                সভাপতির বাণী
                            </h1>
                            <Image src={"https://res.cloudinary.com/dfng3w9jm/image/upload/v1741554094/OIP_udlf6p.jpg"} alt='image not found' height={500} width={300} className='mx-auto mt-3' />
                            <h1 className='text-black text-center font-bold'> কাজী মোঃ হাফিজ উদ্দিন-লিমন</h1>
                            <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 ">
                                বিস্তারিত পড়ুন
                            </button>
                        </div>
                    </div>
                    <div className="w-[90%] md:w-[400px] border border-gray-300">
                        <div className="flex justify-center items-center gap-y-3 flex-col p-3">
                            <h1 className="bg-amber-500 p-3 w-full text-center font-semibold">
                                সভাপতির বাণী
                            </h1>
                            <Image src={"https://res.cloudinary.com/dfng3w9jm/image/upload/v1741554094/OIP_udlf6p.jpg"} alt='image not found' height={500} width={300} className='mx-auto mt-3' />
                            <h1 className='text-black text-center font-bold'> কাজী মোঃ হাফিজ উদ্দিন-লিমন</h1>
                            <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 ">
                                বিস্তারিত পড়ুন
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction