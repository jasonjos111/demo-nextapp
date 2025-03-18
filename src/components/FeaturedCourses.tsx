"use client"
import courseData from "@/data/store_data.json"
import Link from "next/link"
import {BackgroundGradient} from "@/components/ui/Background-Gradient"

const FeaturedCourses = () => {
    interface Course{
        id: number;
        title: String;
        slug: String;
        description: String;
        price: number;
        instructor: String;
        isFeatured: Boolean;
          
    }
    
        const featuredCourse=courseData.courses.filter((course:Course)=>course.isFeatured)


  return (
    <div className="py-12 bg-gray-800"
    >
        <div className="text-center justify-center">
            <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
                FEATURED COURSES
            </h2>
            <p className="mt-5 text-3xl leading-0 font-extrabold tracking-tight text-white sm:text-4xl">
                Learn with the best</p>
        </div>
        <div className="mt-10 gap-10 justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
            {featuredCourse.map((course:Course)=>(
                <div key={course.id}className="flex justify-center">
                    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 grid-cols-1 content-center sm:p-10 bg-white  dark:bg-zinc-900">
       
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
          </p>
  
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {course.description}
          </p>
          <Link  href={`/courses/${course.slug}`}className=" pl-4 pr-1 py-1 text-white justify-center items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-gray-900 ">
            <span>Learn More</span>
            
          </Link>
          <div>
          <span className="bg-zinc-700 rounded-full items-center ml-20 text-center justify-center text-[0.6rem] px-2 py-0 text-white">
              <span>Buy Now</span> ${course.price}
            </span>
          </div>
          
      </BackgroundGradient>
    </div>
    
                </div>                    
                ))}
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View All Courses
            </Link>
        </div>
        
        </div>
  )
}

export default FeaturedCourses