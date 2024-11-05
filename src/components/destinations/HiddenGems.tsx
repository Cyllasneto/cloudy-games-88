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
  },
  {
    title: "Vigan, Filipinas",
    attractions: ["Cidade Colonial Espanhola", "Rua Crisologo", "Plaza Salcedo"],
    culture: "Patrimônio histórico com arquitetura colonial espanhola preservada",
    cuisine: ["Longganisa de Vigan", "Empanada", "Okoy"],
    experiences: ["Passeio de calesa", "Oficina de cerâmica", "Tour gastronômico noturno"]
  },
  {
    title: "Plovdiv, Bulgária",
    attractions: ["Cidade Antiga", "Teatro Romano", "Kapana"],
    culture: "Uma das cidades mais antigas da Europa com história milenar",
    cuisine: ["Banitsa", "Shopska Salata", "Kavarma"],
    experiences: ["Festival de arte urbana", "Degustação de vinhos", "Tour arqueológico"]
  },
  {
    title: "Huacachina, Peru",
    attractions: ["Oásis no Deserto", "Dunas gigantes", "Lagoa de Huacachina"],
    culture: "Pequeno oásis cercado por dunas douradas",
    cuisine: ["Ceviche", "Pisco Sour", "Lomo Saltado"],
    experiences: ["Sandboard", "Passeio de buggy", "Observação do pôr do sol"]
  },
  {
    title: "Battambang, Camboja",
    attractions: ["Templo Wat Banan", "Bamboo Train", "Phare Circus"],
    culture: "Centro artístico e cultural com arquitetura colonial francesa",
    cuisine: ["Fish Amok", "Lok Lak", "Nom Banh Chok"],
    experiences: ["Aula de culinária khmer", "Tour de bicicleta rural", "Visita a vilas flutuantes"]
  },
  {
    title: "Kotor, Montenegro",
    attractions: ["Cidade Antiga Medieval", "Fortaleza de São João", "Baía de Kotor"],
    culture: "Cidade fortificada veneziana com rica história marítima",
    cuisine: ["Njeguški Pršut", "Černogorski Pršut", "Buzara"],
    experiences: ["Hiking nas muralhas", "Passeio de barco pela baía", "Tour fotográfico"]
  },
  {
    title: "Göreme, Turquia",
    attractions: ["Vale do Amor", "Museu ao Ar Livre", "Igrejas Rupestres"],
    culture: "Paisagem única com casas e igrejas escavadas na rocha",
    cuisine: ["Testi Kebab", "Gözleme", "Manti"],
    experiences: ["Voo de balão", "Hospedagem em hotel caverna", "Workshop de cerâmica"]
  }
]

const HiddenGems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hiddenGems.map((destination, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
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