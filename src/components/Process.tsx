import { motion } from "motion/react";
import { PROCESS_STEPS } from "../constants";

export const Process = () => {
  return (
    <section id="process" className="py-32 bg-momentum-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-momentum-purple font-bold mb-4">
            Our Methodology
          </h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            The Momentum <span className="text-momentum-cyan">Engine</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-momentum-navy/10 -z-10" />
          
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-momentum-navy/5 hover:border-momentum-purple/20 transition-all duration-500 h-full">
                <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <step.icon size={32} />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-momentum-bg border border-momentum-navy/5 flex items-center justify-center font-mono font-bold text-momentum-navy/20">
                  0{index + 1}
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-momentum-navy/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
