import { Users, Code2, Search, Zap, Lightbulb, Rocket } from "lucide-react";
import { Service, Project, ProcessStep } from "../types";
import pm2 from "../assets/images/pm2.png";
import modernemetalint from "../assets/images/modernemetalint.webp";
import modernemetalint_mobile from "../assets/images/modernemetalint_mobile.webp";
import peapiscine from "../assets/images/peapiscine.webp";
import peapiscine_mobile from "../assets/images/peapiscine_mobile.webp";
import gpmtetti from "../assets/images/gpmtetti.webp";
import gpmtetti_mobile from "../assets/images/gpmtetti_mobile.webp";
import hasnarachmalia from "../assets/images/hasnarachmalia.webp";
import hasnarachmalia_mobile from "../assets/images/hasnarachmalia_mobile.webp";
import italcleaning from "../assets/images/italcleaning.webp";
import italcleaning_mobile from "../assets/images/italcleaning_mobile.webp";
import hero from "../assets/images/hero.webp";

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
  // {
  //   title: "Hasna Rachmalia Portfolio",
  //   laptop: hasnarachmalia,
  //   phone: hasnarachmalia_mobile,
  //   url: "https://hasnarachmalia.netlify.app/",
  // },
  {
    title: "GPM Tetti",
    laptop: gpmtetti,
    phone: gpmtetti_mobile,
    url: "https://gpmtetti.it/",
  },
  // {
  //   title: "Chnouwa Bhar",
  //   laptop: `https://s.wordpress.com/mshots/v1/${encodeURIComponent("https://chnouwabhar.com/en")}?w=1280&h=800`,
  //   phone: pm2,
  //   url: "https://chnouwabhar.com/en",
  // },
  {
    title: "Italcleaning",
    laptop: italcleaning,
    phone: italcleaning_mobile,
    url: "https://italcleaning.it/",
  },
  {
    title: "Moderne Metal",
    laptop: modernemetalint,
    phone: modernemetalint_mobile,
    url: "http://www.modernemetalint.com/",
  },
  {
    title: "PEA Piscine",
    laptop: peapiscine,
    phone: peapiscine_mobile,
    url: "https://www.pea-piscine.tn/",
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