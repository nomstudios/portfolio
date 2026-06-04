import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/portfolio";
import nomiImage from "@/routes/nomi.png";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="top" 
      className="relative min-h-screen overflow-hidden grain bg-background flex flex-col justify-between"
    >
      {/* Background Parallax elements (subtle glowing gradient and grid) */}
      <motion.div 
        style={{ y: yBg, opacity: opacityHero }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-foreground/[0.02] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-foreground/[0.015] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </motion.div>

      {/* Background portrait image aligned to the very right edge of page */}
      <motion.div 
        style={{ y: yImage, opacity: opacityHero }}
        className="absolute bottom-0 right-0 w-full lg:w-[50vw] h-screen z-10 pointer-events-none flex items-end justify-end overflow-hidden"
      >
        <img 
          src={nomiImage} 
          alt="Nomi" 
          className="h-[95vh] lg:h-screen w-auto object-contain object-bottom opacity-85 dark:opacity-65 mix-blend-luminosity select-none" 
        />
      </motion.div>

      <div className="relative z-20 min-h-screen flex flex-col justify-between max-w-[1400px] w-full mx-auto px-6 md:px-10 pt-32 pb-12">
        {/* Header metadata */}
        <motion.div 
          style={{ opacity: opacityHero }}
          className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span>Portfolio<br />Vol. 01 / 2000 - 2026</span>
          <span className="text-right">Faisalabad<br />31.45°N 73.13°E</span>
        </motion.div>

        {/* Hero content */}
        <div className="my-auto max-w-3xl relative z-20">
          <motion.div style={{ y: yText }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6"
            >
              ◐ Database · Systems · Visualization
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-light text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] uppercase text-foreground"
            >
              Nomi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed font-light"
            >
              {profile.tagline}
            </motion.p>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 border border-border/50 rounded-lg overflow-hidden backdrop-blur-md"
        >
          {[
            { k: "Assignments", v: "19" },
            { k: "Years Active", v: "15+" },
            { k: "Employers", v: "08" },
            { k: "Sectors", v: "04" },
          ].map((s) => (
            <div key={s.k} className="bg-card/45 p-6 hover:bg-card/85 transition-colors duration-300">
              <p className="font-display font-light text-3xl md:text-4xl text-foreground">{s.v}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">{s.k}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
