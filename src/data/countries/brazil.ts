import { Country } from "../types";

export const brazil: Country = {
  title: "Brasil",
  description: "País continental com praias paradisíacas, floresta amazônica e cultura vibrante.",
  heroImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
  bestTimeToVisit: "Setembro a março (primavera e verão)",
  currency: "Real (R$)",
  language: "Português",
  timeZone: "UTC-3",
  climate: "Tropical na maior parte do país, com variações regionais",
  transportation: "Voos domésticos, ônibus interestaduais e metrô nas grandes cidades",
  gallery: [
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325", // Cristo
    "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f", // Pão de Açúcar
    "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e", // Cataratas
    "https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f", // Pelourinho
    "https://images.unsplash.com/photo-1501854140801-50d01698950b", // Copacabana
  ],
  tips: [
    {
      type: "flight",
      title: "Passagens para o Rio de Janeiro",
      description: "Encontre as melhores ofertas de voos para o Rio de Janeiro, com opções de várias companhias aéreas.",
      price: "A partir de R$400",
      link: "https://www.skyscanner.com.br/voos-para/rio/voos-baratos-para-rio-de-janeiro.html",
      highlights: [
        "Voos diretos de várias cidades",
        "Comparação de preços",
        "Múltiplas companhias aéreas",
        "Alertas de ofertas"
      ]
    },
    {
      type: "hotel",
      title: "TXAI Resort Itacaré",
      description: "Resort ecológico de luxo na Costa do Cacau, com praias privativas e experiências únicas.",
      price: "€€€€",
      link: "https://txairesorts.com/",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      highlights: [
        "Bangalôs com vista para o mar",
        "Gastronomia orgânica",
        "Spa com tratamentos naturais",
        "Atividades de ecoturismo"
      ]
    },
    {
      type: "activity",
      title: "Cristo Redentor",
      description: "Visita ao monumento mais famoso do Brasil com vista panorâmica do Rio de Janeiro.",
      price: "€€",
      link: "https://cristoredentoroficial.com.br/",
      image: "https://images.unsplash.com/photo-1593995863951-57c27e518295",
      highlights: [
        "Vista 360º da cidade",
        "Trem do Corcovado",
        "Pôr do sol inesquecível",
        "Guia especializado"
      ]
    },
    {
      type: "activity",
      title: "Cataratas do Iguaçu",
      description: "Explore uma das maiores quedas d'água do mundo em um passeio inesquecível.",
      price: "€€",
      link: "https://cataratasdoiguacu.com.br/",
      image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
      highlights: [
        "Passeio de barco",
        "Trilhas ecológicas",
        "Parque Nacional",
        "Macuco Safari"
      ]
    },
    {
      type: "restaurant",
      title: "D.O.M.",
      description: "Restaurante premiado do chef Alex Atala em São Paulo, explorando ingredientes brasileiros.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      link: "https://domrestaurante.com.br/",
      highlights: [
        "Menu degustação amazônico",
        "Ingredientes nativos",
        "Chef premiado",
        "Experiência gastronômica única"
      ]
    }
  ],
  itinerary: {
    mapCenter: [-22.9068, -43.1729], // Coordenadas do Rio de Janeiro
    mapZoom: 12,
    routes: [
      {
        day: 1,
        description: "Conheça os cartões-postais do Rio",
        locations: [
          {
            name: "Cristo Redentor",
            coordinates: [-22.9519, -43.2105],
            description: "Uma das 7 maravilhas do mundo moderno"
          },
          {
            name: "Pão de Açúcar",
            coordinates: [-22.9492, -43.1545],
            description: "Vista panorâmica da cidade maravilhosa"
          },
          {
            name: "Praia de Copacabana",
            coordinates: [-22.9698, -43.1837],
            description: "A praia mais famosa do Brasil"
          }
        ]
      },
      {
        day: 2,
        description: "Cultura e História Carioca",
        locations: [
          {
            name: "Centro Histórico",
            coordinates: [-22.9068, -43.1729],
            description: "Conheça o Rio antigo"
          },
          {
            name: "Escadaria Selarón",
            coordinates: [-22.9154, -43.1809],
            description: "Obra de arte ao ar livre"
          },
          {
            name: "Maracanã",
            coordinates: [-22.9122, -43.2302],
            description: "O templo do futebol brasileiro"
          }
        ]
      }
    ]
  }
};
