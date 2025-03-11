"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";

type Props = {};

const Gallery = (props: Props) => {
  const images = [
    { src: "https://res.cloudinary.com/dfng3w9jm/image/upload/a_270/v1741719622/482386629_1147534400496604_3017480896951055454_n_hqhpxq.jpg" },
    { src: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1741719551/467694836_2032888280513149_4761222761181667093_n_h3ukho.jpg" },
    { src: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1741719660/482342227_1743893743214698_4170596285394963592_n_wbmits.jpg" },
    { src: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1741719483/471697323_2214494362279125_1732392552819847986_n_xasmhw.jpg" },
    { src: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1741719648/482607753_2009920052820084_5342460104852316776_n_xczhlt.jpg" },
    { src: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1741719327/482410565_2287225808339186_1109085491186225578_n_btrtwr.jpg" },
    { src: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1741720632/482294065_632665549735111_5802599333966961270_n_ekgyak.jpg" },
    {src:"https://res.cloudinary.com/dfng3w9jm/image/upload/v1741719706/481418488_1168004671578988_3281929632944569948_n_hdpbcf.jpg"},
    {src:"https://res.cloudinary.com/dfng3w9jm/image/upload/v1741720915/483110388_1193659099085422_1370227252492844354_n_ypy3rw.jpg"},
    {src:"https://res.cloudinary.com/dfng3w9jm/image/upload/v1741720958/482822713_2723695937837660_2027751559584380353_n_uvxqod.jpg"},
    {src:"https://res.cloudinary.com/dfng3w9jm/image/upload/v1741721143/471958221_590968237207757_5034959359786926159_n_potjdc.jpg"},
    // {src:""},
    // {src:""},
    // {src:""},
    // {src:""},
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="bg-orange-400 py-2 px-3 font-semibold text-gray-600">আমাদের গ্যালারি</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 w-full mt-3">
        {images.map((image, i) => (
          <div
            key={i}
            className="relative mb-2 cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={image.src}
              alt={`Gallery image ${i + 1}`}
              width={1000}
              height={1000}
              layout="responsive"
              className="w-[400px] h-[450px] rounded-lg  hover:opacity-75 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img.src }))}
          index={index} // এটি ঠিকমতো স্টার্টিং ইমেজ ধরে রাখবে
        
        />
      )}
    </div>
  );
};

export default Gallery;
