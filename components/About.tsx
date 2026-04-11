"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-encre py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
          className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rouge">Our Story</span>
            <span className="block w-16 h-px bg-rouge/30" />
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] italic font-normal text-white leading-[1.0]">
            French flavour,<br/>
            <span className="text-or">neighbourhood</span> warmth
          </h2>
        </motion.div>

        {/* Two-photo + text layout */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">

          {/* Left: tall bar photo */}
          <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}
            className="md:col-span-5 relative">
            <div className="relative overflow-hidden" style={{aspectRatio:'3/4'}}>
              <Image
                src="/interior-bar.jpg"
                alt="Le Charme bar — warm wood and brass accents"
                fill className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-encre/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right: text + small booths photo stacked */}
          <div className="md:col-span-7 flex flex-col justify-between gap-8">
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:0.1}}>
              <p className="font-body text-[19px] leading-[1.75] text-white/65 mb-5">
                Tucked into a warm, lived-in dining room on Edmonton Trail, Le Charme is the French bistro Calgary&apos;s northeast has been waiting for. Owner Matt Drummond meticulously rebuilt the space — exposed brick, warm wood, vintage curiosities, and a long red bar built to look like it&apos;s been there for decades.
              </p>
              <p className="font-body text-[19px] leading-[1.75] text-white/65 mb-10">
                Chef Nils Schneider&apos;s seasonal menu draws on the best of Alberta&apos;s larder — local proteins, fresh produce — elevated with classic bistro finesse.
              </p>
              <div className="grid grid-cols-2 gap-5 pt-8 border-t border-white/[0.08]">
                {[
                  ["Cuisine","Casual Elegant French / Canadian"],
                  ["Ambiance","Intimate, warm, neighbourhood"],
                  ["Outdoor","Wood-burning firepit & patio"],
                  ["Perfect For","Date nights & celebrations"],
                ].map(([l,v])=>(
                  <div key={l}>
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-rouge mb-1.5">{l}</p>
                    <p className="font-body text-[15px] text-white/50 leading-snug">{v}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Booths photo — smaller, offset */}
            <motion.div initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.2}}
              className="relative overflow-hidden ml-auto w-full md:w-5/6" style={{aspectRatio:'16/9'}}>
              <Image
                src="/interior-booths.jpg"
                alt="Le Charme banquette seating with gallery wall"
                fill className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 36vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-encre/10 to-encre/30" />
              <div className="absolute bottom-4 left-5">
                <p className="font-display text-lg italic text-white/80">Gallery wall &amp; booths</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
