import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingBag, User, Diamond } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Gold", href: "#gold" },
  { label: "Diamond", href: "#diamond" },
  { label: "Silver", href: "#silver" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-2" : "py-5"
      }`}
      style={{
        background: scrolled
          ? "hsl(222 30% 8% / 0.95)"
          : "linear-gradient(to bottom, hsl(222 30% 8% / 0.9), transparent)",
        backdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
      }}
    >
      {/* Top gold accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, hsl(38 65% 55%), transparent)" }}
        animate={{ opacity: scrolled ? 1 : 0.5 }}
      />

      <nav className="container mx-auto grid grid-cols-[auto,1fr,auto] items-center px-4 md:px-8">
        {/* Left: mobile toggle + left nav (desktop) */}
        <div className="flex items-center gap-6">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground relative z-50">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <a
                  href={link.href}
                  className="relative text-[11px] font-body tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors duration-500 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] gold-gradient transition-all duration-500 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Center: logo, perfectly centered without transform */}
        <div className="flex justify-center">
          <motion.a
            href="#home"
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative flex items-center gap-2">
              <Diamond size={18} className="text-primary" />
              <h1
                className="text-xl md:text-2xl tracking-[0.3em] gold-text font-bold"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                LUXURIA
              </h1>
              <Diamond size={18} className="text-primary" />
            </div>
            <p className="text-[7px] tracking-[0.6em] uppercase text-muted-foreground mt-0.5 font-body">
              Fine Jewelry House
            </p>
          </motion.a>
        </div>

        {/* Right: right nav + icons */}
        <div className="flex items-center justify-end gap-6">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.slice(3).map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <a
                  href={link.href}
                  className="relative text-[11px] font-body tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors duration-500 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] gold-gradient transition-all duration-500 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-foreground/80">
            {[Search, User, ShoppingBag].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="relative hover:text-primary transition-colors duration-300"
              >
                <Icon size={17} strokeWidth={1.5} />
                {i === 2 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 gold-gradient rounded-full flex items-center justify-center text-[8px] text-primary-foreground font-bold">
                    3
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 md:hidden z-40 flex items-center justify-center"
            style={{ background: "hsl(222 30% 8% / 0.98)" }}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl tracking-[0.2em] text-foreground hover:text-primary transition-colors"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
