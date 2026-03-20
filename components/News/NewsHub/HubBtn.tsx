import React, { useState } from "react";

const categories = [
  "All",
  "Technology",
  "Politics",
  "Health",
  "Environment",
  "Sports",
];

const HubBtn = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="w-full mt-10 ">
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
              px-3 py-3
              rounded-md
              text-sm
              transition
              text-center
             
              ${
                active === cat
                  ? "bg-[#262626] text-white  border border-white/20"   // active
                  : "bg-[#1a1a1a] text-gray-300 hover:bg-[#303030]"
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

export default HubBtn;
