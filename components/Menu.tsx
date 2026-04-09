"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type MenuItem = { name: string; desc?: string; price?: string };
type MenuSection = { title: string; items: MenuItem[] };

const dinnerSections: MenuSection[] = [
  { title: "Shareables", items: [
    { name: "Pâté en Croute", desc: "House-made country pâté, cornichons, grain mustard, grilled sourdough" },
    { name: "Shrimp Toast", desc: "Tiger shrimp mousse, brioche, chili oil, micro herbs" },
    { name: "Truffle Fries", desc: "Hand-cut frites, black truffle, parmesan, fresh thyme" },
    { name: "Confit Chicken Thigh", desc: "Slow-cooked, herb jus, roasted garlic, grilled baguette" },
    { name: "Beef Tartare", desc: "Alberta AAA beef, capers, shallot, quail egg, crostini" },
  ]},
  { title: "Mains", items: [
    { name: "Pork Schnitzel", desc: "Breaded Alberta pork loin, lemon caper butter, potato salad", price: "$28" },
    { name: "Coquilles St. Jacques", desc: "Seared BC scallops, cauliflower purée, pancetta, pea shoots" },
    { name: "Alberta Rainbow Trout", desc: "Pan-seared, beurre blanc, haricots verts, fingerling potato" },
    { name: "Alberta Flank Steak", desc: "Grilled, chimichurri, roasted bone marrow, pommes frites" },
  ]},
  { title: "Desserts", items: [
    { name: "Banana Cheesecake", desc: "Caramelised banana, graham cracker crust, crème fraîche" },
    { name: "Crème Brûlée", desc: "Classic vanilla bean, seasonal compote, tuile" },
    { name: "Cheese Plate", desc: "Selection of Quebec & French cheeses, honeycomb, baguette" },
  ]},
];

const brunchSections: MenuSection[] = [
  { title: "Brunch — Saturday & Sunday 10am–2pm", items: [
    { name: "Croque Madame", desc: "Black forest ham, gruyère mornay, fried egg, frites" },
    { name: "French Omelette", desc: "Fine herbs, chèvre, roasted cherry tomatoes, dressed greens" },
    { name: "Eggs Benedict", desc: "House-cured salmon, hollandaise, wilted spinach, toasted brioche" },
    { name: "Brioche French Toast", desc: "Caramelised apple, maple crème anglaise, candied pecans" },
    { name: "Steak & Eggs", desc: "Alberta flank, two eggs any style, truffle frites, chimichurri" },
  ]},
  { title: "À Boire", items: [
    { name: "Classic Mimosa", desc: "Prosecco, fresh squeezed orange juice" },
    { name: "Bloody Caesar", desc: "Clamato, house spice mix, celery, lemon" },
    { name: "Café Au Lait", desc: "Double espresso, steamed whole milk" },
  ]},
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<"dinner" | "brunch">("dinner");
  const sections = activeTab === "dinner" ? dinnerSections : brunchSections;
  return (
    <section id="menu" className="bg-creme-warm text-noir py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-bordeaux">À La Carte</span>
            <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-bordeaux/25 to-transparent" />
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,52px)] italic font-normal text-noir leading-tight">Our Menu</h2>
        </motion.div>
        <div className="flex border-b border-noir/10 mb-12">
          {(["dinner","brunch"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`font-mono text-[11px] tracking-[0.18em] uppercase px-7 py-4 border-b-2 -mb-px transition-all duration-200 ${
                activeTab === tab ? "text-bordeaux border-bordeaux" : "text-noir/35 border-transparent hover:text-noir/60"
              }`}>
              {tab === "dinner" ? "Dinner" : "Brunch"}
            </button>
          ))}
        </div>
        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {sections.map((section) => (
            <div key={section.title} className="mb-10">
              <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-bordeaux pb-4 border-b border-noir/08 mb-2">{section.title}</h3>
              {section.items.map((item) => (
                <div key={item.name} className="flex justify-between items-baseline gap-4 py-4 border-b border-noir/[0.05] last:border-0">
                  <div className="flex-1">
                    <p className="font-display text-[19px] italic text-noir mb-1">{item.name}</p>
                    {item.desc && <p className="font-body text-[14px] text-noir/45 leading-snug">{item.desc}</p>}
                  </div>
                  {item.price && <span className="font-mono text-[13px] text-bordeaux flex-shrink-0">{item.price}</span>}
                </div>
              ))}
            </div>
          ))}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://static1.squarespace.com/static/6843723f36011b46b7924fc3/t/69a786692b5f6176a0b90965/1772586601864/2.png"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-noir/12 p-5 hover:border-bordeaux hover:bg-bordeaux/[0.03] transition-all">
              <svg className="w-4 h-4 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-bordeaux">Full Dinner Menu</span>
            </a>
            <a href="https://static1.squarespace.com/static/6843723f36011b46b7924fc3/t/69b6de6f9092e06a62e2620a/1773592175147/Brunch+menu+March+12-3.pdf"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-noir/12 p-5 hover:border-bordeaux hover:bg-bordeaux/[0.03] transition-all">
              <svg className="w-4 h-4 text-bordeaux" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-bordeaux">Brunch Menu PDF</span>
            </a>
          </div>
          <p className="font-body text-[14px] italic text-noir/35 text-center mt-8">Menu changes seasonally. Prices subject to change.</p>
        </motion.div>
      </div>
    </section>
  );
}
