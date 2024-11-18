interface CountryHeroProps {
  title: string;
  description: string;
  heroImage: string;
}

const CountryHero = ({ title, description, heroImage }: CountryHeroProps) => {
  return (
    <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
      <img
        src={heroImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">{title}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryHero;