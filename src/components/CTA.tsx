"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-[var(--vik-forest)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border border-[var(--vik-forest-light)]/10 zagros-border">
            <div className="pt-4" />

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Walk Where{" "}
              <span className="text-gradient-gold">Few Have Walked Before?</span>
            </h2>
            <p className="text-[var(--foreground)]/45 max-w-lg mx-auto mb-8">
              Whether it&apos;s the 13-day Zagros Trail, a summit push on Halgurd,
              or a weekend in a mountain villa — your Kurdistan adventure is one
              message away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="https://wa.me/9647501116377"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold hover:shadow-lg hover:shadow-[#25D366]/30 transition-shadow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </motion.a>
              <motion.a
                href="mailto:info@visitiraqikurdistan.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-[var(--vik-border)] text-[var(--foreground)]/70 font-semibold hover:border-[var(--vik-gold)]/30 hover:text-[var(--vik-gold)] transition-all"
              >
                Email Us
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
