import { Users, Code2, Search, Zap, Lightbulb, Rocket } from "lucide-react";
import { Service, Project, ProcessStep } from "../types";
import pc1 from "../assets/images/pc1.png";
import pc2 from "../assets/images/pc2.png";
import pc3 from "../assets/images/pc3.png";
import pm1 from "../assets/images/pm1.png";
import pm2 from "../assets/images/pm2.png";
import pm3 from "../assets/images/pm3.png";
import hero from "../assets/images/hero.jpg";

export const SERVICES: Service[] = [
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Transforming your social presence into a high-velocity engine for brand awareness and engagement.",
    color: "bg-momentum-cyan"
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    description: "Cinematic, high-performance websites engineered for conversion and digital prestige.",
    color: "bg-momentum-purple"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Technical precision and content strategy to dominate search rankings and drive organic momentum.",
    color: "bg-momentum-navy"
  },
  {
    icon: Zap,
    title: "Ads Management",
    description: "High-intent paid campaigns across all major platforms designed for maximum ROI and rapid scaling.",
    color: "bg-momentum-cyan"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Hasna Rachmalia Portfolio",
    laptop: `https://s.wordpress.com/mshots/v1/${encodeURIComponent("https://hasnarachmalia.netlify.app/")}?w=1280&h=800`,
    phone: pm1,
    url: "https://hasnarachmalia.netlify.app/",
  },
  {
    title: "Chnouwa Bhar",
    laptop: `https://s.wordpress.com/mshots/v1/${encodeURIComponent("https://chnouwabhar.com/en")}?w=1280&h=800`,
    phone: pm2,
    url: "https://chnouwabhar.com/en",
  },
  {
    title: "Italcleaning",
    laptop: `https://s.wordpress.com/mshots/v1/${encodeURIComponent("https://italcleaning.it/")}?w=1280&h=800`,
    phone: pm3,
    url: "https://italcleaning.it/",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery",
    description: "We deep-dive into your brand, competitors, and target audience to find the untapped growth levers.",
    color: "bg-momentum-navy"
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "Engineering a bespoke roadmap focused on high-velocity scaling and maximum ROI.",
    color: "bg-momentum-purple"
  },
  {
    icon: Code2,
    title: "Execution",
    description: "Deploying high-performance digital assets and campaigns with technical precision.",
    color: "bg-momentum-cyan"
  },
  {
    icon: Rocket,
    title: "Optimization",
    description: "Continuous tracking and rapid iteration to maintain momentum and dominate your market.",
    color: "bg-momentum-navy"
  }
];

export const NAV_ITEMS = ["Services", "Portfolio", "Process", "Contact"];
export const HERO = {
  title: "Accelerate Your Growth • Build Momentum • Scale Faster • ",
    description: "We transform your brand into a high-velocity engine for growth and success.",
  image: hero ,
}