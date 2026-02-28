import { assets } from "@/lib/assets";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const HeroDetails = () => {
  return (
    <section className="w-full bg-[#141414] overflow-hidden py-8">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        {/* ---- Item 1 ---- */}
        <div className="flex-1 flex flex-col gap-4 border-b border-white/20 md:border-b-0  pt-4 md:pt-0 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start space-y-7">
              <Image
                src={assets.icon_3}
                alt="Latest News Icon"
                width={30}
                height={30}
                className="object-contain"
              />
              <div className="flex flex-col">
                <h2 className="text-white font-semibold text-lg md:text-xl">
                  Latest News Updates
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  Stay Current
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#FFD11A] p-2 mt-10 rounded-full w-10 h-10">
              <GoArrowUpRight size={20} color="black" />
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            Over 1,000 articles published monthly
          </p>
        </div>

        {/* ---- Item 2 ---- */}
        <div className="flex-1 flex flex-col gap-4 border-b border-white/20 pb-6 md:border-b-0 md:border-l md:pl-6 pt-4 md:pt-0">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start space-y-7">
              <Image
                src={assets.icon_1}
                alt="Expert Contributors Icon"
                width={30}
                height={30}
                className="object-contain"
              />
              <div className="flex flex-col">
                <h2 className="text-white font-semibold text-lg md:text-xl">
                  Expert Contributors
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  Trusted Insights
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#FFD11A] p-2 rounded-full w-10 h-10">
              <GoArrowUpRight size={20} color="black" />
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            50+ renowned AI experts on our team
          </p>
        </div>

        {/* ---- Item 3 ---- */}
        <div className="flex-1 flex flex-col gap-4 border-b border-white/20 pb-6 md:border-b-0 md:border-l md:pl-6 pt-4 md:pt-0">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start space-y-7">
              <Image
                src={assets.icon_2}
                alt="Global Readership Icon"
                width={30}
                height={30}
                className="object-contain"
              />
              <div className="flex flex-col">
                <h2 className="text-white font-semibold text-lg md:text-xl">
                  Global Readership
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  Worldwide Impact
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#FFD11A] p-2 rounded-full w-10 h-10">
              <GoArrowUpRight size={20} color="black" />
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            2 million monthly readers
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroDetails;
