import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useScrollReveal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((link) => link.href.slice(1)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      {/* Floating Pill Container */}
      <nav
        className={cn(
          "relative flex items-center justify-center rounded-full border border-white/10 bg-background/60 backdrop-blur-xl transition-all duration-500 ease-out",
          "shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]",
          isScrolled
            ? "px-4 py-2 md:px-8 md:py-2.5"
            : "px-6 py-3 md:px-12 md:py-4"
        )}
      >
        {/* Gradient Border Glow Effect */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Center - Desktop Navigation */}
        {/* Center - Desktop Navigation */}
        <ul className={cn(
          "hidden items-center md:flex",
          isScrolled ? "gap-6 lg:gap-8" : "gap-8 lg:gap-12"
        )}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "group relative font-medium transition-all duration-300",
                  isScrolled ? "text-xs" : "text-sm",
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {/* Active/Hover Indicator */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300",
                    activeSection === link.href.slice(1)
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
                  )}
                />
                {/* Glow Effect on Hover */}
                <span className="absolute inset-0 -z-10 rounded-lg bg-primary/0 blur-lg transition-all duration-300 group-hover:bg-primary/10" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Only on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "relative rounded-full p-2 text-foreground transition-all duration-300 hover:bg-white/10 md:hidden",
            isScrolled ? "scale-90" : "scale-100"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-background/80 backdrop-blur-xl transition-all duration-300 md:hidden",
          "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  activeSection === link.href.slice(1)
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
