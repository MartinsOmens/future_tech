import Image from "next/image";
import { Testimonial } from "@/lib/testimonial";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-[#141414] p-8 flex flex-col items-center text-center rounded-sm">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={60}
        height={60}
        className="rounded-full mb-2"
      />

      <h3 className="text-white font-semibold">{testimonial.name}</h3>

      <p className="text-gray-400 text-sm">{testimonial.location}</p>

      {/* Stars */}
      <div className="flex gap-1 my-4">
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            <FaStar color="#FFD11A" />
          </span>
        ))}
      </div>

      <p className="bg-[#1A1A1A] text-gray-300 text-sm  p-4 rounded-lg hover:bg-[#262626] transition">
        {testimonial.text}
      </p>
    </div>
  );
};

export default TestimonialCard;
