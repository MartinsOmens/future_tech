import OpenPage from "@/components/News/BlogOpen/OpenPage";
import { hubs, Hub } from "@/lib/hub";

type Props = {
  params: Promise<{
    slug?: string; // optional to avoid runtime crash
  }>;
};

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;

  // Safety: if no slug in URL
  if (!slug) {
    return <div className="text-white p-10 text-center">No news selected.</div>;
  }
  // Find the article safely
  const article: Hub | undefined = hubs.find(
    (item) => item.slug?.toLowerCase() === slug?.toLowerCase(),
  );

  // If article not found
  if (!article) {
    return (
      <div className="text-white p-10 text-center">Article not found.</div>
    );
  }

  // Render the full article
  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <OpenPage article={article}/>
    </div>
  );
}


