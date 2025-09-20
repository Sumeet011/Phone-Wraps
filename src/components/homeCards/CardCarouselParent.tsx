import React from "react";
import Image from "next/image";
import { CardCarousel } from "../ui/card-carousel";
import img1 from "../../../public/images/card1.webp";
import img2 from "../../../public/images/card2.webp";
import img3 from "../../../public/images/card3.webp";
import mobileimg from "../../../public/images/mobile.webp";
import WrapButton from "../ui/wrap-button";
import { Globe } from "lucide-react";

const CardCarouselParent = () => {
  const images = [
    { src: img1.src, alt: "Image 1" },
    { src: img1.src, alt: "Image 2" },
    { src: img1.src, alt: "Image 3" },
    { src: img1.src, alt: "Image 4" },
    { src: img1.src, alt: "Image 5" },
    { src: img1.src, alt: "Image 6" },
  ];
  const handleOnClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="relative">
      {/* Background mobile image */}
      <div className="absolute inset-0 flex  justify-center z-[-1]">
        <img
          src="/images/mobile.webp"
          alt="Mobile background"
          className="h-[580px] w-auto opacity-50 mt-4 mr-3"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <CardCarousel images={images} showPagination={false} />
      </div>

      {/*/Buy Now Button */}
      <div className="relative bottom-13 flex items-center justify-center left-1/2 transform -translate-x-1/2 z-20">
            <button className="bg-[#9AE600] text-black text-2xl sm:text-4xl font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"> 
              BUY NOW
            </button>
          
      </div>
    </div>
  );
};

export default CardCarouselParent;
