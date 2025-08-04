import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Summer Collection",
    mainImage: "https://rukminim2.flixcart.com/fk-p-flap/960/160/image/f2ffab1767893241.jpg?q=60",
  },
  {
    title: "Winter Essentials",
    mainImage: "https://rukminim2.flixcart.com/fk-p-flap/960/160/image/c9c7b904fae51a5a.jpg?q=60",
  },
  {
    title: "New Arrivals",
    mainImage: "https://rukminim2.flixcart.com/fk-p-flap/960/160/image/14e4662c976fac19.jpeg?q=60",
  },
];

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative overflow-hidden text-white w-full" style={{ height: 'clamp(140px, 20vw, 350px)' }}
>
      {/* Background with the specified color */}
      <div className="absolute inset-0 z-0"></div>
      
      {/* Main Slider */}
      <div className="w-full h-full relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            className="relative w-full h-full"
            initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Optimized image implementation */}
              <img
                src={currentSlide.mainImage}
                alt={currentSlide.title}
                className="w-full h-auto min-h-full object-contain"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF5A5F]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white max-w-7xl mx-auto w-full">
                {/* Content can be added here if needed */}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-1 md:p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-1 md:p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-4 md:w-6 bg-white" : "w-1.5 md:w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};