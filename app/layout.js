import Footer from "@/components/footer";
import PageLoader from "@/components/page-loader";
import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { ReactLenis } from "lenis/react";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-source-sans",
});

import NewHeader from "@/components/new-header";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export const metadata = {
  metadataBase: new URL("https://arifurrahman.site"),
  title: {
    default: "Arifur Rahman - Full-Stack Developer & Tech Enthusiast",
    template: "%s | Arifur Rahman",
  },
  description:
    "Portfolio of Arifur Rahman, a Full-Stack Developer specializing in Next.js, React, and modern web solutions. Explore my projects and articles.",
  keywords: [
    "Arifur Rahman",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Development",
    "JavaScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Arifur Rahman", url: "https://arifurrahman.site" }],
  creator: "Arifur Rahman",
  publisher: "Arifur Rahman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Arifur Rahman - Full-Stack Developer",
    description:
      "Building modern, scalable, and user-centric web applications with Next.js and React.",
    url: "https://arifurrahman.site",
    siteName: "Arifur Rahman Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Arifur Rahman Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arifur Rahman - Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js and React. Check out my latest work.",
    creator: "@developerarif",
    images: ["/og-image.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "BC_JK1EkbjpDyqeFZY2W_J72-JACHfgQSI0ECviJz8I",
  },
  alternates: {
    canonical: "/",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <meta name="apple-mobile-web-app-title" content="fdsf" />
        <meta
          name="google-site-verification"
          content="BC_JK1EkbjpDyqeFZY2W_J72-JACHfgQSI0ECviJz8I"
        />
        <body className={`${sourceSansPro.variable} ${bebasNeue.variable} font-sans antialiased overflow-x-hidden`}>
          <PageLoader />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <section>
              {/* <Header /> */} <NewHeader />
              <main>{children} <Analytics /></main>
              <Footer />
            </section>
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
