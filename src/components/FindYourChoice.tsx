import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Crown, Heart, Gift, ArrowRight } from "lucide-react";

const categories = [
  { icon: Crown, title: "Wedding", description: "Eternal symbols of love & commitment", color: "from-primary/20 to-primary/5" },
  { icon: Gem, title: "Everyday Luxe", description: "Elegant pieces for the modern woman", color: "from-accent/20 to-accent/5" },
  { icon: Heart, title: "Bridal", description: "Make your special day unforgettable", color: "from-primary/15 to-primary/5" },
  { icon: Gift, title: "Gifting", description: "Perfect presents for every occasion", color: "from-accent/15 to-accent/5" },
];

const FindYourChoice = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 navy-gradient opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-body tracking-[0.5em] uppercase text-primary mb-4">Shop By Occasion</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Find Your <span className="gold-text italic" style={{ fontFamily: "'Lora', serif" }}>Choice</span>
          </h2>
          <p className="text-sm text-muted-foreground font-body">Jewelry crafted for every moment that matters</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="glass-card-hover p-6 md:p-8 text-center cursor-pointer group relative overflow-hidden rounded-xl"
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-b ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl`} />

              <div className="relative z-10">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/15"
                    animate={isInView ? { rotate: 360 } : {}}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * 2 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div whileHover={{ rotate: 12, scale: 1.1 }}>
                      <cat.icon size={28} className="text-primary" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </div>

                <h3 className="text-lg mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "'Cinzel', serif" }}>
                  {cat.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4">{cat.description}</p>

                <motion.div className="flex items-center justify-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[10px] font-body tracking-widest uppercase">Explore</span>
                  <ArrowRight size={12} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindYourChoice;
