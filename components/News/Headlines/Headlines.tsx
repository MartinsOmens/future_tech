"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { assets } from "@/lib/assets";
import Captions from "./Captions";

const Headlines = () => {
  return (
    <section className="w-full bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* HERO */}
        <header className="grid md:grid-cols-2 gap-8 items-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            Today's Headlines: Stay Informed
          </h1>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
            Explore the latest news from around the world. We bring you
            up-to-the-minute updates on the most significant events, trends, and
            stories. Discover the world through our news coverage.
          </p>
        </header>
      </div>

      {/* FEATURED ARTICLE */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mt-10 pb-10 grid md:grid-cols-2 gap-8 items-start">
          {/* IMAGE */}
          <div className="relative w-full h-80 overflow-hidden rounded-xl">
            <Image
              src={assets.header}
              alt="featured news"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                Global Climate Summit Addresses Urgent Climate Action
              </h2>

              <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                World leaders gathered at the Global Climate Summit to discuss
                urgent climate action, emissions reductions, and renewable
                energy targets.
              </p>

              {/* META */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Category</p>
                  <p>Environment</p>
                </div>

                <div>
                  <p className="text-gray-500">Date</p>
                  <p>Oct 10, 2023</p>
                </div>

                <div>
                  <p className="text-gray-500">Author</p>
                  <p>Jane Smith</p>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 bg-[#262626] px-3 py-1.5 rounded-full border border-white/10 hover:bg-[#333] transition"
                >
                  <FaRegHeart className="text-gray-400" />
                  <span>14K</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 bg-[#262626] px-3 py-1.5 rounded-full border border-white/10 hover:bg-[#333] transition"
                >
                  <FiSend className="text-gray-400" />
                  <span>204</span>
                </button>
              </div>

              <Link
                href="/news/headlines/1"
                className="bg-[#262626] px-4 py-2 rounded-lg border border-white/10 hover:bg-[#333] transition text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <Captions />
        </div>
      </div>
    </section>
  );
};

export default Headlines;
