"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { trustChips } from "@/lib/constants";
import Image from "next/image";

export const Hero = () => {
  const handleCtaClick = () => {
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

  const handleProcessClick = () => {
    const element = document.querySelector("#ablauf");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Hero Image - Right 50% */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full overflow-hidden">
        <Image
          src="/self-love-sunrise.webp"
          alt="Woman embracing sunrise"
          fill
          priority
          className="object-cover object-center lg:object-[75%_center]"
          quality={90}
        />
        {/* Gradient overlay from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 via-bg/60 via-bg/40 via-bg/20 to-transparent" />
        {/* Lovme Logo over image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/Lovme.png"
            alt="Lovme Logo"
            width={300}
            height={300}
            className="w-44 sm:w-56 lg:w-72 h-auto opacity-85 -translate-y-[40%] -translate-x-[15%]"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-text leading-tight">
              <span className="block sm:whitespace-nowrap">Finde deine wahre Essenz:</span>
              <span className="block sm:whitespace-nowrap">Ein Weg zu dir selbst.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted leading-relaxed">
              Entdecke deine innere Stärke und gestalte ein Leben, das du liebst.
            </p>

            <p className="text-base text-muted">
              Für Frauen, Jugendliche und Menschen mit Stress, innerer Unruhe oder dem Gefühl festzustecken.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleCtaClick}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto whitespace-nowrap h-[56px] sm:h-auto text-sm sm:text-base"
              >
                Jetzt kostenloses Erstgespräch vereinbaren
              </Button>
              <Button
                onClick={handleProcessClick}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto whitespace-nowrap bg-card backdrop-blur-sm border-0 text-accent hover:bg-accent hover:text-white h-[56px] sm:h-auto text-sm sm:text-base"
              >
                Das erwartet dich
              </Button>
            </div>
          </motion.div>

          {/* Right: Spacer for image */}
          <div className="hidden lg:block" />
        </div>

        {/* Trust Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 lg:mt-16 flex flex-wrap gap-4"
        >
          {trustChips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              <Icon
                name={chip.icon}
                size={18}
                className="text-gold"
              />
              <span className="text-sm text-text font-medium">
                {chip.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

