import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";
import { ArrowDown, Diamond } from "lucide-react";

const HeroBanner = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax feel */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.06, 1.03] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <img src={heroBanner} alt="Luxury jewelry collection" className="w-full h-full object-cover" />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              background: `hsl(38 65% 55% / ${0.2 + Math.random() * 0.4})`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-4 md:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-16 h-[1px] gold-gradient" />
            <Diamond size={14} className="text-primary" />
            <p className="text-xs font-body tracking-[0.5em] uppercase text-primary">
              Exclusive Collection 2026
            </p>
          </motion.div>

          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: 130 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Where Luxury
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: 130 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Meets <span className="gold-text italic font-normal" style={{ fontFamily: "'Lora', serif" }}>Artistry</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm md:text-base text-muted-foreground font-body leading-relaxed mb-12 max-w-xl mt-8"
          >
            Discover handcrafted masterpieces in gold, diamond & silver — each piece
            a testament to timeless beauty and unparalleled craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#collections"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="gold-gradient px-10 py-4 text-xs font-body tracking-[0.25em] uppercase text-primary-foreground font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10">Shop Collection</span>
              <motion.div
                className="absolute inset-0 bg-primary-foreground/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 text-xs font-body tracking-[0.25em] uppercase text-foreground border border-primary/30 hover:border-primary hover:text-primary transition-all duration-500"
            >
              Our Legacy
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Right side vertical text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <p className="text-[9px] font-body tracking-[0.4em] uppercase text-muted-foreground [writing-mode:vertical-lr]">
          Gold • Diamond • Silver
        </p>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      </motion.div>

      {/* Scroll down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} className="text-primary/60" />
        </motion.div>
        <span className="text-[9px] font-body tracking-[0.4em] uppercase text-muted-foreground">
          Scroll to Explore
        </span>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
