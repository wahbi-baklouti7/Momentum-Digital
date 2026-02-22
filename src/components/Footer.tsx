import { motion } from "motion/react";
import { Mail, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-momentum-navy text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
              READY TO <br />
              <span className="text-momentum-cyan">ACCELERATE?</span>
            </h2>
            <p className="text-white/50 text-xl max-w-md mb-10">
              Stop waiting for organic growth. Build the momentum your brand deserves today.
            </p>
            <a 
              href="#contact"
              className="inline-block px-10 py-5 bg-white text-momentum-navy font-bold rounded-full hover:bg-momentum-cyan transition-colors text-lg"
            >
              Book a Strategy Call
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-white/30 mb-6">Navigation</h4>
              <ul className="space-y-4">
                {["Services", "Case Studies", "Process", "About"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-lg hover:text-momentum-cyan transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-white/30 mb-6">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://www.instagram.com/momentum___digital" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-lg hover:text-momentum-cyan transition-colors"
                  >
                    <Instagram size={20} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:momentum.dg.agency@gmail.com" 
                    className="flex items-center gap-3 text-lg hover:text-momentum-cyan transition-colors"
                  >
                    <Mail size={20} />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 flex items-center">
               <div className="absolute inset-0 bg-white clip-path-chevron scale-75 -translate-x-1" />
               <div className="absolute inset-0 bg-momentum-purple clip-path-chevron scale-75" />
               <div className="absolute inset-0 bg-momentum-cyan clip-path-chevron scale-75 translate-x-1" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight uppercase">
              Momentum <span className="text-momentum-cyan font-light">Digital</span>
            </span>
          </div>
          <p className="text-white/30 text-sm font-mono">
            © 2024 MOMENTUM DIGITAL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
