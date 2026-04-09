"use client";
import { motion } from "framer-motion";

export default function Press() {
  return (
    <section className="bg-rouge py-20 md:py-24 px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-8 h-px bg-white/30" />
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/60">As Seen In</span>
          <span className="block w-8 h-px bg-white/30" />
        </div>
        <blockquote className="font-display text-[clamp(20px,3vw,34px)] italic font-normal text-white leading-[1.4] mb-6">
          &ldquo;Le Charme blends French flavour and neighbourhood warmth in a way that feels both authentic and entirely its own.&rdquo;
        </blockquote>
        <cite className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/50 not-italic">— Calgary Herald</cite>
      </motion.div>
    </section>
  );
}
