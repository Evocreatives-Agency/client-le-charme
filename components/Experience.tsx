"use client";
import { motion } from "framer-motion";

const features = [
  { emoji: "🔥", title: "Outdoor Firepit",           desc: "Wood-burning fireplace on the patio — intimate warmth year-round." },
  { emoji: "🌾", title: "Local Alberta Ingredients", desc: "Prairie-raised proteins and locally foraged produce every season." },
  { emoji: "🍷", title: "Curated Wine & Cocktails",  desc: "French & New World wines, classic cocktails, corkage available." },
  { emoji: "💫", title: "Date Night Favourite",       desc: "Intimate spacing, soft lighting, unhurried attentive service." },
  { emoji: "☀️", title: "Weekend Brunch",             desc: "Saturday & Sunday 10am–2pm — Caesars, mimosas, classic plates." },
  { emoji: "🎉", title: "Private Dining",             desc: "Small celebrations & group dinners — text us to arrange." },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-creme-warm py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-5 bg-rouge flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rouge">The Experience</span>
          </div>
          <h2 className="font-display text-[clamp(38px,5vw,62px)] italic font-normal text-encre">More than a meal</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-encre/[0.07]">
          {features.map((f,i) => (
            <motion.div key={f.title} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:0.5,delay:(i%3)*0.07}}
              className="bg-creme-warm p-8 md:p-10 hover:bg-white transition-colors duration-300">
              <div className="text-[28px] mb-5" aria-hidden>{f.emoji}</div>
              <h3 className="font-display text-xl italic text-encre mb-2">{f.title}</h3>
              <p className="font-body text-[15px] text-encre/48 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
