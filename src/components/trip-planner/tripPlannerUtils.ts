import { countries } from "@/data/countries";

export const preferences = [
  { id: "cultural", label: "Cultural" },
  { id: "adventure", label: "Aventura" },
  { id: "romantic", label: "Romântico" },
  { id: "family", label: "Familiar" },
  { id: "gastronomy", label: "Gastronômico" },
  { id: "shopping", label: "Compras" },
];

const thematicActivities = {
  cultural: {
    morning: [
      "Visita guiada ao museu histórico local",
      "Tour pelos principais monumentos históricos",
      "Visita a templos e igrejas antigas",
      "Exploração do centro histórico",
      "Aula de história e cultura local"
    ],
    afternoon: [
      "Visita a galerias de arte locais",
      "Tour de arquitetura pela cidade",
      "Participação em workshop de artesanato tradicional",
      "Visita a sítios arqueológicos",
      "Exploração de bairros históricos"
    ],
    evening: [
      "Jantar com show de música tradicional",
      "Espetáculo de dança típica",
      "Teatro local",
      "Sarau cultural",
      "Experiência gastronômica tradicional"
    ]
  },
  adventure: {
    morning: [
      "Trilha em parques naturais",
      "Rafting em corredeiras",
      "Escalada em rocha",
      "Passeio de mountain bike",
      "Mergulho em recifes"
    ],
    afternoon: [
      "Tirolesa sobre vales",
      "Caiaque em rios ou mar",
      "Sandboard nas dunas",
      "Passeio de quadriciclo",
      "Rapel em cachoeiras"
    ],
    evening: [
      "Camping sob as estrelas",
      "Observação noturna de animais",
      "Fogueira com histórias locais",
      "Jantar em local remoto",
      "Caminhada noturna guiada"
    ]
  },
  romantic: {
    morning: [
      "Passeio de balão ao nascer do sol",
      "Café da manhã em mirante panorâmico",
      "Massagem relaxante para casal",
      "Passeio de barco privativo",
      "Piquenique em jardins"
    ],
    afternoon: [
      "Tour de vinícola com degustação",
      "Passeio de charrete pela cidade",
      "Sessão de fotos em pontos turísticos",
      "Spa day para casal",
      "Sunset sailing"
    ],
    evening: [
      "Jantar à luz de velas em restaurante premium",
      "Concerto de música clássica",
      "Passeio noturno de gondola",
      "Jantar em rooftop com vista panorâmica",
      "Cinema ao ar livre"
    ]
  },
  family: {
    morning: [
      "Visita a zoológico ou aquário",
      "Parque de diversões",
      "Tour em fazenda local",
      "Aula de culinária em família",
      "Visita a museu interativo"
    ],
    afternoon: [
      "Parque aquático",
      "Oficina de artesanato para crianças",
      "Passeio de trem turístico",
      "Visita a fábrica de chocolate",
      "Atividades em parque ecológico"
    ],
    evening: [
      "Show de mágica ou circo",
      "Cinema IMAX ou 4D",
      "Jantar temático interativo",
      "Festival de luzes",
      "Observação de estrelas"
    ]
  },
  gastronomy: {
    morning: [
      "Tour gastronômico em mercados locais",
      "Aula de culinária tradicional",
      "Visita a fazendas orgânicas",
      "Degustação de café especial",
      "Food tour pelo café da manhã típico"
    ],
    afternoon: [
      "Workshop de vinhos ou bebidas locais",
      "Tour de street food",
      "Visita a fábricas de produtos típicos",
      "Degustação de queijos e embutidos",
      "Aula de confeitaria local"
    ],
    evening: [
      "Jantar em restaurante estrelado",
      "Experiência gastronômica imersiva",
      "Tour de bares tradicionais",
      "Jantar com chef local",
      "Festival gastronômico"
    ]
  },
  shopping: {
    morning: [
      "Visita a mercados de artesanato",
      "Tour em lojas de design local",
      "Compras em outlets",
      "Visita a feiras de antiguidades",
      "Shopping de luxo"
    ],
    afternoon: [
      "Tour de compras em bairro fashion",
      "Visita a galerias comerciais históricas",
      "Compras em mercados de rua",
      "Tour de souvenirs tradicionais",
      "Visita a ateliês de artistas locais"
    ],
    evening: [
      "Shopping em centros comerciais",
      "Compras em feiras noturnas",
      "Visita a lojas de departamento",
      "Tour em mercados noturnos",
      "Shopping em ruas comerciais iluminadas"
    ]
  }
};

const getRandomActivity = (activities: string[]) => {
  return activities[Math.floor(Math.random() * activities.length)];
};

export const generateDailyItinerary = (country: string, days: number, preferences: string[]) => {
  if (!preferences || preferences.length === 0) {
    preferences = ["cultural"]; // Default to cultural if no preferences are selected
  }

  const countryData = countries[country];
  const activities = [];

  for (let day = 1; day <= days; day++) {
    // Escolhe uma preferência aleatória entre as selecionadas para o tema do dia
    const dayTheme = preferences[Math.floor(Math.random() * preferences.length)];
    const themeActivities = thematicActivities[dayTheme as keyof typeof thematicActivities];

    if (!themeActivities) {
      console.error(`Theme activities not found for: ${dayTheme}`);
      continue; // Skip this iteration if theme activities are not found
    }

    const dailyActivities = {
      day,
      morning: getRandomActivity(themeActivities.morning),
      afternoon: getRandomActivity(themeActivities.afternoon),
      evening: getRandomActivity(themeActivities.evening),
      description: `Dia ${day} - ${preferences.length > 1 ? 
        `Explorando ${countryData.title} com foco em ${dayTheme === 'cultural' ? 'Cultura' : 
          dayTheme === 'adventure' ? 'Aventura' : 
          dayTheme === 'romantic' ? 'Romance' : 
          dayTheme === 'family' ? 'Família' : 
          dayTheme === 'gastronomy' ? 'Gastronomia' : 'Compras'}` : 
        `Explorando ${countryData.title}`}`
    };
    activities.push(dailyActivities);
  }

  return activities;
};