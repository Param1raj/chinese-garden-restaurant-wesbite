'use client';

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location === path;
  const showSurface = scrolled || isOpen;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        showSurface
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={cn(
                "text-2xl font-bold font-serif-display transition-colors duration-300",
                showSurface ? "text-foreground" : "text-white"
              )}
            >
              Chinese<span className="text-primary"> Garden</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "nav-link transition-colors duration-300",
                  showSurface ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white",
                  isActive(item.path) && "active",
                  !showSurface && isActive(item.path) && "text-white after:w-full"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                showSurface
                  ? "text-foreground/60 hover:bg-muted hover:text-foreground"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              )}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/reservations">
              <Button className="btn-primary-premium text-sm">Book a Table</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                showSurface
                  ? "text-foreground/60 hover:bg-muted hover:text-foreground"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              )}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "transition-colors duration-300",
                showSurface ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block text-lg font-medium transition-colors duration-200 ${
                    isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/reservations" onClick={() => setIsOpen(false)}>
                <Button className="btn-primary-premium w-full mt-4">Book a Table</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
