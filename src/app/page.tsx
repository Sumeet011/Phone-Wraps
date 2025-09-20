
import AiInputCard from '@/components/homeCards/AiInputCard'
import CardCarouselParent from '@/components/homeCards/CardCarouselParent'
import SpecialCard from '@/components/homeCards/SpecialCard'
import TemplateCard from '@/components/homeCards/TemplateCard'
import ThemeChange from '@/components/homeCards/ThemeChange'
import HeroContent from '@/components/landingPage/HeroContent'
import Navbar from '@/components/navbar/Navbar'
import cardswipe from '@/components/homeCards/SwipeCard'
import  TextScrollDemo  from '@/components/homeCards/TextScroll'
import React from 'react'
import DrinksPage from '@/components/homeCards/ProductCard'
import Circularcontent from '@/components/landingPage/Circularcontent'
import HorizontalScrollableCards from '@/components/landingPage/HorizontalScroll'
import Leaderboard from '@/components/landingPage/LeaderBoars'
import Review from '@/components/homeCards/Review'

const page = () => {
  return (
    <div>
      <Navbar />
      <TextScrollDemo />
      <HeroContent />
      <CardCarouselParent />
      <DrinksPage />
      <Circularcontent/>
      <HorizontalScrollableCards />
      <Leaderboard/>
      <Review/>
    </div>
  )
}

export default page