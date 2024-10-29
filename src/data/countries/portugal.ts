import { Country } from "../types";

export const portugal: Country = {
  title: "Portugal",
  description: "Lisboa, a cidade das sete colinas, encanta com sua arquitetura histórica, gastronomia tradicional e cultura vibrante.",
  heroImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
  bestTimeToVisit: "Março a outubro (clima mais ameno)",
  currency: "Euro (€)",
  language: "Português",
  timeZone: "UTC+0",
  climate: "Mediterrâneo, com verões quentes e invernos suaves",
  transportation: "Metrô, elétricos históricos, táxis e Uber",
  gallery: [
    "https://images.unsplash.com/photo-1555881400-74d7acaacd8b", // Vista de Lisboa
    "https://images.unsplash.com/photo-1513735492246-483525079686", // Elétrico
    "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71", // Pastéis de Belém
    "https://images.unsplash.com/photo-1504893524553-b855bce32c67", // Castelo de São Jorge
    "https://images.unsplash.com/photo-1562883676-8c7feb83f09b", // Torre de Belém
  ],
  tips: [
    {
      type: "flight",
      title: "Passagens para Lisboa",
      description: "Compare preços e encontre as melhores ofertas de voos para Lisboa, com opções de várias companhias aéreas.",
      price: "A partir de R$3.200",
      link: "https://www.skyscanner.com.br/voos-para/lis/voos-baratos-para-lisboa.html",
      highlights: [
        "Voos diretos do Brasil",
        "Múltiplas companhias aéreas",
        "Comparação de preços",
        "Alertas de preços baixos"
      ]
    },
    {
      type: "hotel",
      title: "Four Seasons Hotel Ritz Lisbon",
      description: "Hotel de luxo com vista panorâmica para a cidade e spa premiado.",
      price: "€€€€",
      link: "https://www.fourseasons.com/lisbon/",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
      highlights: [
        "Spa de luxo",
        "Restaurante estrelado",
        "Terraço panorâmico",
        "Decoração clássica"
      ]
    },
    {
      type: "hotel",
      title: "Bairro Alto Hotel",
      description: "Hotel boutique em localização privilegiada com vista para o Rio Tejo.",
      price: "€€€",
      link: "https://www.bairroaltohotel.com/",
      image: "https://images.unsplash.com/photo-1552751753-0fc86a76d30e",
      highlights: [
        "Rooftop bar",
        "Localização central",
        "Design contemporâneo",
        "Serviço personalizado"
      ]
    },
    {
      type: "activity",
      title: "Tour Gastronômico em Belém",
      description: "Descubra os sabores tradicionais portugueses, incluindo os famosos Pastéis de Belém.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71",
      highlights: [
        "Pastéis de Belém originais",
        "Degustação de vinhos",
        "História da gastronomia",
        "Guia especializado"
      ]
    },
    {
      type: "activity",
      title: "Passeio de Elétrico 28",
      description: "Explore Lisboa no famoso elétrico amarelo, passando pelos principais pontos turísticos.",
      price: "€",
      image: "https://images.unsplash.com/photo-1513735492246-483525079686",
      highlights: [
        "Rota histórica",
        "Vistas panorâmicas",
        "Bairros tradicionais",
        "Experiência autêntica"
      ]
    },
    {
      type: "restaurant",
      title: "Belcanto",
      description: "Restaurante com 2 estrelas Michelin do chef José Avillez, reinventando a culinária portuguesa.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71",
      link: "https://belcanto.pt/",
      highlights: [
        "Menu degustação criativo",
        "Vinhos portugueses premium",
        "Ambiente sofisticado",
        "Serviço impecável"
      ]
    }
  ]
};
