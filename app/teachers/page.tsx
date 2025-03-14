import Footer from '@/components/Layouts/Footer';
import Header from '@/components/Layouts/Header';
import Image from 'next/image';

const teachers = [
  {
    name: 'কাজী মোঃ হাফিজ উদ্দিন-লিমন',
    subject: 'হাদিস ও তাফসির',
    qualification: 'ইসলামিক স্টাডিজ (ঢাকা বিশ্ববিদ্যালয়)',
    image: 'https://res.cloudinary.com/dfng3w9jm/image/upload/v1741847749/483593369_1036102368327903_8000179895354208126_n_c9rkev.jpg'
  },


];

const TeachersPage = () => {
  return (
    <div className="">
      <Header />
      <div className='max-w-7xl min-h-[80vh] mx-auto px-5 py-10'>
        <h1 className='text-3xl font-bold text-center text-gray-100 mb-8'>আমাদের শিক্ষকবৃন্দ</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {teachers.map((teacher, index) => (
            <div key={index} className='bg-slate-600 shadow-lg rounded-lg p-4 text-center'>
              <div className='flex justify-center'>
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={100}
                  height={100}
                  className='rounded-full'
                />
              </div>
              <h2 className='text-lg text-gray-100 font-semibold mt-4'>{teacher.name}</h2>
              <p className='text-gray-100'>{teacher.subject}</p>
              <p className='text-gray-100 text-sm mt-1'>{teacher.qualification}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeachersPage;
