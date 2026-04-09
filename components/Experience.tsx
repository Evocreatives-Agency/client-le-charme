"use client";
import { motion } from "framer-motion";

const features = [
  { title: "Outdoor Firepit", desc: "Our wood-burning outdoor fireplace creates an intimate atmosphere year-round — warm your hands while the stars appear over Edmonton Trail.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg> },
  { title: "Local Alberta Ingredients", desc: "We work with Alberta's finest producers. Every plate tells the story of our region — from prairie-raised proteins to locally foraged produce.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  { title: "Curated Wine & Cocktails", desc: "A thoughtful selection of French and New World wines, classic cocktails, and local craft beer. Corkage available for that special bottle.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
  { title: "Date Night Favourite", desc: "Intimate table spacing, soft lighting, and attentive service make Le Charme the neighbourhood's most romantic spot for an unhurried evening.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
  { title: "Weekend Brunch", desc: "Saturday and Sunday brunch from 10am–2pm. Classic French brunch dishes, Bloody Caesars, mimosas, and lazy morning coffee.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg> },
  { title: "Private Dining", desc: "Planning a celebration or corporate dinner? Contact us about private dining arrangements for your special occasion.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-noir py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-or">The Experience</span>
            <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-or/30 to-transparent" />
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,56px)] italic font-normal text-creme leading-tight max-w-xl">
            More than a meal,<br/>a true <em>soirée</em>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-px bg-creme/[0.05]">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-noir p-10 md:p-12 hover:bg-encre transition-colors duration-300 group">
              <div className="text-or mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">{f.icon}</div>
              <h3 className="font-display text-xl italic text-creme mb-3">{f.title}</h3>
              <p className="font-body text-[15px] text-creme/45 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
