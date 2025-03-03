"use client";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import RatingComponent from "../ui/rating";
import Image from "next/image";

const testimonials = [
  {
    sentence: `"This platform has revolutionized the way we analyze game data, providing invaluable real-time insights for teams and fans. A true game-changer in the industry!"`,
    name: "MUHAMMAD RIDHO ARACHMAN",
    position: "CEO",
    avatar: "/hero1.webp",
  },
  {
    sentence: `"AllStarHub transformed the way our team analyzes player performance. The insights we gain are invaluable for our strategy!"`,
    name: "John Doe",
    position: "Team Leader",
    avatar: "/hero2.webp",
  },
  {
    sentence: `"As a basketball enthusiast, AllStarHub has been a game-changer. The real-time data and player insights are a game-changer!"`,
    name: "Jane Smith",
    position: "Coach",
    avatar: "/hero3.webp",
  },
];

const TestimonialSection = () => {
  return (
    <section className="mx-2 mt-36 flex items-center justify-center md:mx-20">
      <Carousel className="w-64 max-w-3xl md:w-full">
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <RatingComponent initialRating={5} stars={[1, 2, 3, 4, 5]} />
              <p className="mt-4 text-lg font-semibold">{item.sentence}</p>
              <div className="mt-4 flex flex-col items-center justify-center gap-8 md:flex-row">
                <Avatar>
                  <AvatarImage
                    src={item.avatar}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <AvatarFallback className="flex items-center justify-center">
                    {item.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.position}</p>
                </div>
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={50}
                  height={50}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TestimonialSection;
