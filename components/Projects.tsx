"use client";

import { useRef } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./aceternity/Spotlight";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionWrapper from "./custom/SectionWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useIsVisible } from "@/hooks/useIsVisible";

interface Project {
  feature_cover: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string | null;
  live: string | null;
}

const projects: Project[] = [
  {
    feature_cover: "/melody-masters.png",
    title: "Melody Masters Academy",
    subtitle: "A website for booking instrument and courses ",
    description:
      "MusicMastersAcademy is a dynamic and interactive music learning platform built with Next.js, TypeScript, and Acertinity UI. This project showcases a modern, responsive web application designed to enhance the musical journey of users by offering various online resources, including webinars, tutorials, and instructor-led courses.Key Features: Responsive Design: Built with Acertinity UI for a seamless experience across all devices. Webinars & Courses: Explore featured webinars and courses tailored to different musical interests Interactive UI: Smooth navigation and engaging user interface powered by Next.js and TypeScript.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "acertinity-ui",
      "Front-End"
    ],
    live: null,
    github: "https://github.com/sumitprajapati1/MelodyMastersAcademy",
  },
  {
    feature_cover: "/chrome-timer.png",
    title: "Chrome Timer Extension",
    subtitle: "A productivity tool ",
    description:
      "Engineered a Chrome Timer Extension with HTML, CSS, and JavaScript, incorporating the Pomodoro technique to enhance productivity. Implemented task management features that enable users to add, delete, and monitor multiple tasks. The extension triggers an alert after a 25-minute timer to maintain focus during work intervals",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Pomodoro Technique",
      "Back-End"
    ],
    github: "https://github.com/sumitprajapati1/chrome-timer-extension",
    live:null,
  },
  {
    feature_cover: "/global-news.png",
    title: "Global News App",
    subtitle: "A web application that shows all types of news of UK .",
    description:
      " A news application providing real-time updates and articles across various categories by integrating with News API. Enhanced user experience by implementing responsive navigation and pagination, allowing users to easily switch between news categories and browse articles with seamless page transitions.",
    stack: [
     "React.js",
     "bootstrap",
     "newsapi",
     "front-end",
    ],
    github: "https://github.com/sumitprajapati/Global-News-Built-in-React",
    live: null,
  },
  {
    feature_cover: "/chatbot-botpress.png",
    title: "ChatBot using botpress",
    subtitle: "A Portfolio bot",
    description:
      "Engineered a portfolio Bot using Botpress to provide instant information to my portfolio, GitHub repositories, coding profiles and work experience. Designed bot to ensure efficient navigation through my professional information",
    stack: [
      "bootpress"
    ],
    github: null,
    live: "https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=2fd87bc8-f543-45ee-840d-a925ab0f1b01",
  },
  {
    feature_cover: "/url-shortener.png",
    title: "URL Shortener",
    subtitle: "Convert a Long working URL into a short URL",
    description:
      "An efficient URL shortener built with Node.js and Express.js. This application allows users to shorten long URLs and provides a short link that redirects to the original URL.Features Shorten URLs: Input a long URL and get a short link. ",
    stack: [
      "Express.js",
      "Node.js",
      "MongoDB",
      "NanoID (npm package)",
      "back-end"
    ],
    github: "https://github.com/sumitprajapati1/URL-Shortener",
    live: null,
  },
];

export default function Projects() {
  return (
    <SectionWrapper>
      <h2 className="mb-40 text-5xl font-bold tracking-tight text-center text-primary">
        projects
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12" id="projects">
        <Spotlight fill="white" className="hidden lg:block" />
        {projects.map((project, index) => (
          <ShinyCard
            key={index}
            project={project}
            className={index == 0 ? "lg:col-span-12" : "lg:col-span-6"}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ShinyCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader
        className="p-0 relative overflow-clip space-y-0 rounded-t-xl"
        ref={ref}
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            src={project.feature_cover}
            alt="geniesafe"
            fill
            sizes="100vw"
            className={cn(
              "scale-105 object-cover border-t border-white/[0.08] rounded-t-xl",
              isVisible ? "ease-in-out duration-1000 scale-100 delay-300" : ""
            )}
          />
        </AspectRatio>
        <div
          className={cn(
            "absolute bg-black border-t border-white/[0.08] rounded-t-xl w-full h-full opacity-60",
            isVisible
              ? "transition-opacity duration-1000 opacity-0 delay-300"
              : ""
          )}
        />
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-1.5">
            <h3 className="text-xl font-semibold leading-none tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <div className="flex">
            {project.live && (
              <Button variant="ghost" size={"icon"} asChild>
                <Link href={project.live} target="_blank">
                  <GlobeIcon className="w-6 h-6" />
                </Link>
              </Button>
            )}
            {project.github && (
              <Button variant="ghost" size={"icon"} asChild>
                <Link href={project.github} target="_blank">
                  <GitHubLogoIcon className="w-6 h-6" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <p className="text-card-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2 flex-wrap">
        {project.stack.map((stack, index) => (
          <Badge key={index}>{stack}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
