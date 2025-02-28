"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BorderTrail } from "@/components/ui/visibleCards";
import { motion } from "framer-motion";
import { Code2, Download, ExternalLink, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutMe() {
  const skills = [
    "ReactJS",
    "NextJS",
    "JavaScript",
    "TailwindCSS",
    "Framer motion",
    "TypeScript",
    "NodeJS",
    "MongoDB",
    "WordPress",
    "Prisma",
  ];

  const [downloaded, setDownloaded] = useState(false);
  const handleDownload = () => {
    if (!downloaded) {
      setDownloaded(true);
      const link = document.createElement("a");
      link.href = "/others/ArifurRahman_cv.pdf";
      link.download = "ArifurRahman_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold tracking-tight"
            >
              About Me
            </motion.h1>
            <p className="text-lg text-muted-foreground">
              Hi, I&apos;m Arifur Rahman, a 22-year-old full-stack developer
              based in Chittagong, Bangladesh.
            </p>
          </div>

          <Card className="border-none bg-primary/5">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Technical Background</h2>
              </div>
              <p className="text-muted-foreground">
                Self-taught full-stack developer with expertise in modern web
                and mobile development. My main focus is on
                JavaScript/TypeScript ecosystem, building robust applications
                with React and Node.js.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-primary/5">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Language Proficiency</h2>
              </div>
              <p className="text-muted-foreground">
                Intermediate level English proficiency in reading and writing,
                developed through extensive technical documentation reading and
                writing blog posts for personal projects.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="gap-2"
              onClick={handleDownload}
              disabled={downloaded}
            >
              <Download className="w-4 h-4" />
              {downloaded ? "Downloaded" : "Download CV"}
            </Button>
            <Link
              href="https://rxresu.me/arifurrahman6778/web-developer"
              target="_blank"
            >
              <Button variant="outline" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                View Full Resume
              </Button>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 " />
            <Image
              src="/images/about-arif.jpg"
              alt="Professional headshot"
              width={600}
              height={600}
              className="relative rounded-2xl w-full object-cover aspect-[4/5] border"
            />
            <BorderTrail
              style={{
                boxShadow:
                  "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
              }}
              size={100}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
