import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";

const products = [
  { name: "Royal Gold Tiara", price: "$4,299", oldPrice: "$5,200", image: trending1, tag: "Bestseller", material: "22K Gold" },
  { name: "Diamond Pendant", price: "$2,850", oldPrice: "$3,400", image: trending2, tag: "New", material: "18K White Gold" },
  { name: "Solitaire Ring", price: "$3,500", oldPrice: "", image: trending3, tag: "Trending", material: "Platinum" },
  { name: "Chandelier Earrings", price: "$1,990", oldPrice: "$2,500", image: trending4, tag: "Limited", material: "22K Gold" },
];

const TrendingNow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background relative" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <p className="text-xs font-body tracking-[0.5em] uppercase text-primary mb-4">Most Popular</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "'Cinzel', serif" }}>
              Trending <span className="gold-text italic" style={{ fontFamily: "'Lora', serif" }}>Now</span>
            </h2>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xs font-body tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors self-start md:self-auto"
          >
            View All Products →
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-5 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-110"
                />

                {/* Tag */}
                <span className="absolute top-3 left-3 text-[9px] font-body tracking-widest uppercase gold-gradient px-3 py-1.5 text-primary-foreground font-semibold rounded-full">
                  {product.tag}
                </span>

                {/* Quick action buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {[Heart, Eye, ShoppingBag].map((Icon, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={hoveredIdx === i ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      className="w-9 h-9 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-primary/10 hover:border-primary/40 hover:bg-background transition-all duration-300 rounded-full"
                    >
                      <Icon size={14} className="text-foreground" />
                    </motion.button>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="px-1">
                <p className="text-[9px] font-body tracking-[0.2em] uppercase text-primary/60 mb-1">{product.material}</p>
                <h3 className="text-sm md:text-base mb-1.5 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "'Cinzel', serif" }}>
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-primary font-body font-semibold">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-xs text-muted-foreground font-body line-through">{product.oldPrice}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
