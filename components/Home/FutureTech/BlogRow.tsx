import { Blog } from "@/lib/blog";
import { GoArrowUpRight } from "react-icons/go";
import { FaRegHeart, FaRegComment, FaShare } from "react-icons/fa";

type Props = {
  blog: Blog;
};

export default function BlogRow({ blog }: Props) {
  return (
    <div className="border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_140px] gap-6 py-8 items-start">
          {/* Left + Button on small screens */}
          <div className="flex flex-row items-center justify-between lg:flex-col lg:justify-start lg:gap-4 w-full">
            <div className="flex gap-4 items-center">
              <img
                src={blog.avatar}
                alt={blog.author}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="space-y-1">
                <p className="text-white font-medium">{blog.author}</p>
                <p className="text-xs text-gray-400">{blog.role}</p>
              </div>
            </div>

            {/* Button (visible only on small screens) */}
            <button className="flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded text-sm text-white hover:border-yellow-400 transition lg:hidden">
              View Blog
              <GoArrowUpRight className="text-yellow-400 size-5" />
            </button>
          </div>

          {/* Center */}
          <div className="space-y-2">
            <p className="text-xs text-gray-400">{blog.date}</p>
            <h3 className="text-lg text-white font-semibold mt-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-400 max-w-xl">{blog.description}</p>

            <div className="flex gap-2 text-gray-400 text-xs pt-2 flex-wrap">
              <span className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full">
                <FaRegHeart /> {blog.likes}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full">
                <FaRegComment /> {blog.comments}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full">
                <FaShare /> {blog.shares}
              </span>
            </div>
          </div>

          {/* Right (hidden on small screens) */}
          <div className="hidden lg:flex lg:justify-end">
            <button className="px-4 py-2 border border-white/20 rounded text-sm text-white flex items-center gap-2 hover:border-yellow-400 transition">
              View Blog
              <GoArrowUpRight className="text-yellow-400 size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
