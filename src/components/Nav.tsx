import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import logo from "@/routes/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#data", label: "Data" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    // Initial theme detection
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default is light theme
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/50 border-b border-border/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto object-contain dark:invert dark:brightness-200 transition-all duration-500" />
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em]">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <span className="text-foreground/20 mr-2">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 border border-border hover:border-foreground/80 hover:bg-secondary/40 text-foreground transition-all duration-300 rounded-lg flex items-center justify-center cursor-pointer"
          >
            {theme === "light" ? (
              <Moon className="w-3.5 h-3.5" />
            ) : (
              <Sun className="w-3.5 h-3.5" />
            )}
          </button>
          <a
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-[0.2em] border border-border hover:border-foreground/80 px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Available
          </a>
        </div>
      </div>
    </nav>
  );
}
