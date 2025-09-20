import { CardSwipe } from "@/components/ui/card-swipe"
import React from "react"

const cardswipe = () => {

    const images = [
        {src:'/images/card1.webp',alt:"Image 1"},
        {src:'/images/card2.webp',alt:"Image 2"},
        {src:'/images/card3.webp',alt:"Image 3"},
    ]

  return (
   <div className="w-full flex flex-col gap-1 md:flex-row">
  <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
  <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
  <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
</div>

  )
}

export default cardswipe