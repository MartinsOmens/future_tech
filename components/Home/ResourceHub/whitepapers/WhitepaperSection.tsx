import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const WhitepaperSection = () => {
  return (
    <div>
      <section className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-xl overflow-hidden">
        <LeftSide />
        <RightSide />
      </section>
    </div>
  );
};

export default WhitepaperSection;
