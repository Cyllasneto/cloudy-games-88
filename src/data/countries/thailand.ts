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
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
    "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa",
    "https://images.unsplash.com/photo-1528181304800-259b08848526"
  ],
  tips: [
    {
      type: "hotel",
      title: "Four Seasons Resort Koh Samui",
      description: "Resort de luxo com vilas privativas e praia particular.",
      price: "€€€€",
      link: "https://www.fourseasons.com/kohsamui/"
    },
    {
      type: "hotel",
      title: "Mandarin Oriental Bangkok",
      description: "Hotel histórico às margens do rio Chao Phraya.",
      price: "€€€€",
      link: "https://www.mandarinoriental.com/bangkok/"
    },
    {
      type: "activity",
      title: "Templos de Bangkok",
      description: "Tour pelos principais templos budistas da capital.",
      price: "€€"
    },
    {
      type: "restaurant",
      title: "Gaggan Anand",
      description: "Restaurante premiado com uma abordagem moderna da culinária indiana e tailandesa.",
      price: "€€€€"
    }
  ]
};
