"use client";

import ScrollReveal from "./ScrollReveal";

const ROUTE_STOPS = [
  { day: "1", label: "Baghdad — Iraqi Museum, Citadel, Tigris" },
  { day: "3", label: "Samarra — Malwiya Minaret" },
  { day: "4", label: "Babylon & Karbala Shrines" },
  { day: "5", label: "Najaf — Imam Ali Shrine" },
  { day: "6", label: "Ur Ziggurat & Nasiriyah" },
  { day: "7", label: "Mesopotamian Marshlands" },
  { day: "8", label: "Basra — Shatt al-Arab" },
  { day: "11", label: "Mosul & Nineveh Ruins" },
  { day: "12", label: "Lalish — Sacred Yazidi Temple" },
  { day: "13", label: "Erbil Citadel & Farewell" },
];

export default function IraqTour() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <ScrollReveal direction="right" className="lg:col-span-3">
            <p className="text-sm font-semibold text-[var(--vik-warm)] mb-2 tracking-wider uppercase">
              Beyond Kurdistan
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Cradle of Civilization{" "}
              <span className="text-gradient-warm">Grand Iraq Tour</span>
            </h2>
            <p className="text-[var(--foreground)]/45 leading-relaxed mb-4">
              14 days across the full breadth of Iraq — from the ancient ziggurats of <strong className="text-[var(--foreground)]">Ur</strong> to the marshlands of Mesopotamia, from the holy shrines of <strong className="text-[var(--foreground)]">Najaf and Karbala</strong> to the war-scarred resilience of <strong className="text-[var(--foreground)]">Mosul</strong>, and the sacred Yazidi temple of <strong className="text-[var(--foreground)]">Lalish</strong>.
            </p>
            <p className="text-[var(--foreground)]/45 leading-relaxed mb-6">
              Baghdad&apos;s Abbasid palaces, Babylon&apos;s ancient walls, Basra&apos;s Shatt al-Arab waterfront, the Mesopotamian Marshes, Samarra&apos;s spiraling Malwiya Minaret, the Erbil Citadel — every day is a different chapter of civilization itself.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-[var(--vik-warm)]">$3,800</span>
              <span className="text-[var(--foreground)]/40 text-sm">per person</span>
              <span className="text-[var(--foreground)]/15">|</span>
              <span className="text-[var(--foreground)]/40 text-sm">14 Days</span>
              <span className="text-[var(--foreground)]/15">|</span>
              <span className="text-[var(--foreground)]/40 text-sm">Nov 14-27, 2026</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--vik-ember-dark)] to-[var(--vik-ember-muted)] text-white font-bold hover:shadow-lg hover:shadow-[var(--vik-glow)] transition-all duration-300 hover:scale-105"
            >
              Inquire About This Tour →
            </a>
          </ScrollReveal>

          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4">14-Day Route</h4>
              <div className="space-y-3">
                {ROUTE_STOPS.map((stop) => (
                  <div key={stop.day} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--vik-warm)]/15 text-[var(--vik-warm)] text-xs flex items-center justify-center font-bold shrink-0">
                      {stop.day}
                    </span>
                    <span className="text-sm text-[var(--foreground)]/55">{stop.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
