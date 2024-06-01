import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Calendar from "@/components/Calendar";
import BlankFeatures from "@/components/BlankFeatures";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Loma",
  description: "All the dog care you could ever need",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <About />
      
      {/* <Features /> */}
      <BlankFeatures />
      <CallToAction />
      <Testimonials />
      <Brands />
      <Calendar />
      {/* <Faq /> */}
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
