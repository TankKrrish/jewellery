import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Instagram, Facebook, Twitter, Diamond } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="relative border-t border-primary/10 overflow-hidden" style={{ background: "hsl(222 30% 6%)" }}>
      {/* Newsletter */}
      <div className="border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                Stay <span className="gold-text italic" style={{ fontFamily: "'Lora', serif" }}>Connected</span>
              </h3>
              <p className="text-sm text-muted-foreground font-body">Subscribe for exclusive collections & offers</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 md:w-80 bg-background border border-primary/20 px-5 py-3.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors rounded-l-lg"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="gold-gradient px-6 py-3.5 text-xs font-body tracking-widest uppercase text-primary-foreground font-semibold flex items-center gap-2 rounded-r-lg"
              >
                Subscribe <ArrowRight size={14} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Diamond size={16} className="text-primary" />
              <h3 className="text-2xl tracking-[0.15em] gold-text font-bold" style={{ fontFamily: "'Cinzel', serif" }}>LUXURIA</h3>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
              Crafting timeless jewelry since 2001. Gold, Diamond & Silver pieces that tell your story.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 border border-primary/15 hover:border-primary/40 flex items-center justify-center transition-colors rounded-full"
                >
                  <Icon size={16} className="text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-widest uppercase text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Gold", "Diamond", "Silver"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground font-body hover:text-primary hover:pl-2 transition-all duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-widest uppercase text-primary mb-6">Support</h4>
            <ul className="space-y-3">
              {["Size Guide", "Shipping", "Returns", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground font-body hover:text-primary hover:pl-2 transition-all duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-widest uppercase text-primary mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" /> Mumbai, India
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" /> +91 98765 43210
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" /> hello@luxuria.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground font-body tracking-widest">
            © 2026 LUXURIA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms", "Cookies"].map((link) => (
              <a key={link} href="#" className="text-[10px] text-muted-foreground font-body tracking-widest hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
