import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "User 1",
    designation: "Service Dog Dependent Individual",
    content:
      "I was so impressed! My service dog was taken care of perfectly and they did an amazing job grooming him.",
    image: "/images/testimonials/npc.png",
    star: 5,
  },
  {
    id: 2,
    name: "User 2",
    designation: "Small Business Owner",
    content:
      "They truly did an amazing job. I left for a business trip and when I got back, my dog was happier and more groomed than ever.",
    image: "/images/testimonials/npc.png",
    star: 5,
  },
  {
    id: 3,
    name: "User 3",
    designation: "Teacher",
    content:
      "My dog was so disobedient! After I got him trained through La Loma, I was so happy to see him obey my orders",
    image: "/images/testimonials/npc.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Clients Say"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
