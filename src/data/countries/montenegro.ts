import { Country } from "../types";

export const montenegro: Country = {
  title: "Montenegro",
  description: "Kotor, cidade fortificada veneziana com baía deslumbrante e rica história marítima.",
  heroImage: "https://images.unsplash.com/photo-1555990793-da11153b2473",
  bestTimeToVisit: "Maio a outubro",
  currency: "Euro (€)",
  language: "Montenegrino",
  timeZone: "UTC+1",
  climate: "Mediterrâneo",
  transportation: "Ônibus, táxi e barco",
  gallery: [
    "https://images.unsplash.com/photo-1555990793-da11153b2473",
    "https://images.unsplash.com/photo-1555990793-da11153b2473",
    "https://images.unsplash.com/photo-1555990793-da11153b2473",
    "https://images.unsplash.com/photo-1555990793-da11153b2473",
    "https://images.unsplash.com/photo-1555990793-da11153b2473",
  ],
  tips: [
    {
      type: "hotel",
      title: "Forza Mare Hotel",
      description: "Hotel boutique à beira da baía de Kotor.",
      price: "€€€€",
      link: "https://forzamare.com/",
      image: "https://images.unsplash.com/photo-1555990793-da11153b2473",
      highlights: [
        "Vista para a baía",
        "Praia privativa",
        "Spa luxuoso",
        "Restaurante gourmet"
      ]
    },
    {
      type: "activity",
      title: "Muralhas de Kotor",
      description: "Caminhada pelas fortificações históricas.",
      price: "€",
      image: "https://images.unsplash.com/photo-1555990793-da11153b2473",
      highlights: [
        "Vista panorâmica",
        "História veneziana",
        "Fotografia",
        "Exercício"
      ]
    },
    {
      type: "restaurant",
      title: "Galion",
      description: "Restaurante à beira-mar com vista para a baía.",
      price: "€€€",
      image: "https://images.unsplash.com/photo-1555990793-da11153b2473",
      highlights: [
        "Frutos do mar frescos",
        "Vista panorâmica",
        "Vinhos locais",
        "Ambiente romântico"
      ]
    }
  ],
  itinerary: {
    mapCenter: [42.4246, 18.7712],
    mapZoom: 14,
    routes: [
      {
        day: 1,
        description: "Cidade antiga e muralhas",
        locations: [
          {
            name: "Praça de Armas",
            coordinates: [42.4246, 18.7712],
            description: "Centro histórico de Kotor"
          },
          {
            name: "Muralhas de Kotor",
            coordinates: [42.4246, 18.7712],
            description: "Fortificações venezianas"
          },
          {
            name: "Igreja de São Trifão",
            coordinates: [42.4246, 18.7712],
            description: "Catedral românica do século XII"
          }
        ]
      },
      {
        day: 2,
        description: "Baía e arredores",
        locations: [
          {
            name: "Perast",
            coordinates: [42.4246, 18.7712],
            description: "Vila histórica próxima"
          },
          {
            name: "Nossa Senhora das Rochas",
            coordinates: [42.4246, 18.7712],
            description: "Igreja em ilha artificial"
          },
          {
            name: "Praia de Dobrota",
            coordinates: [42.4246, 18.7712],
            description: "Relaxamento à beira-mar"
          }
        ]
      }
    ]
  }
};