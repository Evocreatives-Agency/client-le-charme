"use client";
import { motion } from "framer-motion";

const hours = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday – Thursday", time: "3pm – 10pm", closed: false },
  { day: "Friday", time: "3pm – 12am", closed: false },
  { day: "Saturday", time: "10am – 12am (Brunch 10am–2pm)", closed: false },
  { day: "Sunday", time: "10am – 10pm (Brunch 10am–2pm)", closed: false },
];

export default function Info() {
  return (
    <section id="info" className="bg-encre py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-or">Hours</span>
            <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-or/30 to-transparent" />
          </div>
          <h2 className="font-display text-[clamp(30px,3vw,46px)] italic font-normal text-creme mb-10">When to find us</h2>
          <table className="w-full"><tbody>
            {hours.map(({ day, time, closed }) => (
              <tr key={day} className="border-b border-creme/[0.06] last:border-0">
                <td className={`py-4 font-body text-[17px] ${closed ? "text-creme/20" : "text-creme/50"}`}>{day}</td>
                <td className={`py-4 font-body text-[17px] italic text-right ${closed ? "text-creme/20" : "text-creme"}`}>{time}</td>
              </tr>
            ))}
          </tbody></table>
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-creme/25 mt-6">Hours may vary on holidays. Text us to confirm.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-or">Location & Contact</span>
            <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-or/30 to-transparent" />
          </div>
          <h2 className="font-display text-[clamp(30px,3vw,46px)] italic font-normal text-creme mb-10">Find us</h2>
          <div className="space-y-7">
            <div className="flex gap-4 items-start">
              <svg className="w-5 h-5 text-or flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div><p className="font-mono text-[10px] tracking-[0.16em] uppercase text-or mb-1">Address</p>
                <a href="https://www.google.ca/maps/place/Le+Charme" target="_blank" rel="noopener noreferrer" className="font-body text-[17px] text-creme/65 hover:text-or transition-colors border-b border-creme/15 hover:border-or pb-px">804 Edmonton Trail NE<br/>Calgary, Alberta T2E 3J6</a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <svg className="w-5 h-5 text-or flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <div><p className="font-mono text-[10px] tracking-[0.16em] uppercase text-or mb-1">Phone (text preferred)</p>
                <a href="tel:5875774026" className="font-body text-[17px] text-creme/65 hover:text-or transition-colors border-b border-creme/15 hover:border-or pb-px">587-577-4026</a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <svg className="w-5 h-5 text-or flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
              <div><p className="font-mono text-[10px] tracking-[0.16em] uppercase text-or mb-1">Instagram</p>
                <a href="https://www.instagram.com/lecharmebistro" target="_blank" rel="noopener noreferrer" className="font-body text-[17px] text-creme/65 hover:text-or transition-colors border-b border-creme/15 hover:border-or pb-px">@lecharmebistro</a>
              </div>
            </div>
          </div>
          <div className="mt-10 border border-creme/[0.08] overflow-hidden" style={{ filter: "sepia(30%) saturate(60%)" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5!2d-114.047!3d51.063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd32957d40997108c!2sLe%20Charme!5e0!3m2!1sen!2sca!4v1"
              width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Le Charme location map" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
