import { Country } from "../types";

export const japan: Country = {
  title: "Japão",
  description: "Tóquio é uma metrópole vibrante que combina tradição e modernidade, com templos antigos e tecnologia de ponta.",
  heroImage: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
  bestTimeToVisit: "Março a maio (primavera) e outubro a novembro (outono)",
  currency: "Iene japonês (¥)",
  language: "Japonês",
  timeZone: "UTC+9",
  climate: "Quatro estações bem definidas, com verões quentes e úmidos e invernos frios",
  transportation: "Metrô, trem-bala (Shinkansen), ônibus e táxis",
  gallery: [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", // Fuji
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9", // Sensoji
    "https://images.unsplash.com/photo-1480796927426-f609979314bd", // Fushimi
    "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d", // Shibuya
    "https://images.unsplash.com/photo-1578321272176-b7bbc0679853", // Kinkakuji
  ],
  tips: [
    {
      type: "hotel",
      title: "Park Hyatt Tokyo",
      description: "Hotel luxuoso em Shinjuku, famoso pelo filme 'Encontros e Desencontros', com vistas espetaculares.",
      price: "€€€€",
      link: "https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      highlights: [
        "Vista panorâmica de Tóquio",
        "Spa de classe mundial",
        "Restaurantes premiados",
        "Bar New York no 52º andar"
      ]
    },
    {
      type: "hotel",
      title: "Aman Tokyo",
      description: "Hotel de luxo com design japonês contemporâneo e spa excepcional no coração de Tóquio.",
      price: "€€€€",
      link: "https://www.aman.com/resorts/aman-tokyo",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      highlights: [
        "Design tradicional japonês",
        "Onsen urbano",
        "Vista para o Palácio Imperial",
        "Cerimônia do chá tradicional"
      ]
    },
    {
      type: "activity",
      title: "Monte Fuji",
      description: "Excursão ao icônico Monte Fuji com experiências culturais únicas.",
      price: "€€",
      link: "https://www.fujisan-climb.jp/en/",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      highlights: [
        "Trilhas sagradas",
        "Onsen com vista",
        "Vilarejos tradicionais",
        "Fotografia paisagística"
      ]
    },
    {
      type: "activity",
      title: "Templo Senso-ji",
      description: "O templo budista mais antigo de Tóquio, em Asakusa, com rica história e cultura.",
      price: "€",
      link: "https://www.senso-ji.jp/english/",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
      highlights: [
        "Portão Kaminarimon",
        "Rua comercial Nakamise",
        "Rituais budistas",
        "Festivais tradicionais"
      ]
    },
    {
      type: "restaurant",
      title: "Sukiyabashi Jiro",
      description: "Famoso restaurante de sushi do mestre Jiro Ono, uma experiência gastronômica única.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      highlights: [
        "Sushi de classe mundial",
        "Chef lendário",
        "Experiência intimista",
        "Ingredientes premium"
      ]
    }
  ],
  itinerary: {
    mapCenter: [35.6762, 139.6503], // Coordenadas de Tóquio
    mapZoom: 12,
    routes: [
      {
        day: 1,
        description: "Explore os contrastes de Tóquio",
        locations: [
          {
            name: "Templo Senso-ji",
            coordinates: [35.7147, 139.7966],
            description: "Visite o templo budista mais antigo de Tóquio"
          },
          {
            name: "Shibuya Crossing",
            coordinates: [35.6595, 139.7004],
            description: "Experimente a famosa faixa de pedestres mais movimentada do mundo"
          },
          {
            name: "Tokyo Skytree",
            coordinates: [35.7100, 139.8107],
            description: "Aprecie a vista panorâmica da cidade"
          }
        ]
      },
      {
        day: 2,
        description: "Conheça o Monte Fuji e arredores",
        locations: [
          {
            name: "Monte Fuji 5ª Estação",
            coordinates: [35.3606, 138.7278],
            description: "Ponto de partida para trilhas e vista privilegiada"
          },
          {
            name: "Lago Kawaguchiko",
            coordinates: [35.5171, 138.7510],
            description: "Relaxe com vista para o Monte Fuji"
          },
          {
            name: "Chureito Pagoda",
            coordinates: [35.5015, 138.8019],
            description: "Fotografe a icônica vista do Monte Fuji com a pagoda"
          }
        ]
      }
    ]
  }
};
