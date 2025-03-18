"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllTeachers } from "@/@backend/addTeacher/getAllTeachers";
import { DeleteTeacher } from "@/@backend/addTeacher/deleteTeacher";
import toast from "react-hot-toast";
import {format} from 'timeago.js'


type Teacher = {
  id: string;
  name: string;
  contact?: string;
  avatar: any;
  gender?: string;
  address?: string;
  qualification?: string;
  createdAt: Date;
};

const AllTeacher = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [ReCall, setReCall] = useState(false)

  useEffect(() => {
    const fetchTeachers = async () => {
      const { allTeachers } = await getAllTeachers();
      setTeachers(allTeachers);
    };

    fetchTeachers();
  }, [ReCall]);

  const handleDelete =async(id:string)=>{
     const {message,statusCode,error}=await DeleteTeacher(id)

     if(statusCode===200&& message){
        toast.success(message)
        setReCall(!ReCall)
     }
     if(error){
        toast.error(error)
     }
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold text-green-400 text-center mb-5">
        দারুল এহসান ক্যাডেট মাদ্রাসা সকল টিচার
      </h2>
{
    teachers.length===0?( <h1 className=" mt-10 text-slate-500 text-center text-2xl md:text-4xl">No Teacher found please add teacher</h1>):null
}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {teachers?.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-gray-800 rounded-lg shadow-md p-4 border border-gray-700"
          >
            <div className="flex justify-center mb-3">
              <Image
                src={teacher?.avatar?.url || "/default-avatar.png"}
                alt={teacher.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full border-2 border-green-400"
              />
            </div>

            <h3 className="text-lg font-semibold text-green-300">{teacher.name}</h3>
            <p className="text-gray-400 text-sm">যোগাযোগ: {teacher.contact || "N/A"}</p>
            <p className="text-gray-400 text-sm">ঠিকানা: {teacher.address || "N/A"}</p>
            <p className="text-gray-400 text-sm">যোগ্যতা: {teacher.qualification || "N/A"}</p>
            <p className="text-gray-400 text-sm">লিঙ্গ: {teacher.gender || "N/A"}</p>
            <p className="text-gray-400 text-sm">যোগদান করেছেন: {format(teacher.createdAt)|| "N/A"}</p>

            <div className="mt-3 flex space-x-2">
              <button onClick={()=>{toast.error("Currently not available")}} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md cursor-pointer">
                Edit
              </button>
              <button onClick={()=>{handleDelete(teacher.id)}} className="bg-red-500 hover:bg-red-600 text-white py-1 cursor-pointer px-3 rounded-md">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTeacher;
