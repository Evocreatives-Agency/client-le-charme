"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = { name: string; desc?: string; price?: string };
type Sec  = { title: string; items: Item[] };

const dinner: Sec[] = [
  { title: "Shareables", items: [
    { name: "Le Charme Biscuits",           desc: "Cafe de Paris butter, smoked salt",                            price: "12" },
    { name: "Truffle Fries",                desc: "Truffle mayonnaise, Parmigiano Reggiano",                     price: "13" },
    { name: "P\u00e2t\u00e9 en Cro\u00fbte",             desc: "House mustard, herb & pickle salad",                        price: "20" },
    { name: "Salade de Betteraves Dor\u00e9es", desc: "Golden beets, compressed pear, blue cheese",                  price: "20" },
    { name: "Garlic Shrimp Toast",          desc: "Cayenne, garlic cream, brioche",                             price: "18" },
    { name: "Ni\u00e7oise Salade",              desc: "White anchovy, Kalamata, herbes de Provence",                price: "22" },
    { name: "Coquilles Saint-Jacques",      desc: "Baked bay scallops, truffle pomme pur\u00e9e, Swiss",             price: "22" },
    { name: "Beef Tartare",                desc: "Traditional accompaniments, egg yolk gel\u00e9e, lavash",          price: "24" },
    { name: "Baked Brie",                  desc: "Date jam, candied pecans, truffle honey",                     price: "20" },
  ]},
  { title: "Mains", items: [
    { name: "Beef Cheek Rag\u00f9",            desc: "Braised beef cheek, pappardelle, chives",                     price: "32" },
    { name: "Ratatouille Radiatore",        desc: "La Mano pasta, ratatouille sauce, herbes de Provence",        price: "28" },
    { name: "Pork Schnitzel",              desc: "Spinach sp\u00e4tzle, brown butter caper sauce",                  price: "29" },
    { name: "Alberta Rainbow Trout",       desc: "Seasonal vegetables, dill beurre blanc sauce",                price: "36" },
    { name: "Flank Steak",                desc: "Boursin pomme pur\u00e9e, garlic mushrooms, bordelaise",           price: "40" },
  ]},
  { title: "Desserts", items: [
    { name: "Lime Leaf Pavlova",           desc: "Blueberry preserve, lemon chantilly, fresh fruit",            price: "13" },
    { name: "NY Banana Cheesecake",        desc: "Miso caramel, banana br\u00fbl\u00e9e",                                 price: "17" },
    { name: "Moelleux au Chocolate",       desc: "Spiced pecan, raspberry compote, pecan ice cream",            price: "14" },
  ]},
];

const brunch: Sec[] = [
  { title: "Brunch \u2014 Sat & Sun 10am\u20132pm", items: [
    { name: "Croque Madame",       desc: "Black forest ham, gruy\u00e8re mornay, fried egg, frites" },
    { name: "French Omelette",    desc: "Fine herbs, ch\u00e8vre, roasted cherry tomatoes, dressed greens" },
    { name: "Eggs Benedict",      desc: "House-cured salmon, hollandaise, wilted spinach, brioche" },
    { name: "Brioche French Toast",desc: "Caramelised apple, maple cr\u00e8me anglaise, candied pecans" },
    { name: "Steak & Eggs",       desc: "Alberta flank, two eggs any style, truffle frites" },
  ]},
  { title: "\u00c0 Boire", items: [
    { name: "Classic Mimosa",     desc: "Prosecco, fresh squeezed orange juice" },
    { name: "Bloody Caesar",      desc: "Clamato, house spice mix, celery, lemon" },
    { name: "Caf\u00e9 Au Lait",      desc: "Double espresso, steamed whole milk" },
  ]},
];

export default function Menu() {
  const [tab, setTab] = useState<"dinner"|"brunch">("dinner");
  const secs = tab === "dinner" ? dinner : brunch;
  return (
    <section id="menu" className="bg-creme py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-5 bg-rouge flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rouge">À La Carte</span>
          </div>
          <h2 className="font-display text-[clamp(42px,5vw,68px)] italic font-normal text-encre leading-[0.95]">Our Menu</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex mb-12">
          {(["dinner","brunch"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`font-mono text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 border-b-2 transition-all ${
                tab===t ? "text-rouge border-rouge" : "text-encre/30 border-transparent hover:text-encre/60"
              }`}>
              {t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:0.25}}>
            {secs.map((sec,si) => (
              <div key={sec.title} className={si>0 ? "mt-12 pt-10 border-t border-encre/[0.07]" : ""}>
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-5 h-[2px] bg-rouge" />
                  <h3 className="font-mono text-[11px] tracking-[0.24em] uppercase text-encre/50">{sec.title}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-10">
                  {sec.items.map(item => (
                    <div key={item.name} className="py-4 border-b border-encre/[0.06] flex justify-between items-start gap-3 last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-[12px] font-medium tracking-[0.08em] uppercase text-rouge leading-tight mb-1.5">{item.name}</p>
                        {item.desc && <p className="font-body text-[14px] text-encre/42 leading-snug">{item.desc}</p>}
                      </div>
                      {item.price && <span className="font-body text-[16px] italic text-encre/50 flex-shrink-0">${item.price}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-encre/[0.07] flex flex-wrap gap-4">
              {[
                ["Full Dinner Menu","https://static1.squarespace.com/static/6843723f36011b46b7924fc3/t/69a786692b5f6176a0b90965/1772586601864/2.png"],
                ["Brunch Menu PDF","https://static1.squarespace.com/static/6843723f36011b46b7924fc3/t/69b6de6f9092e06a62e2620a/1773592175147/Brunch+menu+March+12-3.pdf"],
              ].map(([label,href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.18em] uppercase text-rouge border border-rouge/25 px-6 py-3 hover:bg-rouge hover:text-white transition-all">
                  {label}
                </a>
              ))}
            </div>
            <p className="font-body text-[13px] italic text-encre/30 mt-6">Menu changes seasonally. Prices subject to change.</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
