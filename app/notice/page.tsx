import React from 'react'

import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import { getAllNotices } from '@/@backend/notice/getAllNotice'
import { GetLoginUser } from '@/@backend/getLoginUser'



const page =async () => {
  const { allNotice } = await getAllNotices()
  const {User}=await GetLoginUser()
  return (
    <div className="">
    <Header LoginUser={User} />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-green-600 border-b-4 border-green-600 pb-2 mb-6 text-center">নোটিশ বোর্ড</h2>
      <div className="max-w-3xl w-full">
        {allNotice?.map(notice => (
          <div key={notice?.id} className="bg-white p-5 mb-4 shadow-md rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-800">{notice?.title}</h3>
            <p className="text-gray-500 text-sm mt-3">
              প্রকাশিত: {new Date(notice?.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mt-2">{notice?.content}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default page