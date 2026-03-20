"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "@/lib/assets";
import { FaPlay, FaTimes } from "react-icons/fa";

const videos = [
  {
    image: assets.vid_1,
    title: "Mars Exploration: Unveiling Alien Landscapes",
    desc: "Embark on a journey through the Red Planet’s breathtaking landscapes.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image: assets.vid_2,
    title: "Blockchain Explained: A Revolution in Finance",
    desc: "Delve into blockchain technology and its transformative impact.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image: assets.vid_3,
    title: "Mental Health Awareness in the Workplace",
    desc: "Exploring the importance of mental health in workplaces.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image: assets.vid_4,
    title: "Revolutionizing Investment Strategies",
    desc: "A deep look into global financial innovations.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-[#141414] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <div key={i} className="space-y-4">
              {/* IMAGE */}
              <div
                className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setActiveVideo(video.videoUrl)}
              >
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                />

                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* PLAY BUTTON */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:animate-pulse">
                    <FaPlay className="text-black text-xs" />
                  </div>
                </div>

                {/* DURATION */}
                <span className="absolute bottom-3 right-3 text-xs text-gray-300">
                  2:30 min
                </span>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white text-xl"
            >
              <FaTimes />
            </button>

            {/* VIDEO */}
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                src={activeVideo}
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
