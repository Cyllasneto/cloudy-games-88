export type TipType = "hotel" | "activity" | "restaurant" | "flight";

export interface Tip {
  type: TipType;
  title: string;
  description: string;
  price: string;
  link?: string;
  image?: string;
  rating?: number;
  bestSeason?: string;
  duration?: string;
  address?: string;
  highlights?: string[];
}

interface Location {
  name: string;
  coordinates: [number, number];
  description: string;
}

interface DayItinerary {
  day: number;
  locations: Location[];
  description: string;
}

export interface Country {
  title: string;
  description: string;
  heroImage: string;
  gallery: string[];
  tips: Tip[];
  bestTimeToVisit: string;
  currency: string;
  language: string;
  timeZone: string;
  climate: string;
  transportation: string;
  itinerary?: {
    routes: DayItinerary[];
    mapCenter: [number, number];
    mapZoom: number;
  };
}