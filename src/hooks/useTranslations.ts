import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { ptBR } from "@/translations/pt-BR";
import { es } from "@/translations/es";

const translations = {
  "en": en,
  "pt-BR": ptBR,
  "es": es,
};

export const useTranslations = () => {
  const { language } = useLanguage();
  return translations[language as keyof typeof translations];
};