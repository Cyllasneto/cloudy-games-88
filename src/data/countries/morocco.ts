import { Country } from "../types";

export const morocco: Country = {
  title: "Marrocos",
  description: "Um país de contrastes, com medinas antigas, deserto do Saara e cultura rica.",
  heroImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
  bestTimeToVisit: "Março a maio e setembro a novembro",
  currency: "Dirham marroquino (MAD)",
  language: "Árabe e Francês",
  timeZone: "UTC+1",
  climate: "Mediterrâneo no litoral, árido no interior",
  transportation: "Trens entre grandes cidades, táxis e ônibus locais",
  gallery: [
    "https://images.unsplash.com/photo-1548013146-72479768bada", // Medina de Marrakech
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e", // Deserto do Saara - Updated
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21", // Chefchaouen - Updated
    "https://images.unsplash.com/photo-1501854140801-50d01698950b", // Fez - Updated
    "https://images.unsplash.com/photo-1539020140153-e479b8c22e70", // Casablanca
  ],
  tips: [
    {
      type: "hotel",
      title: "Royal Mansour Marrakech",
      description: "Hotel de luxo com riads privados e serviço impecável.",
      price: "€€€€",
      link: "https://www.royalmansour.com/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      type: "hotel",
      title: "La Mamounia",
      description: "Hotel histórico com jardins deslumbrantes em Marrakech.",
      price: "€€€€",
      link: "https://www.mamounia.com/",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      type: "activity",
      title: "Passeio de Camelo no Saara",
      description: "Experiência única no deserto com pernoite em acampamento luxuoso.",
      price: "€€€",
      image: "https://images.unsplash.com/photo-1563990112129-a9a72c0bf77c"
    },
    {
      type: "restaurant",
      title: "La Grande Table Marocaine",
      description: "Alta gastronomia marroquina no Royal Mansour.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
    }
  ]
};