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
  title: "Arifur Rahman - React Front-end Web Developer | Tech Enthusiast",
  description: "Developed by @developerarif",
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
