import Footer from "@/components/footer";
import NewHeader from "@/components/new-header";
import PageLoader from "@/components/page-loader";
import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { ReactLenis } from "lenis/react";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-source-sans",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export const metadata = {
  metadataBase: new URL("https://arifurrahman.site"),
  title: {
    default: "Arifur Rahman | Expert Web Developer in Bangladesh | Next.js Specialist",
    template: "%s | Arifur Rahman",
  },
  description:
    "Hire Arifur Rahman, a professional Web Developer in Bangladesh. Specializing in high-performance Next.js websites, React apps, and SEO-friendly web solutions for startups and businesses. ",
  keywords: [
    "Web Developer in Bangladesh",
    "Best Web Developer Chittagong", 
    "Next.js Developer Bangladesh",
    "React.js Expert for Hire",
    "Front-end Developer Bangladesh",
    "Custom Website Design Dhaka",
    "Headless CMS Developer",
    "Arifur Rahman Portfolio",
    "Arifur Rahman",
    "Website Developer in Bangladesh",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Hire Website Developer",
    "Remote Web Developer",
    "Business Website Developer",
    "SEO Friendly Website Developer",
    "Landing Page Developer",
    "Modern Website Development",
    "Custom Website Development",
  ],
  authors: [{ name: "Arifur Rahman", url: "https://arifurrahman.site" }],
  creator: "Arifur Rahman",
  publisher: "Arifur Rahman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Arifur Rahman | Professional Web Developer in Bangladesh",
    description:
      "Need a modern, fast website? I build scalable Next.js and React applications for local and global businesses.",
    url: "https://arifurrahman.site",
    siteName: "Arifur Rahman Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Arifur Rahman - Web Developer in Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arifur Rahman | Next.js & React Specialist",
    description:
      "Professional Web Developer based in Bangladesh. Expert in React, Next.js, and Headless CMS.",
    creator: "@developerarif",
    images: ["/og-image.webp"],
  },
  verification: {
    google: "BC_JK1EkbjpDyqeFZY2W_J72-JACHfgQSI0ECviJz8I",
  },
  alternates: {
    canonical: "https://arifurrahman.site",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arifur Rahman",
    url: "https://arifurrahman.site",
    image: "https://arifurrahman.site/og-image.webp",
    sameAs: [
      "https://twitter.com/developerarif",
      "https://linkedin.com/in/arifurrahmanrafi", 
      "https://github.com/developerarif10"       
    ],
    jobTitle: "Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chittagong",
      addressCountry: "BD",
    },
    description: "Arifur Rahman is a Web Developer in Bangladesh specializing in Next.js and modern web technologies.",
  };

  return (
    <html lang="en">
      <body className={`${sourceSansPro.variable} ${bebasNeue.variable} font-sans antialiased overflow-x-hidden`}>
        {/* Inject Schema for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <PageLoader />
        <ReactLenis root>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <section>
              <NewHeader />
              <main>
                {children} <Analytics />
              </main>
              <Footer />
            </section>
          </ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  );
}