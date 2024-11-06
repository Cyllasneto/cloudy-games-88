import { Country } from "../types";

export const peru: Country = {
  title: "Peru",
  description: "Huacachina, oásis mágico no deserto peruano, cercado por dunas douradas ideais para sandboard.",
  heroImage: "https://images.unsplash.com/photo-1580192985016-7e15ef081dd9",
  bestTimeToVisit: "Maio a outubro (estação seca)",
  currency: "Sol peruano (PEN)",
  language: "Espanhol",
  timeZone: "UTC-5",
  climate: "Desértico com temperaturas moderadas",
  transportation: "Buggies, táxis e ônibus",
  gallery: [
    "https://images.unsplash.com/photo-1580192985016-7e15ef081dd9",
    "https://images.unsplash.com/photo-1531968455001-5c5272a41129",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377"
  ],
  tips: [
    {
      type: "hotel",
      title: "Desert Nights",
      description: "Hotel boutique com vista para o oásis e as dunas.",
      price: "€€€",
      link: "https://desertnights.com/",
      highlights: [
        "Vista para o oásis",
        "Piscina ao ar livre",
        "Restaurante peruano",
        "Tours de buggy"
      ]
    },
    {
      type: "activity",
      title: "Sandboarding nas Dunas",
      description: "Aventura nas dunas gigantes com sandboard e buggy.",
      price: "€€",
      highlights: [
        "Equipamento incluído",
        "Instrutores experientes",
        "Passeio de buggy",
        "Pôr do sol no deserto"
      ]
    },
    {
      type: "restaurant",
      title: "Casa de Arena",
      description: "Restaurante com vista para o oásis e culinária peruana.",
      price: "€€",
      highlights: [
        "Culinária local",
        "Vista panorâmica",
        "Drinks especiais",
        "Ambiente romântico"
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
            coordinates: [-14.0872, -75.7630],
            description: "Dunas para sandboard"
          },
          {
            name: "Mirante do Pôr do Sol",
            coordinates: [-14.0869, -75.7633],
            description: "Vista panorâmica do oásis"
          }
        ]
      },
      {
        day: 2,
        description: "Cultura e relaxamento",
        locations: [
          {
            name: "Vinícola Tacama",
            coordinates: [-14.0681, -75.7728],
            description: "Vinícola histórica"
          },
          {
            name: "Museu Regional",
            coordinates: [-14.0667, -75.7284],
            description: "História e cultura local"
          },
          {
            name: "Mercado San Francisco",
            coordinates: [-14.0664, -75.7284],
            description: "Mercado tradicional"
          }
        ]
      }
    ]
  }
};