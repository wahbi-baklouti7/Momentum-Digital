import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6"
          >
            Successful <span className="text-momentum-purple">Websites!</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-momentum-navy/50 text-xl max-w-2xl mx-auto"
          >
            Crafting high-performance digital experiences that convert visitors into loyal customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group"
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative"
              >
                {/* Laptop Mockup */}
                <div className="relative z-10">
                  <div className="relative bg-momentum-navy rounded-t-xl p-1.5 shadow-2xl">
                    <div className="bg-white rounded-sm overflow-hidden aspect-[16/10]">
                      <img 
                        src={project.laptop} 
                        alt={`${project.title} Desktop`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="h-3 bg-momentum-navy/90 rounded-b-xl w-[105%] -ml-[2.5%] shadow-lg" />
                  <div className="h-1 bg-momentum-navy/80 w-1/4 mx-auto rounded-b-full" />
                </div>

                {/* Phone Mockup */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.2) + 0.4, duration: 0.8 }}
                  className="absolute -right-2 md:-right-4 -bottom-6 md:-bottom-8 z-20 w-[30%] max-w-[100px] md:max-w-[120px]"
                >
                  <div className="relative bg-momentum-navy rounded-[2rem] p-1.5 shadow-2xl border-[3px] border-momentum-navy">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-momentum-navy rounded-b-xl z-30" />
                    <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19]">
                      <img 
                        src={project.phone} 
                        alt={`${project.title} Mobile`}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>
              </a>

              <div className="mt-12 text-center flex flex-col items-center gap-4">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/title"
                >
                  <h4 className="text-2xl font-display font-bold group-hover/title:text-momentum-purple transition-colors flex items-center gap-2">
                    {project.title}
                  </h4>
                </a>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-momentum-navy/5 border border-momentum-navy/10 text-xs font-mono font-bold uppercase tracking-wider hover:bg-momentum-navy hover:text-white transition-all duration-300"
                >
                  Visit Website <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
