import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";

export const DATA = {
  name: "Masoumeh Ashrafi",
  initials: "MA",
  url: "https://www.masoumeh-ashrafi.ir",
  location: "Tehran, Iran",
  locationLink: "https://www.google.com/maps/search/Tehran,+Iran",
  description:
    "AI researcher and university faculty member, building thoughtful digital experiences with a background in frontend engineering.",
  summary:
    "I am a faculty member at the University of Tehran with a Ph.D. in Artificial Intelligence. My academic interests include machine learning, text data, and optimization. Alongside teaching and research, I build frontend products with React, Next.js, and TypeScript, focusing on performance, accessibility, SEO, and RTL-aware user experiences.",
  avatarUrl: "https://avatars.githubusercontent.com/u/131862710?v=4",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "Frontend Architecture" },
    { name: "Web Performance" },
    { name: "Technical SEO" },
    { name: "Accessibility" },
    { name: "RTL / i18n" },
    { name: "Responsive Design" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "masoumeh.ashrafi98@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/masoumeh-ashrafi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/masoumeh-ashrafi-96250825a/",
        icon: Icons.linkedin,
        navbar: true,
      },
      YouTube: {
        name: "YouTube",
        url: "https://www.youtube.com/@masoumehashrafi2020",
        icon: Icons.youtube,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/front_maa/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:masoumeh.ashrafi98@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "University of Tehran",
      href: "https://ut.ac.ir/en",
      badges: [],
      location: "Tehran, Iran",
      title: "Faculty Member · Artificial Intelligence",
      logoUrl: "",
      period: "Current",
      description:
        "Teaching and research in artificial intelligence, with interests in machine learning, text data, and optimization.",
    },
    {
      company: "Freelance",
      href: "https://www.masoumeh-ashrafi.ir/contact",
      badges: [],
      location: "Tehran, Iran",
      title: "Frontend Engineer",
      logoUrl: "",
      period: "Independent",
      description:
        "I work on React and Next.js projects that need fast interfaces, scalable frontend architecture, accessible UI, and SEO-aware implementation. My work combines clean component boundaries, responsive layouts, performance discipline, and product-level thinking.",
    },
  ],
  education: [
    {
      school: "Artificial Intelligence",
      href: "https://scholar.google.com/citations?user=PCfQ8hwAAAAJ",
      degree: "Doctor of Philosophy (Ph.D.)",
      logoUrl: "",
    },
    {
      school: "Islamic Azad University, Science and Research Branch",
      href: "https://scholar.google.com/citations?user=PCfQ8hwAAAAJ",
      degree: "Master's research in AI and data optimization",
      logoUrl: "",
      period: "2019–2021",
    },
  ],
  projects: [
    {
      title: "Razy B2B Platform",
      href: "https://razyar-project-5idj-b92b20t6c-masoumeh-ashrafis-projects.vercel.app",
      dates: "2025",
      active: true,
      description:
        "A scalable product-management and commerce platform built with Next.js and TypeScript, with protected dashboard routes, product and subscription workflows, and a typed Prisma data layer.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth", "Stripe"],
      links: [
        {
          type: "Case Study",
          href: "https://www.masoumeh-ashrafi.ir/case-studies/razy",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://razyar-project-5idj-b92b20t6c-masoumeh-ashrafis-projects.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Permanent Makeup Portfolio",
      href: "https://permanent-makeup-portfolio-nextjs.vercel.app",
      dates: "2025",
      active: true,
      description:
        "A responsive portfolio and visual gallery for a beauty business, focused on clear service information, a polished visual presentation, and a smooth mobile experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
      links: [
        {
          type: "Case Study",
          href: "https://www.masoumeh-ashrafi.ir/case-studies/fateme-darvishi",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://permanent-makeup-portfolio-nextjs.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  focusAreas: [
    {
      title: "Artificial Intelligence & Optimization",
      description:
        "Research interests include machine learning, text data dimensionality reduction, and optimization methods.",
    },
    {
      title: "University Teaching & Research",
      description:
        "Faculty work at the University of Tehran, connecting artificial intelligence research with teaching and applied problem solving.",
    },
    {
      title: "Performance & Technical SEO",
      description:
        "Fast rendering, thoughtful metadata, and search-ready page structure built into the implementation.",
    },
    {
      title: "Accessibility & RTL / i18n",
      description:
        "Inclusive interfaces that work across languages, directions, screen sizes, and interaction modes.",
    },
    {
      title: "Scalable UI Architecture",
      description:
        "Clear component boundaries and reusable patterns that keep frontend systems maintainable as products grow.",
    },
  ],
  featuredPublication: {
    title: "A Hybrid Method for Text Data Dimensionality Reduction Using Cuckoo Search",
    href: "https://scholar.google.com/citations?user=PCfQ8hwAAAAJ",
    description:
      "Research on text data dimensionality reduction combining hybrid methods and the Cuckoo Search optimization algorithm.",
  },
} as const;
