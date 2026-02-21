import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    text: "The bridal set I purchased was absolutely breathtaking. Every piece was crafted to perfection and made my wedding day even more special. The attention to detail is unmatched.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Ananya Patel",
    role: "Loyal Customer",
    text: "I've been a customer for over 5 years now. The quality and craftsmanship of their jewelry is unmatched. Every piece feels like a work of art that I'll treasure forever.",
    rating: 5,
    initials: "AP",
  },
  {
    name: "Meera Kapoor",
    role: "Fashion Enthusiast",
    text: "Their collection strikes the perfect balance between traditional elegance and modern design. I always receive compliments when wearing their pieces. Absolutely love it!",
    rating: 5,
    initials: "MK",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 navy-gradient opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body tracking-[0.5em] uppercase text-primary mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            What Our Customers{" "}
            <span className="gold-text italic" style={{ fontFamily: "'Lora', serif" }}>Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Quote size={40} className="text-primary/15 mx-auto mb-8" />

            <div className="flex gap-1 justify-center mb-8">
              {Array.from({ length: testimonials[active].rating }).map((_, idx) => (
                <Star key={idx} size={16} className="fill-primary text-primary" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-10 italic" style={{ fontFamily: "'Lora', serif" }}>
              "{testimonials[active].text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-lg text-primary-foreground font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
                {testimonials[active].initials}
              </div>
              <div className="text-left">
                <p className="text-base" style={{ fontFamily: "'Cinzel', serif" }}>{testimonials[active].name}</p>
                <p className="text-xs text-primary font-body tracking-widest uppercase">{testimonials[active].role}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-12 h-12 border border-primary/20 hover:border-primary/50 flex items-center justify-center transition-colors rounded-full"
          >
            <ChevronLeft size={18} className="text-primary" />
          </motion.button>

          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-500 ${
                  i === active ? "w-8 h-1.5 gold-gradient rounded-full" : "w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50 rounded-full"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-12 h-12 border border-primary/20 hover:border-primary/50 flex items-center justify-center transition-colors rounded-full"
          >
            <ChevronRight size={18} className="text-primary" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
