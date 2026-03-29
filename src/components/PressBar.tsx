"use client";

import ScrollReveal from "./ScrollReveal";

const PRESS = [
  "The New York Times",
  "National Geographic",
  "Lonely Planet",
  "The Times",
  "SUITCASE Magazine",
  "GEO Magazine",
  "BGTW Award Winner 2025",
];

export default function PressBar() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/20 mb-6">
            As Featured In
          </p>
          <div className="overflow-hidden rounded-xl">
            <div className="marquee-track">
              {[0, 1].map((set) => (
                <div key={set} className="flex items-center gap-10 px-5">
                  {PRESS.map((name) => (
                    <span key={`${set}-${name}`} className="text-[var(--foreground)]/25 whitespace-nowrap text-sm font-medium">
                      {name}
                    </span>
                  ))}
                  <span className="text-[var(--foreground)]/10 ml-5">|</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
