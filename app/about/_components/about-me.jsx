
import AboutMeImages from "./about-me-images";
export default function AboutMe() {
  
  return (
    <section className="w-full py-6 lg:py-6">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center gap-2 lg:gap-10">
          {/* Text Content */}
          <div
            className="flex flex-col space-y-6 max-w-4xl w-full text-left lg:text-center items-start lg:items-center"
          >
            <div className="space-y-4">
              <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wider">
                ARIFUR RAHMAN
              </h2>

              <div className="space-y-4 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                <p>
                I'm a Digital Designer & Full-Stack Developer passionate about crafting meaningful, user-centered experiences. My passion is bringing ideas to life through thoughtful design, smooth animations, and responsive layouts.
                </p>
                <p>When I'm not coding, you'll find me exploring new destinations, chasing sunsets, and finding inspiration in the beauty of nature.</p>
              </div>
            </div>
          </div>
        <AboutMeImages/>
        </div>
      </div>
    </section>
  );
}
