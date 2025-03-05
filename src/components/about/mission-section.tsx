import { Card, CardContent } from "@/components/ui/card";

const MissionSection = () => {
  return (
    <section className="container mx-auto my-16 px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold">
          Our <span className="text-primary">Mission</span> & Values
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          We are driven by a clear mission and guided by strong values that
          shape everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="bg-primary/5">
          <CardContent className="p-8">
            <h3 className="mb-4 text-center text-2xl font-bold md:text-start">
              Our Mission
            </h3>
            <p className="mb-4 text-muted-foreground">
              To empower businesses with innovative digital solutions that drive
              growth, enhance customer experiences, and create lasting value.
            </p>
            <p className="text-muted-foreground">
              We strive to be the leading digital agency that transforms ideas
              into impactful digital experiences, helping our clients stay ahead
              in the rapidly evolving digital landscape.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5">
          <CardContent className="p-8">
            <h3 className="mb-4 text-center text-2xl font-bold md:text-start">
              Our Values
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Innovation",
                  description:
                    "We embrace creativity and continuously seek new ways to solve problems.",
                },
                {
                  title: "Excellence",
                  description:
                    "We are committed to delivering high-quality work that exceeds expectations.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe in the power of teamwork and partnership with our clients.",
                },
                {
                  title: "Integrity",
                  description:
                    "We conduct our business with honesty, transparency, and ethical standards.",
                },
              ].map((value, index) => (
                <li key={index}>
                  <h4 className="font-semibold">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MissionSection;
