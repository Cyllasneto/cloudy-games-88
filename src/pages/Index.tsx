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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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