"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { methodCards, leitsatz } from "@/lib/constants";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export const MethodSection = () => {
  return (
    <section id="methode" className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-text mb-6">
            Mein Weg, um dich zu unterstützen
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Mit meinem Lov Me Mental Mentorship Programm begleite ich dich auf deiner Reise zu dir selbst. 
            Wir arbeiten gemeinsam daran, alte Muster loszulassen, dein Selbstvertrauen zu stärken und 
            deine Träume zu verwirklichen. Mein Ansatz ist eine Kombination aus Yoga, energetischer Arbeit 
            und persönlichem Mentoring.
          </p>
        </motion.div>

        {/* Image and Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <Card className="overflow-hidden h-full">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/unterstuetzung.webp"
                  alt="Energetische Arbeit und Unterstützung"
                  fill
                  className="object-cover object-center scale-[1.15]"
                  quality={90}
                />
              </div>
            </Card>
          </motion.div>

          {/* Right: Method Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {methodCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card transition-shadow duration-200">
                  <CardContent className="p-6 lg:p-8">
                    <CardTitle className="mb-3 text-xl">
                      {card.title}
                    </CardTitle>
                  <CardDescription className="text-base leading-relaxed break-words">
                    {card.description}
                  </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leitsatz Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-l-4 border-l-[#eeba2c] bg-card/90">
            <CardContent className="p-6 lg:p-8">
              <p className="text-xl lg:text-2xl font-serif italic text-text leading-relaxed text-center">
                &ldquo;{leitsatz}&rdquo;
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

