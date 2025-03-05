import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const IntroSection = () => {
  return (
    <section className="container mx-auto my-16 px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold">
          <span className="text-primary">Introduction</span> To Best
          <br />
          Digital Agency!
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          We are a team of passionate professionals dedicated to delivering
          exceptional digital solutions.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            icon: "🔍",
            title: "Research & Analysis",
            description:
              "We conduct thorough research to understand your business needs and market trends.",
          },
          {
            icon: "⚙️",
            title: "Strategy Development",
            description:
              "We create customized strategies to help you achieve your business goals effectively.",
          },
          {
            icon: "🚀",
            title: "Implementation & Support",
            description:
              "We implement solutions and provide ongoing support to ensure your success.",
          },
        ].map((item, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 rounded-lg bg-muted/30 p-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/about/team-working.webp"
            alt="Team working together"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/about/team-meeting.webp"
            alt="Team in a meeting"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
