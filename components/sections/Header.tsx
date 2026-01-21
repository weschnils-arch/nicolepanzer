"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCtaClick = () => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector("#kontakt");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-accent hover:text-accent/80 transition-colors flex-shrink-0 leading-none"
          >
            <span className="block text-2xl font-serif font-semibold leading-none">
              LOV ME
            </span>
            <span className="block text-sm font-medium text-text/80 leading-none mt-1">
              Nicole Angelika Panzer
            </span>
          </a>

          {/* Desktop Nav + CTA - Right aligned */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-sm font-medium text-text hover:text-accent transition-colors whitespace-nowrap leading-none"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button
              onClick={handleCtaClick}
              variant="primary"
              size="sm"
              className="whitespace-nowrap"
            >
              Termin buchen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text hover:text-accent transition-all duration-300 bg-bg/80 rounded-lg ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
              <X 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 pb-6 border-t border-white/30 pt-4 bg-bg/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-base font-medium text-text hover:text-accent transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={handleCtaClick}
                variant="primary"
                size="md"
                className="mt-2 w-full"
              >
                Termin buchen
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

