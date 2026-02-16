const TechCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 shadow-md hover:shadow-xl transition">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
};

export default TechCard;
