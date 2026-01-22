"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-text text-white py-10 lg:py-14">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Left Column: Branding, Contact, Social Media */}
          <div className="flex flex-col items-start w-full">
            <Image
              src="/Lovme_schriftzug.png"
              alt="LOVME Schriftzug"
              width={160}
              height={40}
              className="h-8 w-auto object-contain mb-3 self-start"
            />
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              mit Nicole Angelika Panzer · Finde deine wahre Essenz
            </p>
            
            <div className="space-y-3 text-sm opacity-80 mb-6">
              <a
                href="mailto:nicole@lov-me.com"
                className="flex items-center gap-2 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                nicole@lov-me.com
              </a>
              <a
                href="https://lovme.at"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-100 transition-opacity"
              >
                <Globe className="h-4 w-4 flex-shrink-0" />
                lovme.at
              </a>
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

          {/* Center Column: Large Round Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/Lovme.png"
              alt="Lovme Logo"
              width={220}
              height={220}
              className="h-32 w-32 md:h-44 md:w-44 object-contain"
            />
          </div>

          {/* Right Column: Navigation & Legal */}
          <div className="flex flex-col md:text-right md:pt-11">
            <div className="flex flex-col md:flex-row md:gap-12 md:justify-end">
              <div className="mb-6 md:mb-0">
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
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} Nicole Angelika Panzer. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

