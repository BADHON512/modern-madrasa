"use client";

import { CreateNotice } from "@/@backend/notice/createNotice";
import { deleteNotice } from "@/@backend/notice/deleteNotice";
import { getAllNotices } from "@/@backend/notice/getAllNotice";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";



type Notice = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
};

const AllNotices = () => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [ReCall, setReCall] = useState(false)

    useEffect(() => {
        fetchNotices();
    }, [ReCall]);

    const fetchNotices = async () => {
        const { allNotice } = await getAllNotices();
        setNotices(allNotice);
    };

    const handleCreateNotice = async () => {
        if (!title || !content) return toast.error("শিরোনাম এবং বিবরণ দিতে হবে!");

        const {notice,message}= await CreateNotice(title, content);
        if (notice) {
             toast.success(message)
            setReCall(!ReCall)
            setTitle("");
            setContent("");
        }
    };

    const handleDelete = async (id: string) => {
        await deleteNotice(id);
        setNotices((prev) => prev.filter((notice) => notice.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-5">
            <h2 className="text-2xl font-bold text-green-400 text-center mb-5">
                দারুল এহসান ক্যাডেট মাদ্রাসা সকল নোটিশ
            </h2>

            {/* নতুন নোটিশ ফর্ম */}
            <div className="bg-gray-800 p-4 rounded-md shadow-md mb-5">
                <h3 className="text-lg font-semibold text-green-300 mb-3">নতুন নোটিশ তৈরি করুন</h3>
                <input
                    type="text"
                    placeholder="নোটিশ শিরোনাম"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-3 bg-gray-700 text-white rounded-md border border-gray-600"
                />
                <textarea
                    placeholder="নোটিশ বিবরণ"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 mb-3 bg-gray-700 text-white rounded-md border border-gray-600"
                    rows={3}
                />
                <button
                    onClick={handleCreateNotice}
                    className="bg-green-500 hover:bg-green-600 cursor-pointer text-white py-2 px-4 rounded-md w-full"
                >
                    নোটিশ প্রকাশ করুন
                </button>
            </div>

            {/* সকল নোটিশ */}
            {notices.length === 0 ? (
                <p className="text-gray-400 text-center">কোনো নোটিশ পাওয়া যায়নি</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {notices.map((notice) => (
                        <div
                            key={notice.id}
                            className="bg-gray-800 rounded-lg shadow-md p-4 border border-gray-700"
                        >
                            <h3 className="text-lg font-semibold text-green-300">{notice.title}</h3>
                            <p className="text-gray-400 text-sm mt-2">{notice.content}</p>
                            <p className="text-gray-500 text-xs mt-3">
                                প্রকাশিত: {new Date(notice.createdAt).toLocaleDateString()}
                            </p>

                            <div className="mt-3 flex space-x-2">
                                <button onClick={()=>toast.error("Currently not available")} className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-1 px-3 rounded-md">
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(notice.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllNotices;
