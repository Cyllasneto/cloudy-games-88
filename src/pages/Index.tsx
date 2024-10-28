import FeaturedDestination from "@/components/FeaturedDestination";
import DestinationCard from "@/components/DestinationCard";
import TravelTips from "@/components/TravelTips";

const destinations = [
  {
    title: "Paris",
    country: "França",
    imageUrl: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0",
    description: "A cidade luz com sua arquitetura deslumbrante e gastronomia incomparável.",
  },
  {
    title: "Tóquio",
    country: "Japão",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    description: "Tradição e modernidade se encontram nesta metrópole vibrante.",
  },
  {
    title: "Rio de Janeiro",
    country: "Brasil",
    imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    description: "Praias paradisíacas e cultura alegre em uma cidade maravilhosa.",
  },
];

const tips = [
  {
    type: "hotel" as const,
    title: "Four Seasons George V",
    description: "Hotel luxuoso próximo aos Champs-Élysées com vista para a Torre Eiffel.",
    price: "€€€€",
  },
  {
    type: "activity" as const,
    title: "Museu do Louvre",
    description: "O maior museu de arte do mundo, lar da Mona Lisa.",
    price: "€€",
  },
  {
    type: "restaurant" as const,
    title: "L'Abeille",
    description: "Restaurante com 2 estrelas Michelin oferecendo alta gastronomia francesa.",
    price: "€€€€",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <FeaturedDestination
        title="Paris"
        country="França"
        description="Descubra a magia da Cidade Luz, onde cada rua conta uma história e cada momento é inesquecível."
        imageUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
      />

      <main className="container max-w-6xl mx-auto py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Destinos Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Dicas de Paris</h2>
          <TravelTips tips={tips} />
        </section>
      </main>
    </div>
  );
};

export default Index;