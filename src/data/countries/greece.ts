import { Country } from "../types";

export const greece: Country = {
  title: "Grécia",
  description: "Berço da civilização ocidental, com ilhas paradisíacas e história milenar.",
  heroImage: "https://images.unsplash.com/photo-1501904831357-99414e58b1c3",
  bestTimeToVisit: "Primavera (abril a junho) e outono (setembro a outubro)",
  currency: "Euro (€)",
  language: "Grego",
  timeZone: "UTC+2",
  climate: "Mediterrâneo, com verões quentes e secos e invernos amenos",
  transportation: "Ferries entre ilhas, ônibus e metrô nas grandes cidades",
  gallery: [
    "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    "https://images.unsplash.com/photo-1523568129082-a8d6c095638e"
  ],
  tips: [
    {
      type: "hotel",
      title: "Grace Santorini",
      description: "Hotel boutique com vistas espetaculares do pôr do sol em Santorini.",
      price: "€€€€",
      link: "https://aubergeresorts.com/gracesantorini/"
    },
    {
      type: "hotel",
      title: "Amanzoe",
      description: "Resort de luxo inspirado na arquitetura grega clássica.",
      price: "€€€€",
      link: "https://www.aman.com/resorts/amanzoe"
    },
    {
      type: "activity",
      title: "Acrópole de Atenas",
      description: "Visite o símbolo mais importante da antiga civilização grega.",
      price: "€€"
    },
    {
      type: "restaurant",
      title: "Selene",
      description: "Gastronomia grega contemporânea com ingredientes locais de Santorini.",
      price: "€€"
    }
  ]
};
