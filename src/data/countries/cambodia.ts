import { Country } from "../types";

export const cambodia: Country = {
  title: "Camboja",
  description: "Battambang, centro artístico e cultural com arquitetura colonial francesa e templos antigos.",
  heroImage: "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
  bestTimeToVisit: "Novembro a março (estação seca)",
  currency: "Riel cambojano (KHR)",
  language: "Khmer",
  timeZone: "UTC+7",
  climate: "Tropical de monção",
  transportation: "Tuk-tuks, bicicletas e ônibus",
  gallery: [
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61"
  ],
  tips: [
    {
      type: "hotel",
      title: "Maisons Wat Kor",
      description: "Hotel boutique em casas tradicionais khmer.",
      price: "€€",
      link: "https://maisonswatkor.com/",
      highlights: [
        "Arquitetura tradicional",
        "Jardins tropicais",
        "Aulas de culinária",
        "Spa tradicional"
      ]
    },
    {
      type: "activity",
      title: "Templos Antigos",
      description: "Tour pelos templos históricos da região.",
      price: "€€",
      highlights: [
        "Templos angkorianos",
        "Guia local",
        "História cultural",
        "Fotografia"
      ]
    },
    {
      type: "restaurant",
      title: "Jaan Bai",
      description: "Restaurante social com culinária khmer contemporânea.",
      price: "€€",
      highlights: [
        "Culinária local",
        "Projeto social",
        "Ingredientes frescos",
        "Ambiente acolhedor"
      ]
    }
  ],
  itinerary: {
    mapCenter: [13.1023, 103.1994],
    mapZoom: 13,
    routes: [
      {
        day: 1,
        description: "Arte e cultura local",
        locations: [
          {
            name: "Phare Circus",
            coordinates: [13.1023, 103.1994],
            description: "Circo social cambojano"
          },
          {
            name: "Mercado Central",
            coordinates: [13.1000, 103.1997],
            description: "Mercado tradicional"
          },
          {
            name: "Galeria de Arte",
            coordinates: [13.1029, 103.2001],
            description: "Arte contemporânea khmer"
          }
        ]
      },
      {
        day: 2,
        description: "História e tradição",
        locations: [
          {
            name: "Wat Banan",
            coordinates: [12.9587, 103.1487],
            description: "Templo antigo nas colinas"
          },
          {
            name: "Bamboo Train",
            coordinates: [13.0825, 103.1890],
            description: "Transporte tradicional"
          },
          {
            name: "Wat Ek Phnom",
            coordinates: [13.1788, 103.1901],
            description: "Templo angkoriano"
          }
        ]
      }
    ]
  }
};