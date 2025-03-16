"use client"
import { useState } from "react";
import { Home, Users, BookOpen, Settings, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* মোবাইল ও ট্যাবলেটের জন্য টগল বাটন */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 m-4 bg-gray-800 text-white rounded-md lg:hidden fixed top-4 left-4 z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* সাইডবার */}
      <aside
        className={`bg-gray-900 text-white w-64 h-full fixed lg:relative transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 p-6 flex flex-col`}
      >
        {/* এডমিন প্রোফাইল সেকশন */}
        <div className="flex flex-col items-center border-b border-gray-700 pb-4">
          <Image
            src="/admin-avatar.jpg"
            alt="Admin"
            width={80}
            height={80}
            className="rounded-full border-2 border-gray-500 shadow-md"
          />
          <h2 className="mt-3 text-lg font-semibold">Admin Name</h2>
          <p className="text-sm text-gray-400">Super Admin</p>
        </div>

        {/* নেভিগেশন মেনু */}
        <nav className="mt-6 space-y-3 flex-1">
          <SidebarItem href="/admin/dashboard" icon={<Home size={20} />} text="ড্যাশবোর্ড" />
          <SidebarItem href="/admin/users" icon={<Users size={20} />} text="সকল ইউজার" />
          <SidebarItem href="/admin/teachers" icon={<BookOpen size={20} />} text="শিক্ষক" />
          <SidebarItem href="/admin/settings" icon={<Settings size={20} />} text="সেটিংস" />
        </nav>

        {/* লগআউট বাটন */}
        <button className="mt-auto flex items-center space-x-3 p-3 bg-red-600 hover:bg-red-700 rounded-md text-white w-full cursor-pointer">
          <X size={20} />
          <button>লগআউট</button>
        </button>
      </aside>
    </div>
  );
};

const SidebarItem = ({ href, icon, text }) => (
  <Link
    href={href}
    className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md transition duration-200"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Sidebar;
