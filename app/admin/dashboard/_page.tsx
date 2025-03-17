"use client"
import { useState } from "react";
import { Home, Users, BookOpen, Settings, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "@/@backend/admin/logOutAdmin";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


 type Props={
    LoginUser:any
 }
const Dashboard = ({LoginUser}:Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router= useRouter()

 const SignOut=async()=>{
  const {statusCode,message}=await LogOut()

  if(statusCode===200){
    toast.success(message)
    router.push("/")
  }
 }

  return (
    <div className="flex h-screen">
      {/* মোবাইল ও ট্যাবলেটের জন্য টগল বাটন */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 m-4 bg-gray-800 text-white rounded-md md:hidden fixed top-4 left-4 z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* সাইডবার */}
      <aside
        className={`bg-gray-900 text-white w-64 h-full fixed md:relative transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 p-6 flex flex-col`}
      >
        {/* এডমিন প্রোফাইল সেকশন */}
        <div className="flex flex-col items-center border-b border-gray-700 pb-4">
          <Image
            src={LoginUser?.avatar?.url}
            alt="Admin"
            width={80}
            height={80}
            className="rounded-full border-2 border-gray-500 shadow-md"
          />
          <h2 className="mt-3 text-lg font-semibold">{LoginUser?.name}</h2>
          <p className="text-sm text-gray-400">Super Admin</p>
        </div>

        {/* নেভিগেশন মেনু */}
        <nav className="mt-6 space-y-3 flex-1">
          <SidebarItem href="/admin/dashboard" icon={<Home size={20} />} text="ড্যাশবোর্ড" />
          <SidebarItem href="/admin/users" icon={<Users size={20} />} text="সকল শিক্ষার্থী" />
          <SidebarItem href="/admin/teachers" icon={<BookOpen size={20} />} text="শিক্ষক" />
          <SidebarItem href="/admin/settings" icon={<Settings size={20} />} text="সেটিংস" />
        </nav>

        {/* লগআউট বাটন */}
        <button onClick={()=>SignOut()} className="mt-auto flex items-center space-x-3 p-3 bg-red-600 hover:bg-red-700 rounded-md text-white w-full cursor-pointer">
          <X size={20} />
          <span>লগআউট</span>
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

export default Dashboard;
