"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const INTERIOR = "https://www.diningandcooking.com/wp-content/uploads/2025/10/52adec765aff5836dea23fcd167c4a0a.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-end pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={INTERIOR}
          alt="Le Charme dining room — the bar and dining area"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-encre via-encre/55 to-encre/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(204,63,53,0.18)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-or/60" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-or">804 Edmonton Trail · Calgary</span>
          </div>
        </motion.div>

        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.1}}
          className="font-display text-[clamp(60px,11vw,130px)] italic font-normal leading-[0.88] text-white mb-6"
          style={{textShadow:'0 8px 60px rgba(0,0,0,0.5)'}}>
          Le <span className="text-or">Charme</span>
        </motion.h1>

        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.3}}
          className="flex flex-wrap items-center gap-4">
          <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA"
            target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.2em] uppercase bg-rouge text-white px-8 py-4 hover:bg-rouge-dark transition-colors">
            Reserve a Table
          </a>
          <a href="#menu"
            className="font-mono text-[11px] tracking-[0.2em] uppercase border border-white/30 text-white px-8 py-4 hover:border-or hover:text-or transition-all">
            View Menu
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-or/40 to-transparent animate-scroll-pulse" />
      </div>

      <p className="absolute bottom-4 left-6 font-mono text-[9px] tracking-[0.08em] text-white/20">Photo: Gavin Young / Postmedia</p>
    </section>
  );
}
