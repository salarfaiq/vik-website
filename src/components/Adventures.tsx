"use client";

import Image from "next/image";
import { TRIPS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Adventures() {
  const flagship = TRIPS[0];
  const others = TRIPS.slice(1);

  return (
    <section id="adventures" className="py-24 relative relief-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--vik-forest-light)] mb-2 tracking-wider uppercase">
              Choose Your Path
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Adventures That Call to{" "}
              <span className="text-gradient-gold">the Soul</span>
            </h2>
            <p className="text-[var(--foreground)]/45 max-w-xl mx-auto">
              From a gentle morning walk through wildflower meadows to conquering
              the rooftop of Iraq — every level of adventurer finds their trail here.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Flagship - Zagros */}
          <ScrollReveal delay={0.08} className="lg:col-span-2 lg:row-span-2">
            <a href="#zagros" className="block rounded-2xl overflow-hidden relative group cursor-pointer h-full min-h-[400px]">
              <div className="absolute inset-0 overflow-hidden">
                <Image src={flagship.image} alt={flagship.name} fill className="card-img object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--vik-gold)] text-[var(--vik-forest-deep)]">FLAGSHIP</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold diff-hard">{flagship.duration}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="text-[var(--vik-gold)] text-sm font-semibold tracking-wide mb-2">{flagship.tag}</div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">{flagship.name}</h3>
                <p className="text-white/70 text-sm sm:text-base max-w-lg mb-4">{flagship.shortDesc}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-2xl font-bold text-[var(--vik-gold)]">{flagship.price}</span>
                  <span className="text-white/50 text-sm">{flagship.priceNote}</span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/50 text-sm">Next: {flagship.nextDate}</span>
                </div>
              </div>
            </a>
          </ScrollReveal>

          {/* Other trips */}
          {others.map((trip, index) => (
            <ScrollReveal key={trip.id} delay={(index + 1) * 0.08}>
              <a
                href={trip.id === "summit" || trip.id === "fullday" || trip.id === "halfday" || trip.id === "quarter" ? "#halgurd" : "#destinations"}
                className="block rounded-2xl overflow-hidden relative group cursor-pointer h-80"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image src={trip.image} alt={trip.name} fill className="card-img object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${trip.diffClass}`}>{trip.difficulty}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold glass-card text-white border-0">{trip.duration}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs font-semibold tracking-wide mb-1" style={{ color: trip.tagColor }}>{trip.tag}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{trip.name}</h3>
                  <p className="text-white/50 text-sm">{trip.shortDesc}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
