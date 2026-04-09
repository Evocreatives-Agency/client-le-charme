"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-creme py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-rouge">Our Story</span>
            <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-rouge/30 to-transparent" />
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,54px)] italic font-normal leading-[1.05] text-encre mb-7">
            French flavour,<br/>neighbourhood warmth
          </h2>
          <p className="font-body text-lg leading-relaxed text-encre/65 mb-5">
            Tucked into a warm, lived-in dining room on Edmonton Trail, Le Charme is the French bistro
            Calgary&apos;s northeast has been waiting for. Owner Matt Drummond meticulously rebuilt the
            space — exposed brick, warm wood, vintage curiosities, and a long red bar built to look like
            it&apos;s been there for decades.
          </p>
          <p className="font-body text-lg leading-relaxed text-encre/65 mb-10">
            Chef Nils Schneider&apos;s seasonal menu draws on the best of Alberta&apos;s larder — local
            proteins, fresh produce — elevated with classic bistro finesse. Whether it&apos;s a casual
            Tuesday dinner or a special celebration, every table at Le Charme is a table worth lingering at.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-rouge/15">
            {[
              ["Cuisine","Casual Elegant French / Canadian"],
              ["Ambiance","Intimate, warm, neighbourhood"],
              ["Outdoor","Wood-burning firepit & patio"],
              ["Perfect For","Date nights & small celebrations"],
            ].map(([label, val]) => (
              <div key={label}>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-rouge mb-1">{label}</p>
                <p className="font-body text-[15px] text-encre/55 leading-snug">{val}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
          className="relative hidden md:block">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://www.diningandcooking.com/wp-content/uploads/2025/10/52adec765aff5836dea23fcd167c4a0a.jpeg"
              alt="Le Charme dining room interior"
              fill className="object-cover object-center"
              sizes="(max-width: 1200px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-encre/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-rouge/20 -z-10" />
          <p className="absolute bottom-3 right-3 font-mono text-[9px] tracking-[0.08em] text-white/40">Photo: Gavin Young / Postmedia</p>
        </motion.div>

      </div>
    </section>
  );
}
