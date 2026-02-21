import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";

const images = [
  { src: insta1, likes: "2.4K", comments: "89" },
  { src: insta2, likes: "1.8K", comments: "56" },
  { src: insta3, likes: "3.1K", comments: "124" },
  { src: insta4, likes: "2.7K", comments: "93" },
];

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Instagram size={36} className="text-primary" strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Follow Us on{" "}
            <span className="gold-text italic" style={{ fontFamily: "'Lora', serif" }}>Instagram</span>
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-body tracking-[0.3em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
          >
            @luxuria.jewelry
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden group cursor-pointer aspect-square rounded-xl"
            >
              <img
                src={img.src}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Instagram size={28} className="text-primary mb-4" />
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs font-body text-foreground">
                    <Heart size={14} className="fill-primary text-primary" /> {img.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-body text-foreground">
                    <MessageCircle size={14} className="text-primary" /> {img.comments}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 rounded-xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
