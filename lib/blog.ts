export type Blog = {
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
};

export const blogs: Blog[] = [
  {
    id: 1,
    author: "John Techson",
    role: "Quantum Computing",
    avatar: "/avatar/user_1.png",
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    description:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: 50,
    shares: 20,
  },
  {
    id: 2,
    author: "Sarah Ethicist",
    role: "AI Ethics",
    avatar: "/avatar/user_2.png",
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    description:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "32k",
    comments: 72,
    shares: 18,
  },
  {
    id: 3,
    author: "Astronomer X",
    role: "Space Exploration",
    avatar: "/avatar/user_3.png",
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    description:
      "Exploring the technical and logistical challenges of human colonization on Mars.",
    likes: "20k",
    comments: 31,
    shares: 12,
  },
];
