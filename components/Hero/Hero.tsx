"use client"
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import HeroImage from "../../public/image/hero.png"
import HeroImage2 from "../../public/image/hero2.png"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type Props = {}
const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-[50%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
      >
        <IoIosArrowBack />
      </button>
    );
  };
  
  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-[50%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
      >
        <IoIosArrowForward />
      </button>
    );
  };
const Hero = (props: Props) => {

 const  settings = {
        dots: true,
        infinite: true,
       autoplay:true,
       autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
  
        
      };
    return (
   <div className="">
         <div className="w-full h-[50px] bg-[#050c2c] flex items-center overflow-hidden border-b border-[#80808071] shadow-md">
            {/* Title Section */}
            <div className="h-full bg-[#741010] flex items-center px-5">
                <h1 className="text-white font-bold text-lg">শিরোনাম</h1>
            </div>

            {/* Scrolling News Text */}
            <div className="flex-1">
                <Marquee speed={80}>
                    <h1 className="text-white tiro-bangla-regular text-sm lg:text-base px-3 py-1">
                        জয়রা লতিফিয়া নূরানীয়া হাফিজিয়া দারুল উলুম মাদ্রাসা, মানিকগঞ্জে ভর্তি চলছে!
                        ইসলামী শিক্ষা ও হিফজ শিক্ষার জন্য একটি উত্তম পরিবেশে আপনার সন্তানকে ভর্তি করুন।
                        এখানে প্রশিক্ষিত এবং অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে শিক্ষার্থীরা সঠিক পথে ইসলামী শিক্ষা গ্রহণ করবে।
                        মাদ্রাসায় রয়েছে আধুনিক শিক্ষা ব্যবস্থা ও সুন্নাতি পদ্ধতির এক সুন্দর সমন্বয়, যা শিশুদের জন্য একটি সঠিক দিশা।
                        আপনার সন্তানকে ইসলামী শিক্ষার মজবুত ভিত্তি প্রদান করুন। ভর্তি চলছে, দেরি না করে আজই যোগাযোগ করুন!
                        ধন্যবাদ!
                    </h1>
                </Marquee>
            </div>
        </div>

        {/* Image slider */}

     
  <Slider {...settings} className=" h-auto  w-[70%] mx-auto mt-10">
    <div>
      <Image 
        src={HeroImage} 
        alt="hero image not found" 
        className="h-[500px] w-full" 
        layout="intrinsic" 
      />
    </div>

    <div className="">
      bahdon
    </div>

  </Slider>
</div>

  
    )
}

export default Hero