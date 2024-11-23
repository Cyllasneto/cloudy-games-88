import { countries } from "@/data/countries";
import { thematicActivities } from "./thematicActivities";
import { activityTips } from "./activityTips";
export { preferences } from "./preferences";

const getRandomActivity = (activities: string[]) => {
  return activities[Math.floor(Math.random() * activities.length)];
};

const getRandomTips = (period: keyof typeof activityTips, theme: string) => {
  const themeTips = activityTips[period][theme as keyof typeof activityTips[typeof period]] || [];
  return themeTips;
};

export const generateDailyItinerary = (country: string, days: number, preferences: string[]) => {
  if (!preferences || preferences.length === 0) {
    preferences = ["cultural"]; // Default to cultural if no preferences are selected
  }

  const countryData = countries[country];
  const activities = [];

  for (let day = 1; day <= days; day++) {
    const dayTheme = preferences[Math.floor(Math.random() * preferences.length)];
    const themeActivities = thematicActivities[dayTheme as keyof typeof thematicActivities];

    if (!themeActivities) {
      console.error(`Theme activities not found for: ${dayTheme}`);
      continue;
    }

    const morningActivity = getRandomActivity(themeActivities.morning);
    const afternoonActivity = getRandomActivity(themeActivities.afternoon);
    const eveningActivity = getRandomActivity(themeActivities.evening);

    const morningTips = getRandomTips("morning", dayTheme);
    const afternoonTips = getRandomTips("afternoon", dayTheme);
    const eveningTips = getRandomTips("evening", dayTheme);

    const dailyActivities = {
      day,
      morning: morningActivity,
      afternoon: afternoonActivity,
      evening: eveningActivity,
      morningTips,
      afternoonTips,
      eveningTips,
      description: `Dia ${day} - ${preferences.length > 1 ? 
        `Explorando ${countryData.title} com foco em ${dayTheme === 'cultural' ? 'Cultura' : 
          dayTheme === 'adventure' ? 'Aventura' : 
          dayTheme === 'romantic' ? 'Romance' : 
          dayTheme === 'family' ? 'Família' : 
          dayTheme === 'gastronomy' ? 'Gastronomia' : 
          dayTheme === 'party' ? 'Festas' : 
          dayTheme === 'history' ? 'História' : 
          dayTheme === 'art' ? 'Arte' : 
          dayTheme === 'nature' ? 'Natureza' : 
          dayTheme === 'sports' ? 'Esportes' : 
          dayTheme === 'drinks' ? 'Bebidas' : 
          dayTheme === 'photography' ? 'Fotografia' : 
          dayTheme === 'soccer' ? 'Futebol' : 
          dayTheme === 'music' ? 'Música' : ''}` : 
        `Explorando ${countryData.title}`}`
    };
    activities.push(dailyActivities);
  }

  return activities;
};