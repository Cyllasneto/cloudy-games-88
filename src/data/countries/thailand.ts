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
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a", // Grande Palácio
    "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa", // Templos
    "https://images.unsplash.com/photo-1528181304800-259b08848526", // Phi Phi
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", // Praias
    "https://images.unsplash.com/photo-1552550018-5253c1b171e1", // Buda Esmeralda
  ],
  tips: [
    {
      type: "flight",
      title: "Passagens para Bangkok",
      description: "Compare preços e encontre as melhores ofertas de voos para Bangkok, principal porta de entrada da Tailândia.",
      price: "A partir de R$600",
      link: "https://www.skyscanner.com.br/voos-para/bkk/voos-baratos-para-bangkok.html",
      highlights: [
        "Voos com conexões",
        "Comparação entre companhias",
        "Alertas de preços",
        "Calendário de preços"
      ]
    },
    {
      type: "hotel",
      title: "Mandarin Oriental Bangkok",
      description: "Hotel histórico às margens do rio Chao Phraya, símbolo de luxo e elegância.",
      price: "€€€€",
      link: "https://www.mandarinoriental.com/bangkok/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      highlights: [
        "Spa premiado",
        "Restaurantes estrelados",
        "Serviço de mordomo",
        "Localização privilegiada"
      ]
    },
    {
      type: "activity",
      title: "Templos de Bangkok",
      description: "Tour pelos principais templos budistas da capital, incluindo o Wat Phra Kaew e Wat Arun.",
      price: "€€",
      link: "https://www.viator.com/Bangkok-tours/Cultural-Tours/",
      image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed",
      highlights: [
        "Guia especializado em história",
        "Templo do Buda de Esmeralda",
        "Templo do Amanhecer",
        "Rituais budistas"
      ]
    },
    {
      type: "activity",
      title: "Ilhas Phi Phi",
      description: "Explore as famosas ilhas com suas águas cristalinas e praias paradisíacas.",
      price: "€€€",
      link: "https://www.phiphiislands.com/",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
      highlights: [
        "Maya Bay",
        "Snorkeling com peixes exóticos",
        "Pôr do sol em barco tradicional",
        "Praias desertas"
      ]
    },
    {
      type: "restaurant",
      title: "Gaggan Anand",
      description: "Restaurante premiado com uma abordagem moderna da culinária indiana e tailandesa.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      link: "https://www.gaggan.online/",
      highlights: [
        "Menu progressivo único",
        "Experiência gastronômica inovadora",
        "Ambiente intimista",
        "Chef premiado internacionalmente"
      ]
    }
  ],
  itinerary: {
    mapCenter: [13.7563, 100.5018], // Coordenadas de Bangkok
    mapZoom: 12,
    routes: [
      {
        day: 1,
        description: "Descubra os templos de Bangkok",
        locations: [
          {
            name: "Grande Palácio",
            coordinates: [13.7500, 100.4913],
            description: "Complexo de templos e antiga residência real"
          },
          {
            name: "Wat Pho",
            coordinates: [13.7465, 100.4933],
            description: "Templo do Buda Reclinado"
          },
          {
            name: "Wat Arun",
            coordinates: [13.7437, 100.4888],
            description: "Templo do Amanhecer às margens do rio"
          }
        ]
      },
      {
        day: 2,
        description: "Praias paradisíacas",
        locations: [
          {
            name: "Phi Phi Islands",
            coordinates: [7.7407, 98.7784],
            description: "Ilhas tropicais deslumbrantes"
          },
          {
            name: "Maya Bay",
            coordinates: [7.6783, 98.7694],
            description: "Praia famosa pelo filme 'A Praia'"
          },
          {
            name: "Railay Beach",
            coordinates: [8.0055, 98.8372],
            description: "Praia cercada por falésias calcárias"
          }
        ]
      }
    ]
  }
};
