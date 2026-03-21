import React from "react";
import EpisodeGrid from "./EpisodeGrid";

const EpisodeSection = () => {
  return (
    <section className="w-full bg-[#141414] overflow-hidden py-8">
      {/* ---- SECTION 1 ---- */}
      <div className="bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="flex flex-col items-start gap-4">
            <button className="bg-[#333333] text-white px-3 py-1 rounded-sm sm:text-[10px] md:text-sm">
              Stay Informed with Fresh Content
            </button>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
              Latest Podcast Episodes
            </h2>
          </div>
        </div>
        <EpisodeGrid />
      </div>
    </section>
  );
};

export default EpisodeSection;
