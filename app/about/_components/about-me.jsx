
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
              I help brands build digital products that feel great to use. Through thoughtful design and clean code, I create experiences that look good, move smoothly, and actually work the way they should.
                </p>
                <p>When I step away from the screen, you'll find me exploring new places and chasing sunsets. Nature keeps me inspired and reminds me why beautiful experiences matter.</p>
              </div>
            </div>
          </div>
        <AboutMeImages/>
        </div>
      </div>
    </section>
  );
}
