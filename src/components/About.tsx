import { motion } from "framer-motion";
import { education, languages, profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-32 max-w-[1400px] mx-auto px-6 md:px-10 relative">
      {/* Background radial highlight */}
      <div className="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-foreground/[0.01] blur-[100px] pointer-events-none" />

      <div className="grid md:grid-cols-12 gap-10 mb-20">
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">§ 01 / About</p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-9 font-display text-4xl md:text-6xl uppercase leading-[0.95]"
        >
          A decade<br />translating complex<br />
          <span className="text-foreground/30">national datasets</span><br />into clear systems.
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-12 gap-6 md:gap-8">
        {/* Identity card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 bg-card/30 hover:bg-card/50 border border-border/80 hover:border-border rounded-xl p-8 md:p-10 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/[0.01] rounded-full blur-xl group-hover:bg-foreground/[0.02] transition-colors duration-500" />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">Identity</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
            {[
              ["Name", profile.name],
              ["Born", profile.dob],
              ["Nationality", profile.nationality],
              ["Based", profile.location],
              ["Phone", profile.phone],
              ["Status", "Available for engagements"],
            ].map(([k, v]) => (
              <div key={k} className="transition-transform duration-300 hover:translate-x-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{k}</p>
                <p className="font-display text-lg uppercase text-foreground">{v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 bg-card/30 hover:bg-card/50 border border-border/80 hover:border-border rounded-xl p-8 md:p-10 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/[0.01] rounded-full blur-lg group-hover:bg-foreground/[0.02] transition-colors duration-500" />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">Languages</p>
          <div className="space-y-5">
            {languages.map((l) => (
              <div key={l.name} className="flex items-baseline justify-between border-b border-border/50 pb-3 transition-colors duration-300 hover:border-foreground/20">
                <p className="font-display text-xl uppercase text-foreground">{l.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{l.level}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-12 bg-card/30 hover:bg-card/50 border border-border/80 hover:border-border rounded-xl p-8 md:p-10 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-foreground/[0.01] rounded-full blur-2xl group-hover:bg-foreground/[0.02] transition-colors duration-500" />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">Education</p>
          <div className="grid md:grid-cols-3 gap-10">
            {education.map((e, idx) => (
              <div key={e.period} className="border-l border-border hover:border-foreground/30 pl-6 transition-all duration-300 hover:translate-x-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">{e.period}</p>
                <p className="font-display text-3xl uppercase text-foreground mb-2">{e.degree}</p>
                <p className="text-sm text-muted-foreground mb-1">{e.detail}</p>
                <p className="text-xs text-muted-foreground/60">{e.institution}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
