import { Country } from "../types";

export const slovenia: Country = {
  title: "Eslovênia",
  description: "Ljubljana, cidade verde com rica herança arquitetônica, castelo medieval e mercados vibrantes.",
  heroImage: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
  bestTimeToVisit: "Maio a setembro",
  currency: "Euro (€)",
  language: "Esloveno",
  timeZone: "UTC+1",
  climate: "Continental com influência mediterrânea",
  transportation: "Ônibus, trem e bicicleta",
  gallery: [
    "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
    "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
    "https://images.unsplash.com/photo-1583509174536-b69bee8605d4",
    "https://images.unsplash.com/photo-1589708532758-ddd0753b0f2f",
    "https://images.unsplash.com/photo-1589708532758-ddd0753b0f2f",
  ],
  tips: [
    {
      type: "hotel",
      title: "InterContinental Ljubljana",
      description: "Hotel moderno com vista panorâmica da cidade e do castelo.",
      price: "€€€",
      link: "https://ljubljana.intercontinental.com/",
      image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
      highlights: [
        "Vista panorâmica",
        "Spa luxuoso",
        "Restaurante no rooftop",
        "Localização central"
      ]
    },
    {
      type: "activity",
      title: "Castelo de Ljubljana",
      description: "Fortaleza medieval com vista panorâmica da cidade.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
      highlights: [
        "Vista da cidade",
        "Museu histórico",
        "Torre de observação",
        "Restaurante panorâmico"
      ]
    },
    {
      type: "restaurant",
      title: "JB Restaurant",
      description: "Restaurante premiado com culinária eslovena contemporânea.",
      price: "€€€",
      image: "https://images.unsplash.com/photo-1583509174536-b69bee8605d4",
      highlights: [
        "Alta gastronomia",
        "Vinhos locais",
        "Menu sazonal",
        "Chef premiado"
      ]
    }
  ],
  itinerary: {
    mapCenter: [46.0569, 14.5058],
    mapZoom: 13,
    routes: [
      {
        day: 1,
        description: "Explore o centro histórico",
        locations: [
          {
            name: "Castelo de Ljubljana",
            coordinates: [46.0489, 14.5089],
            description: "Fortaleza medieval no topo da colina"
          },
          {
            name: "Ponte do Dragão",
            coordinates: [46.0514, 14.5068],
            description: "Ponte art nouveau com dragões icônicos"
          },
          {
            name: "Mercado Central",
            coordinates: [46.0516, 14.5067],
            description: "Mercado tradicional ao ar livre"
          }
        ]
      },
      {
        day: 2,
        description: "Parques e cultura",
        locations: [
          {
            name: "Parque Tivoli",
            coordinates: [46.0539, 14.4989],
            description: "Maior parque da cidade"
          },
          {
            name: "Museu Nacional",
            coordinates: [46.0519, 14.5024],
            description: "História e arte eslovena"
          },
          {
            name: "Metelkova",
            coordinates: [46.0567, 14.5156],
            description: "Centro cultural alternativo"
          }
        ]
      }
    ]
  }
};