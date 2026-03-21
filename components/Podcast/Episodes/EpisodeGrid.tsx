"use client";

import { podcastGrid } from "@/lib/podcastGrid";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function EpisodeGrid() {
  return (
    <section className="bg-[#0b0b0b] text-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10">
        {podcastGrid.map((pod, i) => (
          <div
            key={i}
            className="p-6 border border-white/10 hover:bg-white/5 transition"
          >
            {/* IMAGE */}
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={pod.image}
                alt={pod.title}
                width={500}
                height={300}
                className="object-cover w-full h-45"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

              {/* PLAY BUTTON */}
              <div className="absolute bottom-3 left-3">
                <div className="bg-white text-black p-2 rounded-full">
                  <FaPlay size={12} />
                </div>
              </div>

              {/* DURATION */}
              <span className="absolute bottom-3 right-3 text-xs text-gray-300">
                {pod.duration}
              </span>
            </div>

            {/* CONTENT */}
            <div className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold">{pod.title}</h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                {pod.description}
              </p>

              {/* BUTTON */}
              <button className="flex items-center gap-2 text-xs border border-white/10 px-3 py-2 rounded hover:border-yellow-400 hover:text-yellow-400 transition">
                Listen Podcast
                 <GoArrowUpRight size={20} color="#FFD11A" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
