"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { assets } from "@/lib/assets";

/* ✅ TYPE */
type Caption = {
  id: number;
  title: string;
  category: string;
  image: any;
  likes: string;
  shares: string;
};

/* ✅ DATA */
const captions: Caption[] = [
  {
    id: 1,
    title: "A Decisive Victory for Progressive Policies",
    category: "Politics",
    image: assets.news_1,
    likes: "2.2K",
    shares: "60",
  },
  {
    id: 2,
    title: "Tech Giants Unveiling Cutting-Edge AI Innovations",
    category: "Technology",
    image: assets.news_2,
    likes: "6K",
    shares: "92",
  },
  {
    id: 3,
    title: "Covid-19 Variants",
    category: "Health",
    image: assets.news_3,
    likes: "2.2K",
    shares: "60",
  },
];

const Captions = () => {
  return (
    <div>
      {/* GRID */}
      <div className="mt-10 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {captions.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition"
          >
            {/* IMAGE */}
            <div className="relative w-full h-50">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* TEXT */}
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs">
                {item.category}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center justify-between flex-wrap gap-4 px-3 pb-4">
              
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 bg-[#262626] px-3 py-1.5 rounded-full border border-white/10 hover:bg-[#333] transition"
                >
                  <FaRegHeart className="text-gray-400" />
                  <span className="text-[14px]">{item.likes}</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 bg-[#262626] px-3 py-1.5 rounded-full border border-white/10 hover:bg-[#333] transition"
                >
                  <FiSend className="text-gray-400 text-sm" />
                  <span className="text-[14px]">{item.shares}</span>
                </button>
              </div>

              <Link
                href={`/news/headlines/${item.id}`}
                className="bg-[#141414] flex items-center px-4 py-2 rounded-lg border border-white/10 hover:bg-[#333] transition text-sm"
              >
                Read More
                <Image
                  src={assets.arrow_icon}
                  alt="arrow icon"
                  className="w-3 sm:w-4 ml-3"
                />
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Captions;