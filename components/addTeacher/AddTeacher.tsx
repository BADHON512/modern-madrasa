import { AddTeacher } from "@/@backend/addTeacher/addTeacher";
import { useState } from "react";
import toast from "react-hot-toast";

const TeacherForm = () => {
  const [teacherData, setTeacherData] = useState({
    name: "",
    contact: "",
    avatar: "",
    gender: "",
    address: "",
    qualification: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeacherData((prev) => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (teacherData.avatar === "") {
      toast.error("Please upload an image")
    }
    const { message, statusCode, error } = await AddTeacher({
      name: teacherData.name,
      contact: teacherData.contact,
      avatar: teacherData.avatar,
      gender: teacherData.gender,
      address: teacherData.address,
      qualification: teacherData.qualification
    })

    if (statusCode===200&& message) {
      toast.success(message)
      setTeacherData({
        name: "",
        contact: "",
        avatar: "",
        gender: "",
        address: "",
        qualification: "",
      });
      if (error) {
        toast.error(error)

      }
    }
  };

  return (
  <div className="">
    <h1 className="text-center mt-20 text-2xl md:text-3xl lg:text-5xl text-[#4eff37]">শিক্ষক যোগ করুন</h1>
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md text-white mt-10">
 
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={teacherData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Contact:</label>
          <input
            type="text"
            name="contact"
            value={teacherData.contact}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Gender:</label>
          <select
            name="gender"
            value={teacherData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-gray-700 text-white"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address:</label>
          <input
            type="text"
            name="address"
            value={teacherData.address}
            required
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={teacherData.qualification}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="avatar" className=" py-3 px-3 my-2 rounded-md bg-sky-500">Upload Avatar</label>
          <input id="avatar" type="file" onChange={handleImageChange} className="w-full text-gray-300 hidden" />
          {teacherData.avatar && (
            <img src={teacherData.avatar} alt="Avatar" className="mt-2 w-20 h-20 rounded-full" />
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded w-full cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default TeacherForm;
