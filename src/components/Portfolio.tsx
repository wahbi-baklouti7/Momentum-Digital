import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PROJECTS } from "../constants";
import { useTranslation } from "react-i18next";

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Simplified, Direct Header Following Branding */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-momentum-purple mb-4"
            >
              {t("portfolio.title")}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-tight"
            >
              {t("portfolio.heading_line1")}{" "}
              <span className="text-momentum-purple">{t("portfolio.heading_line2")}</span>{" "}
              {t("portfolio.heading_line3")}
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-momentum-navy/50 text-lg md:text-xl max-w-sm mb-2"
          >
            {t("portfolio.description")}
          </motion.p>
        </div>

        {/* Direct, Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative mb-8"
              >
                {/* Refined Mockup: Desktop with better contrast/shadows */}
                <div className="relative aspect-[16/10] bg-momentum-navy/5 rounded-2xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-momentum-navy/10 transition-all duration-500 border border-momentum-navy/5">
                   <div className="absolute inset-x-6 top-6 bg-momentum-navy rounded-t-lg p-1.5 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="bg-white rounded-sm overflow-hidden aspect-[16/10]">
                        <img 
                          loading="lazy"
                          src={project.laptop} 
                          alt={`${project.title} Desktop`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                   </div>
                </div>

                <div className="flex items-center justify-between group-hover:text-momentum-purple transition-colors">
                  <h4 className="text-2xl font-display font-bold tracking-tight">
                    {project.title}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-momentum-navy/5 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-momentum-purple group-hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </a>
              
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-momentum-navy/40 hover:text-momentum-purple transition-colors"
              >
                {t("portfolio.launch_site")} <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
