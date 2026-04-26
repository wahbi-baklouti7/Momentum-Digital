import { motion } from "motion/react";
import { Mail, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-momentum-navy text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Trust Signals Section (E-E-A-T) */}
        <div className="mb-24 pb-16 border-b border-white/5 text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 mb-12">
            {t("footer.trusted_by") || "Trusted by Visionary Brands Worldwide"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-20 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo Placeholders - Enhancing Authority */}
            <div className="h-8 w-24 bg-white/20 rounded-md" aria-hidden="true"></div>
            <div className="h-6 w-32 bg-white/20 rounded-md" aria-hidden="true"></div>
            <div className="h-10 w-28 bg-white/20 rounded-md" aria-hidden="true"></div>
            <div className="h-7 w-20 bg-white/20 rounded-md" aria-hidden="true"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              {t("footer.cta_line1")} <br />
              <span className="text-momentum-cyan">{t("footer.cta_line2")}</span>
            </h2>
            <p className="text-white/50 text-xl max-w-prose mb-10 leading-relaxed">
              {t("footer.description")}
            </p>
            <a 
              href="#contact"
              className="inline-block px-12 py-5 bg-white text-momentum-navy font-bold rounded-full hover:bg-momentum-cyan transition-all hover:scale-105 active:scale-95 text-lg"
            >
              {t("hero.cta")}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12 lg:pl-12">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-8">{t("footer.nav_title")}</h4>
              <nav aria-label="Footer navigation">
                <ul className="space-y-4">
                  {[
                    { key: "services", label: t("nav.services") },
                    { key: "portfolio", label: t("nav.portfolio") },
                    { key: "process", label: t("nav.process") },
                    { key: "contact", label: t("nav.contact") },
                  ].map(item => (
                    <li key={item.key}>
                      <a 
                        href={`#${item.key}`} 
                        className="text-lg hover:text-momentum-cyan transition-colors py-1 inline-block focus:outline-none focus:ring-1 focus:ring-momentum-cyan rounded px-1"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-8">{t("footer.connect_title")}</h4>
              <ul className="space-y-6">
                <li>
                  <a 
                    href="https://www.instagram.com/momentum___digital" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-4 text-lg hover:text-momentum-cyan transition-colors"
                  >
                    <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-momentum-purple group-focus:ring-2 group-focus:ring-momentum-cyan transition-all">
                      <Instagram size={24} />
                    </span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:momentum.dg.agency@gmail.com" 
                    className="group flex items-center gap-4 text-lg hover:text-momentum-cyan transition-colors"
                  >
                    <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-momentum-purple group-focus:ring-2 group-focus:ring-momentum-cyan transition-all">
                      <Mail size={24} />
                    </span>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 flex items-center">
               <div className="absolute inset-0 bg-white clip-path-chevron scale-75 -translate-x-1" />
               <div className="absolute inset-0 bg-momentum-purple clip-path-chevron scale-75" />
               <div className="absolute inset-0 bg-momentum-cyan clip-path-chevron scale-75 translate-x-1" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight uppercase">
              Momentum <span className="text-momentum-cyan font-light">Digital</span>
            </span>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} MOMENTUM DIGITAL. {t("footer.rights")}
            </p>
            <p className="text-white/10 text-[9px] font-mono uppercase tracking-[0.1em]">
              Precision-Engineered Growth • Global Digital Concierge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
