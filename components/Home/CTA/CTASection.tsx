import Image from "next/image";
import { features } from "@/lib/features";
import CommunityCard from "./CommunityCard";
import { assets } from "@/lib/assets";

const CTASection = () => {
  return (
    <section className="bg-[#1A1A1A] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start items-center gap-6 md:gap-10 mb-8 md:mb-10">
          <Image
            src={assets.logo_big}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto md:mx-0 w-20 md:w-24"
          />

          <div className="text-center md:text-left max-w-xl md:max-w-2xl">
            <span className="text-xs bg-white/10 px-3 py-1 rounded-md">
              Learn, Connect, and Innovate
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
              Be Part of the Future Tech Revolution
            </h2>

            <p className="text-gray-400 mt-3 max-w-full text-sm sm:text-base">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-[#262626] p-6 sm:p-8 rounded-2xl">
          {features.map((feature, index) => (
            <CommunityCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
