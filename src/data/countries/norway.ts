import { Country } from "../types";

export const norway: Country = {
  title: "Noruega",
  description: "Oslo, a capital da Noruega, é uma cidade moderna que combina natureza deslumbrante com design escandinavo e qualidade de vida excepcional.",
  heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
  bestTimeToVisit: "Maio a setembro (verão) ou dezembro a março (aurora boreal)",
  currency: "Coroa Norueguesa (NOK)",
  language: "Norueguês",
  timeZone: "UTC+1",
  climate: "Temperado, com verões amenos e invernos frios",
  transportation: "Metrô, ônibus, bonde e ferry",
  gallery: [
    "https://images.unsplash.com/photo-1509356843151-3e7d96241e11", // Opera House
    "https://images.unsplash.com/photo-1605546298578-a8b72fcde79b", // Fiordes
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7", // Vigeland Park
    "https://images.unsplash.com/photo-1580077394770-4820de77a130", // Oslo City
    "https://images.unsplash.com/photo-1564760055775-d63b17a55c44", // Northern Lights
  ],
  tips: [
    {
      type: "flight",
      title: "Passagens para Oslo",
      description: "Encontre as melhores ofertas de voos para Oslo, com conexões na Europa.",
      price: "A partir de R$4.500",
      link: "https://www.skyscanner.com.br/voos-para/osl/voos-baratos-para-oslo.html",
      highlights: [
        "Voos com conexão na Europa",
        "Múltiplas companhias aéreas",
        "Melhores épocas para comprar",
        "Alertas de preços baixos"
      ]
    },
    {
      type: "hotel",
      title: "The Thief",
      description: "Hotel de design luxuoso no bairro artístico de Tjuvholmen.",
      price: "€€€€",
      link: "https://thethief.com/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      highlights: [
        "Arte contemporânea",
        "Spa nórdico",
        "Restaurante premiado",
        "Vista para o fiorde"
      ]
    },
    {
      type: "activity",
      title: "Museu Viking",
      description: "Explore a história viking e veja navios originais do século IX.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc",
      highlights: [
        "Navios vikings originais",
        "Artefatos históricos",
        "Exposições interativas",
        "História nórdica"
      ]
    },
    {
      type: "restaurant",
      title: "Maaemo",
      description: "Restaurante com três estrelas Michelin focado em ingredientes noruegueses.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      highlights: [
        "Três estrelas Michelin",
        "Cozinha nórdica moderna",
        "Ingredientes locais",
        "Experiência única"
      ]
    }
  ],
  itinerary: {
    mapCenter: [59.9139, 10.7522], // Oslo coordinates
    mapZoom: 12,
    routes: [
      {
        day: 1,
        description: "Oslo Clássica",
        locations: [
          {
            name: "Opera House",
            coordinates: [59.9074, 10.7526],
            description: "Ícone arquitetônico à beira-mar"
          },
          {
            name: "Parque Vigeland",
            coordinates: [59.9270, 10.7001],
            description: "Maior parque de esculturas do mundo"
          },
          {
            name: "Museu Viking",
            coordinates: [59.9044, 10.6843],
            description: "História viking com navios originais"
          }
        ]
      },
      {
        day: 2,
        description: "Natureza e Cultura",
        locations: [
          {
            name: "Holmenkollen",
            coordinates: [59.9632, 10.6654],
            description: "Famoso salto de esqui com vista panorâmica"
          },
          {
            name: "Museu Munch",
            coordinates: [59.9161, 10.7516],
            description: "Obras do famoso pintor Edvard Munch"
          },
          {
            name: "Aker Brygge",
            coordinates: [59.9111, 10.7289],
            description: "Área portuária moderna com restaurantes"
          }
        ]
      }
    ]
  }
};
