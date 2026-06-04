export function Marquee() {
  const items = ["Data Architecture", "Dashboard Engineering", "Climate Finance", "PostgreSQL · Supabase", "GIS · Cartography", "3D Visualization", "Generative AI", "Knowledge Products"];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="border-y border-border bg-background py-6 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl uppercase mx-8 text-foreground/90 inline-flex items-center">
            {t}
            <span className="mx-8 text-foreground/30">✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}
