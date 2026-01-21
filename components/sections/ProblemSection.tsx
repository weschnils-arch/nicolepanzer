"use client";

import { motion } from "framer-motion";
import { problemPoints } from "@/lib/constants";
import { Icon } from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-text text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 lg:mb-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border-0 bg-transparent">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/gefuhl.webp"
                  alt="Gefühl - Innere Ruhe und Selbstfindung"
                  fill
                  className="object-cover rounded-card"
                  quality={90}
                />
              </div>
            </Card>
          </motion.div>

          {/* Right: Problem Headline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-white mb-6 break-words">
              Kennst du dieses Gefühl?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6 break-words">
              Viele Menschen fühlen sich verloren, gestresst oder haben das Gefühl, nur noch zu funktionieren. 
              Wenn du dich hier wiedererkennst, bist du nicht allein – und es gibt einen Weg zurück zu dir selbst.
            </p>
            <p className="text-base text-white/70 leading-relaxed break-words">
              Gemeinsam finden wir heraus, was dich wirklich belastet und wie du wieder in deine Kraft kommst.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problemPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/15 hover:border-[#eeba2c] hover:bg-white/15 hover:shadow-[0_0_32px_rgba(238,186,44,0.45)] transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Icon
                        name={point.icon}
                        size={24}
                        className="text-gold"
                      />
                    </div>
                    <p className="text-white leading-relaxed flex-1 break-words">
                      {point.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed break-words">
            Wenn du dich in diesen Punkten wiedererkennst, dann bist du hier genau richtig. 
            Es gibt einen Weg zurück zu dir selbst – und ich begleite dich dabei.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

