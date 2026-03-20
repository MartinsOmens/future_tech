import { GoArrowUpRight } from "react-icons/go";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Hub } from "@/lib/hub";
import Link from "next/link";

type Props = {
  hub: Hub;
};

export default function HubRow({ hub }: Props) {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_140px] gap-6 py-8 items-start">
          {/* Left + Button on small screens */}
          <div className="flex flex-row items-center justify-between lg:flex-col lg:justify-start lg:gap-4 w-full">
            <div className="flex gap-4 items-center">
              <img
                src={hub.avatar}
                alt={hub.author}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="space-y-1">
                <p className="text-white font-medium">{hub.author}</p>
                <p className="text-xs text-gray-400">{hub.role}</p>
              </div>
            </div>

            {/* Button (visible only on small screens) */}
            <Link href={`/news/${hub.slug}`}>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded text-sm text-white hover:border-yellow-400 transition lg:hidden">
                View Blog
                <GoArrowUpRight className="text-yellow-400 size-5" />
              </button>
            </Link>
          </div>

          {/* Center */}
          <div className="space-y-2">
            <p className="text-xs text-gray-400">{hub.date}</p>
            <h3 className="text-lg text-white font-semibold mt-2">
              {hub.title}
            </h3>
            <p className="text-sm text-gray-400 max-w-xl">{hub.description}</p>

            <div className="flex gap-2 text-gray-400 text-xs pt-2 flex-wrap">
              <span className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full">
                <FaRegHeart /> {hub.likes}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full">
                <FaRegComment /> {hub.comments}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full">
                <FiSend /> {hub.shares}
              </span>
            </div>
            
          </div>

          {/* Right (hidden on small screens) */}
          <div className="hidden lg:flex lg:justify-end">
            <Link href={`/news/${hub.slug}`}>
              <button className="px-4 py-2 border border-white/20 rounded text-sm text-white flex items-center gap-2 hover:border-yellow-400 transition">
                Read More
                <GoArrowUpRight className="text-yellow-400 size-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
