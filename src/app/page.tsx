import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import FeaturedWebinars from "@/components/FeaturedWebinars"
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
 <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
   {/* <div className="text-2xl text-center"></div> */}
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <FeaturedWebinars/>
    <Instructors/>
    <Footer/>

 </main>
  );
}
