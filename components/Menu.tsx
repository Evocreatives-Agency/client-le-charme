"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type MenuItem = { name: string; desc?: string; price?: string };
type MenuSection = { title: string; items: MenuItem[] };

const dinnerSections: MenuSection[] = [
  { title: "Shareables", items: [
    { name: "Le Charme Biscuits", desc: "Cafe de Paris butter, smoked salt", price: "$12" },
    { name: "Truffle Fries", desc: "Truffle mayonnaise, Parmigiano Reggiano", price: "$13" },
    { name: "Pâté en Croûte", desc: "House mustard, herb & pickle salad", price: "$20" },
    { name: "Salade de Betteraves Dorées", desc: "Golden beets, compressed pear, blue cheese", price: "$20" },
    { name: "Garlic Shrimp Toast", desc: "Cayenne, garlic cream, brioche", price: "$18" },
    { name: "Niçoise Salade", desc: "White anchovy, Kalamata, herbes de Provence", price: "$22" },
    { name: "Coquilles Saint-Jacques", desc: "Baked bay scallops, truffle pomme purée, Swiss", price: "$22" },
    { name: "Beef Tartare", desc: "Traditional accompaniments, egg yolk gelée, lavash", price: "$24" },
    { name: "Baked Brie", desc: "Date jam, candied pecans, truffle honey", price: "$20" },
  ]},
  { title: "Mains", items: [
    { name: "Beef Cheek Ragù", desc: "Braised beef cheek, pappardelle, chives", price: "$32" },
    { name: "La Mano Radiatore à la Ratatouille", desc: "Ratatouille sauce, herbes de Provence, micro basil", price: "$28" },
    { name: "Pork Schnitzel", desc: "Spinach spätzle, brown butter caper sauce", price: "$29" },
    { name: "Alberta Rainbow Trout", desc: "Seasonal vegetables, dill beurre blanc sauce", price: "$36" },
    { name: "Flank Steak", desc: "Boursin pomme purée, garlic mushrooms, bordelaise sauce (+$3 blue cheese)", price: "$40" },
  ]},
  { title: "Desserts", items: [
    { name: "Lime Leaf Pavlova", desc: "Blueberry preserve, lemon chantilly, fresh fruit", price: "$13" },
    { name: "NY Banana Cheesecake", desc: "Miso caramel, banana brûlée", price: "$17" },
    { name: "Moelleux au Chocolate", desc: "Spiced pecan, raspberry compote, pecan ice cream", price: "$14" },
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
    <section id="menu" className="bg-white py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-rouge">À La Carte</span>
            <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-rouge/25 to-transparent" />
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,52px)] italic font-normal text-encre leading-tight">Our Menu</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex border-b border-encre/10 mb-12">
          {(["dinner","brunch"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`font-mono text-[11px] tracking-[0.18em] uppercase px-7 py-4 border-b-2 -mb-px transition-all duration-200 ${
                activeTab === tab ? "text-rouge border-rouge" : "text-encre/35 border-transparent hover:text-encre/60"
              }`}>
              {tab === "dinner" ? "Dinner" : "Brunch"}
            </button>
          ))}
        </div>

        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {sections.map((section) => (
            <div key={section.title} className="mb-10">
              {/* Section header styled like the menu card */}
              <div className="bg-rouge px-5 py-3 mb-4 inline-block">
                <h3 className="font-display text-[13px] italic tracking-wide text-white">{section.title}</h3>
              </div>
              {section.items.map((item) => (
                <div key={item.name} className="flex justify-between items-baseline gap-4 py-3.5 border-b border-encre/[0.06] last:border-0">
                  <div className="flex-1">
                    <p className="font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-rouge mb-1">{item.name}</p>
                    {item.desc && <p className="font-body text-[14px] text-encre/50 leading-snug uppercase tracking-wide text-[11px]">{item.desc}</p>}
                  </div>
                  {item.price && <span className="font-mono text-[13px] text-rouge flex-shrink-0 font-medium">{item.price}</span>}
                </div>
              ))}
            </div>
          ))}

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://static1.squarespace.com/static/6843723f36011b46b7924fc3/t/69a786692b5f6176a0b90965/1772586601864/2.png"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-rouge/20 p-5 hover:border-rouge hover:bg-rouge/[0.03] transition-all">
              <svg className="w-4 h-4 text-rouge" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-rouge">Full Dinner Menu</span>
            </a>
            <a href="https://static1.squarespace.com/static/6843723f36011b46b7924fc3/t/69b6de6f9092e06a62e2620a/1773592175147/Brunch+menu+March+12-3.pdf"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-rouge/20 p-5 hover:border-rouge hover:bg-rouge/[0.03] transition-all">
              <svg className="w-4 h-4 text-rouge" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-rouge">Brunch Menu PDF</span>
            </a>
          </div>
          <p className="font-body text-[14px] italic text-encre/35 text-center mt-8">Menu changes seasonally. Prices subject to change.</p>
        </motion.div>
      </div>
    </section>
  );
}
