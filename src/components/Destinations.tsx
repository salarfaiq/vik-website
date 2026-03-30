"use client";

import Image from "next/image";
import { DESTINATIONS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 relative relief-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--vik-glacier)] mb-2 tracking-wider uppercase">
              Beyond the Summit
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Hidden Gems of{" "}
              <span className="text-gradient-sage">Choman</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Gomi Felaw Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal direction="right">
            <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
              <Image src="/images/IMG_4448.jpg" alt="Gomi Felaw lake area" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="text-[var(--vik-storm-bright)] text-xs font-semibold tracking-wider mb-2">MIRROR OF THE GODS</div>
            <h3 className="text-3xl font-extrabold mb-4">Gomi Felaw</h3>
            <span className="inline-block px-3 py-1 diff-moderate rounded-full text-xs font-semibold mb-4">Day Trip | 9km each way</span>
            <p className="text-[var(--foreground)]/45 leading-relaxed mb-4">
              <strong className="text-[var(--foreground)]">Kurdistan&apos;s highest alpine lake</strong>, sitting at 3,000 meters between the Sikal and Hisar mountains. Emerald-green grasses and wildflowers frame crystal waters that mirror the snow-capped Halgurd-Sakran peaks above.
            </p>
            <p className="text-[var(--foreground)]/45 leading-relaxed mb-6">
              The trek from Choman is 9 kilometers along a mountain road, gaining elevation gradually. In spring, the surrounding valley explodes with color. In winter, frozen peaks reflected in still water create scenes that belong in a painting, not reality.
            </p>
            <div className="flex flex-wrap gap-3">
              {["3,000m elevation", "Highest lake in Iraq", "Wildflower meadows", "Snow-capped peaks"].map((tag) => (
                <span key={tag} className="glass-card px-3 py-1.5 rounded-lg text-xs">{tag}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Other destinations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest, index) => (
            <ScrollReveal key={dest.name} delay={index * 0.08}>
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-[var(--vik-glow-storm)] group cursor-default">
                <div className="text-3xl mb-4">{dest.icon}</div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-[var(--vik-sage)] transition-colors">
                  {dest.name}
                </h4>
                <p className="text-sm text-[var(--foreground)]/45 leading-relaxed mb-3">
                  {dest.description}
                </p>
                <span className="text-[var(--foreground)]/25 text-xs">{dest.location}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
