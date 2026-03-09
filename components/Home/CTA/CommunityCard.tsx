import { features } from "@/lib/features"
import { Feature } from "@/types/feature"
import { GoArrowUpRight } from "react-icons/go";

interface Props {
  feature: Feature
}

const CommunityCard= ({ feature }: Props) => {
  return (
    <div className="relative bg-[#0f0f0f] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-yellow-400 transition">

      <div>
        <h3 className="text-white font-semibold text-lg mb-2">
          {feature.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {feature.description}
        </p>
      </div>

      <button className="absolute top-5 right-5 bg-yellow-400 w-9 h-9 flex items-center justify-center rounded-full">
        <GoArrowUpRight size={16} className="text-black"/>
      </button>

    </div>
  )
}

export default CommunityCard;