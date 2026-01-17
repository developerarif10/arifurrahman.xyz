import ContactCard from "@/components/cards/contact-card";


export const metadata = {
  title:
    "Contact Arifur Rahman | Let's Collaborate",
  description:
    "Get in touch for web development projects, design collaborations, or general inquiries.",
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
