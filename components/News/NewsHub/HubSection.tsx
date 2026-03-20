"use client";

import { GoArrowUpRight } from "react-icons/go";
import HubBtn from "./HubBtn";
import HubRow from "./HubRow";
import { hubs } from "@/lib/hub";

const HubSection = () => {
  return (
    <section className="w-full bg-[#141414] overflow-hidden py-8">
      {/* ---- SECTION 1 ---- */}
      <div className="bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="flex flex-col items-start gap-4">
            <button className="bg-[#333333] text-white px-3 py-1 rounded-sm sm:text-[10px] md:text-sm">
              Welcome To Our News Hub
            </button>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
             Discover the World of Headlines
            </h2>
          </div>

          <button
            className="bg-[#141414] self-start md:self-auto px-4 py-2 border
               border-white/20 rounded flex items-center gap-2 text-white"
          >
            View All News
            <GoArrowUpRight size={20} color="#FFD11A" />
          </button>
        </div>
      </div>

      {/* ------------- Hub Btn -----------*/}
      <HubBtn />

      {/* ------------- Hub Row -----------*/}
      <div className="w-full mt-10">
        <div className="px-4 sm:px-6 lg:px-0">
          {hubs.map((hub) => (
            <HubRow key={hub.id} hub={hub} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubSection;
