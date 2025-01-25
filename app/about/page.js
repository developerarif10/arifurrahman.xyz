import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="md:p-16 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-medium text-black/90 dark:text-white/90">
              About Me
            </h1>

            <div className="space-y-6 text-md text-black/80 dark:text-white/80">
              <p>
                My name is <span className="font-semibold">Arifur Rahman</span>,
                I&apos;m 22 years old and I live in Chittagong, Bangladesh.
              </p>

              <p>
                <span className="font-semibold">Self-taught</span> full-stack. I
                have knowledge in ReactJS and NextJS on the Front-end, Nest.js
                and Express.js on the Back-end, and React-native/Expo on Mobile
                with a focus on Android. My main stack is around JavaScript,
                primarily Typescript.
              </p>

              <p>
                I&apos;m on an intermediate level of English in reading and
                writing, skill acquired by reading various documentation and
                articles related to technologies and other subjects in English,
                and also writing blog posts and documentation of personal
                projects.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                className="gap-2 text-blue-400 border-blue-400/20 hover:bg-blue-400/10"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button
                variant="link"
                className="text-gray-400 hover:text-gray-300"
                asChild
              >
                <Link href="#">
                  read.cv <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-3xl" />
            <Image
              src="/images/about-arif.jpg"
              alt="Profile photo"
              width={600}
              height={600}
              className="rounded-3xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
