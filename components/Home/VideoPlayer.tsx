"use client";

import { useState } from "react";

import { Dialog } from "@headlessui/react";
import { FaPlay } from "react-icons/fa";
type Props = {};

const VideoPlayer = (props: Props) => {
    const videos = [
        "https://res.cloudinary.com/dwicbvoi2/video/upload/v1742916690/Snapsave.app_-GPl_gsc6kv_ywyzd7.mp4",
        "https://res.cloudinary.com/dwicbvoi2/video/upload/v1742916686/483351465_9101839493218412_8682514123200467906_n_d6hehx_a6hmzb.mp4",
        "https://res.cloudinary.com/dwicbvoi2/video/upload/v1742916687/484140834_29591524293779677_8439933459747333002_n_p3656l_dj9ygm.mp4",
        "https://res.cloudinary.com/dwicbvoi2/video/upload/v1742916686/483760628_8499481046820959_1101870668282696666_n_kcg0pn_uw5sjo.mp4",
    ];

    const [open, setOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);

    return (
        <div className="max-w-7xl mx-auto my-20">
            <h1 className="bg-blue-500 py-2 px-3 font-semibold text-gray-100 rounded-sm">ভিডিও গ্যালারি</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer rounded-lg p-2  "
                        onClick={() => {
                            setCurrentVideo(video);
                            setOpen(true);
                        }}
                    >
                        <video
                            src={video}
                            height="100%"
                            width={"100%"}
                            autoPlay={false}
                            className=" w-full h-full"

                        />
                        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[80px] w-[80px] bg-[#0b0530] rounded-full flex justify-center items-center">
                            <FaPlay size={30} />
                        </div>


                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                    <Dialog.Panel className="w-[80%] md:w-[60%] bg-black rounded-lg overflow-hidden">
                        <button className="absolute top-2 right-4 text-white text-xl" onClick={() => setOpen(false)}>
                            ✖
                        </button>
                        {currentVideo && (
                            <video
                                src={currentVideo}
                                width="100%"
                                height="100%"
                                autoPlay={true}
                                controls={true}
                            />
                        )}
                    </Dialog.Panel>

                </div>
            </Dialog>
        </div>


    );
};

export default VideoPlayer;
