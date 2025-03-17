import Link from "next/link";

const Recommendation = () => {
  return (
    <section className=" py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto  p-6 rounded-2xl shadow-lg">
        <img
          src="/images/sumit.jpg"
          alt="Expert Name"
          className="mx-auto w-20 h-20 rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold">Sumit Saha</h3>
        <p className="text-gray-500">CEO of Learn with Sumit</p>
        <blockquote className="mt-4 italic text-gray-700">
          "Arifur expertise in Next.js, React.js, and Tailwind CSS is
          exceptional. His ability to solve complex problems and deliver
          high-quality web solutions is truly impressive."
        </blockquote>
        <Link
          href="/others/recommendation-letter.pdf"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Full Letter
        </Link>
      </div>
    </section>
  );
};

export default Recommendation;
