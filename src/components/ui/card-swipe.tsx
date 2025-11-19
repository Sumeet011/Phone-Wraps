"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"

import "swiper/css"
import { SparklesIcon } from "lucide-react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  slideShadows?: boolean
}

export const CardSwipe: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
    .swiper {
      width: auto; /* shrink to fit slides */
      padding-bottom: 50px;
    }

    .swiper-slide {
      width: auto; /* let slide width match image */
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
    }

    .swiper-slide img {
  display: block;
  width: 130px; /* default width */
  height: auto;
  border-radius: 16px;
}

/* Media query for small screens or larger (example for sm breakpoint) */
@media (min-width: 640px) {
  .swiper-slide img {
    width: 150px;
  }
}

  `

  return (
    <section className="w-full">
      <style>{css}</style>
      <div className="mx-auto max-w-4xl rounded-[24px] border border-black/5 p-1">
        <div className="relative mx-auto flex flex-col rounded-[24px]">
          

          <div className="flex flex-col justify-center pb-2 pt-5 pl-4 items-center">
            
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight opacity-85">Spider Man</h3>
          </div>

          <div className="flex justify-center items-center">
            <Swiper
                effect={"cards"}
                grabCursor={true}
                loop={true}
                slidesPerView={"auto"}
                cardsEffect={{
                  slideShadows: slideShadows,
                }}
                modules={[EffectCards, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl mt-2 ">
                      <Image
                        src={image.src}
                        width={180}
                        height={180}
                        className="size-full rounded-xl "
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <Image
                        src={image.src}
                        width={180}
                        height={180}
                        className="size-full rounded-xl"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}


