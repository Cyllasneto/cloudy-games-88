import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { ptBR } from "@/translations/pt-BR";
import { es } from "@/translations/es";
import { useCallback } from "react";

const translations = {
  "en": en,
  "pt-BR": ptBR,
  "es": es,
};

export const useTranslations = () => {
  const { language, translateContent } = useLanguage();
  const baseTranslations = translations[language as keyof typeof translations];

  const t = useCallback(async (key: string) => {
    const text = baseTranslations[key as keyof typeof baseTranslations];
    if (typeof text === 'string') {
      return await translateContent(text, language);
    }
    return text;
  }, [baseTranslations, language, translateContent]);

  return { t, rawTranslations: baseTranslations };
};