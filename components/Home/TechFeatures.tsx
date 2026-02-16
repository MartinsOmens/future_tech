import { TechFeatureSection, TechCard } from "../index";

const TechFeatures = () => {
  return (
    <section className="w-full bg-[#141414] overflow-hidden py-8">
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
      <div className="w-full max-w-7xl mx-auto mt-10 px-4 flex flex-col md:flex-row gap-12 items-start md:items-center">


        <div className="flex flex-col">
          {/* FIRST ROW  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-white/20 pb-4">
            <TechFeatureSection
              icon="⚛️"
              title="Future Technology Blog"
              subtitle="Stay informed with our blog section dedicated to future technology."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-l border-white/20 pl-10">
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

          {/* SECOND ROW  */}
          <div className="py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2">
            <TechFeatureSection
              icon="🔺"
              title="Research Insights Blogs"
              subtitle="Dive deep into future technology concepts with our research section."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-l border-white/20 pl-10">
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
