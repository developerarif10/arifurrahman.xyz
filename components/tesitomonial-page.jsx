import { Marquee } from "./testimonial";

const testimonials = [
  {
    quote: "Arifur is good at his work. Highly Recommended!",
    name: "Moydul Islam",
    title: "UI/UX Designer",
    image: "/images/client_1.webp?height=80&width=80",
  },
  {
    quote: "it was nice to work with him. delivered very fast and neat work",
    name: "Abdur Rahman",
    title: "CEO of Educonsultancy Pvt Ltd",
    image: "/images/client_3.png?height=80&width=80",
  },
  {
    quote: "The best, number one, excellent, fast, good guy, good developer...",
    name: "Davide Caccamo",
    title: "Creative Director",
    image: "/images/client_2.webp?height=80&width=80",
  },
];

const TestimonialCard = ({ headline, quote, name, title, image }) => {
  return (
    <div className="w-[350px] mx-4 p-8 rounded-2xl bg-[#1C1C1C] hover:bg-[#242424] transition-colors duration-300">
      {/* Profile and Social Section */}
      <div className="flex justify-between items-center">
        {/* Profile */}
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-800"
          />
          <div>
            <h3 className="font-semibold text-lg text-white">{name}</h3>
            <p className="text-gray-400">{title}</p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-400 text-lg leading-relaxed">"{quote}"</p>
    </div>
  );
};

export default function TestimonialPage() {
  const firstRow = testimonials;
  const secondRow = [...testimonials].reverse();

  return (
    <div className="">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-white text-5xl font-bold mb-16">
          Voices of satisfied clients
        </h1>
        <div className="space-y-8">
          {/* First Marquee - Left to Right */}
          <div className="relative w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
              {firstRow.map((testimonial, index) => (
                <TestimonialCard key={`first-${index}`} {...testimonial} />
              ))}
            </Marquee>
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-[1/4] bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
