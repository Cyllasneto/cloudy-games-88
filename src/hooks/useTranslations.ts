import { useLanguage } from "@/contexts/LanguageContext";

export const useTranslations = () => {
  const { translations, translateContent } = useLanguage();
  return { t: translateContent, rawTranslations: translations };
};