import { Country } from "../types";

export const slovenia: Country = {
  title: "Eslovênia",
  description: "Ljubljana, cidade verde com rica herança arquitetônica, castelo medieval e mercados vibrantes.",
  heroImage: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
  bestTimeToVisit: "Maio a setembro (verão) ou dezembro (inverno)",
  currency: "Euro (€)",
  language: "Esloveno",
  timeZone: "UTC+1",
  climate: "Continental com influência mediterrânea",
  transportation: "Ônibus, trem e aluguel de bicicletas",
  gallery: [
    "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
    "https://images.unsplash.com/photo-1601284705699-9ac3067d1e04",
    "https://images.unsplash.com/photo-1564677423-36e932f0e0c1",
    "https://images.unsplash.com/photo-1583509174536-b5aa2e4fb960",
    "https://images.unsplash.com/photo-1583509174536-b5aa2e4fb960"
  ],
  tips: [
    {
      type: "hotel",
      title: "InterContinental Ljubljana",
      description: "Hotel moderno com vista panorâmica da cidade e spa luxuoso.",
      price: "€€€",
      link: "https://ljubljana.intercontinental.com/",
      highlights: [
        "Vista panorâmica",
        "Spa de luxo",
        "Restaurante premiado",
        "Localização central"
      ]
    },
    {
      type: "activity",
      title: "Castelo de Ljubljana",
      description: "Fortaleza medieval com vista panorâmica da cidade.",
      price: "€€",
      highlights: [
        "Vista da cidade",
        "Museu histórico",
        "Torre de observação",
        "Funicular panorâmico"
      ]
    },
    {
      type: "restaurant",
      title: "JB Restaurant",
      description: "Restaurante premiado com culinária eslovena contemporânea.",
      price: "€€€",
      highlights: [
        "Culinária moderna",
        "Ingredientes locais",
        "Chef premiado",
        "Carta de vinhos"
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
            description: "Ponte art nouveau com dragões"
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
        description: "Arte e natureza",
        locations: [
          {
            name: "Tivoli Park",
            coordinates: [46.0539, 14.4989],
            description: "Maior parque da cidade"
          },
          {
            name: "Galeria Nacional",
            coordinates: [46.0522, 14.5012],
            description: "Arte eslovena e europeia"
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