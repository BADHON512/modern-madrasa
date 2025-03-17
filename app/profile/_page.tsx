"use client"
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import axios from "axios";
import { UpdateProfile } from "@/@backend/user/updateUser";
import { LogOut } from "@/@backend/admin/logOutAdmin";
import { useRouter } from "next/navigation";

type Props = {
  LoginUser: any
}
const ProfilePage = ({ LoginUser }: Props) => {
  const [form, setForm] = useState({
    name: LoginUser.name,
    className: LoginUser.className || "",
    guardianName: LoginUser.guardianName || "",
    contact: LoginUser.contact || "",
    address: LoginUser.address || "",
  });
  const [avatar, setAvatar] = useState(LoginUser.avatar.url);
 const router =useRouter()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fileReader = new FileReader();

    fileReader.onload = async (event) => {
      if (fileReader.readyState === 2) {
        const image = event.target?.result;
        setAvatar(image as string)
      }
    }

    fileReader.readAsDataURL(file)


  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, message, statusCode } = await UpdateProfile({
      name: form.name,
      className: form.className,
      guardianName: form.guardianName,
      contact: form.contact,
      address: form.address,
      avatar: avatar
    })

    if (message) {
      toast.success(message)

    }
    if (error) {
      toast.error(error)
    }

  };
  const SignOut = async () => {
    const { statusCode, message } = await LogOut()

    if (statusCode === 200) {
      toast.success(message)
      router.push("/")
    }
  }
  return (
    <div className="max-w-4xl my-10 mx-auto p-8 bg-gray-900 shadow-lg rounded-lg  text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Student Profile</h2>
      <div className="flex flex-col items-center mb-6">
        <Image src={avatar} alt="Profile Picture" width={120} height={120} className="rounded-full border-4 border-blue-500  h-[120px] w-[120px]" />
        <input type="file" onChange={handleFileChange} className="mt-3 text-sm text-gray-300" />
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white" placeholder="Name" required />
        <select
          name="className"
          value={form.className}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
        >
          <option value="" disabled>ক্লাস নির্বাচন করুন</option>
          <option value="class_1">Class 1</option>
          <option value="class_2">Class 2</option>
          <option value="class_3">Class 3</option>
          <option value="class_4">Class 4</option>
          <option value="class_5">Class 5</option>
          <option value="class_6">Class 6</option>
          <option value="class_7">Class 7</option>
          <option value="class_8">Class 8</option>
          <option value="class_9">Class 9</option>
          <option value="class_10">Class 10</option>
        </select>

        <input type="text" name="guardianName" value={form.guardianName} onChange={handleChange} className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white" placeholder="Guardian Name" />
        <input type="text" name="contact" value={form.contact} onChange={handleChange} className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white" placeholder="Contact" />
        <textarea type="text" name="address" value={form.address} onChange={handleChange} className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white" placeholder="Address" />
        <button type="submit" className="w-full cursor-pointer p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold" >Update your profile</button>
      </form>
      <button
        onClick={() => SignOut()}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mt-5 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
