import { Country } from "../types";

export const philippines: Country = {
  title: "Filipinas",
  description: "Vigan, patrimônio histórico com arquitetura colonial espanhola preservada e rica gastronomia local.",
  heroImage: "https://images.unsplash.com/photo-1616486788371-62d930495c44",
  bestTimeToVisit: "Dezembro a fevereiro (estação seca)",
  currency: "Peso filipino (PHP)",
  language: "Filipino e Inglês",
  timeZone: "UTC+8",
  climate: "Tropical com monções",
  transportation: "Jeepneys, triciclos e calesas (carruagens)",
  gallery: [
    "https://images.unsplash.com/photo-1616486788371-62d930495c44",
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
    "https://images.unsplash.com/photo-1551016043-06ec2173531b",
    "https://images.unsplash.com/photo-1551016043-06ec2173531b",
    "https://images.unsplash.com/photo-1551016043-06ec2173531b",
  ],
  tips: [
    {
      type: "hotel",
      title: "Hotel Luna",
      description: "Primeiro museu-hotel das Filipinas, com arte local e colonial.",
      price: "€€€",
      link: "https://hotelluna.ph/",
      image: "https://images.unsplash.com/photo-1616486788371-62d930495c44",
      highlights: [
        "Galeria de arte",
        "Arquitetura colonial",
        "Localização central",
        "Restaurante premiado"
      ]
    },
    {
      type: "activity",
      title: "Calle Crisologo",
      description: "Rua histórica com casarões coloniais espanhóis.",
      price: "€",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
      highlights: [
        "Arquitetura colonial",
        "Lojas de artesanato",
        "Passeio de calesa",
        "Fotografia histórica"
      ]
    },
    {
      type: "restaurant",
      title: "Café Leona",
      description: "Restaurante tradicional em casarão histórico.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1551016043-06ec2173531b",
      highlights: [
        "Culinária Ilocana",
        "Ambiente histórico",
        "Vista para a rua",
        "Pratos típicos"
      ]
    }
  ],
  itinerary: {
    mapCenter: [17.5747, 120.3869],
    mapZoom: 14,
    routes: [
      {
        day: 1,
        description: "Explore o centro histórico",
        locations: [
          {
            name: "Calle Crisologo",
            coordinates: [17.5747, 120.3869],
            description: "Rua histórica principal"
          },
          {
            name: "Plaza Salcedo",
            coordinates: [17.5736, 120.3874],
            description: "Praça central histórica"
          },
          {
            name: "Catedral de Vigan",
            coordinates: [17.5741, 120.3877],
            description: "Igreja barroca do século XVIII"
          }
        ]
      },
      {
        day: 2,
        description: "Cultura e artesanato",
        locations: [
          {
            name: "Pagburnayan",
            coordinates: [17.5775, 120.3889],
            description: "Oficinas de cerâmica tradicional"
          },
          {
            name: "Hidden Garden",
            coordinates: [17.5797, 120.3872],
            description: "Jardim e restaurante tradicional"
          },
          {
            name: "Baluarte",
            coordinates: [17.5847, 120.3767],
            description: "Mini zoológico e parque de diversões"
          }
        ]
      }
    ]
  }
};