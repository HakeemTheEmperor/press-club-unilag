"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image?: string; // Optional image URL
  date?: string;
}

const ITEMS: CarouselItem[] = [
  {
    id: 1,
    title: "Induction Ceremony for 2025/2026 Session",
    description: "Press Club Induction Ceremony for 2025/2026 Session",
    date: "Dec 12, 2024",
    image: "/images/events/event-1.png",
  },
  {
    id: 2,
    title: "Campus Investigative Report",
    description: "Uncovering the truth behind recent facility upgrades.",
    date: "Jan 15, 2025",
    image: "/images/events/event-2.png",
  },
  {
    id: 3,
    title: "Workshop: Digital Media",
    description: "Mastering the art of storytelling in the digital age.",
    date: "Feb 02, 2025",
    image: "/images/events/event-3.png",
  },
  {
    id: 4,
    title: "Student Spotlight",
    description: "Meet the voices shaping the future of campus news.",
    date: "Feb 20, 2025",
    image: "/images/events/event-4.png",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % ITEMS.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100) {
      prevSlide();
    } else if (info.offset.x < -100) {
      nextSlide();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto h-[550px] md:h-[400px] overflow-hidden rounded-2xl bg-muted/20 border border-border/50 shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence
        initial={false}
        custom={direction}
        mode="popLayout"
      >
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 flex items-center justify-center p-6 sm:p-12 cursor-grab active:cursor-grabbing"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center w-full h-full">
            {/* Visual Element decoration (Desktop only background effect) */}
            <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-linear-to-l from-primary/10 to-transparent pointer-events-none -z-10 hidden md:block" />

            {/* Image Section - Order First on Mobile */}
            <div className="relative w-full h-48 sm:h-64 md:h-full order-first md:order-last flex items-center justify-center">
              <div className="w-full h-full rounded-xl border border-border/50 relative overflow-hidden shadow-xl">
                <Image
                  src={ITEMS[currentIndex].image || "/images/hero.png"}
                  alt={ITEMS[currentIndex].title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
            </div>

            {/* Text Content - Order Second on Mobile */}
            <div className="flex flex-col gap-3 md:gap-4 z-10 order-last md:order-first text-center md:text-left items-center md:items-start">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase bg-primary/10 px-2 py-1 rounded-md"
              >
                {ITEMS[currentIndex].date}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground line-clamp-2"
              >
                {ITEMS[currentIndex].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-muted-foreground line-clamp-3 md:line-clamp-none"
              >
                {ITEMS[currentIndex].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-2 z-20">
        <button
          onClick={prevSlide}
          className="p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-md border border-border hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-md border border-border hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex gap-2 z-20">
        {ITEMS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300 shadow-sm",
              idx === currentIndex
                ? "w-6 md:w-8 bg-primary"
                : "bg-primary/30 hover:bg-primary/50",
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
