"use client";
import react from "react";
import CircularGallery from "@/components//homeCards/CircularGalary";
import localFont from "next/font/local";
const JersyFont = localFont({
  src: "../../../public/fonts/jersey-10-latin-400-normal.woff2",
});

const Circularcontent = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <h1
          className={`${JersyFont.className} text-[#9AE600] text-4xl  sm:text-8xl mt-6 -mb-8 md:text-6xl lg:text-8xl`}
        >
          WELCOME TO MYSETRY WORLD
        </h1>
      </div>
      <div className="w-full flex justify-center items-center pb-20 ">
        <div className="w-full relative h-[330px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.01}
            scrollSpeed={1}
          />
        </div>
      </div>
    </>
  );
};
export default Circularcontent;
