import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-border/40 relative overflow-hidden">
      {/* Background highlight */}
      <div className="absolute bottom-0 left-[10%] w-[30vw] h-[30vw] rounded-full bg-foreground/[0.008] blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-10">§ 05 / Contact</p>
        <h2 className="font-display text-5xl md:text-8xl lg:text-9xl uppercase leading-[0.85] mb-16 text-foreground">
          Let's<br />
          <span className="text-foreground/20">build</span><br />
          something.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { k: "Phone", v: profile.phone },
            { k: "Based", v: profile.location },
            { k: "Status", v: "Available 2026" },
          ].map((s) => (
            <motion.div 
              key={s.k} 
              whileHover={{ y: -4 }}
              className="bg-card/25 border border-border/80 hover:border-border rounded-xl p-8 backdrop-blur-sm shadow-md transition-all duration-300"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-3">{s.k}</p>
              <p className="font-display text-xl md:text-2xl uppercase text-foreground">{s.v}</p>
            </motion.div>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-border/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
          <p>© 2000 - 2026 Nomi · All rights reserved</p>
          <p>Portfolio Vol. 01 · Designed in monochrome & graphite</p>
        </footer>
      </div>
    </section>
  );
}
