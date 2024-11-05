import { Country } from "../types";

export const peru: Country = {
  title: "Peru",
  description: "Huacachina, oásis mágico no deserto peruano, cercado por dunas douradas ideais para sandboard.",
  heroImage: "https://images.unsplash.com/photo-1580192985016-7e15ef081dd9",
  bestTimeToVisit: "Maio a outubro (estação seca)",
  currency: "Sol peruano (PEN)",
  language: "Espanhol",
  timeZone: "UTC-5",
  climate: "Desértico",
  transportation: "Buggies, táxi e ônibus",
  gallery: [
    "https://images.unsplash.com/photo-1580192985016-7e15ef081dd9",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377",
  ],
  tips: [
    {
      type: "hotel",
      title: "Desert Nights",
      description: "Hotel com vista para o oásis e as dunas.",
      price: "€€",
      link: "https://desertnights.com/",
      image: "https://images.unsplash.com/photo-1580192985016-7e15ef081dd9",
      highlights: [
        "Vista para o oásis",
        "Piscina",
        "Restaurante peruano",
        "Tours de buggy"
      ]
    },
    {
      type: "activity",
      title: "Sandboarding nas Dunas",
      description: "Aventura nas maiores dunas do Peru.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      highlights: [
        "Equipamento incluso",
        "Instrutor profissional",
        "Passeio de buggy",
        "Pôr do sol no deserto"
      ]
    },
    {
      type: "restaurant",
      title: "La Casa de Bamboo",
      description: "Restaurante com vista para o oásis.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      highlights: [
        "Culinária peruana",
        "Vista panorâmica",
        "Drinks especiais",
        "Ambiente relaxado"
      ]
    }
  ],
  itinerary: {
    mapCenter: [-14.0875, -75.7626],
    mapZoom: 14,
    routes: [
      {
        day: 1,
        description: "Aventura nas dunas",
        locations: [
          {
            name: "Oásis de Huacachina",
            coordinates: [-14.0875, -75.7626],
            description: "Lagoa natural no deserto"
          },
          {
            name: "Dunas Gigantes",
            coordinates: [-14.0875, -75.7626],
            description: "Melhores spots para sandboard"
          },
          {
            name: "Mirante do Pôr do Sol",
            coordinates: [-14.0875, -75.7626],
            description: "Vista panorâmica do deserto"
          }
        ]
      },
      {
        day: 2,
        description: "Cultura e relaxamento",
        locations: [
          {
            name: "Vinícola local",
            coordinates: [-14.0875, -75.7626],
            description: "Degustação de vinhos e piscos"
          },
          {
            name: "Centro de Ica",
            coordinates: [-14.0875, -75.7626],
            description: "Cidade histórica próxima"
          },
          {
            name: "Museu Regional",
            coordinates: [-14.0875, -75.7626],
            description: "História e cultura local"
          }
        ]
      }
    ]
  }
};