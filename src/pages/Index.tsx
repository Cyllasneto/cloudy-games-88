import { Link } from "react-router-dom"
import FeaturedDestination from "@/components/FeaturedDestination"
import DestinationCard from "@/components/DestinationCard"
import CurrencyConverter from "@/components/CurrencyConverter"
import DestinationGuides from "@/components/destinations/DestinationGuides"

const destinations = [
  {
    id: "france",
    title: "Paris",
    country: "França",
    imageUrl: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg",
    description: "A cidade luz com sua arquitetura deslumbrante e gastronomia incomparável.",
    highlight: true
  },
  {
    id: "usa",
    title: "Orlando",
    country: "Estados Unidos",
    imageUrl: "https://images.unsplash.com/photo-1575089776834-8be34696ffb9",
    description: "O lugar mais mágico do mundo, com os parques da Disney e experiências únicas.",
    highlight: true
  },
  {
    id: "england",
    title: "Londres",
    country: "Inglaterra",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    description: "Uma metrópole global que combina história milenar com modernidade vibrante.",
  },
  {
    id: "turkey",
    title: "Istambul",
    country: "Turquia",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
    description: "Cidade que une dois continentes, com mesquitas majestosas e bazares históricos.",
  },
  {
    id: "norway",
    title: "Oslo",
    country: "Noruega",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
    description: "Capital escandinava que combina natureza deslumbrante com design moderno.",
  },
  {
    id: "italy",
    title: "Roma",
    country: "Itália",
    imageUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    description: "História milenar, arte renascentista e gastronomia incomparável.",
  },
  {
    id: "spain",
    title: "Ibiza",
    country: "Espanha",
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    description: "Ilha paradisíaca com praias deslumbrantes e vida noturna vibrante.",
  },
  {
    id: "portugal",
    title: "Lisboa",
    country: "Portugal",
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
    description: "Cidade histórica com charme único e rica gastronomia.",
  },
  {
    id: "greece",
    title: "Atenas",
    country: "Grécia",
    imageUrl: "https://www.civitatis.com/f/grecia/atenas/atenas.jpg",
    description: "Berço da civilização ocidental, com ilhas paradisíacas e história milenar.",
  },
  {
    id: "thailand",
    title: "Bangkok",
    country: "Tailândia",
    imageUrl: "https://www.teatur.com.br/wp-content/uploads/2023/01/Tailandia.jpg",
    description: "Reino do sorriso, com praias paradisíacas e templos budistas.",
  },
  {
    id: "morocco",
    title: "Marrakech",
    country: "Marrocos",
    imageUrl: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
    description: "Um país de contrastes, com medinas antigas e o deserto do Saara.",
  },
  {
    id: "brazil",
    title: "Rio de Janeiro",
    country: "Brasil",
    imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    description: "Praias paradisíacas, floresta amazônica e cultura vibrante.",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <FeaturedDestination
        title="Descubra o Mundo"
        country="Cloudy Trip"
        description="Sua jornada começa aqui. Explore destinos incríveis, planeje suas viagens e descubra experiências únicas ao redor do mundo."
        imageUrl="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
      />

      <main className="container max-w-6xl mx-auto py-16 px-4">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Sobre a Cloudy Trip</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sua jornada começa aqui. Explore destinos incríveis, planeje suas viagens e descubra experiências únicas ao redor do mundo.
          </p>
        </section>

        <section id="featured-destinations" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Destinos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Link key={destination.id} to={`/country/${destination.id}`}>
                <DestinationCard {...destination} />
              </Link>
            ))}
          </div>
        </section>

        <DestinationGuides />

        <section className="mb-16">
          <CurrencyConverter />
        </section>
      </main>
    </div>
  );
};

export default Index;
