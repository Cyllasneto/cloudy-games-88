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
  ]
};