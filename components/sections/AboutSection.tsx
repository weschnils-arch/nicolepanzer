"use client";

import { motion } from "framer-motion";
import { aboutNicole } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-text mb-6">
              {aboutNicole.title}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {aboutNicole.story}
            </p>

            <div className="space-y-4">
              <p className="text-base text-muted">
                Unterstützung des Wohlbefindens im eigenen Körper.
              </p>

              <p className="text-[#eeba2c] font-semibold tracking-wide">
                MIND BODY SOUL.
              </p>

              <ul className="space-y-2 text-sm text-text">
                <li>Dipl. Energetikerin</li>
                <li>Dipl. Kinesiologin</li>
                <li>Dipl. Yoga &amp; Achtsamkeits Lehrerin</li>
                <li>Dipl. KinderYoga Lehrerin</li>
                <li>Reiki Master</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/about-me.webp"
                  alt="Nicole Angelika Panzer - Yoga und Mentoring"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

