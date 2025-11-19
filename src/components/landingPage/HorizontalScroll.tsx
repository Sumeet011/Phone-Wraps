"use client";

import React, { useRef, useState, useEffect } from "react";
import localFont from "next/font/local";
import Img from "../../../public/images/card1.webp";

const JersyFont = localFont({
  src: "../../../public/fonts/jersey-10-latin-400-normal.woff2",
  display: "swap",
});

type Drink = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const sampleDrinks: Drink[] = [
  { id: 1, name: "Caramel Latte", image: Img.src, price: 199 },
  { id: 2, name: "Iced Americano", image: Img.src, price: 149 },
  { id: 3, name: "Matcha Frappe", image: Img.src, price: 229 },
  { id: 4, name: "Vanilla Cold Brew", image: Img.src, price: 189 },
  { id: 5, name: "Mocha Delight", image: Img.src, price: 209 },
  { id: 6, name: "Hazelnut Cappuccino", image: Img.src, price: 219 },
  { id: 7, name: "Cinnamon Spice", image: Img.src, price: 179 },
  { id: 8, name: "Coconut Macchiato", image: Img.src, price: 249 },
  { id: 9, name: "Almond Breve", image: Img.src, price: 239 },
  { id: 10, name: "Caramel Latte", image: Img.src, price: 199 },
  { id: 11, name: "Iced Americano", image: Img.src, price: 149 },
  { id: 12, name: "Matcha Frappe", image: Img.src, price: 229 },
  { id: 13, name: "Vanilla Cold Brew", image: Img.src, price: 189 },
  { id: 14, name: "Mocha Delight", image: Img.src, price: 209 },
  { id: 15, name: "Hazelnut Cappuccino", image: Img.src, price: 219 },
  { id: 16, name: "Cinnamon Spice", image: Img.src, price: 179 },
  { id: 17, name: "Coconut Macchiato", image: Img.src, price: 249 },
  { id: 18, name: "Almond Breve", image: Img.src, price: 239 },
  { id: 19, name: "Caramel Latte", image: Img.src, price: 199 },
  { id: 20, name: "Iced Americano", image: Img.src, price: 149 },
  { id: 21, name: "Matcha Frappe", image: Img.src, price: 229 },
  { id: 22, name: "Vanilla Cold Brew", image: Img.src, price: 189 },
  { id: 23, name: "Mocha Delight", image: Img.src, price: 209 },
  { id: 24, name: "Hazelnut Cappuccino", image: Img.src, price: 219 },
  { id: 25, name: "Cinnamon Spice", image: Img.src, price: 179 },
  { id: 26, name: "Coconut Macchiato", image: Img.src, price: 249 },
  { id: 27, name: "Almond Breve", image: Img.src, price: 239 },
  { id: 28, name: "Caramel Latte", image: Img.src, price: 199 },
  { id: 29, name: "Iced Americano", image: Img.src, price: 149 },
  { id: 30, name: "Matcha Frappe", image: Img.src, price: 229 },
  { id: 31, name: "Vanilla Cold Brew", image: Img.src, price: 189 },
  { id: 32, name: "Mocha Delight", image: Img.src, price: 209 },
  { id: 33, name: "Hazelnut Cappuccino", image: Img.src, price: 219 },
  { id: 34, name: "Cinnamon Spice", image: Img.src, price: 179 },
  { id: 35, name: "Coconut Macchiato", image: Img.src, price: 249 },
  { id: 36, name: "Almond Breve", image: Img.src, price: 239 },
  { id: 37, name: "Caramel Latte", image: Img.src, price: 199 },
  { id: 38, name: "Iced Americano", image: Img.src, price: 149 },
  { id: 39, name: "Matcha Frappe", image: Img.src, price: 229 },
  { id: 40, name: "Vanilla Cold Brew", image: Img.src, price: 189 },
  { id: 41, name: "Mocha Delight", image: Img.src, price: 209 },
];

const ProductCard: React.FC<{ drink: Drink }> = ({ drink }) => {
  return (
    <a
      href={`/specific`}
      className="group relative bg-[#1a1816] rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col h-[290px] w-[200px] snap-start"
    >
      <div className="relative overflow-hidden rounded-xl h-[290px]">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover"
        />
        <p className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/60 px-2 py-1 rounded">
          ₹{drink.price}
        </p>
      </div>

      <div className="mt-3">
        <h2 className="text-base md:text-lg font-semibold leading-tight line-clamp-1">
          {drink.name}
        </h2>
      </div>
    </a>
  );
};

export default function HorizontalScrollableCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerRef1 = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentIndex1, setCurrentIndex1] = useState(1);

  const setupScrollHandler = (
    container: HTMLDivElement | null,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!container) return;

    const handleScroll = () => {
  if (!container) return;

  const scrollLeft = container.scrollLeft;
  const containerWidth = container.offsetWidth;
  const scrollWidth = container.scrollWidth;

  // approximate last visible card
  const cardWidth = scrollWidth / sampleDrinks.length;
  const lastVisibleIndex = Math.ceil((scrollLeft + containerWidth) / cardWidth);

  setter(Math.min(Math.max(lastVisibleIndex, 1), sampleDrinks.length));
};


    handleScroll();
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  };

  useEffect(() => {
    const cleanup1 = setupScrollHandler(containerRef.current, setCurrentIndex);
    const cleanup2 = setupScrollHandler(
      containerRef1.current,
      setCurrentIndex1
    );
    return () => {
      cleanup1 && cleanup1();
      cleanup2 && cleanup2();
    };
  }, []);

  return (
    <div className={`w-full text-white`}>
      <div className="flex items-center justify-center mb-4">
        
<h1
         className={`
    ${JersyFont.className} 
    w-full          /* makes it take full width */
    text-[#9AE600] 
    text-3xl 
    min-[260px]:text-4xl 
    min-[310px]:text-5xl 
    sm:text-7xl  
    lg:text-8xl
    text-center     /* optional: centers the text horizontally */
  `}>
          BROWSE ALL PRODUCTS
        </h1>

      </div>

      <div className="relative">
        {/* Horizontal scroll container */}

        <div
          ref={containerRef}
          className="flex grid-cols-2 ml-3 mr-0 md:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-8 xl:ml-30 xl:mr-30 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 py-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded"
          style={{ scrollSnapType: "x mandatory" }}
          role="list"
        >
          {sampleDrinks.map((d) => (
            <div role="listitem" key={d.id} className="snap-start">
              <ProductCard drink={d} />
            </div>
          ))}
          <style jsx>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .no-scrollbar::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .no-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
        </div>

        {/* Scroll Position Indicator */}
        <div className="flex justify-center mt-2">
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-400 font-medium">
            {currentIndex} / {sampleDrinks.length}
          </div>
        </div>
      </div>
      <div className="relative">
        {/* Horizontal scroll container */}

        <div
          ref={containerRef1}
          className="flex grid-cols-2 ml-3 mr-0 md:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-8 xl:ml-30 xl:mr-30 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 py-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded"
          style={{ scrollSnapType: "x mandatory" }}
          role="list"
        >
          {sampleDrinks.map((d) => (
            <div role="listitem" key={d.id} className="snap-start">
              <ProductCard drink={d} />
            </div>
          ))}
          <style jsx>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .no-scrollbar::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .no-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
        </div>

        {/* Scroll Position Indicator */}
        <div className="flex justify-center mt-2">
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-400 font-medium">
            {currentIndex1} / {sampleDrinks.length}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center  ">
        <button className="bg-[#9AE600] text-black font-bold py-2 mt-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
          See All
        </button>
      </div>
    </div>
  );
}
