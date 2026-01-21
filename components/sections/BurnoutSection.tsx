"use client";

import { motion } from "framer-motion";
import { burnoutSection } from "@/lib/constants";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export const BurnoutSection = () => {
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

  return (
    <section className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-text mb-4">
            {burnoutSection.title}
          </h2>
          <p className="text-xl text-muted mb-6">
            {burnoutSection.subtitle}
          </p>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            {burnoutSection.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <Card className="flex flex-col h-full w-full">
              <CardContent className="p-8 lg:p-10 flex flex-col flex-grow">
                <CardTitle className="text-2xl mb-4">
                  {burnoutSection.approach.title}
                </CardTitle>
                <p className="text-muted leading-relaxed text-lg flex-grow">
                  {burnoutSection.approach.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex"
          >
            <Card className="flex flex-col h-full w-full">
              <CardContent className="p-8 lg:p-10 flex flex-col flex-grow">
                <CardTitle className="text-2xl mb-6">
                  {burnoutSection.program.title}
                </CardTitle>
                <div className="space-y-4 flex-grow">
                  {burnoutSection.program.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Icon name={item.icon} size={20} className="text-gold" />
                      </div>
                      <p className="text-text leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            onClick={handleCtaClick}
            variant="primary"
            size="lg"
            className="whitespace-nowrap"
          >
            Kostenloses Gespräch buchen
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

