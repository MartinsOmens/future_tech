import { assets } from "@/lib/assets";
import Image from "next/image";

import { FaEye } from "react-icons/fa";
import InfoCard from "../ebooks/InfoCard";

export default function RightSide() {
  return (
    <div className="p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start gap-1">
          <h3 className="text-white font-semibold text-lg">Topics Coverage</h3>

          <p className="text-xs text-gray-400 max-w-md text-left">
            Whitepapers cover quantum computing (20%), AI ethics (15%), space
            mining prospects (20%), AI in healthcare (15%), and renewable energy
            strategies (30%).
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={assets.banner_2}
            alt="VR learning"
            fill
            className="object-cover"
          />
        </div>

        {/* Stats Grid */}
        <div className="flex items-center gap-4 w-full">
          <InfoCard title="Total Whitepapers" value="Over 50 whitepapers" />
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
        <div className="bg-[#1A1A1A] hover:bg-white/10 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-1">Average Author Expertise</p>
          <p className="text-sm text-white">
            Whitepapers are authored by subject matter experts with an average
            of 20 years of experience.
          </p>
        </div>
      </div>
    </div>
  );
}
