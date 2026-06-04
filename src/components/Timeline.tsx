import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { assignments } from "@/data/portfolio";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Center line height animation
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  const ordered = [...assignments].sort((a, b) => b.id - a.id);

  return (
    <section id="timeline" className="py-32 bg-background relative overflow-hidden">
      {/* Background glowing line */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-foreground/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-24">
          <div className="md:col-span-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">§ 02 / Work History</p>
          </div>
          <h2 className="md:col-span-9 font-display text-3xl md:text-5xl uppercase leading-[0.95] text-foreground">
            19 assignments,<br /><span className="text-muted-foreground/30">2014 → 2025</span>
          </h2>
        </div>

        <div ref={ref} className="relative pl-8 md:pl-0">
          {/* Center spine */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border/40 md:-translate-x-px" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-muted-foreground to-border md:-translate-x-px origin-top"
          />

          <div className="space-y-16 md:space-y-28">
            {ordered.map((a, i) => {
              const left = i % 2 === 0;
              
              // We create custom scroll transformations for each item to introduce minor parallax shearing
              // Left cards will shift slightly upwards relative to scroll, right cards slightly downwards.
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* Node */}
                  <div className="absolute left-3 md:left-1/2 top-6 -translate-x-1/2 z-20">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-background bg-foreground shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform duration-300 hover:scale-125" />
                  </div>

                  <div className={`${left ? "md:pr-8 md:text-left" : "md:col-start-2 md:pl-8"}`}>
                    <motion.div 
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="ml-8 md:ml-0 bg-card/25 hover:bg-card/45 border border-border/70 hover:border-border/100 rounded-xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 group shadow-lg"
                    >
                      {/* Meta information row */}
                      <div className="flex items-center justify-between gap-3 mb-4 font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground border-b border-border/40 pb-3">
                        <span className="text-foreground font-semibold">#{String(a.id).padStart(2, "0")}</span>
                        <span>{a.period}</span>
                      </div>

                      {/* Role & Employer */}
                      <h3 className="font-display text-xl md:text-2xl uppercase leading-tight text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {a.role}
                      </h3>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xs font-mono text-muted-foreground">at</span>
                        <span className="text-sm font-semibold text-foreground/90">{a.employer}</span>
                        <span className="text-xs font-mono text-foreground/40">({a.sector})</span>
                      </div>

                      {/* Project title */}
                      <p className="text-xs text-muted-foreground/80 font-mono italic mb-4 border-l border-border/80 pl-3">
                        {a.project}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {a.description}
                      </p>

                      {/* Detailed accomplishments (if available) */}
                      {a.keyAccomplishments && a.keyAccomplishments.length > 0 && (
                        <div className="mb-5">
                          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Key Accomplishments:</p>
                          <ul className="space-y-2">
                            {a.keyAccomplishments.map((item, idx) => (
                              <li key={idx} className="text-xs text-foreground/80 flex items-start gap-2.5">
                                <span className="text-muted-foreground text-[10px] mt-0.5">▪</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technical tools list */}
                      {a.tools && a.tools.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-border/40">
                          <div className="flex flex-wrap gap-1.5">
                            {a.tools.map((tool) => (
                              <span 
                                key={tool} 
                                className="font-mono text-[9px] uppercase tracking-[0.1em] bg-secondary/40 hover:bg-secondary/70 border border-border/60 text-foreground/90 px-2.5 py-1 rounded"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
