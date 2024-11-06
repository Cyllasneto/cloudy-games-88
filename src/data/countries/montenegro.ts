import { Country } from "../types";

export const montenegro: Country = {
  title: "Montenegro",
  description: "Kotor, cidade fortificada veneziana com baía deslumbrante e rica história marítima.",
  heroImage: "https://images.unsplash.com/photo-1555990793-da11153b2473",
  bestTimeToVisit: "Maio a setembro (verão)",
  currency: "Euro (€)",
  language: "Montenegrino",
  timeZone: "UTC+1",
  climate: "Mediterrâneo com influência continental",
  transportation: "Ônibus, táxi e barcos",
  gallery: [
    "https://images.unsplash.com/photo-1555990793-da11153b2473",
    "https://images.unsplash.com/photo-1589485257151-86d46bd4e4f3",
    "https://images.unsplash.com/photo-1562868114-b92847a8a652",
    "https://images.unsplash.com/photo-1562868114-b92847a8a652",
    "https://images.unsplash.com/photo-1562868114-b92847a8a652"
  ],
  tips: [
    {
      type: "hotel",
      title: "Forza Mare",
      description: "Hotel boutique à beira da baía com design luxuoso.",
      price: "€€€€",
      link: "https://forzamare.com/",
      highlights: [
        "Vista para a baía",
        "Praia privativa",
        "Spa de luxo",
        "Restaurante gourmet"
      ]
    },
    {
      type: "activity",
      title: "Muralhas de Kotor",
      description: "Caminhada pelas muralhas fortificadas com vista panorâmica.",
      price: "€€",
      highlights: [
        "Vista panorâmica",
        "História medieval",
        "Fotografia",
        "Exercício"
      ]
    },
    {
      type: "restaurant",
      title: "Galion",
      description: "Restaurante à beira-mar com frutos do mar frescos.",
      price: "€€€",
      highlights: [
        "Frutos do mar",
        "Vista para a baía",
        "Vinhos locais",
        "Pôr do sol"
      ]
    }
  ],
  itinerary: {
    mapCenter: [42.4246, 18.7712],
    mapZoom: 14,
    routes: [
      {
        day: 1,
        description: "Cidade antiga e história",
        locations: [
          {
            name: "Praça de Armas",
            coordinates: [42.4246, 18.7712],
            description: "Centro histórico de Kotor"
          },
          {
            name: "Muralhas de Kotor",
            coordinates: [42.4280, 18.7707],
            description: "Fortificações venezianas"
          },
          {
            name: "Igreja de São Trifão",
            coordinates: [42.4251, 18.7714],
            description: "Catedral românica"
          }
        ]
      },
      {
        day: 2,
        description: "Baía e natureza",
        locations: [
          {
            name: "Perast",
            coordinates: [42.4868, 18.6989],
            description: "Vila histórica na baía"
          },
          {
            name: "Nossa Senhora das Rochas",
            coordinates: [42.4865, 18.6989],
            description: "Igreja em ilha artificial"
          },
          {
            name: "Praia de Dobrota",
            coordinates: [42.4381, 18.7666],
            description: "Praia com vista para montanhas"
          }
        ]
      }
    ]
  }
};