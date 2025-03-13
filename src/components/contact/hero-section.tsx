const HeroSection = () => {
  return (
    <div className="relative mt-16 bg-[url('/images/contact/hero-section.webp')] bg-cover bg-bottom py-16 text-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <h1 className="relative z-10 mb-4 text-4xl font-bold text-white md:text-5xl">
        Contact us
      </h1>
      <p className="relative z-10 mx-auto max-w-2xl text-gray-200">
        AllStarHub is ready to provide the right solution according to your
        needs
      </p>
    </div>
  );
};

export default HeroSection;
