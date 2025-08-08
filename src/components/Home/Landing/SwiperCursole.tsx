'use client'; 

import { useEffect, useRef, useState } from 'react';
import Slider from './Slider';
import Sliders from '@/db/sliders.json'
import * as icon from '@/utils/Icons/Icons';

export default function SwiperCursole() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Sliders?.sliders?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Sliders?.sliders?.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide كل 5 ثواني
  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current!);
  }, [currentIndex]);

  return (
    <div className="relative  w-full bg-[var(--accent)]/40   mx-auto overflow-hidden rounded-lg">
      {/* Slides */}
      <div className="flex  w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(${currentIndex * 100}%)` }}>
        {Sliders?.sliders?.map((slider, i) => (
        <div key={i} className="w-full flex-shrink-0">
            {/* <img src={src} alt='fs' width={250} height={250} /> */}
            <Slider img1={slider?.img1} img2={slider?.img2} text={slider?.text} paragraph={slider?.paragraph} paragraph2={slider?.paragraph2} bgcolor={slider?.bgColor}/>
        </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 group -translate-y-1/2 bg-white/10 hover:bg-white text-black rounded-full p-2"
        >
        <icon.RiArrowLeftSLine className='cursor-pointer arrow-left-move  group-hover:text-3xl transition-all duration-500'/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2  right-3 group -translate-y-1/2 bg-white/10 hover:bg-white text-black rounded-full p-2"
        >
       <icon.RiArrowRightSLine className='cursor-pointer arrow-right-move  group-hover:text-3xl transition-all duration-500 '/>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {Sliders?.sliders?.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
