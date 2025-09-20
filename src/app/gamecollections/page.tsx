"use client";

import React, { useRef } from "react";
import localFont from "next/font/local";
import Img from "../../../public/images/card.webp";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";

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
  // extra for variety
  { id: 9, name: "Almond Breve", image: Img.src, price: 239 },
];

const ProductCard: React.FC<{ drink: Drink }> = ({ drink }) => {
  return (
    <a
      href={`/drinks/${drink.id}`}
      className="group relative bg-[#1a1816] rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col h-[380px] w-[260px] snap-start"
    >
      <div className="relative overflow-hidden rounded-xl h-[300px]">
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

      <div className="absolute bottom-3 right-3  w-10 h-10 rounded-full bg-white group-hover:bg-lime-400 flex items-center justify-center">
        <svg
          className="w-5 h-5 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17l10-10M7 7h10v10"
          />
        </svg>
      </div>
    </a>
  );
};

export default function GameCollections() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = 280; // card width + gap estimate
    const scrollAmount = dir === "left" ? -cardWidth * 2 : cardWidth * 2;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={`w-full text-white`}>
      <Navbar/>
      <div className="flex ml-4 md:ml-10 mt-4">
        <h1
          className={`${JersyFont.className} text-[#9AE600] text-4xl  `}
        >
          SPIDERMAN
        </h1>
      </div>

      <div className="relative ml-3 md:ml-10">
        {/* Horizontal scroll container */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 py-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded"
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
        <div></div>
      </div>
      <div className="flex ml-3 md:ml-10 mt-4">
        <h1
          className={`${JersyFont.className} text-[#9AE600] text-4xl  `}
        >
          SPIDERMAN
        </h1>
      </div>

      <div className="relative ml-3 md:ml-10">
        {/* Horizontal scroll container */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 py-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded"
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
        <div></div>
      </div>
    </div>
  );
}
