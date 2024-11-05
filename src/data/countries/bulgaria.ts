import { Country } from "../types";

export const bulgaria: Country = {
  title: "Bulgária",
  description: "Plovdiv, uma das cidades mais antigas da Europa com história milenar e vibrante cena cultural.",
  heroImage: "https://images.unsplash.com/photo-1601284705699-9ac3067d1e04",
  bestTimeToVisit: "Maio a setembro",
  currency: "Lev búlgaro (BGN)",
  language: "Búlgaro",
  timeZone: "UTC+2",
  climate: "Continental com influência mediterrânea",
  transportation: "Ônibus, táxi e caminhada",
  gallery: [
    "https://images.unsplash.com/photo-1601284705699-9ac3067d1e04",
    "https://images.unsplash.com/photo-1562883676-8c7feb83f09b",
    "https://images.unsplash.com/photo-1562883676-8c7feb83f09b",
    "https://images.unsplash.com/photo-1562883676-8c7feb83f09b",
    "https://images.unsplash.com/photo-1562883676-8c7feb83f09b",
  ],
  tips: [
    {
      type: "hotel",
      title: "Residence City Garden",
      description: "Hotel boutique no coração da cidade antiga.",
      price: "€€",
      link: "https://residencecitygarden.com/",
      image: "https://images.unsplash.com/photo-1601284705699-9ac3067d1e04",
      highlights: [
        "Localização histórica",
        "Jardim privativo",
        "Design contemporâneo",
        "Vista para a cidade"
      ]
    },
    {
      type: "activity",
      title: "Teatro Romano",
      description: "Anfiteatro antigo com vista panorâmica.",
      price: "€",
      image: "https://images.unsplash.com/photo-1562883676-8c7feb83f09b",
      highlights: [
        "Arquitetura romana",
        "Vista da cidade",
        "Eventos culturais",
        "História antiga"
      ]
    },
    {
      type: "restaurant",
      title: "Pavaj",
      description: "Restaurante moderno com culinária búlgara contemporânea.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1562883676-8c7feb83f09b",
      highlights: [
        "Culinária moderna",
        "Vinhos locais",
        "Ambiente descontraído",
        "Pratos tradicionais"
      ]
    }
  ],
  itinerary: {
    mapCenter: [42.1354, 24.7453],
    mapZoom: 14,
    routes: [
      {
        day: 1,
        description: "Cidade antiga e cultura",
        locations: [
          {
            name: "Teatro Romano",
            coordinates: [42.1470, 24.7510],
            description: "Anfiteatro do século II"
          },
          {
            name: "Cidade Antiga",
            coordinates: [42.1470, 24.7510],
            description: "Bairro histórico preservado"
          },
          {
            name: "Dzhumaya Mosque",
            coordinates: [42.1470, 24.7510],
            description: "Mesquita histórica do século XIV"
          }
        ]
      },
      {
        day: 2,
        description: "Arte e história moderna",
        locations: [
          {
            name: "Kapana",
            coordinates: [42.1470, 24.7510],
            description: "Bairro criativo e artístico"
          },
          {
            name: "Tsar Simeon Garden",
            coordinates: [42.1470, 24.7510],
            description: "Jardim central histórico"
          },
          {
            name: "Regional Ethnographic Museum",
            coordinates: [42.1470, 24.7510],
            description: "Cultura e tradições búlgaras"
          }
        ]
      }
    ]
  }
};