import CTASection from "../Home/CTA/CTASection";
import Headlines from "./Headlines/Headlines";
import InsightSection from "./Insight/InsightSection";
import HubSection from "./NewsHub/HubSection";


const News = () => {
  return (
    <div className="w-full bg-[#141414] overflow-hidden">
     <Headlines/>
     <HubSection/>
     <InsightSection/>
     <CTASection/>
    </div>
  );
};

export default News;
