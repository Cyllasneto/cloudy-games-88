import { Country } from "../types";

export const england: Country = {
  title: "Inglaterra",
  description: "Londres, a capital do Reino Unido, é uma metrópole global que combina história milenar com modernidade vibrante.",
  heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  bestTimeToVisit: "Maio a setembro (verão) ou dezembro (natal)",
  currency: "Libra Esterlina (£)",
  language: "Inglês",
  timeZone: "UTC+0",
  climate: "Temperado marítimo, com chuvas frequentes",
  transportation: "Metrô (Underground), ônibus, trem e táxi",
  gallery: [
    "https://images.unsplash.com/photo-1533929736458-ca588d08c8be", // Big Ben
    "https://images.unsplash.com/photo-1520986606214-8b456906c813", // Tower Bridge
    "https://images.unsplash.com/photo-1486299267070-83823f5448dd", // London Eye
    "https://images.unsplash.com/photo-1543799382-9a0208331ef7", // Buckingham
    "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9", // British Museum
  ],
  tips: [
    {
      type: "flight",
      title: "Passagens para Londres",
      description: "Encontre as melhores ofertas de voos para Londres, com opções diretas e conexões.",
      price: "A partir de R$3.800",
      link: "https://www.skyscanner.com.br/voos-para/lon/voos-baratos-para-londres.html",
      highlights: [
        "Voos diretos do Brasil",
        "British Airways e LATAM",
        "Múltiplas companhias",
        "Alertas de preços"
      ]
    },
    {
      type: "hotel",
      title: "The Ritz London",
      description: "Hotel icônico no coração de Piccadilly com serviço impecável.",
      price: "€€€€",
      link: "https://www.theritzlondon.com/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      highlights: [
        "Afternoon Tea tradicional",
        "Restaurante michelin",
        "Localização premium",
        "Serviço de mordomo"
      ]
    },
    {
      type: "activity",
      title: "Torre de Londres",
      description: "Fortaleza histórica às margens do Tâmisa com as joias da coroa.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1520986606214-8b456906c813",
      highlights: [
        "Joias da Coroa",
        "História medieval",
        "Yeoman Warders",
        "Ravens lendários"
      ]
    },
    {
      type: "restaurant",
      title: "Dinner by Heston Blumenthal",
      description: "Restaurante com duas estrelas Michelin inspirado na gastronomia histórica britânica.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      highlights: [
        "Duas estrelas Michelin",
        "Gastronomia histórica",
        "Vista para Hyde Park",
        "Experiência única"
      ]
    }
  ],
  itinerary: {
    mapCenter: [51.5074, -0.1278], // Coordenadas de Londres
    mapZoom: 12,
    routes: [
      {
        day: 1,
        description: "Explore os ícones de Londres",
        locations: [
          {
            name: "Big Ben",
            coordinates: [51.5007, -0.1246],
            description: "O famoso relógio símbolo de Londres"
          },
          {
            name: "London Eye",
            coordinates: [51.5033, -0.1195],
            description: "Vista panorâmica da cidade"
          },
          {
            name: "Tower Bridge",
            coordinates: [51.5055, -0.0754],
            description: "A ponte mais famosa de Londres"
          }
        ]
      },
      {
        day: 2,
        description: "Arte e História Britânica",
        locations: [
          {
            name: "British Museum",
            coordinates: [51.5194, -0.1269],
            description: "Um dos maiores museus do mundo"
          },
          {
            name: "Buckingham Palace",
            coordinates: [51.5014, -0.1419],
            description: "Residência oficial da família real"
          },
          {
            name: "Hyde Park",
            coordinates: [51.5073, -0.1657],
            description: "O maior parque real de Londres"
          }
        ]
      }
    ]
  }
};
