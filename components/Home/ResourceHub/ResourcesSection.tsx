
import ResourceHero from "./ResourceHero";
import EbooksSection from "./ebooks/EbooksSection";
import WhitepaperSection from "./whitepapers/WhitepaperSection";

const ResourcesSection = () => {
  return (
    <section className="w-full bg-[#141414] overflow-hidden py-8">
      <ResourceHero />
      <div className="max-w-7xl mx-auto px-4">
        <main className="flex flex-col justify-center gap-6">
          <EbooksSection />
         <WhitepaperSection/>
        </main>
      </div>
    </section>
  );
};

export default ResourcesSection;
