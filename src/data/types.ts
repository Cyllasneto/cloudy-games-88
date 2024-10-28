export type TipType = "hotel" | "activity" | "restaurant";

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
}