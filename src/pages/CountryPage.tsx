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
  },
  italy: {
    title: "Itália",
    description: "Um país que encanta com sua rica história, arte renascentista e gastronomia incomparável.",
    heroImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    gallery: [
      "https://images.unsplash.com/photo-1533575770077-052fa2c609fc",
      "https://images.unsplash.com/photo-1534445867742-43195f401b6c",
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8"
    ],
    tips: [
      {
        type: "hotel" as TipType,
        title: "Hotel de Russie",
        description: "Hotel luxuoso em Roma com jardins secretos e spa de primeira classe.",
        price: "€€€€",
        link: "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/"
      },
      {
        type: "hotel" as TipType,
        title: "Belmond Hotel Cipriani",
        description: "Hotel icônico em Veneza com vistas deslumbrantes para a lagoa.",
        price: "€€€€",
        link: "https://www.belmond.com/hotels/europe/italy/venice/belmond-hotel-cipriani/"
      },
      {
        type: "activity" as TipType,
        title: "Tour pelo Coliseu",
        description: "Explore o maior anfiteatro do mundo antigo com um guia especializado.",
        price: "€€"
      },
      {
        type: "restaurant" as TipType,
        title: "Osteria Francescana",
        description: "Restaurante com 3 estrelas Michelin em Modena, do chef Massimo Bottura.",
        price: "€€€€"
      }
    ]
  },
  greece: {
    title: "Grécia",
    description: "Berço da civilização ocidental, com ilhas paradisíacas e história milenar.",
    heroImage: "https://images.unsplash.com/photo-1501904831357-99414e58b1c3",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      "https://images.unsplash.com/photo-1523568129082-a8d6c095638e"
    ],
    tips: [
      {
        type: "hotel" as TipType,
        title: "Grace Santorini",
        description: "Hotel boutique com vistas espetaculares do pôr do sol em Santorini.",
        price: "€€€€",
        link: "https://aubergeresorts.com/gracesantorini/"
      },
      {
        type: "hotel" as TipType,
        title: "Amanzoe",
        description: "Resort de luxo inspirado na arquitetura grega clássica.",
        price: "€€€€",
        link: "https://www.aman.com/resorts/amanzoe"
      },
      {
        type: "activity" as TipType,
        title: "Acrópole de Atenas",
        description: "Visite o símbolo mais importante da antiga civilização grega.",
        price: "€€"
      },
      {
        type: "restaurant" as TipType,
        title: "Selene",
        description: "Gastronomia grega contemporânea com ingredientes locais de Santorini.",
        price: "€€€"
      }
    ]
  },
  thailand: {
    title: "Tailândia",
    description: "Reino do sorriso, com praias paradisíacas, templos budistas e culinária única.",
    heroImage: "https://images.unsplash.com/photo-1504214208698-ea446addfa7e",
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa",
      "https://images.unsplash.com/photo-1528181304800-259b08848526"
    ],
    tips: [
      {
        type: "hotel" as TipType,
        title: "Four Seasons Resort Koh Samui",
        description: "Resort de luxo com vilas privativas e praia particular.",
        price: "€€€€",
        link: "https://www.fourseasons.com/kohsamui/"
      },
      {
        type: "hotel" as TipType,
        title: "Mandarin Oriental Bangkok",
        description: "Hotel histórico às margens do rio Chao Phraya.",
        price: "€€€€",
        link: "https://www.mandarinoriental.com/bangkok/"
      },
      {
        type: "activity" as TipType,
        title: "Templos de Bangkok",
        description: "Tour pelos principais templos budistas da capital.",
        price: "€€"
      },
      {
        type: "restaurant" as TipType,
        title: "Gaggan Anand",
        description: "Restaurante premiado com uma abordagem moderna da culinária indiana e tailandesa.",
        price: "€€€€"
      }
    ]
  },
  morocco: {
    title: "Marrocos",
    description: "Um país de contrastes, com medinas antigas, deserto do Saara e cultura rica.",
    heroImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada",
      "https://images.unsplash.com/photo-1531375154063-1d3c1b5e6a29",
      "https://images.unsplash.com/photo-1547644768-5cb16240d705"
    ],
    tips: [
      {
        type: "hotel" as TipType,
        title: "Royal Mansour Marrakech",
        description: "Hotel de luxo com riads privados e serviço impecável.",
        price: "€€€€",
        link: "https://www.royalmansour.com/"
      },
      {
        type: "hotel" as TipType,
        title: "La Mamounia",
        description: "Hotel histórico com jardins deslumbrantes em Marrakech.",
        price: "€€€€",
        link: "https://www.mamounia.com/"
      },
      {
        type: "activity" as TipType,
        title: "Passeio de Camelo no Saara",
        description: "Experiência única no deserto com pernoite em acampamento luxuoso.",
        price: "€€€"
      },
      {
        type: "restaurant" as TipType,
        title: "La Grande Table Marocaine",
        description: "Alta gastronomia marroquina no Royal Mansour.",
        price: "€€€€"
      }
    ]
  },
  brazil: {
    title: "Brasil",
    description: "País continental com praias paradisíacas, floresta amazônica e cultura vibrante.",
    heroImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    gallery: [
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f",
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
      "https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f"
    ],
    tips: [
      {
        type: "hotel" as TipType,
        title: "Copacabana Palace",
        description: "Hotel icônico no Rio de Janeiro com vista para a praia de Copacabana.",
        price: "€€€€",
        link: "https://www.belmond.com/hotels/south-america/brazil/rio-de-janeiro/belmond-copacabana-palace/"
      },
      {
        type: "hotel" as TipType,
        title: "TXAI Resort Itacaré",
        description: "Resort ecológico de luxo na Costa do Cacau.",
        price: "€€€€",
        link: "https://txairesorts.com/"
      },
      {
        type: "activity" as TipType,
        title: "Cristo Redentor",
        description: "Visita ao monumento mais famoso do Brasil com vista panorâmica do Rio.",
        price: "€€"
      },
      {
        type: "restaurant" as TipType,
        title: "D.O.M.",
        description: "Restaurante premiado do chef Alex Atala em São Paulo.",
        price: "€€€€"
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
