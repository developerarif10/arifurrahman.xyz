import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            Arifur Rahman
          </h1>
          <p className="mb-8 leading-relaxed">
            {" "}
            Meet Arifur Rahman, the self-proclaimed code wizard who can turn
            caffeine into beautiful websites. His passion for building clean and
            functional designs is only rivaled by his passion for finding the
            perfect GIF to express his excitement.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/arifurrahman.webp"
            width={350}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}

{
  /* <div>
      <h1 className="text-6xl font-title mb-4">
        <span className="font-bold">Arifur Rahman</span>
        <br />
        I&apos;m a <span className="text-blue-600">
          frontend developer
        </span>{" "}
        that
        <br />
        rarely <span className="text-primary-500 font-title">writes code.</span>
      </h1>
      <p className="text-neutral-300 leading-7 mb-6">
        Meet Arifur Rahman, the self-proclaimed code wizard who can turn
        caffeine into beautiful websites. His passion for building clean and
        functional designs is only rivaled by his passion for finding the
        perfect GIF to express his excitement.
      </p>
      <p>
        Building <span className="font-medium text-neutral-50">Algochurn</span>{" "}
        and <span className="font-medium text-neutral-50">Aceternity</span> when
        I&apos;m not working on my day job.
      </p>     </div>*/
}
