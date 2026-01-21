"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/constants";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const ProcessSection = () => {
  return (
    <section id="ablauf" className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-text mb-6">
            Das erwartet dich
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-card transition-shadow duration-200">
                <CardContent className="p-5 lg:p-6">
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex flex-col items-start gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-[#eeba2c] flex items-center justify-center font-serif font-semibold text-xl border border-[#eeba2c]">
                        {step.number}
                      </div>
                      <CardTitle className="text-base lg:text-lg mb-0 break-words leading-tight">
                        {step.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed break-words text-sm lg:text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

