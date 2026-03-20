import { Feature } from "@/lib/features";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
  feature: Feature;
}

const CommunityCard = ({ feature }: Props) => {
  return (
    <div className="group relative bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-yellow-400 hover:-translate-y-1 hover:shadow-lg">

      <div>
        <h3 className="text-white font-semibold text-lg mb-2">
          {feature.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {feature.description}
        </p>
      </div>

      <button
        type="button"
        className="absolute top-5 right-5 bg-yellow-400 w-9 h-9 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      >
        <GoArrowUpRight size={16} className="text-black" />
      </button>

    </div>
  );
};

export default CommunityCard;