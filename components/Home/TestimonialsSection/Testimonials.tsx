import React from "react";
import TestimonialTitle from "./TestimonialTitle";
import { testimonials } from "@/lib/testimonial";
import TestimonialCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#141414] overflow-hidden py-8">
      <TestimonialTitle />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
