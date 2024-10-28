import { Link } from "react-router-dom"
import FeaturedDestination from "@/components/FeaturedDestination"
import DestinationCard from "@/components/DestinationCard"
import TravelTips from "@/components/TravelTips"

const destinations = [
  {
    id: "france",
    title: "Paris",
    country: "França",
    imageUrl: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0",
    description: "A cidade luz com sua arquitetura deslumbrante e gastronomia incomparável.",
  },
  {
    id: "japan",
    title: "Tóquio",
    country: "Japão",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    description: "Tradição e modernidade se encontram nesta metrópole vibrante.",
  },
  {
    id: "italy",
    title: "Roma",
    country: "Itália",
    imageUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    description: "História milenar, arte renascentista e gastronomia incomparável.",
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
    imageUrl: "https://images.unsplash.com/photo-1504214208698-ea446addfa7e",
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
]

const Index = () => {
  return (
    <div className="min-h-screen">
      <FeaturedDestination
        title="Descubra o Mundo"
        country="Cloudy Trip"
        description="Sua jornada começa aqui. Explore destinos incríveis, hotéis exclusivos e experiências únicas."
        imageUrl="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
      />

      <main className="container max-w-6xl mx-auto py-16 px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Destinos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Link key={destination.id} to={`/country/${destination.id}`}>
                <DestinationCard {...destination} />
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Sobre a Cloudy Trip</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos especialistas em criar experiências de viagem únicas e memoráveis. 
            Com anos de experiência no mercado, a Cloudy Company oferece as melhores 
            recomendações de hotéis, restaurantes e atrações em destinos pelo mundo todo.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Index