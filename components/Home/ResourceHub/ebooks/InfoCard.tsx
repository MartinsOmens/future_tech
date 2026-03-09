const InfoCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="bg-[#1A1A1A] hover:bg-white/10 rounded-lg p-4">
      <p className="text-xs text-gray-400">{title}</p>
      <p className="text-sm text-white mt-1">{value}</p>
    </div>
  );
};

export default InfoCard;
