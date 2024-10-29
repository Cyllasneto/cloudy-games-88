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
    "https://images.unsplash.com/photo-1558642084-fd07fae5282e", // Praia de Ibiza ao pôr do sol
    "https://images.unsplash.com/photo-1559070169-a3077159ee16", // Festa na praia
    "https://www.dicasbarcelona.com.br/wp-content/uploads/sites/15/2015/06/Balada-Amnesia-Ibiza.jpg", // DJ na Amnesia
    "https://images.unsplash.com/photo-1563784462386-044fd95e9852", // Cala d'Hort
    "https://images.unsplash.com/photo-1564678164-f00ad53a38e6", // Vida noturna em Ibiza
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
      link: "https://www.formentera.es/en/what-to-do/boat-trips/",
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
      link: "https://www.ibiza.travel/en/article/dalt-vila",
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