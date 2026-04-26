import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Marquee } from "./components/Marquee";
import { motion, useScroll, useSpring } from "motion/react";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function App() {
  const { i18n, t } = useTranslation();
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    // Update document language
    document.documentElement.lang = i18n.language;
    
    // Update title
    document.title = t("metadata.title");
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("metadata.description"));
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("metadata.title"));
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", t("metadata.description"));
  }, [i18n.language, t]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-momentum-cyan selection:text-white">
      {/* Skip to Main Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-momentum-purple focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-momentum-cyan"
      >
        Skip to main content
      </a>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-momentum-cyan z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main id="main-content">
        <Hero />
        
        <Marquee />

        <Services />
        
        <Portfolio />

        <Process />

        <LeadForm />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
