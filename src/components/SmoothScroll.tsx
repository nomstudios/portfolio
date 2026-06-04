import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // anchor scrolling
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -40 });
      }
    };
    document.addEventListener("click", handler);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      document.removeEventListener("click", handler);
    };
  }, []);
  return null;
}
