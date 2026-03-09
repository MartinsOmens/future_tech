import { assets } from "@/lib/assets";
import Image from "next/image";
import InfoCard from "./InfoCard";
import { FaEye } from "react-icons/fa";

export default function TopicsCard() {
  return (
    <div className="p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start gap-1">
          <h3 className="text-white font-semibold text-lg">
            Variety of Topics
          </h3>

          <p className="text-xs text-gray-400 max-w-md text-left">
            Topics include AI in education (25%), renewable energy (20%),
            healthcare (15%), space exploration (15%), and biotechnology (10%).
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={assets.banner_1}
            alt="VR learning"
            fill
            className="object-cover"
          />
        </div>

        {/* Stats Grid */}
        <div className="flex items-center gap-4 w-full">
          <InfoCard title="Total Ebooks" value="Over 100 ebooks" />
          <div className="bg-[#1A1A1A] hover:bg-white/10 flex flex-1 justify-between items-center p-4 rounded-lg">
            <div className="flex flex-col">
              <p className="text-xs text-gray-400">Download Formats</p>
              <p className="text-sm text-white mt-1">PDF format for access</p>
            </div>
            <button className="bg-[#141414] rounded-lg text-white text-sm flex items-center justify-center px-3 py-2">
              Preview 
              <FaEye size={12} color="#FFD11A" className="ml-2" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1A1A1A] hover:bg-white/10 rounded-lg p-4 mt-15">
          <p className="text-xs text-gray-400 mb-1">Average Author Expertise</p>
          <p className="text-sm text-white">
            Ebooks are authored by renowned experts with an average of 15 years
            of experience.
          </p>
        </div>
      </div>
    </div>
  );
}
