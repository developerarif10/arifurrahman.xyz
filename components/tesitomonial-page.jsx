import { cn } from "@/lib/utils";
import { Marquee } from "./testimonial";

const reviews = [
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

// Split reviews into two groups for the two marquee rows
const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ image, name, title, quote }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 sm:w-48 md:w-56 lg:w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:scale-105",
        // light styles
        "border-gray-950/[.1] bg-white/80 backdrop-blur-sm hover:bg-gray-950/[.05] hover:shadow-lg",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-800/80 dark:backdrop-blur-sm dark:hover:bg-gray-700/90 dark:hover:shadow-lg dark:hover:shadow-gray-900/30"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full ring-2 ring-primary/20"
          width="32"
          height="32"
          alt={`Avatar of ${name}`}
          src={image || "/placeholder.svg"}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-white/40">
            {title}
          </p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-gray-700 dark:text-gray-300">
        {quote}
      </blockquote>
    </figure>
  );
};

export default function TesitomonialPage() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Voices of my Satisfied clients
        </h2>
      </div>
      <div className="relative flex h-[300px] sm:h-[450px] md:h-[500px] lg:h-[350px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:25s] px-2 sm:px-4"
        >
          {firstRow.map((review) => (
            <div key={review.title} className="py-2">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="[--duration:30s] px-2 sm:px-4"
        >
          {secondRow.map((review) => (
            <div key={review.title} className="py-2">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        {/* Enhanced top gradient with your specific color */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[hsl(215,27.9%,16.9%)] via-[hsl(215,27.9%,16.9%)/0.9] to-transparent"></div>

        {/* Enhanced bottom gradient with your specific color */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[hsl(215,27.9%,16.9%)] via-[hsl(215,27.9%,16.9%)/0.9] to-transparent"></div>
      </div>
    </div>
  );
}
