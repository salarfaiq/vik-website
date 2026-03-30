"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mountain, ChevronRight, Calendar, Users, Star, MapPin } from "lucide-react";

const PALETTES = [
  {
    name: "Forest Canopy",
    hex: "#2D8B5E",
    light: "#4AAF7A",
    dark: "#1F6B45",
    muted: "#3A7D5A",
    description: "Deep, rich, like looking into dense mountain forest",
  },
  {
    name: "Valley Spring",
    hex: "#3DA06D",
    light: "#5CBF8A",
    dark: "#2C7D52",
    muted: "#4A9470",
    description: "Bright enough to feel alive — fresh meadows after snowmelt",
  },
  {
    name: "Alpine Moss",
    hex: "#4A9E6B",
    light: "#6BBF8A",
    dark: "#357A50",
    muted: "#5A9474",
    description: "Natural, vibrant — where meadow meets snow",
  },
];

function SampleCard({ palette, index }: { palette: typeof PALETTES[0]; index: number }) {
  const [selected, setSelected] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="flex flex-col"
    >
      {/* Label */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className="w-4 h-4 rounded-full" style={{ background: palette.hex }} />
          <h3 className="text-lg font-extrabold">{palette.name}</h3>
        </div>
        <p className="text-xs text-[var(--foreground)]/35">{palette.description}</p>
        <code className="text-[10px] text-[var(--foreground)]/20 mt-1 block">{palette.hex}</code>
      </div>

      {/* Sample UI */}
      <div
        className="rounded-2xl p-5 border flex-1 flex flex-col gap-4"
        style={{
          background: "rgba(14, 26, 32, 0.85)",
          backdropFilter: "blur(16px)",
          borderColor: `${palette.hex}15`,
        }}
      >
        {/* Nav sample */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[8px] font-bold"
              style={{ background: `linear-gradient(135deg, ${palette.dark}, ${palette.hex})` }}
            >
              ▲
            </div>
            <span
              className="text-sm font-bold"
              style={{
                background: `linear-gradient(135deg, ${palette.light}, ${palette.hex}, ${palette.dark})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              VIK
            </span>
            <span className="text-[10px] text-[var(--foreground)]/40">urdistan</span>
          </div>
          <div
            className="px-3 py-1 rounded-full text-[10px] font-semibold text-white"
            style={{ background: `linear-gradient(to right, ${palette.dark}, ${palette.hex})` }}
          >
            Book Now
          </div>
        </div>

        {/* Heading sample */}
        <div>
          <p className="text-[10px] font-semibold tracking-wider uppercase mb-1" style={{ color: palette.hex }}>
            Our Flagship Expedition
          </p>
          <h4 className="text-base font-extrabold leading-tight">
            The Zagros{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${palette.light}, ${palette.hex}, ${palette.dark})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mountain Trail
            </span>
          </h4>
          <p className="text-[11px] text-[var(--foreground)]/40 mt-1">
            215 km trek across 30+ villages, ancient paths, and alpine ridges.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { val: "13", label: "Days" },
            { val: "215km", label: "Distance" },
            { val: "$2,500", label: "Per Person" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg px-2 py-1.5 text-center border"
              style={{ borderColor: `${palette.hex}15`, background: `${palette.hex}08` }}
            >
              <div className="text-xs font-bold" style={{ color: palette.hex }}>{s.val}</div>
              <div className="text-[9px] text-[var(--foreground)]/30">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Adventure card */}
        <button
          onClick={() => setSelected(!selected)}
          className="text-left p-3 rounded-xl border transition-all"
          style={{
            borderColor: selected ? palette.hex : "rgba(107, 143, 163, 0.12)",
            background: selected ? `${palette.hex}12` : "transparent",
          }}
        >
          <div className="flex items-start gap-2">
            <span className="text-base">🏔️</span>
            <div className="flex-1">
              <div className="text-xs font-semibold" style={selected ? { color: palette.hex } : {}}>
                Zagros Mountain Trail
              </div>
              <div className="text-[10px] text-[var(--foreground)]/25 mt-0.5">215 km trek across 30+ villages</div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[var(--vik-storm-mid)]/50 text-[var(--foreground)]/35">13 Days</span>
                <span className="text-[9px] font-semibold" style={{ color: palette.hex }}>$2,500</span>
              </div>
            </div>
            {selected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                style={{ background: palette.hex }}
              >
                <Check size={10} className="text-white" />
              </motion.div>
            )}
          </div>
        </button>

        {/* Difficulty badges */}
        <div className="flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold border" style={{ color: palette.light, borderColor: `${palette.hex}30`, background: `${palette.hex}15` }}>
            Moderate
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold border" style={{ color: "var(--vik-glacier)", borderColor: "rgba(142,172,187,0.25)", background: "rgba(142,172,187,0.15)" }}>
            Easy
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold border" style={{ color: "var(--vik-warm-light)", borderColor: "rgba(201,168,124,0.25)", background: "rgba(201,168,124,0.15)" }}>
            Day Trip
          </span>
        </div>

        {/* Hover card */}
        <div
          className="rounded-xl p-3 border transition-all cursor-default group"
          style={{ borderColor: `${palette.hex}10` }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${palette.hex}25`;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${palette.hex}15`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${palette.hex}10`;
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <div className="text-[10px] font-semibold tracking-wider mb-0.5" style={{ color: palette.muted }}>MIRROR OF THE GODS</div>
          <div className="text-xs font-bold mb-1">Gomi Felaw Lake</div>
          <div className="text-[10px] text-[var(--foreground)]/35">Kurdistan's highest alpine lake at 3,000m</div>
        </div>

        {/* Progress steps */}
        <div className="flex items-center justify-center gap-1">
          {["Adventure", "Details", "You", "Confirm"].map((s, i) => (
            <div key={s} className="flex items-center">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center border text-[8px]"
                style={{
                  borderColor: i <= 1 ? palette.hex : "rgba(107, 143, 163, 0.12)",
                  background: i <= 1 ? palette.hex : "transparent",
                  color: i <= 1 ? "white" : "rgba(226,222,214,0.3)",
                }}
              >
                {i < 1 ? "✓" : i + 1}
              </div>
              {i < 3 && (
                <div className="w-4 h-[1.5px] mx-0.5" style={{ background: i < 1 ? palette.hex : "rgba(107, 143, 163, 0.12)" }} />
              )}
            </div>
          ))}
        </div>

        {/* Divider sample */}
        <div
          className="h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, var(--vik-storm), ${palette.dark}, ${palette.hex}, ${palette.dark}, var(--vik-storm), transparent)`,
          }}
        />

        {/* CTA button */}
        <div className="flex gap-2">
          <div
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-[11px] font-semibold text-white"
            style={{ background: `linear-gradient(to right, ${palette.dark}, ${palette.hex})` }}
          >
            Reserve Your Spot <ChevronRight size={12} />
          </div>
          <div
            className="px-3 py-2 rounded-full text-[11px] font-medium border"
            style={{ borderColor: `${palette.hex}20`, color: `${palette.hex}` }}
          >
            Details →
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ColorTest() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-extrabold mb-2">Pick Your Green</h1>
          <p className="text-[var(--foreground)]/40">
            Same Storm slate + Glacier blue foundation. Three nature green accents to choose from.
          </p>
          <p className="text-xs text-[var(--foreground)]/20 mt-2">
            Click the adventure cards to see selection states. Hover the destination cards for glow effects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PALETTES.map((p, i) => (
            <SampleCard key={p.name} palette={p} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-[var(--foreground)]/20 mt-8"
        >
          Tell me which one you like — 1 (Forest Canopy), 2 (Valley Spring), or 3 (Alpine Moss)
        </motion.p>
      </div>
    </div>
  );
}
