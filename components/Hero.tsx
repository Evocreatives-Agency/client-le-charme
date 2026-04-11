"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/interior-bar.jpg" alt="Le Charme dining room and bar"
          fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-encre/95 via-encre/40 to-encre/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_100%,rgba(204,63,53,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-or/70" />
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-or/80">804 Edmonton Trail · Calgary</span>
          </div>
        </motion.div>
        <motion.h1 initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.08}}
          className="font-display text-[clamp(64px,11vw,136px)] italic font-normal leading-[0.88] text-white mb-8"
          style={{textShadow:'0 8px 60px rgba(0,0,0,0.5)'}}>
          Le<br/><span className="text-or">Charme</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}
          className="font-display text-[18px] md:text-[22px] italic text-white/40 mb-10 tracking-wide">French Bistro & Bar</motion.p>
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.32}}
          className="flex flex-wrap gap-4">
          <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA"
            target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.2em] uppercase bg-rouge text-white px-9 py-4 hover:bg-rouge-dark transition-colors">
            Reserve a Table
          </a>
          <a href="#menu"
            className="font-mono text-[11px] tracking-[0.2em] uppercase border border-white/25 text-white/80 px-9 py-4 hover:border-or hover:text-or transition-all">
            View Menu
          </a>
        </motion.div>
      </div>

      <div className="absolute right-8 bottom-10 flex flex-col items-center gap-2">
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-or/40 to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}
