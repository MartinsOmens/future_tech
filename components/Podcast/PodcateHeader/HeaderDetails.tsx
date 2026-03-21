"use client";

import Image from "next/image";
import { FaStar, FaPlay } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { podcasts } from "@/lib/podcasts";

export default function HeaderDetails() {
  return (
    <section className="bg-[#141414] border border-white/10 text-white mt-20">
      <div className="max-w-7xl mx-auto">
        {podcasts.map((pod, i) => (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10"
          >
            {/* LEFT SIDE */}
            <div className="p-8 border-r border-white/10 space-y-4">
              {/* ICON */}

              <Image
                src={pod.icon}
                alt="pod-icon"
                width={50}
                height={50}
                className="object-contain"
              />

              {/* TITLE + RATING */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{pod.title}</h3>
                <div className="bg-[#1A1A1A] flex gap-1 text-yellow-400 text-xs border border-white/10 rounded px-2 py-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>

              {/* HOST */}
              <div className="bg-[#1A1A1A] flex items-center justify-between text-xs text-gray-400 border border-white/10 rounded px-3 py-4">
                <div className="flex flex-col ">
                  <span>Host:</span> <br />
                  <span className="text-white">{pod.host}</span>
                </div>
                <button className="bg-[#141414] px-4 py-2 flex items-center gap-1 hover:text-white transition">
                  Listen Podcast
                  <GoArrowUpRight size={20} color="#FFD11A" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-2 p-8 space-y-6">
              {/* IMAGE */}
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={pod.image}
                  alt={pod.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-55"
                />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 text-black p-4 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaPlay />
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {pod.description}
                </h3>
                <p className="text-gray-400 text-sm max-w-xl">
                  Join experts and explore real-world applications and insights
                  shaping the future.
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#1A1A1A] border border-white/10 rounded-lg p-4 text-sm">
                  <p className="text-gray-500 text-xs">Total Episodes</p>
                  <p>{pod.episodes}</p>
                </div>
                <div className="bg-[#1A1A1A] border border-white/10 rounded-lg p-4 text-sm">
                  <p className="text-gray-500 text-xs">
                    Average Episode Length
                  </p>
                  <p>{pod.length}</p>
                </div>
                <div className="bg-[#1A1A1A] border border-white/10 rounded-lg p-4 text-sm">
                  <p className="text-gray-500 text-xs">Release Frequency</p>
                  <p>{pod.frequency}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
