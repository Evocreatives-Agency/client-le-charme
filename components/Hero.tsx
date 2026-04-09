"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noir">

      {/* Full-bleed interior photo */}
      <div className="absolute inset-0">
        <Image
          src="https://www.diningandcooking.com/wp-content/uploads/2025/10/52adec765aff5836dea23fcd167c4a0a.jpeg"
          alt="Le Charme interior — warm dining room with exposed brick and red bar"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/75 via-noir/60 to-noir/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(107,31,42,0.35)_0%,transparent_70%)]" />
      </div>

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-or/[0.08] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-or/[0.05] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-10 h-px bg-or/60" />
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-or">Edmonton Trail · Calgary</span>
            <span className="block w-10 h-px bg-or/60" />
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-[clamp(72px,12vw,140px)] italic font-normal leading-[0.9] tracking-tight text-creme mb-4" style={{ textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}>
          Le <span className="text-or">Charme</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display text-[clamp(16px,2vw,24px)] italic font-light text-creme/60 tracking-widest mb-14">
          French Bistro &amp; Bar
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="flex gap-5 justify-center flex-wrap">
          <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA&ot_source=Restaurant%20website"
            target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.18em] uppercase bg-bordeaux text-creme px-10 py-5 hover:bg-bordeaux-light transition-colors duration-200">
            Reserve a Table
          </a>
          <a href="#menu"
            className="font-mono text-[11px] tracking-[0.18em] uppercase border border-creme/40 text-creme px-10 py-5 hover:border-or hover:text-or transition-all duration-200">
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-creme/40">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-or/50 to-transparent animate-scroll-pulse" />
      </div>

      {/* Photo credit */}
      <p className="absolute bottom-4 right-4 font-mono text-[9px] tracking-[0.08em] text-creme/20">
        Photo: Gavin Young / Postmedia
      </p>
    </section>
  );
}
