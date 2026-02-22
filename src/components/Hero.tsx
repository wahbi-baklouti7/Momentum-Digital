import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { ArrowRight, Zap, TrendingUp, Rocket, Target, Clock, Cpu } from "lucide-react";
import { useEffect } from "react";
import { HERO } from "../constants";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const translate1X = useTransform(dx, [-500, 500], [-20, 20]);
  const translate1Y = useTransform(dy, [-500, 500], [-20, 20]);
  const translate2X = useTransform(dx, [-500, 500], [30, -30]);
  const translate2Y = useTransform(dy, [-500, 500], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden px-6 bg-momentum-bg">
      {/* Engineered Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Dynamic Background Accents */}
      <motion.div 
        style={{ x: translate1X, y: translate1Y }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-momentum-purple/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        style={{ x: translate2X, y: translate2Y }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-momentum-cyan/10 rounded-full blur-[120px]" 
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-momentum-navy/5 border border-momentum-navy/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-momentum-cyan animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">
              Performance-First Growth Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-8"
          >
            READY TO SCALE? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-momentum-navy via-momentum-purple to-momentum-cyan">
              LET'S GO.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-momentum-navy/60 mb-8 leading-relaxed"
          >
            We're not just another agency. We're your partners in growth, building the systems that actually get you results without the headache.
          </motion.p>

          {/* Value Proposition List */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 mb-12"
          >
            {[
              { text: "Guaranteed ROI Focus", icon: Target },
              { text: "24/7 Performance Tracking", icon: Clock },
              { text: "Bespoke Growth Strategy", icon: Cpu }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-momentum-cyan/10 flex items-center justify-center">
                  <item.icon size={12} className="text-momentum-cyan" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-momentum-navy/70">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            <a 
              href="#contact"
              className="group relative px-10 py-5 bg-momentum-navy text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-momentum-navy/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Acceleration <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Visuals - Floating UI + Image */}
        <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
          {/* Main Cinematic Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 rounded-tl-[100px] rounded-br-[40px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden border border-momentum-navy/10 z-10"
          >
            <img 
              src={HERO.image} 
              alt="Momentum Digital Growth" 
              className="w-full h-full object-cover "
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-momentum-navy/20 via-transparent to-momentum-purple/10" />
          </motion.div>

          {/* Floating Badges - Reorganized for Visual Balance */}
          
          {/* 1. High Velocity (Top Right) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-16 p-6 bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_30px_60px_-12px_rgba(15,23,42,0.15)] border border-white/50 z-30 flex items-center gap-4 min-w-[280px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-momentum-purple to-violet-600 text-white flex items-center justify-center shadow-lg shadow-momentum-purple/30">
              <Zap size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-momentum-navy tracking-tight">High Velocity</span>
              <span className="text-xs text-momentum-navy/50 font-medium">Priority Scaling Engaged</span>
            </div>
          </motion.div>

          {/* 2. Start Your Growth Today (Middle Left) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -left-32 -translate-y-1/2 p-4 bg-white/95 backdrop-blur-xl rounded-full shadow-[0_20px_40px_-8px_rgba(15,23,42,0.1)] border border-white/50 z-30 flex items-center gap-3 pr-10"
          >
            <div className="w-10 h-10 rounded-full bg-momentum-purple/10 flex items-center justify-center text-momentum-purple shadow-inner">
              <Rocket size={18} />
            </div>
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-momentum-navy">Start Your Growth Today</span>
          </motion.div>

          {/* 3. Scale Your Brand (Bottom Right) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-12 -right-16 p-4 bg-white/95 backdrop-blur-xl rounded-full shadow-[0_20px_40px_-8px_rgba(15,23,42,0.1)] border border-white/50 z-30 flex items-center gap-3 pr-10"
          >
            <div className="w-10 h-10 rounded-full bg-momentum-cyan/10 flex items-center justify-center text-momentum-cyan shadow-inner">
              <TrendingUp size={18} />
            </div>
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-momentum-navy">Scale Your Brand</span>
          </motion.div>
        </div>
      </div>

      {/* Decorative Chevron - Enhanced */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none"
      >
        <svg viewBox="0 0 1000 400" className="w-full fill-momentum-navy">
          <path d="M0 0 L250 200 L0 400 L200 400 L450 200 L200 0 Z" />
          <path d="M300 0 L550 200 L300 400 L500 400 L750 200 L500 0 Z" />
          <path d="M600 0 L850 200 L600 400 L800 400 L1050 200 L800 0 Z" />
        </svg>
      </motion.div>
    </section>
  );
};
