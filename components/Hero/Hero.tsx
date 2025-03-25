"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const heroImages = [
    {
      url: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742913688/482215419_1091626399431457_5369641489977643119_n_xobgcl_awxqi7.jpg",
    },
    {
      url: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742913696/hero_3_c0zyzk_tq7xim.jpg",
    },
    {
      url: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742913695/hero_5_d7yyea_gctfyc.jpg",
    },
    {
      url: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742913694/hero_1_immix6_caa9o5.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* News Ticker */}
      <div className="w-full h-[50px] bg-[#050c2c] flex items-center overflow-hidden border-b border-gray-700 shadow-md">
        {/* Title Section */}
        <div className="h-full bg-[#741010] flex items-center px-5">
          <h1 className="text-white font-bold text-lg">শিরোনাম</h1>
        </div>

        {/* Scrolling News Text */}
        <div className="flex-1">
          <Marquee speed={80} gradient={false} className="text-white text-sm lg:text-base px-3 py-1">
            দারুল এহসান ক্যাডেট মাদ্রাসা, মানিকগঞ্জে ভর্তি চলছে! ইসলামী শিক্ষা ও হিফজ শিক্ষার জন্য একটি উত্তম
            পরিবেশে আপনার সন্তানকে ভর্তি করুন। এখানে প্রশিক্ষিত এবং অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে শিক্ষার্থীরা
            সঠিক পথে ইসলামী শিক্ষা গ্রহণ করবে। মাদ্রাসায় রয়েছে আধুনিক শিক্ষা ব্যবস্থা ও সুন্নাতি পদ্ধতির এক
            সুন্দর সমন্বয়। ভর্তি চলছে, দেরি না করে আজই যোগাযোগ করুন!
          </Marquee>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <Slider {...settings}>
          {heroImages.map((image, index) => (
            <div key={index} className="relative w-full">
              <Image
                src={image.url}
                width={1000}
                height={500}
                alt="hero image"
                className="w-full h-auto   rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
