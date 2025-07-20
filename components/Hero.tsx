import Image from "next/image";
import BackgroundBeams from "./aceternity/BackgroundBeams";
import { CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { HardDriveDownload } from "lucide-react";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 md:justify-center md:items-center min-h-[80vh] gap-16 antialiased">
      <div className="relative flex flex-col">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary overflow-hidden inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.snug))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.none))] lg:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))]">
          <ul className="block text-left leading-tight [&_li]:block animate-text-slide-3">
            <li>Software engineer</li>
            <li>Web developer</li>
            <li>Full-stack</li>
            <li aria-hidden="true">software engineer</li>
          </ul>
        </h1>
        <p className="mt-2 lg:text-lg">
        Full-Stack Developer focused on delivering efficient, end-to-end solutions.
         Skilled at solving complex problems and crafting seamless user experiences. 
         Thrives in collaborative environments and is committed to enhancing both frontend and backend expertise.
        </p>
        {/* <CardFooter className="flex justify-center items-center p-6 bg-primary rounded-b-xl text-base"> */}
        <Button variant={"secondary"} asChild className="mt-4 w-fit">
          <a href="/Sumit-Prajapati-Resume.pdf" download="Sumit-Prajapati-Resume.pdf" target="_blank" rel="noreferrer" className="flex justify-center items-center">
            <HardDriveDownload className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </Button>
      {/* </CardFooter> */}
      </div>
      <div className="relative flex flex-col flex-1 justify-center items-center">
        {/* <div className="z-10">
            <Image
              src="/sumit.png"
              alt="sumit prajapati"
              width={300}
              height={300}
              className="mx-auto rounded-3xl lg:ml-auto lg:mr-0 xl:mr-52"
            />
          </div> */}
        <div className="relative w-full max-w-xs h-96 rounded-[2rem] overflow-hidden z-10">
          <Image
            className="object-contain"
            fill
            sizes="100vw"
            src={"/sumit.png"}
            alt="hero-image"
            priority
          ></Image>
        </div>
        <div className="absolute inset-0 z-0 flex flex-col justify-center gap-4 opacity-15">
          <div className="flex justify-center leading-none text-[9rem] md:justify-start lg:justify-end xl:text-[11rem]">
            Sumit
          </div>
          <div className="flex justify-center leading-none text-[9rem] md:justify-start lg:justify-end xl:text-[11rem]">
            Prajapati 
          </div>
        </div>
      </div>
      <BackgroundBeams className="z-0" />
    </div>
  );
}
