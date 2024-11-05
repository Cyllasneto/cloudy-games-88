import { Country } from "../types";

export const france: Country = {
  title: "França",
  description: "Descubra a magia da França, um país que combina cultura, história e gastronomia de maneira única. Das ruas charmosas de Paris aos vinhedos da Provence, cada região oferece experiências inesquecíveis.",
  heroImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67", // Updated Paris image
  bestTimeToVisit: "Primavera (abril a junho) e outono (setembro a novembro)",
  currency: "Euro (€)",
  language: "Francês",
  timeZone: "UTC+1",
  climate: "Temperado, com verões amenos e invernos frios",
  transportation: "Rede extensa de trens de alta velocidade (TGV), metrô nas grandes cidades",
  gallery: [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", // Torre Eiffel
    "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f", // Arco do Triunfo
    "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e", // Versalhes - Updated
    "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c", // Monte Saint-Michel
    "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b", // Louvre
  ],
  tips: [
    {
      type: "flight",
      title: "Passagens para Paris",
      description: "Encontre as melhores ofertas de voos para Paris com comparação de preços entre várias companhias aéreas.",
      price: "A partir de €500",
      link: "https://www.skyscanner.com.br/voos-para/pari/voos-baratos-para-paris.html",
      highlights: [
        "Comparação de preços",
        "Alertas de preços",
        "Várias companhias aéreas",
        "Calendário de preços"
      ]
    },
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
      link: "https://www.louvre.fr/en/visit/hours-admission",
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
      price: "€€",
      link: "https://www.catacombes.paris.fr/en",
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
  ],
  itinerary: {
    mapCenter: [48.8566, 2.3522], // Coordenadas de Paris
    mapZoom: 12,
    routes: [
      {
        day: 1,
        description: "Comece sua viagem explorando os principais pontos turísticos de Paris",
        locations: [
          {
            name: "Torre Eiffel",
            coordinates: [48.8584, 2.2945],
            description: "Visite o ícone mais famoso de Paris logo cedo para evitar filas"
          },
          {
            name: "Arco do Triunfo",
            coordinates: [48.8738, 2.2950],
            description: "Caminhe pela Champs-Élysées até o Arco do Triunfo"
          },
          {
            name: "Museu do Louvre",
            coordinates: [48.8606, 2.3376],
            description: "Dedique a tarde para explorar um dos museus mais famosos do mundo"
          }
        ]
      },
      {
        day: 2,
        description: "Explore o charme histórico e cultural de Paris",
        locations: [
          {
            name: "Notre-Dame",
            coordinates: [48.8530, 2.3499],
            description: "Visite a catedral histórica (visualização externa durante restauração)"
          },
          {
            name: "Quartier Latin",
            coordinates: [48.8489, 2.3469],
            description: "Almoce no charmoso bairro universitário"
          },
          {
            name: "Montmartre",
            coordinates: [48.8867, 2.3431],
            description: "Termine o dia no bairro dos artistas e Sacré-Cœur"
          }
        ]
      }
    ]
  }
};
