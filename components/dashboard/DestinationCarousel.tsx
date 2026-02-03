"use client";

import { useEffect, useMemo, useState } from "react";
import { Destination, DestinationCard } from "./DestinationCard";

type DestinationCarouselProps = {
  destinations: Destination[];
};

export const DestinationCarousel = ({
  destinations,
}: DestinationCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = destinations.length;
  const slides = useMemo(() => destinations, [destinations]);

  useEffect(() => {
    if (isPaused || total <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused, total]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((destination) => (
            <div
              key={destination.code}
              className="w-full flex-shrink-0 px-1 md:px-2"
            >
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            aria-label={`Aller à la destination ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === activeIndex
                ? "w-6 bg-[#FF7A00]"
                : "bg-[#111827]/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
