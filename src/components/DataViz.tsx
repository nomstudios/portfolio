import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { assignments } from "@/data/portfolio";
import { ClientOnly } from "./ClientOnly";
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell,
  RadialBarChart, RadialBar,
} from "recharts";

// Aggregations
const sectorCounts = (() => {
  const m: Record<string, number> = {};
  assignments.forEach((a) => (m[a.sector] = (m[a.sector] || 0) + 1));
  return Object.entries(m).map(([name, value]) => ({ name, value }));
})();

const employerCounts = (() => {
  const m: Record<string, number> = {};
  assignments.forEach((a) => (m[a.employer] = (m[a.employer] || 0) + 1));
  return Object.entries(m)
    .map(([name, value]) => ({ name: name.length > 38 ? name.slice(0, 36) + "…" : name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 6);
})();

const rateByYear = (() => {
  const m: Record<number, { sum: number; count: number }> = {};
  assignments.forEach((a) => {
    if (!m[a.year]) m[a.year] = { sum: 0, count: 0 };
    m[a.year].sum += a.rateUSD;
    m[a.year].count += 1;
  });
  return Object.entries(m)
    .map(([y, { sum, count }]) => ({ year: y, rate: Math.round(sum / count), count }))
    .sort((a, b) => +a.year - +b.year);
})();

// Grays array mapped to theme CSS variables
const grays = [
  "var(--ink)",
  "var(--graphite)",
  "var(--steel)",
  "var(--silver)",
  "var(--border)"
];

function SectionHeader({ idx, title, subtitle }: { idx: string; title: string; subtitle: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-10 mb-20">
      <div className="md:col-span-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">§ {idx} / Data</p>
      </div>
      <div className="md:col-span-9">
        <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] mb-4 text-foreground">{title}</h2>
        <p className="text-muted-foreground max-w-xl">{subtitle}</p>
      </div>
    </div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        {inView ? (
          <CountUp end={to} />
        ) : 0}
      </motion.span>
      {suffix}
    </span>
  );
}

function CountUp({ end }: { end: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <motion.span
      ref={ref}
      initial={{ "--n": 0 } as any}
      animate={{ "--n": end } as any}
      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      onUpdate={(latest) => {
        if (ref.current) ref.current.textContent = String(Math.round(latest["--n" as any] as number));
      }}
    >
      0
    </motion.span>
  );
}

export function DataViz() {
  return (
    <section id="data" className="py-32 bg-background relative overflow-hidden">
      {/* Background glowing line */}
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-foreground/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeader
          idx="03"
          title="Decade in numbers"
          subtitle="Aggregated metrics across 19 consulting engagements spanning governments, development banks, and humanitarian agencies."
        />

        {/* KPIs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { v: 19, k: "Assignments" },
            { v: 15, k: "Years Active" },
            { v: 8, k: "Unique Employers" },
            { v: 462, k: "Peak Day Rate $" },
          ].map((s) => (
            <motion.div 
              key={s.k} 
              whileHover={{ y: -4 }}
              className="bg-card/25 border border-border/80 hover:border-border rounded-xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 shadow-md"
            >
              <p className="font-display text-4xl md:text-6xl text-foreground">
                <Counter to={s.v} />
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-3">{s.k}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts grid */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Day rate evolution */}
          <div className="md:col-span-8 bg-card/25 border border-border/80 rounded-xl p-6 md:p-10 backdrop-blur-sm shadow-md">
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Fig. 01</p>
                <h3 className="font-display text-2xl uppercase text-foreground">Day Rate Evolution</h3>
              </div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">USD / 2014–2025</p>
            </div>
            <ClientOnly fallback={<div className="h-80" />}>
              <div className="h-80">
                <ResponsiveContainer>
                  <BarChart data={rateByYear} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
                    <XAxis dataKey="year" stroke="var(--border)" tick={{ fontFamily: "monospace", fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={{ stroke: "var(--border)" }} tickLine={false} />
                    <YAxis stroke="var(--border)" tick={{ fontFamily: "monospace", fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      cursor={{ fill: "var(--secondary)", opacity: 0.15 }}
                      contentStyle={{ 
                        background: "var(--card)", 
                        border: "1px solid var(--border)", 
                        borderRadius: "8px",
                        fontFamily: "monospace", 
                        fontSize: 11, 
                        textTransform: "uppercase", 
                        color: "var(--foreground)",
                        backdropFilter: "blur(6px)"
                      }}
                      labelStyle={{ color: "var(--muted-foreground)" }}
                    />
                    <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                      {rateByYear.map((d, i) => (
                        <Cell 
                          key={i} 
                          fill="var(--foreground)" 
                          opacity={0.35 + (i / rateByYear.length) * 0.65} 
                          className="transition-all duration-300 hover:opacity-100" 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ClientOnly>
          </div>

          {/* Sector split */}
          <div className="md:col-span-4 bg-card/25 border border-border/80 rounded-xl p-6 md:p-10 backdrop-blur-sm shadow-md flex flex-col justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Fig. 02</p>
              <h3 className="font-display text-2xl uppercase mb-8 text-foreground">Sector Split</h3>
              <ClientOnly fallback={<div className="h-64" />}>
                <div className="h-64 flex items-center justify-center">
                  <ResponsiveContainer>
                    <RadialBarChart innerRadius="25%" outerRadius="100%" data={sectorCounts.map((s, i) => ({ ...s, fill: grays[i % grays.length] }))} startAngle={90} endAngle={-270}>
                      <RadialBar background={{ fill: "var(--secondary)", opacity: 0.2 }} dataKey="value" cornerRadius={0} />
                      <Tooltip
                        contentStyle={{ 
                          background: "var(--card)", 
                          border: "1px solid var(--border)", 
                          borderRadius: "8px",
                          fontFamily: "monospace", 
                          fontSize: 11, 
                          color: "var(--foreground)",
                          backdropFilter: "blur(6px)"
                        }}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
              </ClientOnly>
            </div>
            <div className="space-y-2 mt-4 pt-4 border-t border-border/40">
              {sectorCounts.map((s, i) => (
                <div key={s.name} className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: grays[i % grays.length] }} />
                    <span>{s.name}</span>
                  </div>
                  <span className="text-foreground font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Employers bar */}
          <div className="md:col-span-12 bg-card/25 border border-border/80 rounded-xl p-6 md:p-10 backdrop-blur-sm shadow-md">
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Fig. 03</p>
                <h3 className="font-display text-2xl uppercase text-foreground">Top Employers — Engagements</h3>
              </div>
            </div>
            <div className="space-y-5">
              {employerCounts.map((e, i) => {
                const max = employerCounts[0].value;
                const pct = (e.value / max) * 100;
                return (
                  <motion.div
                    key={e.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.07 }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <p className="font-display text-base md:text-lg uppercase text-foreground/90">{e.name}</p>
                      <p className="font-mono text-xs text-muted-foreground font-semibold">×{e.value}</p>
                    </div>
                    <div className="h-1.5 bg-secondary/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-muted-foreground to-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
