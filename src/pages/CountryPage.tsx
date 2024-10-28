import { useParams } from "react-router-dom"
import { Hotel, Map, Utensils } from "lucide-react"
import TravelTips from "@/components/TravelTips"

type TipType = "hotel" | "activity" | "restaurant"

interface Tip {
  type: TipType
  title: string
  description: string
  price: string
  link?: string
}

interface Country {
  title: string
  description: string
  heroImage: string
  gallery: string[]
  tips: Tip[]
}

const countries: Record<string, Country> = {
  france: {
    title: "França",
    description: "Descubra a magia da França, um país que combina cultura, história e gastronomia de maneira única.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    gallery: [
      "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    ],
    tips: [
      {
        type: "hotel" as TipType,
        title: "Four Seasons George V",
        description: "Hotel luxuoso próximo aos Champs-Élysées com vista para a Torre Eiffel.",
        price: "€€€€",
        link: "https://www.fourseasons.com/paris/"
      },
      {
        type: "hotel" as TipType,
        title: "Ritz Paris",
        description: "Um dos hotéis mais icônicos do mundo, com história e luxo incomparáveis.",
        price: "€€€€",
        link: "https://www.ritzparis.com/"
      },
      {
        type: "activity" as TipType,
        title: "Museu do Louvre",
        description: "O maior museu de arte do mundo, lar da Mona Lisa.",
        price: "€€"
      },
      {
        type: "restaurant" as TipType,
        title: "L'Abeille",
        description: "Restaurante com 2 estrelas Michelin oferecendo alta gastronomia francesa.",
        price: "€€€€"
      }
    ]
  },
  japan: {
    title: "Japão",
    description: "Uma mistura fascinante de tradição milenar e tecnologia de ponta.",
    heroImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    gallery: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    ],
    tips: [
      {
        type: "hotel" as TipType,
        title: "Park Hyatt Tokyo",
        description: "Hotel luxuoso em Shinjuku, famoso pelo filme Lost in Translation.",
        price: "¥¥¥¥",
        link: "https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph"
      },
      {
        type: "hotel" as TipType,
        title: "Mandarin Oriental Tokyo",
        description: "Vista panorâmica de Tóquio e serviço impecável.",
        price: "¥¥¥¥",
        link: "https://www.mandarinoriental.com/tokyo/"
      },
      {
        type: "activity" as TipType,
        title: "Templo Senso-ji",
        description: "O templo budista mais antigo de Tóquio.",
        price: "¥"
      },
      {
        type: "restaurant" as TipType,
        title: "Sukiyabashi Jiro",
        description: "Um dos melhores restaurantes de sushi do mundo.",
        price: "¥¥¥¥"
      }
    ]
  }
}

const CountryPage = () => {
  const { countryId } = useParams()
  const country = countries[countryId as keyof typeof countries]

  if (!country) return <div>País não encontrado</div>

  return (
    <div>
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={country.heroImage}
          alt={country.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{country.title}</h1>
            <p className="text-lg md:text-xl max-w-2xl">{country.description}</p>
          </div>
        </div>
      </div>

      <main className="container max-w-6xl mx-auto py-16 px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {country.gallery.map((image, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${country.title} - Imagem ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Dicas e Recomendações</h2>
          <TravelTips tips={country.tips} />
        </section>
      </main>
    </div>
  )
}

export default CountryPage