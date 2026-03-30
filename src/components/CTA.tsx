"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-[var(--vik-storm)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border border-[var(--vik-storm-light)]/10 zagros-border">
            <div className="pt-4" />

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Walk Where{" "}
              <span className="text-gradient-sage">Few Have Walked Before?</span>
            </h2>
            <p className="text-[var(--foreground)]/45 max-w-lg mx-auto mb-8">
              Whether it&apos;s the 13-day Zagros Trail, a summit push on Halgurd,
              or a weekend in a mountain villa — your Kurdistan adventure is one
              message away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--vik-sage-dark)] to-[var(--vik-sage)] text-white font-bold hover:shadow-lg hover:shadow-[var(--vik-glow)] transition-all"
              >
                Book Your Adventure
              </motion.a>
              <motion.a
                href="https://wa.me/9647501116377"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-[var(--vik-border-storm)] text-[var(--foreground)]/70 font-semibold hover:border-[var(--vik-sage)]/30 hover:text-[var(--vik-sage)] transition-all"
              >
                Or Chat on WhatsApp
              </motion.a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[var(--foreground)]/25">
              <span>+964 750 111 6377</span>
              <span className="hidden sm:inline">|</span>
              <span>info@visitiraqikurdistan.com</span>
              <span className="hidden sm:inline">|</span>
              <span>Choman, Kurdistan Region, Iraq</span>
            </div>

            <div className="zagros-divider mt-8 max-w-xs mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
