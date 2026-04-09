export default function Footer() {
  return (
    <footer className="bg-noir border-t border-creme/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display text-2xl italic text-or mb-1">Le Charme</p>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-creme/25">French Bistro · Calgary</p>
        </div>
        <ul className="flex flex-wrap gap-8 list-none">
          {[["#menu","Menu"],["#experience","Experience"],["#info","Hours"],["#reserve","Reserve"],["https://www.instagram.com/lecharmebistro","Instagram"],["https://www.opentable.ca/r/le-charme-reservations-calgary?restref=1477510","OpenTable"]].map(([href,label])=>(
            <li key={href}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-[10px] tracking-[0.16em] uppercase text-creme/25 hover:text-or transition-colors duration-200">{label}</a></li>
          ))}
        </ul>
      </div>
      <div className="border-t border-creme/[0.05] px-6 md:px-12 py-6">
        <p className="font-mono text-[10px] tracking-[0.1em] text-creme/15 text-center">© {new Date().getFullYear()} Le Charme · 804 Edmonton Trail NE, Calgary, AB · Built by Evocreatives Agency</p>
      </div>
    </footer>
  );
}
