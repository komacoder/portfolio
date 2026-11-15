/**
 * All personal content for the home page lives here. Replace the sample values with your own.
 * Case studies and blog posts live in content/work.json and content/blog.json.
 */
export const profile = {
  name: "Kamronbek Sultonmurodov",
  short: "Kamronbek",
  role: "Java Software Engineer",
  location: "Tashkent, Uzbekistan",
  timezone: "UTC+5",
  email: "komacoder26@gmail.com",
  github: "https://github.com/komacoder",
  githubUser: "komacoder", // powers the GitHub activity graph
  linkedin: "https://www.linkedin.com/in/kamronbek-sultonmurodov26/",
  telegram: "https://t.me/abuSa1f",
  x: "",
  resume: "/resume", // the generated /resume page; point to your own PDF URL if you prefer
  avatar: "/img/avatar.jpg",
  // Optional, used for structured data. Leave empty strings to omit.
  region: "Tashkent",
  country: "Uzbekistan",
  about: [
    "I am a Software Engineering student and Java Backend Developer based in Tashkent, Uzbekistan. I am currently focusing on building robust server-side applications using Java and Spring Boot.",
    "I have a solid foundation in Frontend development with React and Next.js, which allows me to understand the full picture of web application architecture and create seamless integrations between backend and frontend.",
    "I am actively learning and building REST APIs, working with databases, and preparing to step into a professional backend engineering role.",
  ],
  snapshot: [
    "Focusing on Java Backend & Spring Boot",
    "REST API Development & Database Integration",
    "Frontend experience with React & Next.js",
    "Student at IT Park University",
  ],
};

export type Category = "Web" | "Mobile" | "Desktop" | "Tooling";

export const projectFilters: ("All" | Category)[] = ["All", "Web", "Mobile", "Desktop", "Tooling"];

export const projects: {
  title: string;
  image: string;
  year: string;
  category: Category;
  featured?: boolean;
  status: "LIVE" | "WIP" | "PRIVATE";
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
  /** Path of a case study in content/work.json, e.g. "/work/northwind-dashboard". */
  caseStudy?: string;
}[] = [
  {
    title: "Al-Muamalat",
    image: "/img/projects/northwind-dashboard.jpg",
    year: "2024",
    category: "Web",
    featured: true,
    status: "LIVE",
    description:
      "A modern, responsive website developed for an Islamic finance consulting company. Implemented dynamic content sections and optimized performance across devices using React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    live: "",
    repo: "https://github.com/komacoder/almuamalat.git",
  },
  {
    title: "Improvely AI",
    image: "/img/projects/pocket-budget.jpg",
    year: "2024",
    category: "Web",
    featured: true,
    status: "LIVE",
    description:
      "An AI-powered essay analysis platform. Developed the frontend using React, Tailwind CSS, and shadcn/ui. Integrated REST APIs for real-time essay feedback, ensuring a smooth and consistent user experience.",
    tags: ["React", "Tailwind CSS", "shadcn/ui", "REST API"],
    live: "",
    repo: "https://github.com/komacoder/improvely-ai.git",
  },
  {
    title: "Uplift Startup",
    image: "/img/projects/plainfile-cli.jpg",
    year: "2024",
    category: "Web",
    featured: false,
    status: "LIVE",
    description:
      "Contributed to the development of a startup platform. Focused on building scalable frontend components and ensuring a seamless user interface experience.",
    tags: ["React", "Next.js", "Tailwind CSS", "Frontend Development"],
    live: "",
    repo: "https://github.com/komacoder/uplift-startup.git",
  },
];

export const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Acme Corp",
    period: "2023 – Present",
    body: "Sample entry. Lead a small team building customer-facing web products, from architecture and APIs to CI/CD and performance budgets.",
  },
  {
    role: "Full Stack Developer",
    company: "Globex",
    period: "2020 – 2023",
    body: "Sample entry. Built and shipped internal tools and a public dashboard used by thousands of people every week.",
  },
];

export const stackGroups: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST"],
  "DevOps & Cloud": ["Docker", "GitHub Actions", "Vercel", "Netlify"],
  Tools: ["Git", "Figma", "Playwright", "Vitest"],
};
