"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const images = ["/images/home/hero1.webp", "/images/home/hero2.webp"];

const HeroSection = () => {
  const router = useRouter();
  const autoplayPlugin = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  );
  return (
    <section className="relative mt-16 flex w-full flex-col items-center justify-center text-center">
      <Carousel
        className="w-full"
        opts={{ loop: true, align: "center", duration: 50 }}
        plugins={[autoplayPlugin.current]}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative w-full">
              <Image
                src={src}
                alt={`hero ${index + 1}`}
                width={900}
                height={500}
                className="h-[500px] w-full object-cover object-top"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 p-8 text-white md:p-0">
                <h1 className="text-4xl font-bold">
                  Welcome to AllStarHub <br /> Your Ultimate Sports Companion
                </h1>
                <p className="mt-2 text-lg">
                  AllStarHub brings you the latest in sports stats, player
                  updates, and game insights, all in one easy-to-navigate app.{" "}
                  <br className="hidden md:inline" />
                  Experience a modern and intuitive interface designed for
                  sports enthusiasts who want to stay ahead of the game.
                </p>
                <Button
                  onClick={() => router.push("/register")}
                  variant="default"
                  className="hidden text-white md:block"
                >
                  Sign-Up
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSection;
