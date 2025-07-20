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
  description: string | string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "React & Node Developer",
    company: "Promethean Tech",
    period: "Feb 2025 - Present",
    description: [
      "Developed and maintained React.js and Next.js frontends for 3+ client projects, improving performance and scalability by 30%.",
      "Integrated RESTful APIs and worked with backend developers to implement scalable Node.js services.",
      "Implemented JWT-based authentication flows and contributed to API debugging and optimization using browser network tools.",
      "Gained experience with Redis caching and API performance tuning.",
      "Collaborated closely with clients to gather requirements and deliver optimized, user-friendly interfaces using TypeScript, Git, and team workflows with Bitbucket.",
      "Used modern JavaScript frameworks and AI tools like Cursor to speed up development time by 35% and reduce bugs.",
      "Expanded knowledge in backend development with Node.js, working on APIs and improving overall system efficiency."
    ],
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Git",
      "Bitbucket",
      "Cursor",
      "Github",
      "Next.js",
      "Acertinity UI ",
      "ShadCN UI",
      "Tailwind CSS",
      "Redis",
      "API",
      "Performance",
      "Scalability",
      "User Experience",
      "User Interface",
      "User Interaction",
      "Jest",
      "Testing",
      "Debugging",
      "API Documentation",
      "API Testing",
    ],
  },
  // Full Stack Developer July. 2024 – Jan. 2025
// Arraysoft technology Gandhinagar
// • Developed a consulting group website using modern web technologies, enhancing online presence and client engagement.
// • Built and maintained RESTful APIs using Node.js and Express.js, improving server-side performance and maintainability.
// • Integrated MongoDB with efficient schema design and used Postman for testing and debugging APIs. Added basic role-based
// access control and JWT authentication for secure access control.
// • Architected and developed RESTful APIs using Node.js and TypeScript for scalable backend systems, improving data reliability and
// reducing query latency by 20%. Used Swagger for API documentation .
{
  title: "Full Stack Developer",
  company: "Arraysoft technology Gandhinagar",
  period: "July 2024 - Jan 2025",
  description: [
    "Developed a consulting group website using modern web technologies, enhancing online presence and client engagement.",
    "Built and maintained RESTful APIs using Node.js and Express.js, improving server-side performance and maintainability.",
    "Integrated MongoDB with efficient schema design and used Postman for testing and debugging APIs. Added basic role-based access control and JWT authentication for secure access control.",
    "Architected and developed RESTful APIs using Node.js and TypeScript for scalable backend systems, improving data reliability and reducing query latency by 20%. Used Swagger for API documentation.",
  ],
  skills: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Postman",
    "Swagger",
    "JWT",
    "Role-based access control",
    "API documentation",
    "API testing",
    "API performance",
    "API scalability",
    "API security",
    "API optimization",
    "API debugging",
    "API monitoring",
  ],
},
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
            {Array.isArray(experience.description) ? (
              <ul className="list-disc pl-5 space-y-2">
                {experience.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{experience.description}</p>
            )}
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
