import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { DataViz } from "@/components/DataViz";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ClientOnly } from "@/components/ClientOnly";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nomi — Data, Systems & Visualization Portfolio" },
      { name: "description", content: "A decade of national-scale dashboards, data architecture, and visualization systems for governments and development banks." },
      { property: "og:title", content: "Nomi — Portfolio 2000 - 2026" },
      { property: "og:description", content: "Database & Systems Specialist · Visualization Expert · Dashboard Designer. 19 assignments across governments and development banks." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <ClientOnly>
        <SmoothScroll />
      </ClientOnly>
      <Nav />
      <Hero />
      <About />
      <Timeline />
      <DataViz />
      <Skills />
      <Contact />
    </main>
  );
}
