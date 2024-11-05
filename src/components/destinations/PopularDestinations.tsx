import { Card } from "@/components/ui/card"
import { Landmark, UtensilsCrossed, Palette, MapPin } from "lucide-react"

const popularDestinations = [
  {
    title: "Paris, França",
    attractions: ["Torre Eiffel", "Museu do Louvre", "Arco do Triunfo"],
    culture: "Capital mundial da arte e moda",
    cuisine: ["Croissants", "Escargot", "Coq au Vin"],
    experiences: ["Passeio de barco no Rio Sena", "Visita a vinícolas", "Tour gastronômico"]
  },
  {
    title: "Roma, Itália",
    attractions: ["Coliseu", "Vaticano", "Fontana di Trevi"],
    culture: "Berço da civilização romana",
    cuisine: ["Pizza Napolitana", "Pasta Carbonara", "Gelato"],
    experiences: ["Aula de culinária italiana", "Tour de Vespa", "Degustação de vinhos"]
  },
  {
    title: "Tóquio, Japão",
    attractions: ["Torre de Tóquio", "Templo Senso-ji", "Shibuya Crossing"],
    culture: "Fusão única de tradição e modernidade",
    cuisine: ["Sushi", "Ramen", "Tempura"],
    experiences: ["Cerimônia do chá", "Karaokê", "Mercado de peixes Tsukiji"]
  }
]

const PopularDestinations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularDestinations.map((destination, index) => (
        <Card key={index} className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="text-primary" />
            {destination.title}
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <Landmark className="text-primary" />
                Pontos Turísticos
              </div>
              <ul className="list-disc list-inside text-gray-600">
                {destination.attractions.map((attraction, idx) => (
                  <li key={idx}>{attraction}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <Palette className="text-primary" />
                Cultura
              </div>
              <p className="text-gray-600">{destination.culture}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <UtensilsCrossed className="text-primary" />
                Gastronomia
              </div>
              <ul className="list-disc list-inside text-gray-600">
                {destination.cuisine.map((dish, idx) => (
                  <li key={idx}>{dish}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <MapPin className="text-primary" />
                Experiências
              </div>
              <ul className="list-disc list-inside text-gray-600">
                {destination.experiences.map((experience, idx) => (
                  <li key={idx}>{experience}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default PopularDestinations