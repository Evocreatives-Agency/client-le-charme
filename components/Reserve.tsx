"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Reserve() {
  return (
    <section id="reserve" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/interior-booths.jpg" alt="Le Charme booths" fill
          className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-encre/82" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(204,63,53,0.12)_0%,transparent_70%)]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-8 h-px bg-rouge/60" />
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-rouge">Reservations</span>
            <span className="block w-8 h-px bg-rouge/60" />
          </div>
          <h2 className="font-display text-[clamp(52px,9vw,108px)] italic text-white leading-[0.88] mb-7">
            Join us<br/><span className="text-or">tonight</span>
          </h2>
          <p className="font-body text-[19px] italic text-white/45 mb-12">
            Reserve online, or text us at 587-577-4026 for same-day bookings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.2em] uppercase bg-rouge text-white px-12 py-5 hover:bg-rouge-dark transition-colors">Book via OpenTable</a>
            <a href="tel:5875774026"
              className="font-mono text-[11px] tracking-[0.2em] uppercase border border-white/25 text-white px-12 py-5 hover:border-or hover:text-or transition-all">587-577-4026</a>
          </div>
          <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-white/22 mt-10">Walk-ins welcome · Patio seating · Outdoor firepit</p>
        </motion.div>
      </div>
    </section>
  );
}
