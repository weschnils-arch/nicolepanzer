"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { segmentOptions } from "@/lib/constants";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";

export const SegmentSelector = () => {
  const segments: Array<"essenz" | "energie"> = ["essenz", "energie"];

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
    <section id="angebot" className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 justify-items-center items-stretch">
          {segments.map((segmentKey) => {
            const content = segmentOptions[segmentKey];
            const isEssenz = segmentKey === "essenz";

            return (
              <Card key={segmentKey} className="w-full max-w-[540px] h-full self-stretch">
                <CardContent className="p-8 lg:p-12 h-full flex flex-col">
                  <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-text mb-2">
                    {content.title}
                  </h2>
                  {content.subtitle && (
                    <p className="text-base text-muted mb-3">
                      {content.subtitle}
                    </p>
                  )}
                  {/* Text + Bullet Points */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-8 lg:min-h-[180px] flex flex-col justify-start">
                      <p className="text-lg text-muted leading-relaxed">
                        {content.description}
                      </p>
                    </div>

                    <div className="space-y-4 mb-8 lg:min-h-[200px]">
                      {content.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            <Icon
                              name={benefit.icon}
                              size={20}
                              className="text-gold"
                            />
                          </div>
                          <p className="text-text leading-relaxed break-words">
                            {benefit.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full mt-auto">
                    <div className="relative aspect-[16/9] w-full rounded-card overflow-hidden">
                      <Image
                        src={isEssenz ? "/energie-balance.webp" : "/wahreesenz.webp"}
                        alt={isEssenz ? "Mehr Energie und Balance" : "Finde deine wahre Essenz"}
                        fill
                        className="object-cover"
                        quality={90}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={handleCtaClick}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto whitespace-nowrap text-sm sm:text-base"
          >
            Jetzt kostenloses Gespräch vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};

