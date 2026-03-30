"use client";

import Image from "next/image";
import { STAYS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Stays() {
  return (
    <section id="stays" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--vik-warm)] mb-2 tracking-wider uppercase">
              Sleep Under the Stars
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Mountain Stays &{" "}
              <span className="text-gradient-warm">Glamping</span>
            </h2>
            <p className="text-[var(--foreground)]/45 max-w-xl mx-auto">
              From luxury mountain villas with pools to cozy glamping tents glowing
              warm against a backdrop of snow-covered peaks.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAYS.map((stay, index) => (
            <ScrollReveal key={stay.name} delay={index * 0.1}>
              <div className="glass-card rounded-2xl overflow-hidden group hover:border-[var(--vik-ember)]/20 transition-all duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image src={stay.image} alt={stay.name} fill className="card-img object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-[var(--vik-ember)] transition-colors">
                    {stay.name}
                  </h4>
                  <p className="text-sm text-[var(--foreground)]/45 leading-relaxed mb-4">
                    {stay.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--vik-ember)] font-bold">
                      {stay.price}<span className="text-[var(--foreground)]/30 font-normal text-sm">{stay.priceNote}</span>
                    </span>
                    <span className="text-[var(--foreground)]/25 text-xs">{stay.location}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
