import { motion } from "motion/react";
import { Users, Code2, Search, Zap } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Transforming your social presence into a high-velocity engine for brand awareness and engagement.",
    color: "bg-momentum-cyan"
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    description: "Cinematic, high-performance websites engineered for conversion and digital prestige.",
    color: "bg-momentum-purple"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Technical precision and content strategy to dominate search rankings and drive organic momentum.",
    color: "bg-momentum-navy"
  },
  {
    icon: Zap,
    title: "Ads Management",
    description: "High-intent paid campaigns across all major platforms designed for maximum ROI and rapid scaling.",
    color: "bg-momentum-cyan"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-momentum-purple font-bold mb-4">
              Our Capabilities
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              Precision-Engineered <br />
              Digital Solutions
            </h3>
          </div>
          <p className="max-w-md text-momentum-navy/50 text-lg leading-relaxed">
            We've stripped away the fluff to focus on the four pillars of digital momentum. No vanity metrics, just pure performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-momentum-navy/5 border border-momentum-navy/5 rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 hover:bg-momentum-navy transition-colors duration-500"
            >
              <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h4>
              <p className="text-momentum-navy/60 group-hover:text-white/60 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
