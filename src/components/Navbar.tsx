"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#adventures", label: "Adventures" },
  { href: "#zagros", label: "Zagros Trail" },
  { href: "#halgurd", label: "Halgurd" },
  { href: "#destinations", label: "Destinations" },
  { href: "#stays", label: "Stays" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[var(--vik-border-forest)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--vik-forest)] to-[var(--vik-forest-deep)] border border-[var(--vik-gold)]/30 flex items-center justify-center">
              <span className="text-[var(--vik-gold)] font-bold text-xs">▲</span>
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-xl font-bold text-gradient-gold">VIK</span>
              <span className="text-sm font-medium text-[var(--foreground)]/50">urdistan</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--foreground)]/55 hover:text-[var(--vik-gold)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[var(--vik-gold-dark)] to-[var(--vik-gold)] text-[var(--vik-forest-deep)] font-semibold text-sm hover:shadow-lg hover:shadow-[var(--vik-glow)] transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--foreground)] p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-[var(--vik-border-forest)]"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-[var(--foreground)]/55 hover:text-[var(--vik-gold)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-2 rounded-full bg-gradient-to-r from-[var(--vik-gold-dark)] to-[var(--vik-gold)] text-[var(--vik-forest-deep)] font-semibold text-sm"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
