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
      type: "flight",
      title: "Passagens para Marrakech",
      description: "Encontre as melhores ofertas de voos para Marrakech, principal destino turístico do Marrocos.",
      price: "A partir de R$4.000",
      link: "https://www.skyscanner.com.br/voos-para/rak/voos-baratos-para-marrakech.html",
      highlights: [
        "Voos com conexão na Europa",
        "Comparação de preços",
        "Múltiplas companhias aéreas",
        "Melhores épocas para comprar"
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
      price: "€€",
      link: "https://visitmorocco.com/en/travel-info/sahara-desert-tours",
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
      link: "https://visitfes.com/",
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
      link: "https://www.royalmansour.com/en/dining/la-grande-table-marocaine/",
      highlights: [
        "Cozinha marroquina contemporânea",
        "Ambiente palaciano",
        "Vinhos marroquinos selecionados",
        "Serviço impecável"
      ]
    }
  ],
  itinerary: {
    mapCenter: [31.6295, -7.9811], // Coordenadas de Marrakech
    mapZoom: 12,
    routes: [
      {
        day: 1,
        description: "Explore a magia de Marrakech",
        locations: [
          {
            name: "Medina",
            coordinates: [31.6295, -7.9811],
            description: "Cidade antiga murada, Patrimônio Mundial"
          },
          {
            name: "Jardins Majorelle",
            coordinates: [31.6417, -7.9889],
            description: "Oásis urbano criado por Yves Saint Laurent"
          },
          {
            name: "Praça Jemaa el-Fnaa",
            coordinates: [31.6287, -7.9847],
            description: "O coração pulsante de Marrakech"
          }
        ]
      },
      {
        day: 2,
        description: "Aventura no Deserto",
        locations: [
          {
            name: "Deserto do Saara",
            coordinates: [31.1527, -4.0293],
            description: "Experiência única no deserto"
          },
          {
            name: "Ouarzazate",
            coordinates: [30.9335, -6.9370],
            description: "A porta do deserto"
          },
          {
            name: "Vale do Dadès",
            coordinates: [31.9167, -5.5833],
            description: "Paisagens deslumbrantes e casbás"
          }
        ]
      }
    ]
  }
};
