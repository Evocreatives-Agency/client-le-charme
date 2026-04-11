"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-encre py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* Left: tall bar photo */}
          <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}
            className="md:col-span-4 relative overflow-hidden" style={{aspectRatio:'2/3'}}>
            <Image src="/interior-bar.jpg" alt="Le Charme bar"
              fill className="object-cover object-[center_30%]" sizes="(max-width:768px) 100vw, 34vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-encre/50 to-transparent" />
          </motion.div>

          {/* Middle: text */}
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:0.1}}
            className="md:col-span-4 py-4 md:py-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1 h-5 bg-rouge flex-shrink-0" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rouge">Our Story</span>
            </div>
            <h2 className="font-display text-[clamp(34px,4vw,52px)] italic font-normal text-white leading-[1.05] mb-7">
              French flavour,<br/><span className="text-or">neighbourhood</span> warmth
            </h2>
            <p className="font-body text-[18px] leading-[1.8] text-white/60 mb-5">
              Tucked into a warm, lived-in dining room on Edmonton Trail, Le Charme is the French bistro Calgary’s northeast has been waiting for. Owner Matt Drummond meticulously rebuilt the space — exposed brick, warm wood, vintage curiosities, and a long red bar built to look like it’s been there for decades.
            </p>
            <p className="font-body text-[18px] leading-[1.8] text-white/60 mb-10">
              Chef Nils Schneider’s seasonal menu draws on the best of Alberta’s larder — local proteins, fresh produce — elevated with classic bistro finesse.
            </p>
            <div className="grid grid-cols-2 gap-5 pt-8 border-t border-white/[0.08]">
              {[
                ["Cuisine","Casual Elegant French / Canadian"],
                ["Ambiance","Intimate, warm, neighbourhood"],
                ["Outdoor","Wood-burning firepit & patio"],
                ["Perfect For","Date nights & celebrations"],
              ].map(([l,v])=>(
                <div key={l}>
                  <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-rouge mb-1.5">{l}</p>
                  <p className="font-body text-[14px] text-white/45 leading-snug">{v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: booths photo */}
          <motion.div initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.15}}
            className="md:col-span-4 relative overflow-hidden" style={{aspectRatio:'2/3'}}>
            <Image src="/interior-booths.jpg" alt="Le Charme booth seating and gallery wall"
              fill className="object-cover object-[center_20%]" sizes="(max-width:768px) 100vw, 34vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-encre/20 to-encre/40" />
            <div className="absolute bottom-5 left-5">
              <p className="font-display text-base italic text-white/70">Gallery wall & booths</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
