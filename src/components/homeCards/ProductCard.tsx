"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import localFont from "next/font/local";
import Img from "../../../public/images/card.webp";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HorizontalWithProp from "../../components/landingPage/HorizontalWithProp";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const URL = `${BACKEND_URL}/api/products/`;

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

const ProductCard: React.FC<{ drink: Drink; href: string }> = ({ drink, href }) => {
  return (
    <a
      href={href}
      className="group relative bg-[#1a1816] rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col h-[230px] w-[150px] min-[370px]:w-[180px] min-[370px]:h-[270px] md:h-[370px] md:w-[260px] snap-start"
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

      <div className="absolute bottom-3 right-3 w-5 h-5 xl:w-8 xl:h-8 rounded-full bg-white group-hover:bg-lime-400 flex items-center justify-center">
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

export default function HorizontalScrollableCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [sampleDrinks, setSampleDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log("API Response:", result);
        
        // Handle different response structures
        if (result.success && result.items) {
          //only gaming drink sets
          const filtered = result.items.filter((item: any) => item.type === "gaming");
          setSampleDrinks(filtered);
        } else if (result.data) {
          setSampleDrinks(result.data);
        } else if (Array.isArray(result)) {
          setSampleDrinks(result);
        } else {
          setSampleDrinks([]);
        }
      } catch (error) {
        console.error("Error fetching drinks:", error);
        setError(error instanceof Error ? error.message : "Failed to fetch products");
        setSampleDrinks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDrinks();
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = 280;
    const scrollAmount = dir === "left" ? -cardWidth * 2 : cardWidth * 2;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Loading state
  if (loading) {
    return (
      <div className="w-full text-white">
        <div className="flex items-center justify-center mb-4">
          <h1 className={`${JersyFont.className} text-[#9AE600] text-3xl min-[260px]:text-4xl min-[310px]:text-5xl sm:text-7xl lg:text-8xl text-center`}>
            BROWSE ALL COLLECTIONS
          </h1>
        </div>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-white text-xl">Loading products...</div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full text-white">
        <div className="flex items-center justify-center mb-4">
          <h1 className={`${JersyFont.className} text-[#9AE600] text-3xl min-[260px]:text-4xl min-[310px]:text-5xl sm:text-7xl lg:text-8xl text-center`}>
            BROWSE ALL COLLECTIONS
          </h1>
        </div>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-red-500 text-xl">Error: {error}</div>
        </div>
      </div>
    );
  }

  // Empty state
  if (sampleDrinks.length === 0) {
    return (
      <div className="w-full text-white">
        <div className="flex items-center justify-center mb-4">
          <h1 className={`${JersyFont.className} text-[#9AE600] text-3xl min-[260px]:text-4xl min-[310px]:text-5xl sm:text-7xl lg:text-8xl text-center`}>
            BROWSE ALL COLLECTIONS
          </h1>
        </div>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-white text-xl">No products available</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-white">
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center justify-center">
          <h1
            className={`
              ${JersyFont.className} 
              w-full
              text-[#9AE600] 
              text-3xl 
              min-[260px]:text-4xl 
              min-[310px]:text-5xl 
              sm:text-7xl  
              lg:text-8xl
              text-center
            `}
          >
            BROWSE ALL COLLECTIONS
          </h1>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 min-[250px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 ml-3 sm:ml-20 xl:gap-8 xl:ml-30 xl:mr-30">
          {sampleDrinks.map((drink, index) => (
            <Suspense
              fallback={
                <div className="relative bg-[#1a1816] rounded-2xl p-4 text-white shadow-lg flex flex-col h-[380px] w-[240px]" />
              }
              key={drink.id}
            >
              <ProductCard
                drink={drink}
                href={index === 0 ? "/gamecollections" : "/All"}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}
