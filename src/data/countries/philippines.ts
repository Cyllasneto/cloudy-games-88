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
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    "https://images.unsplash.com/photo-1551016043-06ec2173531b"
  ],
  tips: [
    {
      type: "hotel",
      title: "Hotel Luna",
      description: "Hotel boutique em um casarão colonial com galeria de arte.",
      price: "€€€",
      link: "https://hotelluna.ph/",
      highlights: [
        "Arquitetura colonial",
        "Galeria de arte",
        "Piscina na cobertura",
        "Restaurante gourmet"
      ]
    },
    {
      type: "activity",
      title: "Calle Crisologo",
      description: "Rua histórica com casarões coloniais espanhóis.",
      price: "€",
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
      description: "Restaurante tradicional em um casarão histórico.",
      price: "€€",
      highlights: [
        "Culinária local",
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
        description: "História colonial",
        locations: [
          {
            name: "Calle Crisologo",
            coordinates: [17.5747, 120.3869],
            description: "Rua histórica preservada"
          },
          {
            name: "Plaza Salcedo",
            coordinates: [17.5752, 120.3874],
            description: "Praça central histórica"
          },
          {
            name: "Catedral de Vigan",
            coordinates: [17.5754, 120.3877],
            description: "Igreja barroca do século XVIII"
          }
        ]
      },
      {
        day: 2,
        description: "Cultura e artesanato",
        locations: [
          {
            name: "Hidden Garden",
            coordinates: [17.5785, 120.3889],
            description: "Jardim e centro de artesanato"
          },
          {
            name: "Pagburnayan",
            coordinates: [17.5768, 120.3851],
            description: "Oficinas de cerâmica tradicional"
          },
          {
            name: "Baluarte",
            coordinates: [17.5695, 120.3889],
            description: "Mini zoológico e museu"
          }
        ]
      }
    ]
  }
};