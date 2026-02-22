import React from "react";

export const Marquee = () => {
  return (
    <div className="bg-momentum-navy py-10 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-white/20 text-4xl md:text-6xl font-display font-bold tracking-tighter mx-10">
            Accelerate Your Growth • Build Momentum • Scale Faster • 
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};
