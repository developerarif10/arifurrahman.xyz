import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { ThemeProvider } from "@/providers/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arifur Rahman - React Front-end Web Developer | Tech Enthusiast",
  description: "Generated by @developerarif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
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
