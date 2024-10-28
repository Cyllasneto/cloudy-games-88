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
    "https://images.unsplash.com/photo-1548013146-72479768bada",
    "https://images.unsplash.com/photo-1531375154063-1d3c1b5e6a29",
    "https://images.unsplash.com/photo-1547644768-5cb16240d705"
  ],
  tips: [
    {
      type: "hotel" as TipType,
      title: "Royal Mansour Marrakech",
      description: "Hotel de luxo com riads privados e serviço impecável.",
      price: "€€€€",
      link: "https://www.royalmansour.com/"
    },
    {
      type: "hotel" as TipType,
      title: "La Mamounia",
      description: "Hotel histórico com jardins deslumbrantes em Marrakech.",
      price: "€€€€",
      link: "https://www.mamounia.com/"
    },
    {
      type: "activity" as TipType,
      title: "Passeio de Camelo no Saara",
      description: "Experiência única no deserto com pernoite em acampamento luxuoso.",
      price: "€€€"
    },
    {
      type: "restaurant" as TipType,
      title: "La Grande Table Marocaine",
      description: "Alta gastronomia marroquina no Royal Mansour.",
      price: "€€€€"
    }
  ]
};
