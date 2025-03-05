import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative mt-16 flex h-[600px] w-full flex-col items-center justify-center bg-black/50 text-center">
      <div className="absolute inset-0">
        <Image
          src="/images/about/hero.webp"
          alt="hero"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <h1 className="relative z-10 text-center text-4xl font-bold text-white md:text-6xl">
        About Us
      </h1>
    </section>
  );
};

export default HeroSection;
