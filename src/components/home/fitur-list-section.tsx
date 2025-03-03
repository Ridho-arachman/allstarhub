import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Bandage, ChartNoAxesCombined, Medal } from "lucide-react";

const FiturList = [
  {
    title:
      "Stay updated with real-time game statistics and player performance insights.",
    description:
      "AllStarHub offers comprehensive features to enhance your basketball experience.",
    icon: <ChartNoAxesCombined />,
  },
  {
    title:
      "Track player injuries and game stats effortlessly with our intuitive interface.",
    description:
      "Get instant updates on player injuries to stay ahead of the game.",
    icon: <Bandage />,
  },
  {
    title:
      "Explore team standings and betting odds for informed game predictions.",
    description:
      "Make smarter bets with our detailed analysis of team performance.",
    icon: <Medal />,
  },
];

const FiturListSection = () => {
  return (
    <section className="mx-10 mt-20 md:mx-20">
      <div className="flex flex-col gap-10">
        <h2 className="text-4xl font-semibold md:text-6xl">
          Discover the ultimate platform for <br className="hidden md:inline" />
          tracking your favorite basketball <br className="hidden md:inline" />
          teams and players.
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {FiturList.map((item, index) => (
            <Card key={index} className="shadow-inner shadow-black">
              <CardHeader>
                {item.icon}
                <CardTitle className="font-sans text-2xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">See More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiturListSection;
