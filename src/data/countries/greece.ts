import { Country } from "../types";

export const greece: Country = {
  title: "Grécia",
  description: "Berço da civilização ocidental, com ilhas paradisíacas e história milenar.",
  heroImage: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
  bestTimeToVisit: "Primavera (abril a junho) e outono (setembro a outubro)",
  currency: "Euro (€)",
  language: "Grego",
  timeZone: "UTC+2",
  climate: "Mediterrâneo, com verões quentes e secos e invernos amenos",
  transportation: "Ferries entre ilhas, ônibus e metrô nas grandes cidades",
  gallery: [
    "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb", // Acrópole
    "https://images.unsplash.com/photo-1533105079780-92b9be482077", // Santorini
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963", // Mykonos
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", // Parthenon
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7", // Meteora
  ],
  tips: [
    {
      type: "hotel",
      title: "Grace Santorini",
      description: "Hotel boutique com vistas espetaculares do pôr do sol em Santorini, oferecendo serviço personalizado e experiências únicas.",
      price: "€€€€",
      link: "https://aubergeresorts.com/gracesantorini/",
      image: "https://images.unsplash.com/photo-1496318447583-f524534e9ce1",
      highlights: [
        "Piscina infinita com vista para a Caldera",
        "Restaurante gourmet premiado",
        "Spa de luxo",
        "Suítes com jacuzzi privativa"
      ]
    },
    {
      type: "hotel",
      title: "Amanzoe",
      description: "Resort de luxo inspirado na arquitetura grega clássica, com vistas panorâmicas do Mar Egeu.",
      price: "€€€€",
      link: "https://www.aman.com/resorts/amanzoe",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      highlights: [
        "Pavilhões privados com piscinas",
        "Praia privativa",
        "Spa holístico",
        "Experiências culturais exclusivas"
      ]
    },
    {
      type: "activity",
      title: "Acrópole de Atenas",
      description: "Visite o símbolo mais importante da antiga civilização grega, incluindo o Parthenon e outros templos históricos.",
      price: "€€",
      link: "https://etickets.tap.gr/",
      image: "https://images.unsplash.com/photo-1555993539-1732b0258235",
      highlights: [
        "Tour guiado com arqueólogo",
        "Acesso ao museu da Acrópole",
        "Vista panorâmica de Atenas",
        "História milenar preservada"
      ]
    },
    {
      type: "activity",
      title: "Tour pelas Ilhas Gregas",
      description: "Navegue pelo Mar Egeu visitando as mais belas ilhas gregas em um cruzeiro luxuoso.",
      price: "€€€",
      link: "https://www.celestyalcruises.com/",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
      highlights: [
        "Paradas em Santorini e Mykonos",
        "Experiências gastronômicas a bordo",
        "Atividades culturais",
        "Pôr do sol inesquecível"
      ]
    },
    {
      type: "restaurant",
      title: "Selene",
      description: "Gastronomia grega contemporânea com ingredientes locais de Santorini e vista deslumbrante.",
      price: "€€€",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      highlights: [
        "Menu degustação sazonal",
        "Vinhos locais premiados",
        "Vista para a Caldera",
        "Experiência gastronômica única"
      ]
    }
  ]
};