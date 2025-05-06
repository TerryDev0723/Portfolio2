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
    href: "https://www.github.com/escornbar",
  },
  {
    icon: <LinkedInLogoIcon className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/michaelterry",
  },
  {
    icon: <EnvelopeClosedIcon className="w-5 h-5" />,
    href: "michaelterrydev@gmail.com",
  },
];

export default function Footer() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4 py-6">
      <span className="text-sm">
        &copy;&nbsp;&nbsp;Michael Terry&#x2022; 2021
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
