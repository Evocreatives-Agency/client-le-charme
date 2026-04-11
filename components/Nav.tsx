"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [["#menu","Menu"],["#gallery","Gallery"],["#info","Hours"],["#reserve","Reserve"]];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm border-b border-rouge/10" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <a href="#home" className={`font-display text-[22px] italic tracking-wide transition-colors duration-300 ${
            scrolled ? "text-rouge" : "text-or"
          }`}>Le Charme</a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map(([h,l]) => (
              <li key={h}><a href={h} className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${
                scrolled ? "text-encre/50 hover:text-rouge" : "text-white/60 hover:text-or"
              }`}>{l}</a></li>
            ))}
          </ul>

          <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA"
            target="_blank" rel="noopener noreferrer"
            className={`hidden md:block font-mono text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 transition-all ${
              scrolled ? "bg-rouge text-white hover:bg-rouge-dark" : "border border-or/70 text-or hover:bg-or hover:text-encre"
            }`}>Reserve</a>

          <button className="md:hidden flex flex-col gap-[5px] p-1" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Menu">
            {[0,1,2].map(i=>(
              <span key={i} className={`block w-6 h-px transition-all duration-300 ${
                scrolled?"bg-encre":"bg-white"
              } ${
                i===0&&mobileOpen?"rotate-45 translate-y-[7px]":""
              } ${
                i===1&&mobileOpen?"opacity-0":""
              } ${
                i===2&&mobileOpen?"-rotate-45 -translate-y-[7px]":""
              }`}/>
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <div className={`fixed inset-0 z-40 bg-encre flex flex-col items-center justify-center gap-10 transition-all duration-300 ${
        mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {links.map(([h,l])=>(
          <a key={h} href={h} onClick={()=>setMobileOpen(false)}
            className="font-display text-4xl italic text-white hover:text-or transition-colors">{l}</a>
        ))}
        <a href="https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510&lang=en-CA"
          target="_blank" rel="noopener noreferrer"
          className="mt-2 font-mono text-[11px] tracking-[0.2em] uppercase bg-rouge text-white px-10 py-4">
          Book a Table
        </a>
      </div>
    </>
  );
}
