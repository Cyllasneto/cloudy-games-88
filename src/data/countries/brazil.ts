import { Country } from "../types";

export const brazil: Country = {
  title: "Brasil",
  description: "País continental com praias paradisíacas, floresta amazônica e cultura vibrante.",
  heroImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
  bestTimeToVisit: "Setembro a março (primavera e verão)",
  currency: "Real (R$)",
  language: "Português",
  timeZone: "UTC-3",
  climate: "Tropical na maior parte do país, com variações regionais",
  transportation: "Voos domésticos, ônibus interestaduais e metrô nas grandes cidades",
  gallery: [
    "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f",
    "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
    "https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f",
    "https://images.unsplash.com/photo-1554168848-228452c09d60",
    "https://images.unsplash.com/photo-1612476957058-3927501c0892"
  ],
  tips: [
    {
      type: "hotel",
      title: "Copacabana Palace",
      description: "Hotel icônico no Rio de Janeiro com vista para a praia de Copacabana.",
      price: "€€€€",
      link: "https://www.belmond.com/hotels/south-america/brazil/rio-de-janeiro/belmond-copacabana-palace/",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      type: "hotel",
      title: "TXAI Resort Itacaré",
      description: "Resort ecológico de luxo na Costa do Cacau.",
      price: "€€€€",
      link: "https://txairesorts.com/",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      type: "activity",
      title: "Cristo Redentor",
      description: "Visita ao monumento mais famoso do Brasil com vista panorâmica do Rio.",
      price: "€€",
      image: "https://images.unsplash.com/photo-1593995863951-57c27e518295"
    },
    {
      type: "restaurant",
      title: "D.O.M.",
      description: "Restaurante premiado do chef Alex Atala em São Paulo.",
      price: "€€€€",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
    }
  ]
};