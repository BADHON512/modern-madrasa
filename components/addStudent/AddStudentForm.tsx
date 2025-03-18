import { PostStudent } from "@/@backend/addStudent/addStudent";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddStudentForm() {

    const [studentData, setStudentData] = useState({
        name: "",
        className: "",
        guardianName: "",
        contact: "",
        address: "",
        birthReg: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        religion: "",
        bloodGroup: "",
        emergencyContact: "",
        avatar: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStudentData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(studentData.avatar===""){
            toast.error("Please upload an image")
        }

        try {
            const { error, message, statusCode } = await PostStudent({
                name: studentData.name,
                className: studentData.className,
                guardianName: studentData.guardianName,
                contact: studentData.contact,
                address: studentData.address,
                birthReg: studentData.birthReg,
                dateOfBirth: studentData.dateOfBirth,
                gender: studentData.gender,
                nationality: studentData.nationality,
                religion: studentData.religion,
                bloodGroup: studentData.bloodGroup,
                emergencyContact: studentData.emergencyContact,
                avatar: studentData.avatar
            });

            if (statusCode === 200 && message) {
                toast.success(message)
                setStudentData({
                    name: "",
                    className: "",
                    guardianName: "",
                    contact: "",
                    address: "",
                    birthReg: "",
                    dateOfBirth: "",
                    gender: "",
                    nationality: "",
                    religion: "",
                    bloodGroup: "",
                    emergencyContact: "",
                    avatar: ""
                });
            }
            else if (error) {
                toast.error(error)
            }
        } catch (error:any) {
            toast.error(error ||"Something went wrong");
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setStudentData((prev) => ({
                    ...prev,
                    avatar: reader.result as string, // avatar ফিল্ডে image URL সেট করা হলো
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">

            <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-green-400 mb-6">শিক্ষার্থী যোগ করুন</h2>

                <div className="flex flex-col items-center space-y-3">
                    {/* প্রোফাইল ইমেজ */}
                    <Image
                        src={studentData.avatar || "https://res.cloudinary.com/dfng3w9jm/image/upload/v1739805661/default-avatar-profile-icon-of-social-media-user-vector_ixtvqz.jpg"}
                        height={1000}
                        width={1000}
                        alt="Profile Image"
                        className="w-[70px] h-[70px] rounded-full border border-blue-500 object-cover"
                    />

                    {/* আপলোড বাটন */}
                    <label
                        htmlFor="imageUpload"
                        className="cursor-pointer px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-green-400 text-white text-sm"
                    >
                        Upload Image
                    </label>
                    <input type="file" id="imageUpload" className="hidden" onChange={handleImageChange} />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                                Student Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={studentData.name}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="className" className="block text-sm font-medium text-gray-200">
                                Select class
                            </label>
                            <select
                                id="className"
                                name="className"
                                value={studentData.className}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg 
              outline-none transition duration-300 cursor-pointer"
                                required
                            >
                                <option value="" disabled>ক্লাস নির্বাচন করুন</option>
                                <option value="1">Class 1</option>
                                <option value="2">Class 2</option>
                                <option value="3">Class 3</option>
                                <option value="4">Class 4</option>
                                <option value="5">Class 5</option>
                                <option value="6">Class 6</option>
                                <option value="7">Class 7</option>
                                <option value="8">Class 8</option>
                                <option value="9">Class 9</option>
                                <option value="10">Class 10</option>

                            </select>
                        </div>



                        <div>
                            <label htmlFor="guardianName" className="block text-sm font-medium text-gray-200">
                                Guardian Name
                            </label>
                            <input
                                id="guardianName"
                                name="guardianName"
                                type="text"
                                value={studentData.guardianName}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-200">
                                Contact Number
                            </label>
                            <input
                                id="contact"
                                name="contact"
                                type="text"
                                value={studentData.contact}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-200">
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                value={studentData.address}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="birthReg" className="block text-sm font-medium text-gray-200">
                                Birth registration number
                            </label>
                            <input
                                id="birthReg"
                                name="birthReg"
                                type="text"
                                value={studentData.birthReg}
                                onChange={handleChange}
                                placeholder="আপনার জন্ম নিবন্ধন নম্বর লিখুন"
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-200">
                                Date of Birth
                            </label>
                            <input
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                value={studentData.dateOfBirth}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-200">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={studentData.gender}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="nationality" className="block text-sm font-medium text-gray-200">
                                Nationality
                            </label>
                            <input
                                id="nationality"
                                name="nationality"
                                type="text"
                                value={studentData.nationality}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="religion" className="block text-sm font-medium text-gray-200">
                                Religion
                            </label>
                            <input
                                id="religion"
                                name="religion"
                                type="text"
                                value={studentData.religion}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-200">
                                Blood Group
                            </label>
                            <input
                                id="bloodGroup"
                                name="bloodGroup"
                                type="text"
                                value={studentData.bloodGroup}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-200">
                                Emergency Contact
                            </label>
                            <input
                                id="emergencyContact"
                                name="emergencyContact"
                                type="text"
                                value={studentData.emergencyContact}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 cursor-pointer"
                        >
                            Add Student
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
