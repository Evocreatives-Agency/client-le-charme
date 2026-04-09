"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-encre py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-or">Our Story</span>
            <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-or/30 to-transparent" />
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,54px)] italic font-normal leading-[1.05] text-creme mb-7">
            French flavour,<br/>neighbourhood warmth
          </h2>
          <p className="font-body text-lg leading-relaxed text-creme/65 mb-5">
            Tucked into a warm, lived-in dining room on Edmonton Trail, Le Charme is the French bistro
            Calgary&apos;s northeast has been waiting for. We blend authentic French technique with the
            kind of welcome that makes you feel immediately at home.
          </p>
          <p className="font-body text-lg leading-relaxed text-creme/65 mb-10">
            Chef&apos;s seasonal menu draws on the best of Alberta&apos;s larder — local proteins, fresh
            produce — elevated with classic bistro finesse. Whether it&apos;s a casual Tuesday dinner or
            a special celebration, every table at Le Charme is a table worth lingering at.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-creme/10">
            {[
              ["Cuisine","Casual Elegant French / Canadian"],
              ["Ambiance","Intimate, warm, neighbourhood"],
              ["Outdoor","Wood-burning firepit & patio"],
              ["Perfect For","Date nights & small celebrations"],
            ].map(([label, val]) => (
              <div key={label}>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-or mb-1">{label}</p>
                <p className="font-body text-[15px] text-creme/55 leading-snug">{val}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
          className="relative hidden md:block">
          <div className="relative bg-brun aspect-[3/4] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-bordeaux/30 via-brun to-noir flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-or text-8xl mb-4">✦</div>
                <p className="font-display text-2xl italic text-creme/60">804 Edmonton Trail</p>
                <p className="font-mono text-xs tracking-widest uppercase text-creme/30 mt-2">Calgary, Alberta</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-or/15 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
