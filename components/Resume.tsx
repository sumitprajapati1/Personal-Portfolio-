import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { ArrowDownToLine, HardDriveDownload } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface Content {
  name: string;
  title: string;
  image: string;
  education_list: Education[];
  experience_list: Experience[];
  language_list: Language[];
  social_list: Social[];
}

interface Education {
  course: string;
  institution: string;
  period: string;
  result: string;
  image: string;
}

interface Experience {
  title: string;
  institution: string;
  period: string;
  description: string[];
  image: string;
}

interface Language {
  name: string;
  proficiency: string;
}

interface Social {
  name: string;
  link: string;
  icon: any;
}

const resumeContent: Content = {
  name: "Sumit Bhagwatilal Prajapati",
  title: "Software Engineer",
  image: "/sumit-bgwhite.png",
  education_list: [
    {
      course: "Bachelor of Computer Science (Software Engineering)",
      institution: "Lok Jagrut University",
      period: "May 2021 - May 2025",
      result: "7.76",
      image: "/um-logo.png",
    },
  ],
  experience_list: [
    {
      title: "React & Node Developer",
      institution: "Promethean Tech",
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
      image: "/promethean_logo.png",
    },
    {
      title: "Full Stack Developer",
      institution: "Arraysoft technology Gandhinagar",
      period: "July 2024 - Jan 2025",
      description: [
        "Developed a consulting group website using modern web technologies, enhancing online presence and client engagement.",
        "Built and maintained RESTful APIs using Node.js and Express.js, improving server-side performance and maintainability.",
        "Integrated MongoDB with efficient schema design and used Postman for testing and debugging APIs. Added basic role-based access control and JWT authentication for secure access control.",
        "Architected and developed RESTful APIs using Node.js and TypeScript for scalable backend systems, improving data reliability and reducing query latency by 20%. Used Swagger for API documentation.",
      ],
      image: "/arraysoft_logo.png",
    },
    {
      title: "Web Developer Intern",
      institution: "Pulpit Mobility",
      period: "Jan 2024 - Apr 2024",
      description: [
        "Diagnosed and resolved critical bugs on pulpitmobility.com significantly improving site reliability and user engagement.",
        "Introduced and improved UI components to enhance user interaction and create a more engaging experience.",
        "Created pulpitinfotech.com using HTML, CSS, and Javascript to effectively present the company's technological services.",
        "Developed vishvgroup.com, a staffing platform aimed at optimizing the recruitment process with modern web solutions."
      ],
      image: "/pulpit_logo.png",
    },
  ],
  language_list: [
    {
      name: "JAVA",
      proficiency: "Basic",
    },
    {
      name: "Python",
      proficiency: "Basic",
    },
    {
      name:"Javascript",
      proficiency: "Intermediate",
    },
    {
      name: "Typescript",
      proficiency: "Intermediate",
    }
  ],
  social_list: [
    {
      name: "linkedin.com/in/Sumit-Prajapati/",
      link: "https://www.linkedin.com/in/sumit-prajapati-93881127b/",
      icon: <LinkedInLogoIcon className="w-5 h-5" />,
    },
    {
      name: "github.com/sumitprajapti1",
      link: "https://www.github.com/sumitprajapati1/",
      icon: <GitHubLogoIcon className="w-5 h-5" />,
    },
    {
      name: "prajapatisumit009@gmail.com",
      link: "mailto:prajapatisumit009@gmail.com",
      icon: <EnvelopeClosedIcon className="w-5 h-5" />,
    },
  ],
};

export default function Resume() {
  return (
    <Card className={cn("w-full max-w-4xl")}>
      <CardHeader className="bg-primary rounded-t-xl"></CardHeader>
      <CardContent className="p-4">
        <ResumeContent resume={resumeContent} />
      </CardContent>
      <CardFooter className="flex justify-center items-center p-6 bg-primary rounded-b-xl text-base">
        <Button variant={"secondary"} asChild>
          <Link href="/Sumit-Prajapati-Resume.pdf" download="Sumit-Prajapati-Resume.pdf" target="_blank" rel="noreferrer" className="flex justify-center items-center">
            <HardDriveDownload className="w-4 h-4 mr-2" />
            download
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ResumeContent({ resume }: { resume: Content }) {
  return (
    <Card className="bg-white h-[80vh] overflow-hidden overflow-y-scroll rounded-none border-none">
      <CardHeader className="flex flex-col justify-center items-center gap-4 bg-[#8ecae6]/20">
        <Avatar className="w-40 h-40 border-4 border-white">
          <AvatarImage src={resume.image} alt={resume.name}></AvatarImage>
          <AvatarFallback>sf</AvatarFallback>
        </Avatar>
        <CardTitle className="flex flex-col gap-2">
          <span className="text-black/50 text-4xl text-center font-black">
            {resume.name}
          </span>
          <span className="text-black/50 text-center font-normal">
            {resume.title}
          </span>
        </CardTitle>
      </CardHeader>
      <div className="space-y-6 py-6">
        <CardContent className="flex flex-col gap-4 py-0">
          {/* Education */}
          <p className="text-[#8ecae6]/70 text-xl font-semibold">Education</p>
          {resume.education_list.map((education, index) => (
            <div className="flex gap-4" key={index}>
              <Avatar className="w-14 h-14 border-2 border-[#8ecae6]/20">
                <AvatarImage
                  src={education.image}
                  alt={education.institution}
                ></AvatarImage>
                <AvatarFallback>sf</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-black/60 text-xs">{education.period}</p>
                <p className="text-black text-sm font-semibold">
                  {education.course}
                </p>
                <p className="text-black text-sm">CGPA: {education.result}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardContent className="flex flex-col gap-4 py-0">
          {/* Experience */}
          <p className="text-[#8ecae6]/70 text-xl font-semibold">Experience</p>
          {resume.experience_list.map((experience, index) => (
            <div className="flex gap-4" key={index}>
              <Avatar className="w-14 h-14 border-2 border-[#8ecae6]/20">
                <AvatarImage
                  src={experience.image}
                  alt={experience.institution}
                ></AvatarImage>
                <AvatarFallback>sf</AvatarFallback>
              </Avatar>
              <div className="">
                <p className="text-black/60 text-xs">{experience.period}</p>
                <p className="text-black text-sm font-semibold">
                  {experience.title}
                </p>
                <ul className="ml-4 list-disc [&>li]:mt-2">
                  {experience.description.map((desc, index) => (
                    <li key={index} className="text-black text-sm">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
        <CardContent className="flex flex-col gap-4 py-0">
          {/* Languages */}
          <p className="text-[#8ecae6]/70 text-xl font-semibold">
            Computer Languages 
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            {resume.language_list.map((language, index) => (
              <div key={index} className="">
                <p className=" text-black font-bold text-sm">{language.name}</p>
                <p className=" text-black text-sm">{language.proficiency}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardContent className="flex flex-col gap-4 py-0">
          {/* Contact */}
          <p className="text-[#8ecae6]/70 text-xl font-semibold">
            Reach out to me via
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:justify-between">
            {resume.social_list.map((social, index) => (
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 hover:text-[#8ecae6]/70 flex items-center gap-2 transition-colors duration-500 ease-in-out"
                key={index}
              >
                {social.icon}
                <span className="text-black/60 hover:text-[#8ecae6]/70 text-sm transition-colors duration-500 ease-in-out">
                  {social.name}
                </span>
              </Link>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
