
type TechFeatureSectionProps = {
  icon: string;
  title: string;
  subtitle: string;
};

const TechFeatureSection = ({
  icon,
  title,
  subtitle,
}: TechFeatureSectionProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 h-64 flex flex-col ">
      <div className="text-3xl mb-4 text-accent">{icon}</div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
};

export default TechFeatureSection;
