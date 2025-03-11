'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

type Props = {}

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false)
  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }
  return (
    <header className={`${active&& "fixed top-0 left-0 bg-[#000] z-[9999] w-full"} border-b  border-[#80808083] text-white py-4 px-6 shadow-md`}>
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      {/* Logo and Name */}
      <Link href="/" className="text-xl font-bold flex items-center">
        <span className="ml-2">মর্ডান মাদ্রাসা</span>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-gray-300">হোম</Link>
        <Link href="/about" className="hover:text-gray-300">আমাদের সম্পর্কে</Link>
        <Link href="/academic" className="hover:text-gray-300">একাডেমিক তথ্য</Link>
        <Link href="/teachers" className="hover:text-gray-300">শিক্ষকবৃন্দ</Link>
        <Link href="/admission" className="hover:text-gray-300">ভর্তি</Link>
        <Link href="/contact" className="hover:text-gray-300">যোগাযোগ</Link>
      </nav>

      {/* Login Button */}
      <div className="hidden md:block">
        <Link href="/login" className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100">লগইন</Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden  text-white p-4 space-y-3">
        <Link href="/" className="block">হোম</Link>
        <Link href="/about" className="block">আমাদের সম্পর্কে</Link>
        <Link href="/academic" className="block">একাডেমিক তথ্য</Link>
        <Link href="/teachers" className="block">শিক্ষকবৃন্দ</Link>
        <Link href="/admission" className="block">ভর্তি</Link>
        <Link href="/contact" className="block">যোগাযোগ</Link>
        <Link href="/login" className="block bg-white text-blue-600 px-4 py-2 rounded-full text-center">লগইন</Link>
      </div>
    )}
  </header>
  )
}

export default Header