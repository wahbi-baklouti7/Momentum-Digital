import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const langRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { key: "services", label: t("nav.services") },
    { key: "portfolio", label: t("nav.portfolio") },
    { key: "process", label: t("nav.process") },
    { key: "contact", label: t("nav.contact") },
  ];

  const languages = [
    { code: "en", label: "English", flag: "https://flagcdn.com/gb.svg" },
    { code: "it", label: "Italiano", flag: "https://flagcdn.com/it.svg" },
    { code: "de", label: "Deutsch", flag: "https://flagcdn.com/de.svg" },
  ];

  const currentLang = languages.find(l => l.code === (i18n.language.split('-')[0])) || languages[0];

  const changeLanguage = (lng: string) => {
    localStorage.setItem('momentum_user_pref', lng);
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsOpen(false);
  };

  const isSelected = (code: string) => i18n.language.startsWith(code);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="text-sm font-medium hover:text-momentum-purple transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Premium Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-momentum-navy/5 border border-momentum-navy/10 hover:border-momentum-purple/30 transition-all group"
            >
              <div className="w-5 h-3.5 rounded-sm overflow-hidden border border-momentum-navy/10">
                <img src={currentLang.flag} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-momentum-navy/70 group-hover:text-momentum-navy">
                {currentLang.code}
              </span>
              <ChevronDown 
                size={12} 
                className={`text-momentum-navy/30 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} 
              />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-44 bg-white/95 backdrop-blur-xl border border-momentum-navy/10 rounded-2xl shadow-2xl shadow-momentum-navy/10 overflow-hidden p-1.5"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isSelected(lang.code)
                          ? "bg-momentum-navy text-white shadow-lg shadow-momentum-navy/20"
                          : "text-momentum-navy/60 hover:bg-momentum-navy/5 hover:text-momentum-navy"
                      }`}
                    >
                      <div className={`w-6 h-4 rounded-sm overflow-hidden border ${isSelected(lang.code) ? "border-white/20" : "border-momentum-navy/10"}`}>
                        <img src={lang.flag} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href="#contact"
            className="px-6 py-2.5 bg-momentum-navy text-white text-sm font-semibold rounded-full hover:bg-momentum-purple transition-all duration-300 shadow-lg shadow-momentum-navy/10"
          >
            {t("nav.contact")}
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-momentum-navy/5 overflow-hidden shadow-xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-momentum-navy/5">
                <span className="text-[10px] font-mono font-bold text-momentum-navy/30 uppercase tracking-[0.2em] mb-4 block">
                  Select Language
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all ${
                        isSelected(lang.code)
                          ? "bg-momentum-navy border-momentum-navy text-white shadow-lg"
                          : "bg-momentum-bg border-transparent text-momentum-navy/60"
                      }`}
                    >
                      <div className={`w-8 h-5 rounded-md overflow-hidden border ${isSelected(lang.code) ? "border-white/20" : "border-momentum-navy/10"}`}>
                        <img src={lang.flag} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] font-bold uppercase">{lang.code}</span>
                    </button>
                  ))}
                </div>
              </div>

              <a 
                href="#contact"
                className="w-full py-4 bg-momentum-navy text-white font-semibold rounded-xl text-center mt-2 shadow-xl shadow-momentum-navy/10"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contact")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
