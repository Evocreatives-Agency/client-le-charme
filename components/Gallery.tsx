"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "https://www.diningandcooking.com/wp-content/uploads/2025/10/d48a88a647f99342757cf67a459b2868.jpeg", dish: "Alberta Rainbow Trout" },
  { src: "https://www.diningandcooking.com/wp-content/uploads/2025/10/0ad51bcea2e799f9e78334c3dba8d689.jpeg", dish: "Coquilles Saint-Jacques" },
  { src: "https://www.diningandcooking.com/wp-content/uploads/2025/10/c5287c928dfc051cb6a37899638b4967.jpeg", dish: "Pork Schnitzel" },
  { src: "https://www.diningandcooking.com/wp-content/uploads/2025/10/8bfaebfecc05f56c1252c6e2a6ed9c2e.jpeg", dish: "Cappelletti" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-encre-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-5 bg-rouge flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rouge">From the Kitchen</span>
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,58px)] italic font-normal text-white leading-tight">
            Seasonal plates,<br/><span className="text-or">local Alberta</span> ingredients
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3">
          {/* Large feature — spans 7 cols */}
          <motion.div initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.7}}
            className="col-span-2 md:col-span-7 relative overflow-hidden group" style={{aspectRatio:'16/9'}}>
            <Image src={photos[0].src} alt={photos[0].dish} fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 100vw, 58vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-encre/80 via-transparent" />
            <div className="absolute bottom-5 left-6">
              <p className="font-display text-[22px] italic text-white">{photos[0].dish}</p>
            </div>
          </motion.div>

          {/* 3 stacked — spans 5 cols */}
          <div className="col-span-2 md:col-span-5 grid grid-rows-3 gap-3">
            {photos.slice(1).map((p,i) => (
              <motion.div key={p.dish} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                transition={{duration:0.6,delay:i*0.1}}
                className="relative overflow-hidden group" style={{aspectRatio:'16/7'}}>
                <Image src={p.src} alt={p.dish} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 50vw, 42vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-encre/65 via-encre/10 to-transparent" />
                <div className="absolute inset-y-0 left-0 flex items-center px-5">
                  <p className="font-display text-[17px] italic text-white/90">{p.dish}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="font-mono text-[9px] tracking-[0.1em] text-white/20 text-right mt-3">Photos: Gavin Young / Postmedia</p>
      </div>
    </section>
  );
}
