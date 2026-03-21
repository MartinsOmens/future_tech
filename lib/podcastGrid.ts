export type PodcastGridItem = {
  title: string;
  description: string;
  image: string;
  duration: string;
  host: string;
};

export const podcastGrid: PodcastGridItem[] = [
  {
    title: "AI in Healthcare",
    host: "Dr. Lisa Adams",
    description:
      "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostics to patient care.",
    image: "/podcast/ep-1.png",
    duration: "2:30 min",
  },
  {
    title: "AI Ethics",
    host: "Dr. Michael Turner",
    description:
      "Explore the ethical dilemmas and considerations surrounding AI with expert Dr. Michael Turner.",
    image: "/podcast/ep-2.png",
    duration: "2:30 min",
  },
  {
    title: "Machine Learning Explained",
    host: "Sarah Davis",
    description:
      "Dive into the intricacies of machine learning with AI expert Sarah Davis.",
    image: "/podcast/ep-3.png",
    duration: "2:30 min",
  },
  {
    title: "AI and the Future of Work",
    host: "Dr. Olivia White",
    description:
      "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
    image: "/podcast/ep-4.png",
    duration: "2:30 min",
  },
  {
    title: "AI in Education",
    host: "Emily Turner",
    description:
      "Explore the role of AI in education as Emily Turner discusses how AI is transforming learning.",
    image: "/podcast/ep-5.png",
    duration: "2:30 min",
  },
  {
    title: "AI in Entertainment",
    host: "David Smith",
    description:
      "David Smith explores the influence of AI in the entertainment industry.",
    image: "/podcast/ep-6.png",
    duration: "2:30 min",
  },
];