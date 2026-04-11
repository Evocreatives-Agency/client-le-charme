"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BOOTHS = "https://www.diningandcooking.com/wp-content/uploads/2025/10/52adec765aff5836dea23fcd167c4a0a.jpeg";

export default function Reserve() {
  return (
    <section id="reserve" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={BOOTHS} alt="Le Charme interior" fill
          className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-encre/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="block w-8 h-px bg-rouge/50" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rouge">Reservations</span>
            <span className="block w-8 h-px bg-rouge/50" />
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] italic text-white leading-[0.9] mb-6">
            Join us<br/><span className="text-or">tonight</span>
          </h2>
          <p className="font-body text-[19px] italic text-white/50 mb-12">
            Reserve online or text us at 587-577-4026 for same-day bookings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.2em] uppercase bg-rouge text-white px-12 py-5 hover:bg-rouge-dark transition-colors">
              Book via OpenTable
            </a>
            <a href="tel:5875774026"
              className="font-mono text-[11px] tracking-[0.2em] uppercase border border-white/25 text-white px-12 py-5 hover:border-or hover:text-or transition-all">
              587-577-4026
            </a>
          </div>
          <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/25 mt-10">Walk-ins welcome · Patio seating · Outdoor firepit</p>
        </motion.div>
      </div>
    </section>
  );
}
