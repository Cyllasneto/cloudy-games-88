import { Country } from "../types";

export const spain: Country = {
  title: "Espanha",
  description: "Descubra Ibiza, a ilha paradisíaca do Mediterrâneo conhecida por suas praias deslumbrantes, vida noturna vibrante e cultura única.",
  heroImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  bestTimeToVisit: "Maio a outubro (temporada alta)",
  currency: "Euro (€)",
  language: "Espanhol",
  timeZone: "UTC+1",
  climate: "Mediterrâneo, com verões quentes e invernos amenos",
  transportation: "Táxis, ônibus públicos e aluguel de carros ou scooters",
  gallery: [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", // Imagem 1
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", // Imagem 2
    "https://images.unsplash.com/photo-1518770660439-4636190af475", // Imagem 3
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", // Imagem 4
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", // Imagem 5
  ],
  tips: [
    {
      type: "hotel",
      title: "Ushuaïa Ibiza Beach Hotel",
      description: "Hotel icônico com festas diurnas e DJs internacionais, oferecendo uma experiência única de hospedagem.",
      price: "€€€€",
      link: "https://www.ushuaiabeachhotel.com/",
      image: "https://images.unsplash.com/photo-1596627116790-af6f46dddbae",
      highlights: [
        "Festas na piscina",
        "Quartos luxuosos",
        "Localização privilegiada",
        "Restaurantes premium"
      ]
    },
    {
      type: "hotel",
      title: "7Pines Resort Ibiza",
      description: "Resort de luxo com vistas deslumbrantes para o mar e serviço personalizado.",
      price: "€€€€",
      link: "https://www.7pines.com/",
      image: "https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f",
      highlights: [
        "Spa de classe mundial",
        "Suítes com vista para o mar",
        "Restaurantes gourmet",
        "Infinity pools"
      ]
    },
    {
      type: "activity",
      title: "Passeio de Barco em Formentera",
      description: "Explore as águas cristalinas de Formentera em um passeio de barco exclusivo.",
      price: "€€€",
      image: "https://images.unsplash.com/photo-1583974498474-8a0c5c443418",
      highlights: [
        "Praias paradisíacas",
        "Snorkeling",
        "Almoço a bordo",
        "Pôr do sol no mar"
      ]
    },
    {
      type: "activity",
      title: "Ibiza Old Town Tour",
      description: "Explore a cidade antiga fortificada de Ibiza, patrimônio mundial da UNESCO.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148",
      highlights: [
        "Dalt Vila",
        "Catedral de Ibiza",
        "Mercado local",
        "Vista panorâmica"
      ]
    },
    {
      type: "restaurant",
      title: "Sublimotion",
      description: "Experiência gastronômica única que combina alta gastronomia com tecnologia e entretenimento.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1604327579478-4fad4f10d1e7",
      highlights: [
        "Experiência multissensorial",
        "Menu degustação inovador",
        "Show gastronômico",
        "Ambiente futurista"
      ]
    }
  ]
};