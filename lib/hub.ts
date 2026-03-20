export type Hub = {
  id: number;
  author: string;
  role: string;
  avatar: string;
  date: string;
  title: string;
  description: string;
  likes: string;
  comments: number;
  shares: number;
  slug: string; // 👈 ADD THIS
  
};

export const hubs: Hub[] = [
  {
    id: 1,
    author: "John Techson",
    role: "Technology",
    avatar: "/news/user-3.png",
    date: "October 15, 2023",
    title: "Tech Giants Announce New Product Line",
    description:
      "Explore the latest innovations from tech industry leaders...",
    likes: "24.5k",
    comments: 50,
    shares: 20,
    slug: "tech-giants-new-product-line", // ✅ ADD THIS
  },
  {
    id: 2,
    author: "Sarah Ethicist",
    role: "Technology",
    avatar: "/news/user-2.png",
    date: "November 5, 2023",
    title: "The Future of Autonomous Vehicles",
    description:
      "An in-depth analysis of autonomous vehicle technology...",
    likes: "32k",
    comments: 72,
    shares: 18,
    slug: "future-of-autonomous-vehicles", // ✅
  },
  {
    id: 3,
    author: "Astronomer X",
    role: "Technology",
    avatar: "/news/user-1.png",
    date: "December 10, 2023",
    title: "Tech Startups Secure Record Funding",
    description:
      "An overview of the recent surge in funding...",
    likes: "20k",
    comments: 31,
    shares: 12,
    slug: "tech-startups-record-funding", // ✅
  },
];

