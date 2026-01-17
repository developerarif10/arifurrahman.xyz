import ContactCard from "@/components/cards/contact-card";


export const metadata = {
  title:
    "Contact Arifur Rahman | Hire Freelance Website Developer in Bangladesh",
  description:
    "Contact Arifur Rahman, a freelance website developer in Bangladesh specializing in Next.js, React, and modern SEO-friendly websites for businesses and startups.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen w-full bg-white selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-16 lg:pt-24 pb-16">
        <ContactCard />
      </div>
    </section>
  );
}
