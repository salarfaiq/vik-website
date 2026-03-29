"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { ZMT_DAYS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function ZagrosTrail() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="zagros" className="py-24 relative relief-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <ScrollReveal direction="right">
            <p className="text-sm font-semibold text-[var(--vik-gold)] mb-2 tracking-wider uppercase">
              Our Flagship Expedition
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              The Zagros{" "}
              <span className="text-gradient-gold">Mountain Trail</span>
            </h2>
            <p className="text-[var(--foreground)]/45 leading-relaxed mb-4">
              Iraq and Kurdistan&apos;s <strong className="text-[var(--foreground)]">first long-distance hiking route</strong>. A 215 km cultural trek following ancient shepherds&apos; paths, historic trade routes, canyon walks, and alpine ridges from Shush to the foot of Mount Halgurd — connecting more than <strong className="text-[var(--foreground)]">30 rural communities</strong>.
            </p>
            <p className="text-[var(--foreground)]/45 leading-relaxed mb-8">
              This isn&apos;t just a hike. It&apos;s a journey through time — walking paths trodden for millennia by shepherds, traders, and Peshmerga fighters. Each night, you&apos;ll sleep in a Kurdish homestay, share meals with local families, and experience a hospitality unchanged for generations.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { label: "Days", value: "13" },
                { label: "Distance", value: "215km" },
                { label: "Stages", value: "12" },
                { label: "Per Person", value: "$2,500" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl px-4 py-3 text-center">
                  <div className="text-[var(--vik-gold)] font-bold text-lg">{stat.value}</div>
                  <div className="text-[var(--foreground)]/35 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--vik-gold-dark)] to-[var(--vik-gold)] text-[var(--vik-forest-deep)] font-bold hover:shadow-lg hover:shadow-[var(--vik-glow)] transition-all duration-300 hover:scale-105"
            >
              Reserve Your Spot →
            </a>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden">
              <Image src="/images/IMG_4453.jpg" alt="Mountain camp at night" width={600} height={500} className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--vik-gold)]/15 flex items-center justify-center">
                      <span className="text-[var(--vik-gold)]">★</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">BGTW Award Winner 2025</div>
                      <div className="text-xs text-[var(--foreground)]/35">Best Wider World Tourism Project</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Day-by-Day Itinerary */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Day-by-Day Journey</h3>
            <p className="text-[var(--foreground)]/45 mt-2">
              Next departure: <strong className="text-[var(--vik-gold)]">March 19-31, 2026</strong> — coinciding with Nawroz, the Kurdish New Year.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* Day tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {ZMT_DAYS.map((day, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeDay === i
                    ? "bg-[var(--vik-gold)]/15 border border-[var(--vik-gold)]/30 text-[var(--vik-gold)]"
                    : "border border-[var(--vik-border)] text-[var(--foreground)]/40 hover:text-[var(--vik-gold)]"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>

          {/* Day content */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[var(--vik-gold)] text-xl font-bold">{ZMT_DAYS[activeDay].label}</span>
                  <span className="text-[var(--foreground)]/20">|</span>
                  <span className="font-medium">{ZMT_DAYS[activeDay].date}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{ZMT_DAYS[activeDay].title}</h4>
                <p className="text-[var(--foreground)]/45 leading-relaxed">{ZMT_DAYS[activeDay].description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[var(--foreground)]/30">
                  <MapPin size={14} />
                  {ZMT_DAYS[activeDay].overnight}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Inclusions */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-[var(--vik-forest-light)]">✓</span> What&apos;s Included
            </h4>
            <ul className="space-y-3">
              {[
                "Airport pickup & drop-off in Erbil",
                "12 nights accommodation (homestays + hotels)",
                "All meals: breakfast, lunch & dinner",
                "Professional English-speaking guide",
                "Daily luggage transfers between stops",
                "All hiking permits & local coordination",
                "Nawroz celebration in Akre",
                "Support vehicles at all access points",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--foreground)]/45 text-sm">
                  <span className="text-[var(--vik-forest-light)] mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h4 className="text-lg font-bold mb-4">Good to Know</h4>
            <ul className="space-y-3">
              {[
                "Moderate to challenging terrain — hiking experience recommended",
                "Drinks, personal expenses & tips not included",
                "30% deposit to reserve, 70% due 1 month before",
                "Camping possible near Halgurd Base Camp only",
                "All other nights in verified, secure homestays",
                "Limited spaces — early booking recommended",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--foreground)]/45 text-sm">
                  <span className="text-[var(--foreground)]/20 mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
