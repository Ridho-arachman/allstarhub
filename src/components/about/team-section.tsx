import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Muhammad Ridho Arachman",
      role: "CEO & Founder",
      image: "/images/about/team-1.webp",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Mike Morris",
      role: "Lead Designer",
      image: "/images/about/team-2.webp",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Andrew Thompson",
      role: "Senior Developer",
      image: "/images/about/team-3.webp",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "David Rodriguez",
      role: "Marketing Director",
      image: "/images/about/team-4.webp",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            <span className="text-primary">Team</span> Members
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Meet our talented team of professionals who work tirelessly to
            deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden text-center shadow-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Link
                    href={member.social.github}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
