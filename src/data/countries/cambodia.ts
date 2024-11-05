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
  transportation: "Tuk-tuk, bicicleta e ônibus",
  gallery: [
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
    "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
  ],
  tips: [
    {
      type: "hotel",
      title: "Maisons Wat Kor",
      description: "Hotel boutique em casa tradicional khmer.",
      price: "€€",
      link: "https://maisonswatkor.com/",
      image: "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
      highlights: [
        "Arquitetura tradicional",
        "Jardim tropical",
        "Aulas de culinária",
        "Spa tradicional"
      ]
    },
    {
      type: "activity",
      title: "Phare Circus",
      description: "Circo social com artistas locais.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
      highlights: [
        "Performance única",
        "Projeto social",
        "Arte contemporânea",
        "História khmer"
      ]
    },
    {
      type: "restaurant",
      title: "Jaan Bai",
      description: "Restaurante social com culinária khmer contemporânea.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1571660247638-53ea2f4ebd61",
      highlights: [
        "Projeto social",
        "Culinária local",
        "Ambiente moderno",
        "Ingredientes frescos"
      ]
    }
  ],
  itinerary: {
    mapCenter: [13.1023, 103.1960],
    mapZoom: 13,
    routes: [
      {
        day: 1,
        description: "Arte e cultura local",
        locations: [
          {
            name: "Phare Circus",
            coordinates: [13.1023, 103.1960],
            description: "Circo social famoso"
          },
          {
            name: "Galeria de Arte",
            coordinates: [13.1023, 103.1960],
            description: "Arte contemporânea khmer"
          },
          {
            name: "Mercado Central",
            coordinates: [13.1023, 103.1960],
            description: "Mercado tradicional local"
          }
        ]
      },
      {
        day: 2,
        description: "Templos e história",
        locations: [
          {
            name: "Wat Banan",
            coordinates: [13.1023, 103.1960],
            description: "Templo antigo nas colinas"
          },
          {
            name: "Bamboo Train",
            coordinates: [13.1023, 103.1960],
            description: "Transporte tradicional único"
          },
          {
            name: "Wat Ek Phnom",
            coordinates: [13.1023, 103.1960],
            description: "Templo angkoriano"
          }
        ]
      }
    ]
  }
};