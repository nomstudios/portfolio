import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { serviceAreas } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">§ 04 / Services</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
              SERVICES
            </h2>
            <p className="mt-8 max-w-3xl text-base md:text-lg text-foreground/70 leading-relaxed">
              Select a service to explore the full offering, methodology, and delivery details. Each service opens a dedicated page for deeper information and project-aligned expertise.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {serviceAreas.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="bg-card/25 border border-border/80 hover:border-border rounded-xl p-8 backdrop-blur-sm shadow-md hover:bg-card/45 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Service 0{index + 1}</p>
                    <h3 className="mt-4 text-2xl font-display uppercase leading-tight text-foreground">{service.title}</h3>
                  </div>
                  <div className="border border-border/85 bg-secondary/30 px-3 py-2 text-[9px] uppercase tracking-[0.3em] text-foreground/85 rounded-sm">
                    {service.tag}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center justify-center rounded-lg border border-border hover:border-foreground/80 px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-mono"
                >
                  Read more
                </Link>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{service.short}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
