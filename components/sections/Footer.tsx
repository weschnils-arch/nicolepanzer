"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-text text-white py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/Lovme.png"
                alt="Lovme Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-xl font-serif font-semibold text-gold">
                LOVME
              </h3>
            </div>
            <p className="text-sm opacity-80 mb-4">
              mit Nicole Angelika Panzer · Finde deine wahre Essenz
            </p>
            <div className="space-y-2 text-sm opacity-80">
              <a
                href="mailto:nicole@lov-me.com"
                className="flex items-center gap-2 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                nicole@lov-me.com
              </a>
              <a
                href="https://lov-me.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-100 transition-opacity"
              >
                <Globe className="h-4 w-4" />
                lov-me.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/#angebot" className="hover:opacity-100 transition-opacity">
                  Angebot
                </Link>
              </li>
              <li>
                <Link href="/#methode" className="hover:opacity-100 transition-opacity">
                  Methode
                </Link>
              </li>
              <li>
                <Link href="/#ablauf" className="hover:opacity-100 transition-opacity">
                  Ablauf
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" className="hover:opacity-100 transition-opacity">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link
                  href="/impressum"
                  className="hover:opacity-100 transition-opacity"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:opacity-100 transition-opacity"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Social Media</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} Nicole Angelika Panzer. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

