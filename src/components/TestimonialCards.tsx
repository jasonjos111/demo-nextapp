"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {cn} from "@/utils/utils"
import React from 'react'
 // 

const TestimonialCards = () => {
    const musicSchoolTestimonials = [
        {
          quote:
            'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
          name: 'Alex Johnson',
          title: 'Guitar Student',
        },
        {
          quote:
            "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
          name: 'Samantha Lee',
          title: 'Piano Student',
        },
        {
          quote:
            "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
          name: 'Michael Chen',
          title: 'Vocal Student',
        },
        {
          quote:
            'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
          name: 'Emily Taylor',
          title: 'Violin Student',
        },
        {
          quote:
            'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
          name: 'Chris Morales',
          title: 'Music Production Student',
        },
      ];
    
      return (
        <div>
             <div className=" relative text-3xl z-10 mt-5 text-center font-bold">

                <h2>Hear our symphony</h2>
            </div>
           
            <div className="relative flex h-[30rem] w-full items-center justify-center bg-white dark:bg-black">
            
            <div
              className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
              {/* Backgrounds */}
            <InfiniteMovingCards items={musicSchoolTestimonials} speed="normal" direction="right"/>
            </div>
          </div>
        </div>
       
      );
}

export default TestimonialCards