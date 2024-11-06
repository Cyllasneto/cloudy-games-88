import { Country } from "../types";

export const laos: Country = {
  title: "Laos",
  description: "Luang Prabang, antiga capital real com forte influência budista, templos dourados e cachoeiras deslumbrantes.",
  heroImage: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72",
  bestTimeToVisit: "Outubro a abril (estação seca)",
  currency: "Kip laosiano (LAK)",
  language: "Laosiano",
  timeZone: "UTC+7",
  climate: "Tropical de monção, com estação seca e chuvosa",
  transportation: "Tuk-tuks, ônibus locais e aluguel de bicicletas",
  gallery: [
    "https://images.unsplash.com/photo-1558862107-d49ef2a04d72",
    "https://images.unsplash.com/photo-1540611025311-01df3cef54b5",
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    "https://images.unsplash.com/photo-1540611025311-01df3cef54b5",
    "https://images.unsplash.com/photo-1540611025311-01df3cef54b5"
  ],
  tips: [
    {
      type: "hotel",
      title: "Amantaka",
      description: "Hotel de luxo em um antigo hospital colonial francês, com piscina e spa.",
      price: "€€€€",
      link: "https://www.aman.com/resorts/amantaka",
      highlights: [
        "Suítes espaçosas",
        "Piscina privativa",
        "Spa tradicional",
        "Aulas de culinária"
      ]
    },
    {
      type: "activity",
      title: "Templos de Luang Prabang",
      description: "Tour pelos templos históricos da cidade, incluindo Wat Xieng Thong.",
      price: "€€",
      highlights: [
        "Arquitetura tradicional",
        "Rituais budistas",
        "História local",
        "Guia especializado"
      ]
    },
    {
      type: "restaurant",
      title: "Manda de Laos",
      description: "Restaurante à beira do lago com culinária laosiana autêntica.",
      price: "€€€",
      highlights: [
        "Culinária tradicional",
        "Vista para o lago",
        "Ambiente romântico",
        "Pratos orgânicos"
      ]
    }
  ],
  itinerary: {
    mapCenter: [19.8847, 102.1347],
    mapZoom: 13,
    routes: [
      {
        day: 1,
        description: "Explore os templos históricos",
        locations: [
          {
            name: "Wat Xieng Thong",
            coordinates: [19.8971, 102.1427],
            description: "O templo mais importante de Luang Prabang"
          },
          {
            name: "Monte Phousi",
            coordinates: [19.8851, 102.1347],
            description: "Vista panorâmica da cidade"
          },
          {
            name: "Mercado Noturno",
            coordinates: [19.8845, 102.1333],
            description: "Artesanato local e comida de rua"
          }
        ]
      },
      {
        day: 2,
        description: "Natureza e cultura local",
        locations: [
          {
            name: "Cachoeiras Kuang Si",
            coordinates: [19.7486, 101.9901],
            description: "Cachoeiras turquesa em meio à floresta"
          },
          {
            name: "Santuário de Ursos",
            coordinates: [19.7486, 101.9901],
            description: "Centro de conservação de ursos asiáticos"
          },
          {
            name: "Cerimônia Tak Bat",
            coordinates: [19.8847, 102.1347],
            description: "Tradicional oferenda aos monges"
          }
        ]
      }
    ]
  }
};