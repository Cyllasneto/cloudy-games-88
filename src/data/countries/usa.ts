import { Country } from "../types";

export const usa: Country = {
  title: "Estados Unidos",
  description: "Descubra a magia de Orlando, lar dos parques temáticos mais famosos do mundo, incluindo o Walt Disney World Resort, Universal Studios e muito mais.",
  heroImage: "https://images.unsplash.com/photo-1575089776834-8be34696ffb9",
  bestTimeToVisit: "Outubro a abril (clima mais ameno e menos chuvas)",
  currency: "Dólar americano (US$)",
  language: "Inglês",
  timeZone: "UTC-5 (EST)",
  climate: "Subtropical, com verões quentes e úmidos e invernos suaves",
  transportation: "Uber, aluguel de carros, shuttles dos hotéis e ônibus do I-Ride Trolley",
  gallery: [
    "https://images.unsplash.com/photo-1524008279394-3aed4643b30b", // Magic Kingdom
    "https://www.mercadoeeventos.com.br/wp-content/uploads/2019/09/unnamed-10.jpg", // Universal Studios
    "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/wdpro-assets/gallery/attractions/epcot/spaceship-earth/spaceship-earth-gallery00.jpg?1661268822148", // Spaceship Earth
    "https://www.comprarcasaemorlando.com.br/wp-content/uploads/2018/12/disney-springs-01.jpg", // Disney Springs
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd", // EPCOT
  ],
  tips: [
    {
      type: "hotel",
      title: "Disney's Grand Floridian Resort & Spa",
      description: "Hotel de luxo com arquitetura vitoriana, localização privilegiada e acesso direto ao Magic Kingdom via monotrilho.",
      price: "€€€€",
      link: "https://disneyworld.disney.go.com/resorts/grand-floridian-resort-and-spa/",
      image: "https://images.unsplash.com/photo-1620843437920-ead942b3c22c",
      highlights: [
        "Acesso direto ao Magic Kingdom",
        "Restaurantes premiados",
        "Spa de luxo",
        "Vista para o lago e fogos de artifício"
      ]
    },
    {
      type: "hotel",
      title: "Universal's Hard Rock Hotel",
      description: "Hotel temático com atmosfera rock'n'roll e benefícios exclusivos para os parques da Universal.",
      price: "€€€€",
      link: "https://www.universalorlando.com/web/en/us/places-to-stay/hard-rock-hotel",
      image: "https://images.unsplash.com/photo-1613238359639-50094e05fc54",
      highlights: [
        "Express Pass ilimitado",
        "Entrada antecipada nos parques",
        "Piscina com música subaquática",
        "Restaurantes temáticos"
      ]
    },
    {
      type: "activity",
      title: "Magic Kingdom",
      description: "O parque mais mágico da Disney, com o icônico Castelo da Cinderela e atrações clássicas.",
      price: "€€€",
      link: "https://disneyworld.disney.go.com/destinations/magic-kingdom/",
      image: "https://images.unsplash.com/photo-1524008279394-3aed4643b30b",
      highlights: [
        "Shows noturnos de fogos de artifício",
        "Encontro com personagens",
        "Atrações clássicas da Disney",
        "Desfiles temáticos"
      ]
    },
    {
      type: "activity",
      title: "Universal Studios",
      description: "Parque temático com atrações baseadas em filmes e séries famosas.",
      price: "€€€",
      link: "https://www.universalorlando.com/web/en/us/theme-parks/universal-studios-florida",
      image: "https://images.unsplash.com/photo-1613238359639-50094e05fc54",
      highlights: [
        "The Wizarding World of Harry Potter",
        "Simuladores de última geração",
        "Shows ao vivo",
        "Experiências imersivas"
      ]
    },
    {
      type: "restaurant",
      title: "Victoria & Albert's",
      description: "Restaurante premiado no Grand Floridian, oferecendo uma experiência gastronômica única.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1620843437920-ead942b3c22c",
      highlights: [
        "Menu degustação exclusivo",
        "Vinhos premiados",
        "Ambiente elegante",
        "Serviço impecável"
      ]
    },
    {
      type: "restaurant",
      title: "Be Our Guest Restaurant",
      description: "Restaurante temático no Castelo da Fera, com ambientação mágica do filme A Bela e a Fera.",
      price: "€€€",
      image: "https://images.unsplash.com/photo-1524008279394-3aed4643b30b",
      highlights: [
        "Ambiente temático de castelo",
        "Encontro com personagens",
        "Culinária francesa",
        "Salões decorados"
      ]
    }
  ]
};