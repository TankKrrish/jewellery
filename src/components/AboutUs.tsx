import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aboutImage from "@/assets/about-us.jpg";
import { Award, Shield, Gem, Users } from "lucide-react";

const stats = [
  { number: 25, suffix: "+", label: "Years of Craft", icon: Award },
  { number: 10, suffix: "K+", label: "Happy Clients", icon: Users },
  { number: 500, suffix: "+", label: "Unique Designs", icon: Gem },
  { number: 50, suffix: "+", label: "Master Artisans", icon: Shield },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span>{display}{suffix}</span>;
};

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full border border-primary/[0.04] hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-primary/[0.04] hidden lg:block" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <motion.img
                  src={aboutImage}
                  alt="Master jeweler at work"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/10 rounded-xl -z-10" />

              {/* Years badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-28 h-28 md:w-32 md:h-32 rounded-full gold-gradient flex flex-col items-center justify-center gold-glow"
              >
                <span className="text-2xl md:text-3xl text-primary-foreground font-bold" style={{ fontFamily: "'Cinzel', serif" }}>25+</span>
                <span className="text-[8px] font-body tracking-widest uppercase text-primary-foreground/80">Years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px gold-gradient" />
              <p className="text-xs font-body tracking-[0.5em] uppercase text-primary">Our Legacy</p>
            </div>
            <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
              Crafting <span className="gold-text italic" style={{ fontFamily: "'Lora', serif" }}>Dreams</span>
              <br />Since 2001
            </h2>
            <p className="text-sm text-muted-foreground font-body leading-[1.9] mb-6">
              For over two decades, Luxuria has been crafting extraordinary jewelry that celebrates life's most precious moments. Each piece is meticulously designed and handcrafted by our master artisans.
            </p>
            <p className="text-sm text-muted-foreground font-body leading-[1.9] mb-12">
              We source only the finest ethically-mined gemstones and precious metals, ensuring every creation meets our uncompromising standards of quality and beauty.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="glass-card-hover p-5 text-center rounded-xl"
                >
                  <stat.icon size={18} className="text-primary mx-auto mb-3" strokeWidth={1.5} />
                  <p className="text-2xl md:text-3xl gold-text mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={isInView} />
                  </p>
                  <p className="text-[10px] font-body tracking-widest uppercase text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
