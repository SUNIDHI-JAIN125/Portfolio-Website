"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideData {
  id: number;
  src: string;
  alt: string;
}

const slides: SlideData[] = [
  { id: 1, src: "/ringle1.png", alt: "Ringle Project" },
  { id: 2, src: "/pmGame.png", alt: "Pattern Memory Game" },
  { id: 3, src: "/cinebuddy.png", alt: "CineBuddy" },
  { id: 4, src: "/fruits.png", alt: "Fruits Project" },
  { id: 5, src: "/safe-shipping.png", alt: "Safe Shipping Project" },
  { id: 6, src: "/foodie.png", alt: "Foodie" },
  { id: 7, src: "/WeatherApp.png", alt: "Weather App" },
  { id: 7, src: "/GroceryStore.png", alt: "Grocery Store Project" },
  { id: 9, src: "/electronicstore.png", alt: "Electronic Store" },
  { id: 10, src: "/tic-tac-toe.png", alt: "Tic Tac Toe" },
  
];

export default function WorkSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="mywork" className="min-h-[max-content] xl:min-h-screen bg-[#06061E]  py-8 xl:mt-14 2xl:mt-20 xl:mb-10">
      <div className="container mx-auto px-4">
        <h3 className="text-[3.1vmax] text-center font-mono font-semibold border-b-[3px] border-white mb-12  text-white">
          My Work
        </h3>
        
        <div className="relative w-full  max-w-[68vmax] mx-auto overflow-hidden rounded-lg gap-10">
        
          <div 
            className="flex transition-transform mt-16  duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full">
                <div className="relative aspect-[18/9]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>

    
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-110' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}