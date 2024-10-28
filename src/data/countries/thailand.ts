import { Country } from "../types";

export const thailand: Country = {
  title: "Tailândia",
  description: "Reino do sorriso, com praias paradisíacas, templos budistas e culinária única.",
  heroImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", // Updated Bangkok image
  bestTimeToVisit: "Novembro a março (estação seca)",
  currency: "Baht tailandês (฿)",
  language: "Tailandês",
  timeZone: "UTC+7",
  climate: "Tropical, com estação seca e chuvosa",
  transportation: "Tuk-tuks, metrô em Bangkok, trens e ônibus entre cidades",
  gallery: [
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a", // Grande Palácio
    "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa", // Templos de Bangkok
    "https://images.unsplash.com/photo-1528181304800-259b08848526", // Phi Phi Islands
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", // Praias de Phuket
    "https://images.unsplash.com/photo-1552550018-5253c1b171e1", // Templo do Buda de Esmeralda
  ],
  tips: [
    {
      type: "hotel",
      title: "Four Seasons Resort Koh Samui",
      description: "Resort de luxo com vilas privativas e praia particular.",
      price: "€€€€",
      link: "https://www.fourseasons.com/kohsamui/",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      type: "hotel",
      title: "Mandarin Oriental Bangkok",
      description: "Hotel histórico às margens do rio Chao Phraya.",
      price: "€€€€",
      link: "https://www.mandarinoriental.com/bangkok/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      type: "activity",
      title: "Templos de Bangkok",
      description: "Tour pelos principais templos budistas da capital.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed"
    },
    {
      type: "restaurant",
      title: "Gaggan Anand",
      description: "Restaurante premiado com uma abordagem moderna da culinária indiana e tailandesa.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
    }
  ]
};