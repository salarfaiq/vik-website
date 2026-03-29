"use client";

import { WHY_VIK } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function WhyVIK() {
  return (
    <section className="py-24 relative relief-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--vik-gold)] mb-2 tracking-wider uppercase">
              Why Travel With Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              More Than a{" "}
              <span className="text-gradient-gold">Tour Company</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_VIK.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className="glass-card rounded-2xl p-6 text-center h-full transition-all duration-300 hover:shadow-lg hover:shadow-[var(--vik-glow)] group cursor-default">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2 group-hover:text-[var(--vik-gold)] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--foreground)]/45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
