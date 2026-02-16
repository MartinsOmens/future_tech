import Image from "next/image";
import { assets } from "@/lib/assets";
import {HeroDetails, TechFeatures} from "../index";

import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-[#141414] overflow-hidden">
        <div className="max-w-7xl mx-auto mt-10 px-4 flex flex-col md:flex-row gap-12 items-start md:items-center">
          {/* ---- LEFT COLUMN ---- */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <p className="text-gray-300 text-sm md:text-base tracking-wide">
              Your Journey to Tomorrow Begins Here
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Explore the Frontiers of <br className="hidden md:block" />
              Artificial Intelligence
            </h2>

            <p className="text-gray-300 text-sm md:text-base font-medium max-w-xl">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future.
            </p>

            {/* ---- CTA BUTTONS ---- */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/resources">
                <button className="px-6 py-3 bg-[#FFD11A] text-black font-semibold rounded-sm hover:scale-105 transition">
                  Explore Resources
                </button>
              </Link>
              <Link href="/podcast">
                <button className="px-6 py-3 border border-white/20 text-white rounded-sm hover:bg-white/10 transition">
                  Listen to Podcast
                </button>
              </Link>
            </div>

            {/* ---- STATS ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/20 pt-6 gap-6">
              {/* Stat 1 */}
              <div className="flex flex-col gap-2 sm:pl-4">
                <h3 className="font-semibold text-2xl">
                  300 <span className="text-[#FFD11A]">+</span>
                </h3>
                <p className="text-gray-300 text-sm">Resources available</p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-2 sm:border-l sm:border-white/20 sm:pl-4">
                <h3 className="font-semibold text-2xl">
                  12K <span className="text-[#FFD11A]">+</span>
                </h3>
                <p className="text-gray-300 text-sm">Total Downloads</p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col gap-2 sm:border-l sm:border-white/20 sm:pl-4">
                <h3 className="font-semibold text-2xl">
                  10K <span className="text-[#FFD11A]">+</span>
                </h3>
                <p className="text-gray-300 text-sm">Active Users</p>
              </div>
            </div>
          </div>

          {/* ---- RIGHT COLUMN ---- */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center relative mt-8 md:mt-0 gap-6">
            {/* Full-width image */}
            <Image
              src={assets.user_collection}
              alt="AI Community"
              width={120}
              className="object-contain"
              priority
            />

            {/* Text content */}
            <div className="text-center md:text-left flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Explore 1000+ resources
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/resources">
              <button className="flex items-center gap-1 px-6 py-3 border border-white/20 text-white rounded-sm hover:bg-white/10 transition">
                Explore Resources
                <GoArrowUpRight size={24} color="#FFD11A" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full my-5 px-5 border-t border-white/20">
        <HeroDetails />
      </div>

      <div className="w-full">
        <TechFeatures/>
      </div>
    </>
  );
};

export default Hero;
