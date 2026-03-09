import LeftPanel from "./LeftPanel";
import TopicsCard from "./TopicsCard";

export default function EbooksSection() {
  return (
    <section className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-xl overflow-hidden">
      <LeftPanel />
      <TopicsCard />
    </section>
  );
}
