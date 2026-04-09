"use client";
import { motion } from "framer-motion";

export default function Reserve() {
  return (
    <section id="reserve" className="bg-creme-warm text-noir py-28 md:py-36 px-6 md:px-12 text-center">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-8 h-px bg-bordeaux/30" />
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-bordeaux">Reservations</span>
          <span className="block w-8 h-px bg-bordeaux/30" />
        </div>
        <h2 className="font-display text-[clamp(44px,7vw,88px)] italic font-normal text-noir leading-[0.95] mb-5">Join us<br/>for dinner</h2>
        <p className="font-body text-[20px] italic text-noir/45 max-w-md mx-auto mb-12 leading-relaxed">
          Reserve your table online, or text us at 587-577-4026 for same-day bookings.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA&ot_source=Restaurant%20website"
            target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.18em] uppercase bg-noir text-creme px-12 py-5 hover:bg-bordeaux transition-colors duration-200">Book via OpenTable</a>
          <a href="tel:5875774026" className="font-mono text-[11px] tracking-[0.18em] uppercase border border-noir/25 text-noir px-12 py-5 hover:border-bordeaux hover:text-bordeaux transition-all duration-200">587-577-4026</a>
        </div>
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-noir/30 mt-10">Walk-ins welcome · Patio seating available · Outdoor firepit</p>
      </motion.div>
    </section>
  );
}
