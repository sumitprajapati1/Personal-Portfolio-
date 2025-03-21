import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Meteors } from "./aceternity/Metors";
import Link from "next/link";
import SectionWrapper from "./custom/SectionWrapper";
import React from "react";

interface Setup {
  type: string;
  items: SetupItem[];
}

interface SetupItem {
  name: string;
  link: string | null;
}

const setupItems: Setup[] = [
  {
    type: "Frontend ",
    items: [
      {
        name: "HTML / CSS ",
        link: "https://diverging-bar-chart-built-in-javascript.vercel.app/",
      },
      {
        name: "Javascript",
        link: "https://github.com/sumitprajapati1/Chrome-Timer-Extension",
      },
      {
        name: "Typescript",
        link: "https://github.com/sumitprajapati1/Global-News-Built-in-React",
      },
      {
        name: "React.js",
        link: "https://github.com/sumitprajapati1/Global-News-Built-in-React",
      },
      {
        name: "Next.js",
        link: "https://github.com/sumitprajapati1/Personal-Portfolio-",
      },
    ],
  },
  {
    type: "Backend",
    items: [
      {
        name: "Node.js ",
        link: null
      },
      {
        name: "Express.js",
        link: null
      },
      {
        name: "MongoDB",
        link: null
      }
    ],
  },
  {
    type: "Version Control",
    items: [
      {
        name: "Git",
        link: null
      },
      {
        name: "GitHub",
        link: null
      },
      {
        name: "Bitbucket",
        link: null
      }
    ],
  },
  {
    type: "Tools",
    items: [
      {
        name: "Visual Studio Code",
        link: null,
      },
      {
        name: "postman",
        link: null
      },
      {
        name: "nodemon",
        link: null
      }
      // {
      //   name:"AWS (amazon web services)",
      //   link: null
      // }
    ],
  },
  {
    type: "AI tools",
    items: [
      {
        name: "tabnine",
        link: null,
      },
      {
        name: "Github-copilot",
        link: null,
      },
      {
        name: "Cursor",
        link: null,
      },

    ],
  },
  {
    type: "Coding platforms",
    items: [
      {
        name: "Leetcode",
        link: "https://leetcode.com/u/sumit_prajapati_1/",
      },
      {
        name: "Codechef",
        link: "https://www.codechef.com/users/sumit_ljiet"
      },
      {
        name: "Hackerrank",
        link: "https://www.hackerrank.com/profile/prajapatisumit02"
      }
    ],
  },
  {
    type: "Design Tool",
    items: [
      { name: "aceternity Ui", 
        link: "https://ui.aceternity.com/"
      },
      {
        name: "shadcn ui",
        link: "https://ui.shadcn.com/"
      }
    ],
  },
  {
    type: "Laptop",
    items: [
      {
        name: "Latitude ES440 x-64 based PC RAM-16GB",
        link:null
      },
      {
        name:"Intel(R) Core(TM) i5-4300U CPU @ 1.90GHz",
        link:null
      }
    ],
  },
];

export default function Setup() {
  return (
    <SectionWrapper className="mb-60">
      <SetupTable />
    </SectionWrapper>
  );
}

function SetupTable() {
  return (
    <Card className={cn("w-full max-w-3xl")} id="setup">
      <CardHeader className="relative overflow-hidden">
        <CardTitle className="mb-6 text-5xl font-bold tracking-tight text-center text-primary">
          tech skills / setup
        </CardTitle>
        <CardDescription className="text-center text-primary-foreground">
          The things that I use for my coding 
        </CardDescription>
        <Meteors number={30} />
      </CardHeader>
      <CardContent className={cn("p-0")}>
        {setupItems.map((setup, index) => (
          <SetupTableRow
            key={index}
            setup={setup}
            index={index}
            className={index == setupItems.length - 1 ? "rounded-b-xl" : ""}
          />
        ))}
      </CardContent>
    </Card>
  );
}

function SetupTableRow({
  setup,
  index,
  className,
}: {
  setup: Setup;
  index: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-6 py-4 md:grid md:grid-cols-3 items-center",
        index % 2 == 0 ? "bg-muted dark:bg-white/[0.08]" : "bg-transparent",
        className
      )}
    >
      <p className="font-bold text-sm md:col-span-1 xl:text-base">
        {setup.type}
      </p>
      <div className="flex flex-col text-sm text-muted-foreground md:col-span-2 xl:text-base">
        {setup.items.map((item, i) => (
          <React.Fragment key={i}>
            {item.link ? (
              <Link href={item.link}>
                <span className="hover:text-primary/80">{item.name}</span>
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
