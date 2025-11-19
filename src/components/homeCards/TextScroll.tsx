"use client"
 
import { TextScroll } from "../ui/text-scroll"
 
export function TextScrollDemo() {
  return (
    <TextScroll
      className="font-display mt-4  sm:mt-0 text-center text-2xl font-semibold tracking-tighter  text-white md:text-3xl md:leading-[5rem]"
      text="Phone Wraps  "
      default_velocity={5}
    />
  )
}

export default TextScrollDemo
