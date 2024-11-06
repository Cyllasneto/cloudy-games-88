import { Country } from "../types";

export const bulgaria: Country = {
  title: "Bulgária",
  description: "Plovdiv, uma das cidades mais antigas da Europa com história milenar e vibrante cena cultural.",
  heroImage: "https://images.unsplash.com/photo-1601284705699-9ac3067d1e04",
  bestTimeToVisit: "Maio a setembro (verão) ou dezembro a março (inverno)",
  currency: "Lev búlgaro (BGN)",
  language: "Búlgaro",
  timeZone: "UTC+2",
  climate: "Continental com influência mediterrânea",
  transportation: "Ônibus, táxi e bondes",
  gallery: [
    "https://images.unsplash.com/photo-1601284705699-9ac3067d1e04",
    "https://images.unsplash.com/photo-1589485257151-86d46bd4e4f3",
    "https://images.unsplash.com/photo-1562868114-b92847a8a652",
    "https://images.unsplash.com/photo-1562868114-b92847a8a652",
    "https://images.unsplash.com/photo-1562868114-b92847a8a652"
  ],
  tips: [
    {
      type: "hotel",
      title: "Residence City Garden",
      description: "Hotel boutique no coração da cidade antiga.",
      price: "€€€",
      link: "https://residencecitygarden.com/",
      highlights: [
        "Localização histórica",
        "Jardim privativo",
        "Design contemporâneo",
        "Vista para a cidade"
      ]
    },
    {
      type: "activity",
      title: "Cidade Antiga de Plovdiv",
      description: "Tour pela cidade antiga com arquitetura do período do Renascimento búlgaro.",
      price: "€€",
      highlights: [
        "Casas históricas",
        "Teatro romano",
        "Galerias de arte",
        "Guia especializado"
      ]
    },
    {
      type: "restaurant",
      title: "Pavaj",
      description: "Restaurante contemporâneo com culinária búlgara moderna.",
      price: "€€",
      highlights: [
        "Culinária local",
        "Vinhos búlgaros",
        "Ambiente moderno",
        "Terraço com vista"
      ]
    }
  ],
  itinerary: {
    mapCenter: [42.1505, 24.7501],
    mapZoom: 13,
    routes: [
      {
        day: 1,
        description: "Cidade antiga e cultura",
        locations: [
          {
            name: "Teatro Romano",
            coordinates: [42.1469, 24.7507],
            description: "Anfiteatro antigo preservado"
          },
          {
            name: "Cidade Antiga",
            coordinates: [42.1505, 24.7501],
            description: "Bairro histórico preservado"
          },
          {
            name: "Galeria de Arte",
            coordinates: [42.1472, 24.7498],
            description: "Arte búlgara contemporânea"
          }
        ]
      },
      {
        day: 2,
        description: "Arte e história moderna",
        locations: [
          {
            name: "Kapana",
            coordinates: [42.1503, 24.7485],
            description: "Bairro criativo e artístico"
          },
          {
            name: "Dzhumaya Mosque",
            coordinates: [42.1497, 24.7486],
            description: "Mesquita histórica do século XIV"
          },
          {
            name: "Tsar Simeon Garden",
            coordinates: [42.1467, 24.7486],
            description: "Jardim histórico central"
          }
        ]
      }
    ]
  }
};