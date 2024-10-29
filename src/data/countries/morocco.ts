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
    "https://images.unsplash.com/photo-1548013146-72479768bada", // Medina
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e", // Saara
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21", // Chefchaouen
    "https://images.unsplash.com/photo-1501854140801-50d01698950b", // Fez
    "https://images.unsplash.com/photo-1539020140153-e479b8c22e70", // Casablanca
  ],
  tips: [
    {
      type: "hotel",
      title: "Royal Mansour Marrakech",
      description: "Hotel de luxo com riads privados e serviço impecável, oferecendo a verdadeira experiência marroquina.",
      price: "€€€€",
      link: "https://www.royalmansour.com/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      highlights: [
        "Riads privados com piscina",
        "Spa premiado",
        "Jardins luxuosos",
        "Restaurantes estrelados"
      ]
    },
    {
      type: "hotel",
      title: "La Mamounia",
      description: "Hotel histórico com jardins deslumbrantes em Marrakech, símbolo de luxo marroquino.",
      price: "€€€€",
      link: "https://www.mamounia.com/",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      highlights: [
        "Jardins centenários",
        "Spa tradicional",
        "Decoração mourisca",
        "Experiências gastronômicas únicas"
      ]
    },
    {
      type: "activity",
      title: "Passeio de Camelo no Saara",
      description: "Experiência única no deserto com pernoite em acampamento luxuoso sob as estrelas.",
      price: "€€€",
      link: "https://www.moroccodesertmagic.com/",
      image: "https://images.unsplash.com/photo-1563990112129-a9a72c0bf77c",
      highlights: [
        "Acampamento luxuoso no deserto",
        "Jantar tradicional berbere",
        "Nascer do sol nas dunas",
        "Música tradicional"
      ]
    },
    {
      type: "activity",
      title: "Tour pela Medina de Fez",
      description: "Explore a maior medina medieval do mundo com um guia especializado.",
      price: "€€",
      link: "https://www.fez-tours.com/",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      highlights: [
        "Curtumes tradicionais",
        "Artesanato local",
        "História milenar",
        "Gastronomia tradicional"
      ]
    },
    {
      type: "restaurant",
      title: "La Grande Table Marocaine",
      description: "Alta gastronomia marroquina no Royal Mansour, combinando tradição e modernidade.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      highlights: [
        "Cozinha marroquina contemporânea",
        "Ambiente palaciano",
        "Vinhos marroquinos selecionados",
        "Serviço impecável"
      ]
    }
  ]
};