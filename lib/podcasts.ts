export type Podcasts = {
  title: string;
  host: string;
  image: string;
  icon: string; // 👈 add this
  description: string;
  episodes: number;
  length: string;
  frequency: string;
};

export const podcasts: Podcasts[] = [
  {
    title: "AI Revolution",
    host: "Dr. Sarah Mitchell",
    image: "/podcast/pod-1.png",
    icon: "/podcast/pod-icon-1.svg", // 👈 unique
    description:
      "Delves into the transformative impact of AI across industries.",
    episodes: 50,
    length: "30 min",
    frequency: "Weekly",
  },
  {
    title: "AI Conversations",
    host: "Mark Anderson",
    image: "/podcast/pod-2.png",
    icon: "/podcast/pod-icon-2.svg", // 👈 different icon
    description:
      "Engage in thought-provoking conversations with leading experts.",
    episodes: 40,
    length: "40 min",
    frequency: "Monthly",
  },
];

