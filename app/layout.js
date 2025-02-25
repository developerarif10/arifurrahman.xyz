import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { ThemeProvider } from "@/providers/theme-provider";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});
// const geistMono = {
//   // variable: "--font-geist-mono",
//   subsets: ["latin"],
// };

export const metadata = {
  title: "Arifur Rahman - React Front-end Web Developer | Tech Enthusiast",
  description: "Developed by @developerarif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section>
            <Header />
            <main>{children}</main>
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
