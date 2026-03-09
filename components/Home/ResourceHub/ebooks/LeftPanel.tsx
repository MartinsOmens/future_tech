"use client";
import { assets } from "@/lib/assets";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function LeftPanel() {
  return (
    <div className="py-6 flex flex-col justify-between">
      <div className="flex flex-col mt-10">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={assets.icon_6} alt="Logo" />
        </div>

        {/* Content */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-white">Ebooks</h2>

          <p className="text-gray-400 text-sm max-w-sm">
            Explore our collection of ebooks covering a wide spectrum of future
            technology topics.
          </p>

          <button className="bg-[#1A1A1A] w-full flex items-center justify-center hover:bg-white/10 transition px-5 py-3 rounded-lg text-sm text-white gap-2">
            Download Ebooks Now <GoArrowUpRight size={20} color="#FFD11A" />
          </button>
        </div>
      </div>

      {/* Users */}
      <div className="bg-[#1A1A1A] hover:bg-white/10 ] rounded-lg p-2 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Downloaded By</p>
          <p className="text-white font-medium">10k + Users</p>
        </div>
        <Image
          src={assets.user_collection}
          alt="user"
          className="rounded-full border border-[#0B0E13] w-30"
        />
      </div>
    </div>
  );
}
