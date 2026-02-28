import { assets } from "@/lib/assets";
import TechCard  from "./TechCard";
import TechLeftColumn from "./TechLeftColumn";

const TechFeatures = () => {
  return (
    <section className="w-full bg-[#141414] overflow-hidden ">
      {/* ---- SECTION 1 ---- */}
      <div className="bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-start gap-4">
          <button className="bg-[#333333] text-white px-3 py-1 rounded-sm">
            Unlock the Power of
          </button>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            FutureTechFeatures
          </h2>
        </div>
      </div>

      {/* ---- SECTION 2 ---- */}
      <div className="w-full relative mt-10 ">
        {/* full-length separators (visible on sm and up) span viewport width */}
        <div className="hidden sm:block absolute inset-y-0 left-1/2 w-px bg-white/20 -translate-x-1/2" />
        <div className="hidden sm:block absolute inset-x-0 top-1/2 h-px bg-white/20 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-0">
            {/* top-left */}
            <div className="py-6 px-0 sm:pr-12 md:pr-16 lg:pr-24">
              <TechLeftColumn
                image={assets.icon_4}
                title="Future Technology Blog"
                subtitle="Stay informed with our blog section dedicated to future technology."
              />
            </div>

            {/* top-right */}
            <div className="py-6 px-0 sm:pl-12 md:pl-16 lg:pl-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <TechCard
                  title="Quantity"
                  text="Over 1,000 articles on emerging tech trends and breakthroughs."
                />
                <TechCard
                  title="Variety"
                  text="Articles cover fields like AI, robotics, biotechnology, and more."
                />
                <TechCard
                  title="Frequency"
                  text="Fresh content added daily to keep you up to date."
                />
                <TechCard
                  title="Authoritative"
                  text="Written by our team of tech experts and industry professionals."
                />
              </div>
            </div>

            {/* bottom-left */}
            <div className="py-6 px-0 sm:pr-12 md:pr-16 lg:pr-24">
              <TechLeftColumn
                image={assets.icon_5}
                title="Research Insights Blogs"
                subtitle="Dive deep into future technology concepts with our research section."
              />
            </div>

            {/* bottom-right */}
            <div className="py-6 px-0 sm:pl-12 md:pl-16 lg:pl-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <TechCard
                  title="Depth"
                  text="500+ research articles for in-depth understanding."
                />
                <TechCard
                  title="Graphics"
                  text="Visual aids and infographics to enhance comprehension."
                />
                <TechCard
                  title="Trends"
                  text="Explore emerging trends in future technology research."
                />
                <TechCard
                  title="Contributors"
                  text="Contributions from tech researchers and academics."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFeatures;
