"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function WorkExperience() {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Freelancer",
      type: "Self-Employed",
      period: "Sep 2024",
      isPresent: true,
      description:
        "Development of websites, web applications and tools using modern technologies.",
      responsibilities: [
        "Building full-stack applications with TypeScript and React",
        "Implementing responsive designs and modern UI patterns",
        "Database design and API development with Node.js",
        "DevOps and deployment automation",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Next.js",
        "Python",
        "Docker",
      ],
    },
    {
      id: 2,
      role: "Junior Front-end Developer",
      company: "Freedom IT Institutions",
      type: "Full-time",
      period: "Jun 2021 - Jul 2022",
      description:
        "create and maintain efficient, user-friendly web applications while supporting internal projects and improving the overall digital experience for clients.",
      responsibilities: [
        "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.",
        "Collaborated with designers to implement user-friendly UI/UX components.",
        "Optimized website performance and fixed front-end bugs for better functionality.",
        "Assisted in building internal web tools to enhance company operations.",
        "Provided technical support for web-related issues and improvements.",
      ],
    },
    // {
    //   id: 3,
    //   role: "Computer Lab Monitor",
    //   company: "Instituto Mix de Profissões",
    //   type: "Part-time",
    //   period: "Jun 2023 - Jul 2024",
    //   description:
    //     "Supporting students and maintaining computer lab infrastructure.",
    //   responsibilities: [
    //     "Assisting students with technical issues",
    //     "Maintaining computer systems",
    //     "Teaching basic computing skills",
    //     "Managing lab resources",
    //   ],
    // },
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          <p className="text-muted-foreground">
            My professional journey and career progression
          </p>
        </div>

        <div className="relative space-y-8">
          <div className="absolute left-8 top-3 bottom-3 w-px bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative ml-16 border-none bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4  bg-[#364156]" />

                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={exp.isPresent ? "default" : "secondary"}>
                        {exp.period}
                      </Badge>
                      {exp.isPresent && (
                        <Badge
                          variant="outline"
                          className="bg-primary/20 text-primary"
                        >
                          Present
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() =>
                      setExpandedId(expandedId === exp.id ? null : exp.id)
                    }
                  >
                    View Details
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedId === exp.id ? "rotate-180" : ""
                      }`}
                    />
                  </Button>

                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 space-y-4"
                    >
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>

                      {exp.technologies && (
                        <div className="space-y-2">
                          <h4 className="font-medium">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
