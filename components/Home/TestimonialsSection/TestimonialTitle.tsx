"use client";
import { GoArrowUpRight } from "react-icons/go";
const TestimonialTitle = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div className="flex flex-col items-start gap-4">
          <button className="bg-[#333333] text-white px-3 py-1 rounded-sm sm:text-[10px] md:text-sm">
            What Our Readers Say
          </button>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
            Real Words from Real Readers
          </h2>
        </div>

        <button className="bg-[#141414] self-start md:self-auto px-3 py-1.5 border border-white/20 rounded flex items-center gap-2 text-white">
          View All Testimonials
          <GoArrowUpRight size={20} color="#FFD11A" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialTitle;
