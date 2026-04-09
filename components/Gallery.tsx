"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "https://www.diningandcooking.com/wp-content/uploads/2025/10/d48a88a647f99342757cf67a459b2868.jpeg",
    alt: "Alberta Rainbow Trout — pan-seared, dill beurre blanc, seasonal vegetables",
    dish: "Alberta Rainbow Trout",
  },
  {
    src: "https://www.diningandcooking.com/wp-content/uploads/2025/10/0ad51bcea2e799f9e78334c3dba8d689.jpeg",
    alt: "Coquilles St. Jacques — creamy scallops in shell",
    dish: "Coquilles St. Jacques",
  },
  {
    src: "https://www.diningandcooking.com/wp-content/uploads/2025/10/c5287c928dfc051cb6a37899638b4967.jpeg",
    alt: "Pork Schnitzel — spinach spatula, brown butter caper sauce",
    dish: "Pork Schnitzel",
  },
  {
    src: "https://www.diningandcooking.com/wp-content/uploads/2025/10/8bfaebfecc05f56c1252c6e2a6ed9c2e.jpeg",
    alt: "Lemon Ricotta and Spinach Cappelletti",
    dish: "Cappelletti",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-noir py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-or">From the Kitchen</span>
            <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-or/30 to-transparent" />
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,56px)] italic font-normal text-creme leading-tight">
            Crafted with care,<br/>plated with <em>passion</em>
          </h2>
        </motion.div>

        {/* Editorial photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Large feature — spans 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-2 md:row-span-2 relative overflow-hidden group"
            style={{ aspectRatio: '1 / 1' }}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-display text-xl italic text-creme">{photos[0].dish}</p>
            </div>
          </motion.div>

          {/* Three smaller photos */}
          {photos.slice(1).map((photo, i) => (
            <motion.div key={photo.dish}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
              className="relative overflow-hidden group"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display text-base italic text-creme">{photo.dish}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="font-mono text-[9px] tracking-[0.1em] text-creme/20 text-right mt-4">
          Photos: Gavin Young / Postmedia
        </p>

      </div>
    </section>
  );
}
