"use client";

import Image from "next/image";
import { HALGURD_LEVELS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function HalgurdLevels() {
  return (
    <section id="halgurd" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--vik-glacier)] mb-2 tracking-wider uppercase">
              Mount Halgurd — 3,607m
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Iraq&apos;s Tallest Peak,{" "}
              <span className="text-gradient-ember">Four Ways to Experience It</span>
            </h2>
            <p className="text-[var(--foreground)]/45 max-w-xl mx-auto">
              Whether you&apos;re a seasoned mountaineer or prefer a gentle morning walk,
              Halgurd has a trail with your name on it. Snow-capped for 10 months a year,
              home to golden eagles and Persian leopards.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {HALGURD_LEVELS.map((level, index) => (
            <ScrollReveal key={level.name} delay={index * 0.1}>
              <div className="glass-card rounded-2xl overflow-hidden group hover:border-[var(--vik-ember)]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--vik-glow-storm)] h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image src={level.image} alt={level.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className={`absolute top-4 right-4 ${level.diffClass} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {level.difficulty}
                  </span>
                </div>
                <div className="p-6">
                  <div className={`text-xs font-semibold tracking-wider mb-1 ${level.tagColor}`}>
                    {level.tag}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--vik-ember)] transition-colors">
                    {level.name}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/45 leading-relaxed mb-4">
                    {level.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-[var(--foreground)]/30">
                    <span>{level.duration}</span>
                    <span>|</span>
                    <span>{level.elevation}</span>
                    <span>|</span>
                    <span>{level.extra}</span>
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
