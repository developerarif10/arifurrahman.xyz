import Card from "@/components/cards/card";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { PulseBeamsSecond } from "@/components/pulse-beam";

export default function Home() {
  return (
    <div id="webcrumbs">
      <div className="text-neutral-50 rounded-lg">
        <Header />
        <main>
          <h1 className="text-6xl font-title mb-4">
            <span className="font-bold">Arifur Rahman</span>
            <br />
            I&apos;m a <span className="text-blue-600">
              frontend developer
            </span>{" "}
            that
            <br />
            rarely{" "}
            <span className="text-primary-500 font-title">writes code.</span>
          </h1>
          <p className="text-neutral-300 leading-7 mb-6">
            Meet Arifur Rahman, the self-proclaimed code wizard who can turn
            caffeine into beautiful websites. His passion for building clean and
            functional designs is only rivaled by his passion for finding the
            perfect GIF to express his excitement.
          </p>
          <p>
            Building{" "}
            <span className="font-medium text-neutral-50">Algochurn</span> and{" "}
            <span className="font-medium text-neutral-50">Aceternity</span> when
            I&apos;m not working on my day job.
          </p>

          {/* Render Multiple Cards */}

          <div className="my-20">
            <Card />
          </div>

          <section>
            <PulseBeamsSecond />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
