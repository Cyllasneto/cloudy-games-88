import { Card } from "@/components/ui/card"
import { Landmark, UtensilsCrossed, Palette, MapPin } from "lucide-react"

const hiddenGems = [
  {
    title: "Luang Prabang, Laos",
    attractions: ["Templo Wat Xieng Thong", "Cachoeira Kuang Si", "Monte Phousi"],
    culture: "Antiga capital real com forte influência budista",
    cuisine: ["Laap", "Tam Mak Hoong", "Or Lam"],
    experiences: ["Almsgiving aos monges", "Curso de tecelagem", "Passeio de barco no Mekong"]
  },
  {
    title: "Ljubljana, Eslovênia",
    attractions: ["Castelo de Ljubljana", "Ponte do Dragão", "Mercado Central"],
    culture: "Cidade verde com rica herança arquitetônica",
    cuisine: ["Štruklji", "Kranjska klobasa", "Potica"],
    experiences: ["Tour de bicicleta", "Degustação de méis", "Festival de verão"]
  },
  {
    title: "Chefchaouen, Marrocos",
    attractions: ["Medina Azul", "Kasbah", "Praça Uta el-Hammam"],
    culture: "Cidade das mil cores de azul nas montanhas do Rife",
    cuisine: ["Tajine", "Pastilla", "Harira"],
    experiences: ["Banho tradicional Hammam", "Trekking nas montanhas", "Workshop de artesanato"]
  }
]

const HiddenGems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hiddenGems.map((destination, index) => (
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

export default HiddenGems