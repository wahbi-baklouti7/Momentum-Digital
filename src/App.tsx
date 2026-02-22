import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-momentum-cyan selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-momentum-cyan z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Marquee Section */}
        <div className="bg-momentum-navy py-10 overflow-hidden border-y border-white/10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-white/20 text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mx-10">
                Accelerate Your Growth • Build Momentum • Scale Faster • 
              </span>
            ))}
          </div>
        </div>

        <Services />
        
        <Portfolio />

        <Process />

        <LeadForm />
      </main>

      <Footer />
      <ScrollToTop />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
