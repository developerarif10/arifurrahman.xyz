import Header from "@/components/header/header";

export default function Home() {
  return (
    <div id="webcrumbs">
      <div className=" text-neutral-50 rounded-lg shadow-lg p-8">
        <Header />
        <main className="">
          <h1 className="text-4xl font-title mb-4">
            I&apos;m a <span>software engineer</span> that
            <br />
            rarely{" "}
            <span className="text-primary-500 font-title">writes code.</span>
          </h1>
          <p className="text-neutral-300 leading-7 mb-6">
            Meet Manu Arora, the self-proclaimed code wizard who can turn
            caffeine into beautiful websites. His passion for building clean and
            functional designs is only rivaled by his passion for finding the
            perfect GIF to express his excitement.
          </p>
          <p>
            Building{" "}
            <span className="font-medium text-neutral-50">Algochurn</span> and{" "}
            <span className="font-medium text-neutral-50">Aceternity</span> when
            Im not working on my day job.
          </p>
        </main>
      </div>
    </div>
  );
}
