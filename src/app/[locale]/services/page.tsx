import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import ResponsiveCarousel from "@/components/ResponsiveCarousel/ResponsiveCarousel";

import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Loma",
  description: "All the dog care you could ever need",
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <>
      <Breadcrumb pageName="Our Services" />
      <Features />
      <section className="bg-gray-7 pb-8 pt-10 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">

            <div className="flex flex-wrap px-4 lg:w-1/2 items-center">
              <ResponsiveCarousel />

            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  title
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  description1
                  <br /> <br />
                  description2
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Blog;
