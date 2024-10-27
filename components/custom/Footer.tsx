import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const socials = [
  {
    icon: <GitHubLogoIcon className="w-5 h-5" />,
    href: "https://www.github.com/sumitprajapati1",
  },
  {
    icon: <LinkedInLogoIcon className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/sumit-prajapati-93881127b/",
  },
  {
    icon: <TwitterLogoIcon className="w-5 h-5" />,
    href: "https://x.com/sumit_2032004",
  },
  {
    icon: <EnvelopeClosedIcon className="w-5 h-5" />,
    href: "mailto:prajapatisumit009@gmail.com",
  },
];

export default function Footer() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4 py-6">
      <span className="text-sm">
        &copy;&nbsp;&nbsp;Sumit Prajapati &apos; &#x2022; 2024
      </span>
      <SocialLinks />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socials.map((social, index) => (
        <Link
          href={social.href}
          className="hover:text-primary transition-colors ease-linear duration-300"
          target="_blank"
          key={index}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
