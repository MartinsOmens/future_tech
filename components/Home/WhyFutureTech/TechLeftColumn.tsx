import Image from "next/image";

type TechLeftColumnProps = {
  image: string;
  title: string;
  subtitle: string;
};

const TechLeftColumn = ({ image, title, subtitle }: TechLeftColumnProps) => {
  return (
    <div
      className="
        bg-card
        p-4 sm:p-6 md:p-8
        flex flex-col
        h-auto sm:h-64
        border-b border-white/20 lg:border-b-0
      "
    >
      <div className="w-16 sm:w-20 md:w-24 mb-4 sm:mb-5 cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-400">{subtitle}</p>
    </div>
  );
};

export default TechLeftColumn;
