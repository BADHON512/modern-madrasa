"use client";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import { useState } from "react";

export default function NoticeBoard() {
  const [notices] = useState([
    { id: 1, title: "ভর্তি বিজ্ঞপ্তি", date: "১০ মার্চ ২০২৫", content: "আমাদের প্রতিষ্ঠানে নতুন শিক্ষার্থী ভর্তির বিজ্ঞপ্তি প্রকাশিত হয়েছে। বিস্তারিত জানতে ক্লিক করুন।" },
    { id: 2, title: "পরীক্ষার সময়সূচি", date: "১৫ মার্চ ২০২৫", content: "মাদ্রাসার মধ্যবর্তী পরীক্ষা শুরু হবে ১লা এপ্রিল থেকে। সকল শিক্ষার্থীকে প্রস্তুতি নেওয়ার অনুরোধ করা হচ্ছে।" },
    { id: 3, title: "বিশেষ সভার নোটিশ", date: "২০ মার্চ ২০২৫", content: "অভিভাবক ও শিক্ষকদের জন্য বিশেষ সভা অনুষ্ঠিত হবে আগামী ২৫শে মার্চ।" }
  ]);

  return (
<div className="">
    <Header/>
<div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-green-600 border-b-4 border-green-600 pb-2 mb-6 text-center">নোটিশ বোর্ড</h2>
      <div className="max-w-3xl w-full">
        {notices.map(notice => (
          <div key={notice.id} className="bg-white p-5 mb-4 shadow-md rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-800">{notice.title}</h3>
            <p className="text-sm text-gray-500">{notice.date}</p>
            <p className="text-gray-700 mt-2">{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
     <Footer/>
</div>
  );
}
