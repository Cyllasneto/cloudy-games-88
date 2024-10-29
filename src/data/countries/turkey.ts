import { Country } from "../types";

export const turkey: Country = {
  title: "Turquia",
  description: "Istambul, cidade que une dois continentes, é um fascinante encontro entre Oriente e Ocidente, com mesquitas majestosas e bazares históricos.",
  heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
  bestTimeToVisit: "Abril a maio e setembro a novembro",
  currency: "Lira Turca (TRY)",
  language: "Turco",
  timeZone: "UTC+3",
  climate: "Mediterrâneo, com verões quentes e invernos moderados",
  transportation: "Metrô, bonde, ônibus e ferry",
  gallery: [
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b", // Hagia Sophia
    "https://images.unsplash.com/photo-1527838832700-5059252407fa", // Blue Mosque
    "https://images.unsplash.com/photo-1604941644145-3279e9d99c92", // Grand Bazaar
    "https://images.unsplash.com/photo-1570109635237-4b2cd1af0a40", // Bosphorus
    "https://images.unsplash.com/photo-1578912996078-305c2a22e805", // Turkish Coffee
  ],
  tips: [
    {
      type: "flight",
      title: "Passagens para Istambul",
      description: "Encontre as melhores ofertas de voos para Istambul, com conexões na Europa.",
      price: "A partir de R$4.000",
      link: "https://www.skyscanner.com.br/voos-para/ist/voos-baratos-para-istambul.html",
      highlights: [
        "Voos com conexão na Europa",
        "Turkish Airlines direto",
        "Múltiplas companhias",
        "Alertas de preços"
      ]
    },
    {
      type: "hotel",
      title: "Four Seasons Bosphorus",
      description: "Hotel de luxo em um palácio otomano do século XIX às margens do Bósforo.",
      price: "€€€€",
      link: "https://www.fourseasons.com/istanbul/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      highlights: [
        "Vista para o Bósforo",
        "Spa turco tradicional",
        "Restaurante gourmet",
        "Piscina infinity"
      ]
    },
    {
      type: "activity",
      title: "Santa Sofia e Mesquita Azul",
      description: "Tour guiado pelos monumentos mais icônicos de Istambul.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
      highlights: [
        "História milenar",
        "Arquitetura bizantina",
        "Arte islâmica",
        "Guia especializado"
      ]
    },
    {
      type: "restaurant",
      title: "Mikla",
      description: "Restaurante premiado com vista panorâmica e cozinha turca contemporânea.",
      price: "€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      highlights: [
        "Vista panorâmica",
        "Cozinha moderna turca",
        "Carta de vinhos premium",
        "Chef renomado"
      ]
    }
  ]
};