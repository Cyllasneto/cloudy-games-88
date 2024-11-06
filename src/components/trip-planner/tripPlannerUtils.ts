import { countries } from "@/data/countries";

export const preferences = [
  { id: "cultural", label: "Cultural" },
  { id: "adventure", label: "Aventura" },
  { id: "romantic", label: "Romântico" },
  { id: "family", label: "Familiar" },
  { id: "gastronomy", label: "Gastronômico" },
  { id: "shopping", label: "Compras" },
];

export const generateDailyItinerary = (country: string, days: number, preferences: string[]) => {
  const countryData = countries[country];
  const activities = [];

  // Gerar atividades baseadas nas preferências e dicas do país
  const relevantTips = countryData.tips.filter(tip => 
    preferences.some(pref => {
      switch(pref) {
        case "cultural":
          return tip.type === "activity" && tip.description.toLowerCase().includes("históric") || tip.description.toLowerCase().includes("museu");
        case "adventure":
          return tip.type === "activity" && (tip.description.toLowerCase().includes("aventura") || tip.description.toLowerCase().includes("trilha"));
        case "romantic":
          return tip.type === "restaurant" && tip.description.toLowerCase().includes("romântic");
        case "gastronomy":
          return tip.type === "restaurant";
        case "shopping":
          return tip.description.toLowerCase().includes("compras") || tip.description.toLowerCase().includes("mercado");
        default:
          return true;
      }
    })
  );

  // Criar roteiro diário
  for (let day = 1; day <= days; day++) {
    const dailyActivities = {
      day,
      morning: relevantTips[Math.floor(Math.random() * relevantTips.length)]?.title || "Café da manhã no hotel",
      afternoon: relevantTips[Math.floor(Math.random() * relevantTips.length)]?.title || "Passeio pela cidade",
      evening: relevantTips[Math.floor(Math.random() * relevantTips.length)]?.title || "Jantar em restaurante local",
      description: `Dia ${day} - Explorando ${countryData.title}`
    };
    activities.push(dailyActivities);
  }

  return activities;
};