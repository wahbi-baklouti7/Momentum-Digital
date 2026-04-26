import { motion } from "motion/react";
import { Mail, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-momentum-navy text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
              {t("footer.cta_line1")} <br />
              <span className="text-momentum-cyan">{t("footer.cta_line2")}</span>
            </h2>
            <p className="text-white/50 text-xl max-w-md mb-10">
              {t("footer.description")}
            </p>
            <a 
              href="#contact"
              className="inline-block px-10 py-5 bg-white text-momentum-navy font-bold rounded-full hover:bg-momentum-cyan transition-colors text-lg"
            >
              {t("hero.cta")}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-white/30 mb-6">{t("footer.nav_title")}</h4>
              <ul className="space-y-4">
                {[
                  { key: "services", label: t("nav.services") },
                  { key: "portfolio", label: t("nav.portfolio") },
                  { key: "process", label: t("nav.process") },
                  { key: "contact", label: t("nav.contact") },
                ].map(item => (
                  <li key={item.key}>
                    <a href={`#${item.key}`} className="text-lg hover:text-momentum-cyan transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-white/30 mb-6">{t("footer.connect_title")}</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://www.instagram.com/momentum___digital" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-lg hover:text-momentum-cyan transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-momentum-purple transition-colors">
                      <Instagram size={20} />
                    </span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:momentum.dg.agency@gmail.com" 
                    className="flex items-center gap-3 text-lg hover:text-momentum-cyan transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-momentum-purple transition-colors">
                      <Mail size={20} />
                    </span>
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
          <p className="text-white/30 text-sm font-mono uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} MOMENTUM DIGITAL. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
