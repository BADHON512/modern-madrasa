'use client';

import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    "মাদরাসা এবং স্কুলের সমন্বিত শিক্ষা ব্যবস্থার আধুনিক যুগোপযোগী ব্যবস্থা।",
    "বিশিষ্ট শিক্ষাবিদদের সুপরামর্শে পরিচালিত এবং প্রশিক্ষণপ্রাপ্ত শিক্ষকমন্ডলী দ্বারা পাঠদান।",
    "অতি অল্প সময়ে কোরআন হিফজের নিশ্চয়তা।",
    "প্রশিক্ষণপ্রাপ্ত খ্যাতিমান ক্বারী সাহেবদের মাধ্যমে নিয়মিত কোরআন মঞ্চ।",
    "English Spoken এবং Phonics এর পারদর্শিতা অর্জন।",
    "কম্পিউটার শিক্ষা বাধ্যতামূলক।",
    "সু-পরিসর শ্রেণিকক্ষ ও অত্যাধুনিক ক্যাম্পাস।",
    "চমৎকার লোকেশন এবং উন্নত পরিবেশ।",
    "অনুপস্থিত শিক্ষার্থীদের অভিভাবকদের সঙ্গে তাৎক্ষণিক যোগাযোগ।",
    "দুর্বল শিক্ষার্থীদের জন্য Extra care।",
    "প্রতিটি সেমিস্টার পরীক্ষার পর মেধাভিত্তিক পুনরায় রোল।",
    "সার্বক্ষণিক নিরাপত্তার সু-ব্যবস্থা ও কঠোর নিয়মানুবর্তিতা।",
    "সার্বক্ষণিক বিদ্যুতের ব্যবস্থা।",
    "দেশী ও আন্তর্জাতিক প্রতিযোগীতায় অংশগ্রহণের সুযোগ।",
    "অন্যান্য আধুনিক সুযোগ-সুবিধার সু-ব্যবস্থা।"
  ];

  return (
    <section className="w-[90%] lg:max-w-7xl mx-auto my-20 rounded-md py-12 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center  text-green-600 ">
          কেন আমাদের প্রতিষ্ঠান বেছে নেবেন?
        </h2>
        <div className='w-[40%] mx-auto border my-3 border-[blue]'/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center bg-white p-4 shadow-md rounded-lg">
              <FaCheckCircle  className="text-green-500 text-xl mr-3 w-[25px] " />
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;