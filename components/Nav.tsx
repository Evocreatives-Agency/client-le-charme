"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-noir/98 py-4 px-8 shadow-2xl" : "bg-gradient-to-b from-noir/80 to-transparent py-6 px-12"
      }`}>
        <a href="#home" className="font-display text-xl italic text-or tracking-wider">Le Charme</a>
        <ul className="hidden md:flex gap-10 list-none">
          {[["#menu","Menu"],["#experience","Experience"],["#info","Hours"],["#reserve","Reserve"]].map(([href,label])=>(
            <li key={href}><a href={href} className="font-mono text-[11px] tracking-[0.18em] uppercase text-creme/50 hover:text-or transition-colors duration-200">{label}</a></li>
          ))}
        </ul>
        <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA&ot_source=Restaurant%20website"
          target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-block font-mono text-[11px] tracking-[0.18em] uppercase border border-or text-or px-6 py-3 hover:bg-or hover:text-noir transition-all duration-200">
          Book a Table
        </a>
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-px bg-creme transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-px bg-creme transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-px bg-creme transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </nav>
      <div className={`fixed inset-0 z-40 bg-noir/98 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {[["#menu","Menu"],["#experience","Experience"],["#info","Hours & Location"],["#reserve","Reserve"]].map(([href,label])=>(
          <a key={href} href={href} onClick={() => setMobileOpen(false)} className="font-display text-3xl italic text-creme hover:text-or transition-colors">{label}</a>
        ))}
        <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA&ot_source=Restaurant%20website"
          target="_blank" rel="noopener noreferrer"
          className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase bg-bordeaux text-creme px-10 py-4 hover:bg-bordeaux-light transition-colors">
          Book a Table
        </a>
      </div>
    </>
  );
}
