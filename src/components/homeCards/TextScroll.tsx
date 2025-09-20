"use client"
 
import { TextScroll } from "../ui/text-scroll"
 
export function TextScrollDemo() {
  return (
    <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-white md:text-4xl md:leading-[5rem]"
      text="Phone Wraps  "
      default_velocity={5}
    />
  )
}

export default TextScrollDemo
