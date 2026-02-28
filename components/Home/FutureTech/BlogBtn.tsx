import React, { useState } from "react";

const categories = [
  "All",
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
];

const BlogBtn = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="w-full mt-10 border-b border-white/20">
      <div className="
        max-w-7xl mx-auto 
        px-4 py-6
        grid 
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-3
      ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
              w-full
              px-3 py-2
              rounded-md
              text-sm
              transition
              text-center
              ${
                active === cat
                  ? "bg-[#1a1a1a] text-white"   // active
                  : "bg-[#262626] text-gray-300 hover:bg-[#303030]"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BlogBtn;
