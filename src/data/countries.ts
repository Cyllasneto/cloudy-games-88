export type TipType = "hotel" | "activity" | "restaurant";

export interface Tip {
  type: TipType;
  title: string;
  description: string;
  price: string;
  link?: string;
  image?: string;
  rating?: number;
  bestSeason?: string;
  duration?: string;
  address?: string;
  highlights?: string[];
}

export interface Country {
  title: string;
  description: string;
  heroImage: string;
  gallery: string[];
  tips: Tip[];
  bestTimeToVisit: string;
  currency: string;
  language: string;
  timeZone: string;
  climate: string;
  transportation: string;
}

export const countries: Record<string, Country> = {
  france: {
    title: "França",
    description: "Descubra a magia da França, um país que combina cultura, história e gastronomia de maneira única. Das ruas charmosas de Paris aos vinhedos da Provence, cada região oferece experiências inesquecíveis.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    bestTimeToVisit: "Primavera (abril a junho) e outono (setembro a novembro)",
    currency: "Euro (€)",
    language: "Francês",
    timeZone: "UTC+1",
    climate: "Temperado, com verões amenos e invernos frios",
    transportation: "Rede extensa de trens de alta velocidade (TGV), metrô nas grandes cidades",
    gallery: [
      "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f",
      "https://images.unsplash.com/photo-1548013146-72479768bada"
    ],
    tips: [
      {
        type: "hotel",
        title: "Four Seasons George V",
        description: "Hotel luxuoso próximo aos Champs-Élysées com vista para a Torre Eiffel. Quartos decorados em estilo clássico francês e três restaurantes estrelados Michelin.",
        price: "€€€€",
        link: "https://www.fourseasons.com/paris/",
        rating: 5,
        address: "31 Avenue George V, 75008 Paris",
        highlights: [
          "Spa de luxo",
          "Restaurantes estrelados Michelin",
          "Serviço de concierge 24h",
          "Decoração clássica francesa"
        ]
      },
      {
        type: "hotel",
        title: "Ritz Paris",
        description: "Um dos hotéis mais icônicos do mundo, com história e luxo incomparáveis. Suítes opulentas e o famoso Bar Hemingway.",
        price: "€€€€",
        link: "https://www.ritzparis.com/",
        rating: 5,
        address: "15 Place Vendôme, 75001 Paris",
        highlights: [
          "Escola de culinária Ritz Escoffier",
          "Piscina com abóbada dourada",
          "Jardim à francesa",
          "Bar Hemingway histórico"
        ]
      },
      {
        type: "hotel",
        title: "Le Bristol Paris",
        description: "Hotel palaciano com jardim privativo e piscina no último andar com vista para Paris. Gastronomia excepcional no restaurante Epicure.",
        price: "€€€€",
        link: "https://www.oetkercollection.com/hotels/le-bristol-paris/",
        rating: 5,
        highlights: [
          "Piscina panorâmica",
          "Jardim francês privativo",
          "Spa Le Bristol by La Prairie",
          "Restaurante 3 estrelas Michelin"
        ]
      },
      {
        type: "activity",
        title: "Tour Privativo no Louvre",
        description: "Explore o maior museu de arte do mundo com um guia especializado, evitando as filas e descobrindo as obras-primas mais importantes.",
        price: "€€€",
        duration: "3 horas",
        bestSeason: "Ano todo",
        highlights: [
          "Mona Lisa sem filas",
          "Vênus de Milo",
          "Vitória de Samotrácia",
          "Apartamentos de Napoleão III"
        ]
      },
      {
        type: "activity",
        title: "Degustação de Vinhos em Cave Histórica",
        description: "Degustação premium de vinhos franceses em uma cave histórica do século XVII, com sommelier especializado.",
        price: "€€€",
        duration: "2 horas",
        bestSeason: "Ano todo",
        highlights: [
          "Vinhos premium franceses",
          "Cave histórica",
          "Harmonização com queijos",
          "Explicações de sommelier"
        ]
      },
      {
        type: "restaurant",
        title: "L'Abeille",
        description: "Restaurante com 2 estrelas Michelin no Shangri-La Hotel, oferecendo alta gastronomia francesa contemporânea.",
        price: "€€€€",
        rating: 5,
        address: "10 Avenue d'Iéna, 75116 Paris",
        highlights: [
          "Menu degustação sazonal",
          "Carta de vinhos excepcional",
          "Vista para o jardim",
          "Serviço impecável"
        ]
      },
      {
        type: "restaurant",
        title: "L'Arpège",
        description: "Restaurante 3 estrelas Michelin do chef Alain Passard, famoso por seus pratos vegetarianos.",
        price: "€€€€",
        rating: 5,
        address: "84 Rue de Varenne, 75007 Paris",
        highlights: [
          "Legumes orgânicos próprios",
          "Pratos vegetarianos inovadores",
          "Ambiente intimista",
          "Chef premiado"
        ]
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
};
