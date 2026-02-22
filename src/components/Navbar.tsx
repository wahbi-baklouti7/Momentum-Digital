import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-momentum-navy/5 bg-momentum-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-8 h-8 flex items-center">
             <div className="absolute inset-0 bg-momentum-navy clip-path-chevron scale-75 -translate-x-2" />
             <div className="absolute inset-0 bg-momentum-purple clip-path-chevron scale-75" />
             <div className="absolute inset-0 bg-momentum-cyan clip-path-chevron scale-75 translate-x-2" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase">
            Momentum <span className="text-momentum-cyan font-light">Digital</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Portfolio", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium hover:text-momentum-purple transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-6 py-2.5 bg-momentum-navy text-white text-sm font-semibold rounded-full hover:bg-momentum-purple transition-all duration-300 shadow-lg shadow-momentum-navy/10"
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-momentum-navy/5 p-6 flex flex-col gap-4 shadow-xl"
        >
          {["Services", "Portfolio", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact"
            className="w-full py-4 bg-momentum-navy text-white font-semibold rounded-xl text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
};
