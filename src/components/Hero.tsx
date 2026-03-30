"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Warm glowing tent in snowy mountains of Kurdistan"
          fill
          className="object-cover object-[center_40%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/60 via-[var(--background)]/30 to-[var(--background)]" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, var(--vik-glacier-dark) 1px, transparent 1px),
            linear-gradient(90deg, var(--vik-glacier-dark) 1px, transparent 1px)
          `,
          backgroundSize: "40px 20px",
        }}
      />

      {/* Top ember highlight line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--vik-ember)] to-transparent opacity-40" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-[15%] w-80 h-80 bg-[var(--vik-storm)]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-[20%] w-64 h-64 bg-[var(--vik-glacier)]/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[var(--vik-ember)]/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--vik-border-storm)] glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--vik-glacier)] animate-pulse" />
          <span className="text-xs font-medium text-[var(--vik-glacier)]">
            Kurdistan Region, Iraq
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Where Mountains{" "}
          <span className="text-gradient-ember">Meet the Sky</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-[var(--foreground)]/55 max-w-2xl mx-auto mb-10"
        >
          Trek ancient paths to Iraq&apos;s highest peak. Camp under stars at
          3,000 meters. Wake up to snow-capped Zagros summits. Your Kurdistan
          adventure starts in <strong className="text-[var(--foreground)]">Choman</strong>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#adventures"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--vik-ember-dark)] to-[var(--vik-ember)] text-white font-bold text-base hover:shadow-lg hover:shadow-[var(--vik-glow)] transition-all duration-300 hover:scale-105"
          >
            Explore Adventures
          </a>
          <a
            href="#zagros"
            className="px-8 py-3.5 rounded-full border border-[var(--vik-border-storm)] text-[var(--foreground)]/70 font-semibold text-base hover:border-[var(--vik-glacier)]/40 hover:text-[var(--vik-glacier)] transition-all duration-300"
          >
            The Zagros Trail →
          </a>
        </motion.div>

        {/* Floating stat badges */}
        <div className="relative mt-16 max-w-lg mx-auto">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 sm:right-8 top-0 glass-card rounded-xl px-3 py-2"
          >
            <p className="text-[10px] text-[var(--vik-ember)]">🏔️ Highest Peak</p>
            <p className="text-xs font-bold">3,607m</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 sm:left-8 top-8 glass-card rounded-xl px-3 py-2"
          >
            <p className="text-[10px] text-[var(--vik-glacier)]">🥾 Trail Network</p>
            <p className="text-xs font-bold">215 km</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass-card rounded-xl px-4 py-3 inline-block"
          >
            <p className="text-[10px] text-[var(--vik-warm)]">🏆 BGTW Award 2025</p>
            <p className="text-xs font-bold">Best Tourism Project</p>
          </motion.div>
        </div>

        {/* Scroll prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <div className="flex flex-col items-center gap-2 text-[var(--foreground)]/30">
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
