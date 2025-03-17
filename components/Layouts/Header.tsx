'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

type Props = {
  LoginUser: any
}

const Header = ({ LoginUser }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    // Scroll event listener যোগ করা
    window.addEventListener("scroll", handleScroll);

    // Cleanup function: কম্পোনেন্ট আনমাউন্ট হলে event listener সরিয়ে ফেলা
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 
  return (
    <header className={`${active && "fixed top-0 left-0 bg-[#000] z-[9999] w-full"} border-b  border-[#80808083] text-white py-4 px-6 shadow-md`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <Link href="/" className="text-xl font-bold flex items-center">
          <Image src={"https://res.cloudinary.com/dfng3w9jm/image/upload/v1741757437/483891980_1033750798673164_202715880075837876_n_x0vm9p.jpg"} height={1000} width={1000} alt='logo not found' className='w-[50px] h-[50px] rounded-full object-center' />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">হোম</Link>
          <Link href="/about" className="hover:text-gray-300">আমাদের সম্পর্কে</Link>
          <Link href="/academic" className="hover:text-gray-300">একাডেমিক তথ্য</Link>
          <Link href="/teachers" className="hover:text-gray-300">শিক্ষকবৃন্দ</Link>
          <Link href="/admission" className="hover:text-gray-300">ভর্তি</Link>
          <Link href="/contact" className="hover:text-gray-300">যোগাযোগ</Link>
          <Link href="/notice" className="hover:text-red-600 font-bold text-red-400">নোটিশ </Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          {
            LoginUser ? (<div className='h-[60px] w-[60px]'>
              <Link href={LoginUser?.role === "super_admin" ? "/admin/dashboard" : "profile"} >  <Image src={LoginUser?.avatar?.url} height={1000} width={1000} alt='img not found ' className='rounded-full object-cover border border-blue-500 cursor-pointer h-[60px] w-[60px]'></Image></Link>

            </div>) : (<Link href="/login" className="bg-slate-600 text-white border border-[#808080ad] px-4 py-2 rounded-full font-medium ">লগইন</Link>)
          }
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden  text-white p-4 space-y-3">
          <Link href="/" className="block">হোম</Link>
          <Link href="/about" className="block">আমাদের সম্পর্কে</Link>
          <Link href="/academic" className="block">একাডেমিক তথ্য</Link>
          <Link href="/teachers" className="block">শিক্ষকবৃন্দ</Link>
          <Link href="/admission" className="block">ভর্তি</Link>
          <Link href="/contact" className="block">যোগাযোগ</Link>
          <Link href="/notice" className="hover:text-red-600 font-bold text-red-400">নোটিশ </Link>
          <Link href="/login" className="block bg-white text-blue-600 px-4 py-2 rounded-full mt-2 text-center">লগইন</Link>
        </div>
      )}
    </header>
  )
}

export default Header