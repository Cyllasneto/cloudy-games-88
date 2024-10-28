import { Country } from "../types";

export const japan: Country = {
  title: "Japão",
  description: "Tóquio é uma metrópole vibrante que combina tradição e modernidade. Conhecida por seus templos antigos, arranha-céus futuristas e uma cultura culinária rica.",
  heroImage: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
  bestTimeToVisit: "Março a maio (primavera) e outubro a novembro (outono)",
  currency: "Iene japonês (¥)",
  language: "Japonês",
  timeZone: "UTC+9",
  climate: "Quatro estações bem definidas, com verões quentes e úmidos e invernos frios",
  transportation: "Metrô, trem-bala (Shinkansen), ônibus e táxis",
  gallery: [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", // Monte Fuji
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9", // Templo Sensoji
    "https://images.unsplash.com/photo-1480796927426-f609979314bd", // Fushimi Inari
    "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d", // Shibuya Crossing
    "https://images.unsplash.com/photo-1578321272176-b7bbc0679853", // Templo Dourado
  ],
  tips: [
    {
      type: "hotel",
      title: "Park Hyatt Tokyo",
      description: "Hotel luxuoso em Shinjuku, famoso pelo filme 'Encontros e Desencontros'.",
      price: "€€€€",
      link: "https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      type: "hotel",
      title: "Aman Tokyo",
      description: "Hotel de luxo com design japonês contemporâneo e spa excepcional.",
      price: "€€€€",
      link: "https://www.aman.com/resorts/aman-tokyo",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      type: "activity",
      title: "Templo Senso-ji",
      description: "O templo budista mais antigo de Tóquio, em Asakusa.",
      price: "€",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9"
    },
    {
      type: "restaurant",
      title: "Sukiyabashi Jiro",
      description: "Famoso restaurante de sushi do mestre Jiro Ono.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
    }
  ]
};