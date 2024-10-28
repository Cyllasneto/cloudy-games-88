interface CountryHeroProps {
  title: string;
  description: string;
  heroImage: string;
}

const CountryHero = ({ title, description, heroImage }: CountryHeroProps) => {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      <img
        src={heroImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryHero;