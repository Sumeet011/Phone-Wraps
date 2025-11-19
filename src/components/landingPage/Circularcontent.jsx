"use client";
import react from "react";
import CircularGallery from "@/components//homeCards/CircularGalary";
import localFont from "next/font/local";
const JersyFont = localFont({
  src: "../../../public/fonts/jersey-10-latin-400-normal.woff2",
});

const Circularcontent = () => {

   const defaultItems = [
      { image: `https://ik.imagekit.io/wr6ziyjiu/product1.jpg?updatedAt=1752859784998`, text: "Original" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product2.jpg?updatedAt=1752859784983`, text: "Mango Loco" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product3.jpg?updatedAt=1752859784960`, text: "Sunrise" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product4.jpg?updatedAt=1752859784918`, text: "Zero Sugar" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product5.jpg?updatedAt=1752859785065`, text: "Watermelon" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product6.jpg?updatedAt=1752859784921`, text: "Hydro" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/carousel_image_7.jpg?updatedAt=1753178066316`, text: "BlueBarry" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product8.jpg?updatedAt=1752859784906`, text: "Mnonster Ultra" },
      
    ];
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex justify-center">
  <h1
    className={`${JersyFont.className} text-[#9AE600] text-3xl min-[290px]:text-5xl sm:text-7xl lg:text-8xl text-center pt-20`}
  >
    WELCOME TO MYSETRY WORLD
  </h1>
</div>

      </div>
      <div className="w-full flex justify-center items-center pb-20 ">
        <div className="w-full relative h-[330px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <CircularGallery
          items={defaultItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.1}
            scrollSpeed={1}
          />
        </div>
      </div>
    </>
  );
};
export default Circularcontent;
