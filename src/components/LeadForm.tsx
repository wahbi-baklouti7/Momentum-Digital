import { motion } from "motion/react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
import React from "react";
import { useLeadForm } from "../hooks/useLeadForm";

export const LeadForm = () => {
  const { formData, status, handleSubmit, handleChange, resetStatus } = useLeadForm({
    name: "",
    email: "",
    service: "Web Design & Development",
    message: ""
  });

  if (status === "success") {
    return (
      <section id="contact" className="py-32 px-6">
        <div className="max-w-xl mx-auto text-center bg-white p-12 rounded-[3rem] shadow-2xl border border-momentum-navy/5">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-momentum-cyan/10 text-momentum-cyan rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 size={40} />
          </motion.div>
          <h2 className="text-4xl font-display font-bold mb-4">Momentum Secured!</h2>
          <p className="text-momentum-navy/60 text-lg">
            Our strategy team is reviewing your profile.
          </p>
          <button 
            onClick={resetStatus}
            className="mt-8 text-momentum-purple font-mono text-sm uppercase tracking-widest hover:underline"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-momentum-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-momentum-cyan/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-momentum-purple font-bold mb-4">
              Get in Touch
            </h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              Start Your <br />
              <span className="text-momentum-cyan">Acceleration</span>
            </h3>
            <p className="text-momentum-navy/60 text-xl leading-relaxed mb-12">
              Growth isn't accidental—it's engineered. Share your vision below, and let's build the high-velocity digital presence your brand deserves. Expect a strategy-first response within 4 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-momentum-navy/5 flex items-center justify-center text-momentum-navy">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Free Audit Included</h4>
                  <p className="text-sm text-momentum-navy/50">We'll analyze your current presence before our call.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-momentum-navy/5 flex items-center justify-center text-momentum-navy">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold">No Retainer Required</h4>
                  <p className="text-sm text-momentum-navy/50">Performance-based models available for qualified brands.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-momentum-navy/5"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="lead-name" className="text-[10px] font-mono uppercase tracking-widest font-bold text-momentum-navy/40 ml-1">
                    Full Name
                  </label>
                  <input
                    id="lead-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-momentum-bg border border-transparent rounded-2xl focus:border-momentum-purple focus:bg-white transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lead-email" className="text-[10px] font-mono uppercase tracking-widest font-bold text-momentum-navy/40 ml-1">
                    Work Email
                  </label>
                  <input
                    id="lead-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-6 py-4 bg-momentum-bg border border-transparent rounded-2xl focus:border-momentum-purple focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="lead-service" className="text-[10px] font-mono uppercase tracking-widest font-bold text-momentum-navy/40 ml-1">
                  Service Interest
                </label>
                <div className="relative group/select">
                  <select
                    id="lead-service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-momentum-bg border border-transparent rounded-2xl focus:border-momentum-purple focus:bg-white transition-all outline-none appearance-none cursor-pointer font-medium text-momentum-navy"
                  >
                    <option>Web Design & Development</option>
                    <option>Social Media Marketing</option>
                    <option>SEO Optimization</option>
                    <option>Ads Management</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-momentum-navy/30 group-hover/select:text-momentum-purple transition-colors">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="lead-message" className="text-[10px] font-mono uppercase tracking-widest font-bold text-momentum-navy/40 ml-1">
                  How can we help?
                </label>
                <textarea
                  id="lead-message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals..."
                  className="w-full px-6 py-4 bg-momentum-bg border border-transparent rounded-2xl focus:border-momentum-purple focus:bg-white transition-all outline-none resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
              )}

              <button
                disabled={status === "submitting"}
                className="w-full py-6 bg-momentum-navy text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-momentum-purple transition-all shadow-2xl shadow-momentum-navy/20 group disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="text-lg">Send</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
