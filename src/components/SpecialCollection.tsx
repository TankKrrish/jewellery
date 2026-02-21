import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import collectionNecklace from "@/assets/collection-necklace.jpg";
import collectionRing from "@/assets/collection-ring.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionBracelet from "@/assets/collection-bracelet.jpg";

const collections = [
  { name: "Necklaces", image: collectionNecklace, count: "24 Pieces", desc: "Adorn your neckline with brilliance" },
  { name: "Rings", image: collectionRing, count: "18 Pieces", desc: "Symbols of eternal promise" },
  { name: "Earrings", image: collectionEarrings, count: "32 Pieces", desc: "Frame your face with sparkle" },
  { name: "Bracelets", image: collectionBracelet, count: "15 Pieces", desc: "Wrist elegance redefined" },
];

const SpecialCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collections" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/[0.04]"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/[0.06]"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-body tracking-[0.5em] uppercase text-primary mb-4 ornament-line max-w-xs mx-auto">
            Curated For You
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Special <span className="gold-text italic" style={{ fontFamily: "'Lora', serif" }}>Collection</span>
          </h2>
          <p className="text-sm text-muted-foreground font-body max-w-md mx-auto leading-relaxed">
            Each category is a world of artistry waiting to be explored
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          {collections.map((item, i) => {
            const spans = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5 md:row-span-1",
              "md:col-span-5 md:row-span-1",
              "md:col-span-7 md:row-span-1",
            ];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`group relative overflow-hidden cursor-pointer col-span-1 row-span-1 ${spans[i]} rounded-lg`}
              >
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-110 group-hover:brightness-75"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                  <motion.div className="transform transition-transform duration-500 group-hover:-translate-y-3">
                    <p className="text-[10px] font-body tracking-[0.35em] uppercase text-primary mb-2">{item.count}</p>
                    <h3 className="text-xl md:text-3xl mb-1" style={{ fontFamily: "'Cinzel', serif" }}>{item.name}</h3>
                    <p className="text-xs text-muted-foreground font-body opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center border border-primary/0 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} className="text-primary" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialCollection;
