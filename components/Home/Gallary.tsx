"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";

type Props = {};

const Gallery = (props: Props) => {
  const images = [
    { src: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912799/482386629_1147534400496604_3017480896951055454_n_hqhpxq_dmhldm.webp" },
    { src: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912803/482607753_2009920052820084_5342460104852316776_n_xczhlt_iqnctr.webp" },
    { src: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912811/481418488_1168004671578988_3281929632944569948_n_hdpbcf_mhvycn.webp" },
    { src: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912819/471958221_590968237207757_5034959359786926159_n_potjdc_vtkjd0.webp" },
    { src: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912842/467694836_2032888280513149_4761222761181667093_n_h3ukho_ycbjju.webp" },
    { src: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912851/482410565_2287225808339186_1109085491186225578_n_btrtwr_mznsbb.webp" },
    { src: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912856/483110388_1193659099085422_1370227252492844354_n_ypy3rw_gnsasb.webp" },
    {src:"https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912863/483160267_1147905189931986_4967088359474059153_n_vsvxc0_gnllbe.webp"},
    {src:"https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912869/482342227_1743893743214698_4170596285394963592_n_wbmits_kc4n1h.webp"},
    {src:"https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912873/482294065_632665549735111_5802599333966961270_n_ekgyak_owtc6t.webp"},
    {src:"https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912884/482822713_2723695937837660_2027751559584380353_n_uvxqod_rwct35.webp"},
    {src:"https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912890/483022758_665352369482834_2757208016287329429_n_egpqqb_mxy4m2.webp"},
    {src:"https://res.cloudinary.com/dwicbvoi2/image/upload/v1742912892/471697323_2214494362279125_1732392552819847986_n_xasmhw_acl0uk.webp"},
    // {src:""},
    // {src:""},
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="bg-blue-500 py-2 px-3 font-semibold text-gray-100 rounded-sm">আমাদের গ্যালারি</h1>
      <div className="columns-3 md:columns-4 gap-2 p-2 w-full mx-auto mt-3">
        {images.map((image, i) => (
          <div
            key={i}
            className="relative mb-2 cursor-pointer break-inside-avoid"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={image.src}
              alt={`Gallery image ${i + 1}`}
              width={400}
              height={1000}
              layout="responsive"
              className="w-full h-auto rounded-lg object-cover cursor-pointer hover:opacity-75 transition duration-300"
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
