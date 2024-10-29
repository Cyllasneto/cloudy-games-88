import { Country } from "../types";

export const italy: Country = {
  title: "Itália",
  description: "Roma, a capital da Itália, é famosa por sua história rica, arquitetura impressionante e deliciosa culinária.",
  heroImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
  bestTimeToVisit: "Abril a meados de junho, ou setembro a outubro",
  currency: "Euro (€)",
  language: "Italiano",
  timeZone: "UTC+1",
  climate: "Mediterrâneo, com verões quentes e secos e invernos amenos",
  transportation: "Metrô, ônibus, trem e táxis",
  gallery: [
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5", // Coliseu
    "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216", // Veneza
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963", // Cinque Terre
    "https://images.unsplash.com/photo-1533575770077-052fa2c609fc", // Fontana
    "https://images.unsplash.com/photo-1525874684015-58379d421a52", // Vaticano
  ],
  tips: [
    {
      type: "flight",
      title: "Passagens para Roma",
      description: "Encontre as melhores ofertas de voos para Roma, com comparação de preços entre diversas companhias aéreas.",
      price: "A partir de €400",
      link: "https://www.skyscanner.com.br/voos-para/rome/voos-baratos-para-roma.html",
      highlights: [
        "Voos diretos e com conexões",
        "Comparação de preços",
        "Múltiplas companhias aéreas",
        "Alertas de preços baixos"
      ]
    },
    {
      type: "hotel",
      title: "Hotel de Russie",
      description: "Hotel de luxo próximo à Piazza del Popolo com jardins secretos e spa excepcional.",
      price: "€€€€",
      link: "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      highlights: [
        "Jardins históricos",
        "Spa de luxo",
        "Localização central",
        "Restaurante premiado"
      ]
    },
    {
      type: "hotel",
      title: "Portrait Roma",
      description: "Hotel boutique da Ferragamo com vista para a Via Condotti e serviço personalizado.",
      price: "€€€€",
      link: "https://www.lungarnocollection.com/portrait-roma-hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      highlights: [
        "Design Ferragamo",
        "Terraço panorâmico",
        "Serviço personalizado",
        "Localização premium"
      ]
    },
    {
      type: "activity",
      title: "Coliseu e Fórum Romano",
      description: "Tour guiado pelo anfiteatro mais famoso do mundo e ruínas antigas da Roma Imperial.",
      price: "€€",
      link: "https://www.coopculture.it/",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
      highlights: [
        "Guia arqueólogo",
        "Acesso prioritário",
        "História antiga de Roma",
        "Arena dos gladiadores"
      ]
    },
    {
      type: "activity",
      title: "Museus Vaticanos",
      description: "Explore uma das maiores coleções de arte do mundo, incluindo a Capela Sistina.",
      price: "€€€",
      link: "https://www.museivaticani.va/",
      image: "https://images.unsplash.com/photo-1525874684015-58379d421a52",
      highlights: [
        "Capela Sistina",
        "Obras de Michelangelo",
        "Acesso antecipado",
        "Guia especializado em arte"
      ]
    },
    {
      type: "restaurant",
      title: "La Pergola",
      description: "Restaurante com três estrelas Michelin com vista panorâmica de Roma.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      highlights: [
        "Três estrelas Michelin",
        "Vista panorâmica",
        "Carta de vinhos premiada",
        "Alta gastronomia italiana"
      ]
    }
  ]
};
