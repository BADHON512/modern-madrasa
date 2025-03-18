"use client"
import { useState } from "react";
import { Home, Users, BookOpen, Settings, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "@/@backend/admin/logOutAdmin";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PiStudentFill } from "react-icons/pi";
import AddStudentForm from "@/components/addStudent/AddStudentForm";
import { IoHomeOutline } from "react-icons/io5";
import AllStudent from "@/components/addStudent/AllStudent";
import TeacherForm from "@/components/addTeacher/AddTeacher";
import AllTeacher from "@/components/addTeacher/AllTeacher";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import AllNotices from "@/components/Notice/Notice";

type Props = {
  LoginUser: any
}
const Dashboard = ({ LoginUser }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [Active, setActive] = useState<number>()
  const router = useRouter()

  const SignOut = async () => {
    const { statusCode, message } = await LogOut()

    if (statusCode === 200) {
      toast.success(message)
      router.push("/")
    }
  }
  const [isAddingStudent, setIsAddingStudent] = useState(false);

  const handleAddStudentClick = () => {
    setIsAddingStudent(true);
  };
  return (
    <div className="flex h-screen ">
      {/* মোবাইল ও ট্যাবলেটের জন্য টগল বাটন */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 m-4 bg-gray-800 text-white rounded-md md:hidden fixed top-4 left-4 z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* সাইডবার */}
      <aside
        className={`bg-gray-900 border-r border-[#80808059] text-white w-64 h-full fixed md:relative transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
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
          <div
            onClick={() => setActive(0)}
            className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md transition duration-200 cursor-pointer"
          >
            <Home size={20} />
            <span>ড্যাশবোর্ড</span>
          </div>
          <div
            onClick={() => setActive(1)}
            className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md transition duration-200 cursor-pointer"
          >
            <PiStudentFill size={20} />
            <span>অ্যাড শিক্ষার্থী</span>
          </div>
          <div
            onClick={() => setActive(2)}
            className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md transition duration-200 cursor-pointer"
          >
            <Users size={20} />
            <span>সকল শিক্ষার্থী</span>
          </div>
          <div
            onClick={() => setActive(3)}
            className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md transition duration-200 cursor-pointer"
          >
            <BookOpen size={20} />
            <span>অ্যাড শিক্ষক</span>
          </div>
          <div
            onClick={() => setActive(4)}
            className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md transition duration-200 cursor-pointer"
          >
            <BookOpen size={20} />
            <span>সকল শিক্ষক</span>
          </div>

          <div
            onClick={() => setActive(5)}
            className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md transition duration-200 cursor-pointer"
          >
            <RiNotificationSnoozeLine size={20} />
            <span>অ্যাড নোটিশ</span>
          </div>


          <Link href={"/"}

            className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md transition duration-200"
          >
            <IoHomeOutline size={20} />
            <span>হোম পেজ</span>
          </Link>






        </nav>

        {/* লগআউট বাটন */}
        <button onClick={() => SignOut()} className="mt-auto flex items-center space-x-3 p-3 bg-red-600 hover:bg-red-700 rounded-md text-white w-full cursor-pointer">
          <X size={20} />
          <span>লগআউট</span>
        </button>
      </aside>

      {/* right side */}
      <div className=" w-full">
        {/* Header */}


        {Active === 1 && (
          <AddStudentForm />
        )}

        {Active === 2 && (
          <AllStudent />
        )}

        {Active === 3 && (
          <TeacherForm />
        )}


        {Active === 4 && (
          <AllTeacher />
        )}


        {Active === 5 && (
          <AllNotices />
        )}


        {/* Add Student Button */}


        {/* Add Student Form (Only visible when isAddingStudent is true) */}




      </div>
    </div>
  );
};


export default Dashboard;
