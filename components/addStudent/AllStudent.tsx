import { AllStudents } from '@/@backend/addStudent/allStudent';
import { DeleteStudent } from '@/@backend/addStudent/deleteStudent';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type Student = {
  id: string;
  name: string;
  className: string;
  guardianName: string;
  contact: string;
  address: string;
  registrationNumber: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  religion: string;
  bloodGroup: string;
  emergencyContact: string;
  avatar: string;
  registration:string
};

const AllStudent = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [reCall, setreCall] = useState(false)

  useEffect(() => {
    const fetchStudents = async () => {
      const { students } = await AllStudents();
      setStudents(students);
    };

    fetchStudents();
  }, [reCall]);

  const formatDate = (dateString: string) => {
    const parts = dateString.split('-');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

  const handleDelete=async(id:string)=>{
    const {message,statusCode}=await DeleteStudent(id)
    if(statusCode===200){
      toast.success(message)
     
      setreCall(true)
    }
  
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl md:text-5xl  font-bold text-green-400 mb-10 text-center">All Students</h2>

      <div className="flex flex-wrap gap-5">
      {
  students.length === 0 ? (
    <p className=' text-center w-full text-2xl md:text-5xl  text-slate-500'>No students found</p>  // এখানে কোন ডেটা না থাকলে একটি মেসেজ দেখাতে পারেন
  ) : (
    students.map((student, index) => (
      <div key={student.id} className="w-full md:w-[300px] bg-gray-800 rounded-lg shadow-md p-4 border border-gray-700">
        {/* Avatar */}
        <div className='flex justify-center mb-5'>
          <Image
            src={student.avatar?.url || '/default-avatar.png'}
            alt={student.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full border-2 border-green-400"
          />
        </div>

        {/* Student Info */}
        <div className="ml-4 flex-1 ">
          <h3 className="text-lg font-semibold text-green-300">{student.name}</h3>
          <p className="text-gray-400 text-sm">Serial: {index + 1}</p>
          <p className="text-gray-400 text-sm">Registration Number: {student.registration}</p>
          <p className="text-gray-400 text-sm">Class: {student.className}</p>
          <p className="text-gray-400 text-sm">Guardian: {student.guardianName}</p>
          <p className="text-gray-400 text-sm">DOB: {formatDate(student.dateOfBirth)}</p>
          <p className="text-gray-400 text-sm">Gender: {student.gender}</p>
          <p className="text-gray-400 text-sm">Nationality: {student.nationality}</p>
          <p className="text-gray-400 text-sm">Religion: {student.religion}</p>
          <p className="text-gray-400 text-sm">Blood Group: {student.bloodGroup}</p>
          <p className="text-gray-400 text-sm">Address: {student.address}</p>
          <p className="text-gray-400 text-sm">Registration No: {student.registrationNumber}</p>
          <p className="text-gray-400 text-sm">Contact: {student.contact}</p>
          <p className="text-gray-400 text-sm">Emergency Contact: {student.emergencyContact}</p>

          {/* Buttons */}
          <div className="mt-3 flex space-x-2">
            <button onClick={()=>{toast.error("Currently not available")}} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md cursor-pointer">
              Edit
            </button>
            <button onClick={()=>handleDelete(student.id)} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      </div>
    ))
  )
}

      </div>
    </div>
  );
};

export default AllStudent;
