import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Volume2, Diamond } from "lucide-react";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="relative h-[70vh] md:h-[85vh]">
        {/* Animated background */}
        <div className="absolute inset-0 navy-gradient">
          {/* Sparkle field */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: "50%",
                background: `hsl(38 65% 55% / ${0.1 + Math.random() * 0.4})`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Crossing light beams */}
          <motion.div
            className="absolute top-0 left-1/4 w-px h-full"
            style={{ background: "linear-gradient(180deg, transparent, hsl(38 65% 55% / 0.1), transparent)" }}
            animate={{ x: [0, 200, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 right-1/3 w-px h-full"
            style={{ background: "linear-gradient(180deg, transparent, hsl(38 65% 55% / 0.08), transparent)" }}
            animate={{ x: [0, -150, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Diamond size={24} className="text-primary mx-auto mb-4" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xs font-body tracking-[0.5em] uppercase text-primary mb-6"
            >
              Behind The Craft
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-10"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Art of{" "}
              <span className="gold-text italic" style={{ fontFamily: "'Lora', serif" }}>Jewelry</span>
              <br />
              Making
            </motion.h2>

            {/* Play button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative inline-flex items-center justify-center cursor-pointer group"
            >
              <motion.div
                className="absolute w-36 h-36 rounded-full border border-primary/10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.05, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-28 h-28 rounded-full border border-primary/15"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center gold-glow"
              >
                <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-xs text-muted-foreground font-body tracking-widest uppercase mt-10 flex items-center justify-center gap-2"
            >
              <Volume2 size={12} className="text-primary/50" />
              Watch Our Craftsmanship Story • 2:34
            </motion.p>
          </div>
        </div>

        {/* Cinematic bars */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default VideoSection;
