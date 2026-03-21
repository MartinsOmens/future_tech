import React from "react";
import HeaderDetails from "./HeaderDetails";

const Header = () => {
  return (
    <section className="w-full bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* HERO */}
        <header className="flex gap-2 items-start">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Unlock the World of Artificial Intelligence through Podcasts
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            Dive deep into the AI universe with our collection of insightful
            podcasts. Explore the latest trends, breakthroughs, and discussions
            on artificial intelligence. Whether you're an enthusiast or a
            professional, our AI podcasts offer a gateway to knowledge and
            innovation.
          </p>
        </header>

        <div className="mt-10">
            <HeaderDetails/>
        </div>
      </div>
    </section>
  );
};

export default Header;
