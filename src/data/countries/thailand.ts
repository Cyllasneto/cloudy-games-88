import { Country } from "../types";

export const thailand: Country = {
  title: "Tailândia",
  description: "Reino do sorriso, com praias paradisíacas, templos budistas e culinária única.",
  heroImage: "https://images.unsplash.com/photo-1504214208698-ea446addfa7e",
  bestTimeToVisit: "Novembro a março (estação seca)",
  currency: "Baht tailandês (฿)",
  language: "Tailandês",
  timeZone: "UTC+7",
  climate: "Tropical, com estação seca e chuvosa",
  transportation: "Tuk-tuks, metrô em Bangkok, trens e ônibus entre cidades",
  gallery: [
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a", // Grande Palácio
    "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa", // Templos
    "https://images.unsplash.com/photo-1528181304800-259b08848526", // Phi Phi
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", // Praias
    "https://images.unsplash.com/photo-1552550018-5253c1b171e1", // Buda Esmeralda
  ],
  tips: [
    {
      type: "hotel",
      title: "Four Seasons Resort Koh Samui",
      description: "Resort de luxo com vilas privativas e praia particular, oferecendo o melhor da hospitalidade tailandesa.",
      price: "€€€€",
      link: "https://www.fourseasons.com/kohsamui/",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      highlights: [
        "Vilas com piscina privativa",
        "Spa de classe mundial",
        "Aulas de culinária tailandesa",
        "Praia exclusiva"
      ]
    },
    {
      type: "hotel",
      title: "Mandarin Oriental Bangkok",
      description: "Hotel histórico às margens do rio Chao Phraya, símbolo de luxo e elegância.",
      price: "€€€€",
      link: "https://www.mandarinoriental.com/bangkok/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      highlights: [
        "Spa premiado",
        "Restaurantes estrelados",
        "Serviço de mordomo",
        "Localização privilegiada"
      ]
    },
    {
      type: "activity",
      title: "Templos de Bangkok",
      description: "Tour pelos principais templos budistas da capital, incluindo o Wat Phra Kaew e Wat Arun.",
      price: "€€",
      link: "https://www.viator.com/Bangkok-tours/Cultural-Tours/",
      image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed",
      highlights: [
        "Guia especializado em história",
        "Templo do Buda de Esmeralda",
        "Templo do Amanhecer",
        "Rituais budistas"
      ]
    },
    {
      type: "activity",
      title: "Ilhas Phi Phi",
      description: "Explore as famosas ilhas com suas águas cristalinas e praias paradisíacas.",
      price: "€€€",
      link: "https://www.phiphiislands.com/",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
      highlights: [
        "Maya Bay",
        "Snorkeling com peixes exóticos",
        "Pôr do sol em barco tradicional",
        "Praias desertas"
      ]
    },
    {
      type: "restaurant",
      title: "Gaggan Anand",
      description: "Restaurante premiado com uma abordagem moderna da culinária indiana e tailandesa.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      highlights: [
        "Menu progressivo único",
        "Experiência gastronômica inovadora",
        "Ambiente intimista",
        "Chef premiado internacionalmente"
      ]
    }
  ]
};