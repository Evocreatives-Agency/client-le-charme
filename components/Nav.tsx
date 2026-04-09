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
        scrolled
          ? "bg-white/95 backdrop-blur-sm py-3 px-8 shadow-sm border-b border-rouge/10"
          : "bg-gradient-to-b from-encre/90 to-transparent py-6 px-12"
      }`}>
        <a href="#home" className={`font-display text-xl italic tracking-wider transition-colors ${
          scrolled ? "text-rouge" : "text-or"
        }`}>Le Charme</a>

        <ul className="hidden md:flex gap-10 list-none">
          {[["#menu","Menu"],["#experience","Experience"],["#info","Hours"],["#reserve","Reserve"]].map(([href,label])=>(
            <li key={href}>
              <a href={href} className={`font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                scrolled ? "text-encre/50 hover:text-rouge" : "text-creme/60 hover:text-or"
              }`}>{label}</a>
            </li>
          ))}
        </ul>

        <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA&ot_source=Restaurant%20website"
          target="_blank" rel="noopener noreferrer"
          className={`hidden md:inline-block font-mono text-[11px] tracking-[0.18em] uppercase px-6 py-3 transition-all duration-200 ${
            scrolled
              ? "bg-rouge text-white hover:bg-rouge-dark"
              : "border border-or text-or hover:bg-or hover:text-encre"
          }`}>
          Book a Table
        </a>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? "bg-encre" : "bg-creme"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? "bg-encre" : "bg-creme"} ${mobileOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? "bg-encre" : "bg-creme"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-encre/98 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {[["#menu","Menu"],["#experience","Experience"],["#info","Hours & Location"],["#reserve","Reserve"]].map(([href,label])=>(
          <a key={href} href={href} onClick={() => setMobileOpen(false)}
            className="font-display text-3xl italic text-creme hover:text-or transition-colors">{label}</a>
        ))}
        <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA&ot_source=Restaurant%20website"
          target="_blank" rel="noopener noreferrer"
          className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase bg-rouge text-white px-10 py-4 hover:bg-rouge-dark transition-colors">
          Book a Table
        </a>
      </div>
    </>
  );
}
