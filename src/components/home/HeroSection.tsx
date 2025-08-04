import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Summer Collection",
    subtitle: "Discover our latest products with exceptional quality",
    ctaPrimary: { text: "Shop Now", link: "/collections/summer" },
    mainImage: "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg",
  },
  {
    title: "Winter Essentials",
    subtitle: "Stay warm with our premium winter wear",
    ctaPrimary: { text: "Shop Jackets", link: "/category/jackets" },
    mainImage: "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg",
  },
  {
    title: "Spring Fashion",
    subtitle: "Fresh styles for the new season",
    ctaPrimary: { text: "New Arrivals", link: "/new-arrivals" },
    mainImage: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg",
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
    <section className="relative overflow-hidden text-white h-[400px] w-full">
      {/* Main Slider */}
      <div className="w-full h-full">
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
            <div className="relative w-full h-full">
              <img
                src={currentSlide.mainImage}
                alt={currentSlide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white max-w-7xl mx-auto w-full">
                <h2 className="text-3xl font-bold">{currentSlide.title}</h2>
                <p className="text-lg mt-2">{currentSlide.subtitle}</p>
                <Link
                  to={currentSlide.ctaPrimary.link}
                  className="mt-4 inline-block px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition"
                >
                  {currentSlide.ctaPrimary.text}
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};