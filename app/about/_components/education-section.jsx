"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  GraduationCap,
  MapPin,
} from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Business Administration",
      institution: "University of Chittagong",
      location: "Chittagong, Bangladesh",
      period: "2022 - 2026",
      gpa: "3.6",
      description:
        "Focused on software engineering and web development technologies.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Best Project Award - Final Year",
        "Technical Club Lead",
      ],
      courses: [
        "Advanced Web Technologies",
        "Data Structures & Algorithms",
        "Database Management",
        "Software Engineering",
        "Computer Networks",
        "Mobile App Development",
      ],
      inProgress: true,
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      institution: "Tech Academy",
      location: "Online",
      period: "2019 - 2020",
      description: "Intensive program covering full-stack web development.",
      achievements: ["Top Performer Award", "Built 5 full-stack projects"],
      courses: [
        "Frontend Development",
        "Backend Development",
        "Database Design",
        "API Development",
        "DevOps Basics",
      ],
    },
  ];

  return (
    <section className="py-16 px-4  ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>
          <p className="text-muted-foreground">
            Academic background and qualifications
          </p>
        </div>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        {edu.degree}
                        {edu.inProgress && (
                          <Badge variant="default" className="ml-2 ">
                            In Progress
                          </Badge>
                        )}
                      </h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          Achievements
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" />
                          Key Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <TooltipProvider key={i}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Badge
                                    variant="outline"
                                    className="cursor-help"
                                  >
                                    {course}
                                  </Badge>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Click to view course details</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button variant="ghost" disabled className="gap-2">
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
