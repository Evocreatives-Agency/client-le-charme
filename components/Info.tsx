"use client";
import { motion } from "framer-motion";

const hours = [
  { day: "Monday",           time: "Closed",                           closed: true },
  { day: "Tue – Thu",        time: "3pm – 10pm",                        closed: false },
  { day: "Friday",           time: "3pm – 12am",                        closed: false },
  { day: "Saturday",         time: "10am – 12am (Brunch 10–2pm)",       closed: false },
  { day: "Sunday",           time: "10am – 10pm (Brunch 10–2pm)",       closed: false },
];

export default function Info() {
  return (
    <section id="info" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-20">

        {/* Hours */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rouge">Hours</span>
            <span className="block w-12 h-px bg-rouge/25" />
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,50px)] italic text-encre mb-10">When to find us</h2>
          <table className="w-full">
            <tbody>
              {hours.map(({day,time,closed})=>(
                <tr key={day} className="border-b border-encre/[0.06] last:border-0">
                  <td className={`py-4 font-body text-[17px] pr-4 ${closed?"text-encre/20":"text-encre/55"}`}>{day}</td>
                  <td className={`py-4 font-body text-[17px] italic text-right ${closed?"text-encre/20":"text-encre"}`}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-encre/30 mt-5">Hours may vary on holidays · Text us to confirm</p>
        </motion.div>

        {/* Contact */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.12}}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rouge">Find Us</span>
            <span className="block w-12 h-px bg-rouge/25" />
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,50px)] italic text-encre mb-10">Location &amp; Contact</h2>

          <div className="space-y-6 mb-10">
            {[
              { label: "Address", value: "804 Edmonton Trail NE\nCalgary, AB  T2E 3J6", href: "https://www.google.ca/maps/place/Le+Charme" },
              { label: "Phone (text preferred)", value: "587-577-4026", href: "tel:5875774026" },
              { label: "Instagram", value: "@lecharmebistro", href: "https://www.instagram.com/lecharmebistro" },
            ].map(({label,value,href})=>(
              <div key={label} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-rouge flex-shrink-0 mt-2.5" />
                <div>
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-rouge mb-1">{label}</p>
                  <a href={href} target={href.startsWith('http')?'_blank':undefined}
                    rel={href.startsWith('http')?'noopener noreferrer':undefined}
                    className="font-body text-[17px] text-encre/65 hover:text-rouge transition-colors whitespace-pre-line">{value}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden border border-encre/08">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5!2d-114.047!3d51.063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd32957d40997108c!2sLe%20Charme!5e0!3m2!1sen!2sca!4v1"
              width="100%" height="240" style={{border:0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Le Charme location" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
