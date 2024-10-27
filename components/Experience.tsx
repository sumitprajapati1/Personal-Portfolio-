import TracingBeam from "@/components/aceternity/TracingBeam";
import ScrollReveal from "@/components/custom/ScrollReveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  StarsCard,
} from "./ui/card";
import SectionWrapper from "./custom/SectionWrapper";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Web Developer Intern",
    company: "Pulpit Mobility",
    period: "Jan 2024 - Apr 2024 ",
    description:
      "Diagnosed and resolved critical bugs on pulpitmobility.com significantly improving site reliability and user engagement. Introduced and improved UI components to enhance user interaction and create a more engaging experience. Created pulpitinfotech.com using HTML, CSS, and Javascript to effectively present the company's technological services. Developed vishvgroup.com, a staffing platform aimed at optimizing the recruitment process with modern web solutions.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Design",
      "Github",
      "MVC",
      "Bootstrap",
      "SQL",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "ArraySoft Technologies",
    period: "Oct 2024 - present",
    description:
      "Just Started..",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Acertinity UI ",
      "ShadCN UI"
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper>
      <TracingBeam>
        <h2 className="mb-40 text-5xl font-bold tracking-tight text-center text-primary">
          experience
        </h2>

        <div className="flex flex-col gap-20" id="experience">
          {experiences.map((experience, index) => (
            <ExperienceComponent experience={experience} key={index} />
          ))}
        </div>
      </TracingBeam>
    </SectionWrapper>
  );
}

function ExperienceComponent({ experience }: { experience: Experience }) {
  return (
    <StarsCard>
      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-4">
        <CardHeader className={cn("pb-0 md:col-span-2 md:pr-0")}>
          <ScrollReveal x={-20} duration="1000ms" threshold={0.75}>
            <CardTitle className={cn("text-xl")}>{experience.title}</CardTitle>
            <CardDescription>
              {experience.company}
              <br />
              {experience.period}
            </CardDescription>
          </ScrollReveal>
        </CardHeader>
        <CardContent className={cn("pt-6 pb-0 md:pl-0 md:col-span-3")}>
          <ScrollReveal y={-20} duration="1000ms" threshold={0.75}>
            <p>{experience.description}</p>
          </ScrollReveal>
        </CardContent>
      </div>
      <CardFooter className={cn("pt-6 flex gap-2 flex-wrap")}>
        {experience.skills.map((skill, index) => (
          <ScrollReveal x={20} duration="1000ms" threshold={0.75} key={index}>
            <Badge>{skill}</Badge>
          </ScrollReveal>
        ))}
      </CardFooter>
    </StarsCard>
  );
}
