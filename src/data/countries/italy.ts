import { Country } from "../types";

export const italy: Country = {
  title: "Itália",
  description: "Roma, a capital da Itália, é famosa por sua história rica, arquitetura impressionante e deliciosa culinária. Os visitantes podem explorar o Coliseu, o Vaticano e a Fontana di Trevi.",
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
    "https://images.unsplash.com/photo-1533575770077-052fa2c609fc", // Fontana di Trevi
    "https://images.unsplash.com/photo-1525874684015-58379d421a52", // Vaticano
  ],
  tips: [
    {
      type: "hotel",
      title: "Hotel de Russie",
      description: "Hotel de luxo próximo à Piazza del Popolo com jardins secretos.",
      price: "€€€€",
      link: "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      type: "hotel",
      title: "Portrait Roma",
      description: "Hotel boutique da Ferragamo com vista para a Via Condotti.",
      price: "€€€€",
      link: "https://www.lungarnocollection.com/portrait-roma-hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      type: "activity",
      title: "Coliseu e Fórum Romano",
      description: "Tour guiado pelo anfiteatro mais famoso do mundo e ruínas antigas.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5"
    },
    {
      type: "restaurant",
      title: "La Pergola",
      description: "Restaurante com três estrelas Michelin com vista panorâmica de Roma.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
    }
  ]
};