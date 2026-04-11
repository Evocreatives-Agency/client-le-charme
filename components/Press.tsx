"use client";
import { motion } from "framer-motion";

export default function Press() {
  return (
    <section className="bg-rouge py-16 md:py-20">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
        className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-7">
          <span className="block w-10 h-px bg-white/25" />
          <span className="font-mono text-[9px] tracking-[0.32em] uppercase text-white/50">As Seen In</span>
          <span className="block w-10 h-px bg-white/25" />
        </div>
        <blockquote className="font-display text-[clamp(22px,3.5vw,38px)] italic text-white leading-[1.35] mb-5">
          &ldquo;Le Charme blends French flavour and neighbourhood warmth in a way that feels both authentic and entirely its own.&rdquo;
        </blockquote>
        <cite className="font-mono text-[10px] tracking-[0.24em] uppercase text-white/45 not-italic">— Calgary Herald</cite>
      </motion.div>
    </section>
  );
}
