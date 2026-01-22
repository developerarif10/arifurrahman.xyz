import Image from "next/image";
import Link from "next/link";

const realRecommendations = [
  {
    id: 1,
    name: "Sumit Saha",
    role: "CEO of Learn with Sumit",
    image: "/images/sumit.jpg", 
    recommenderlink: 'https://learnwithsumit.com/',
    text: "Arifur expertise in Next.js, React.js, and Tailwind CSS is exceptional. His ability to solve complex problems and deliver high-quality web solutions is truly impressive.",
    link: "/others/recommendation-letter.pdf",
    linkText: "Read Full Letter"
  }
];

const Recommendation = () => {
  return (
    <section className="w-full py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
   
          <div className="lg:col-span-4">
             <h3 className="text-4xl font-semibold uppercase tracking-widest font-bebas mb-4">
          RECOMMENDATIONS
        </h3>
          </div>

          {/* Right Side - Cards */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {realRecommendations.map((rec) => (
              <div 
                key={rec.id} 
                className="group relative bg-white p-10 md:p-14 rounded-[2rem] w-full border border-neutral-200/60 hover:border-neutral-300 transition-colors duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-start gap-5 mb-8">
                  <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full ring-2 ring-neutral-100">
                    <Image
                      src={rec.image}
                      alt={rec.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-neutral-900 leading-tight">
                      {rec.name}
                    </h3>
                    <Link href={rec.recommenderlink} className="hover:underline text-neutral-500 text-sm mt-1 font-medium">
                      {rec.role}
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[1.15rem] font-normal">
                    {rec.text}
                  </p>
                  
                  {rec.link && (
                    <Link
                      href={rec.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors mt-2 group/link"
                    >
                      Read full letter
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover/link:translate-x-1">
                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
