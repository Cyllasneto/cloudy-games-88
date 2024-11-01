import React, { createContext, useContext, useState, useCallback } from 'react';
import { translateText, translateObject } from '../services/translationService';
import { useToast } from "@/components/ui/use-toast";
import { en } from '@/translations/en';
import { ptBR } from '@/translations/pt-BR';
import { es } from '@/translations/es';

type Language = 'pt-BR' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translateContent: (text: string, targetLang: Language) => Promise<string>;
  translations: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const baseTranslations = {
  "en": en,
  "pt-BR": ptBR,
  "es": es,
};

const getLanguageCode = (lang: Language): string => {
  switch (lang) {
    case 'pt-BR':
      return 'pt';
    case 'en':
      return 'en';
    case 'es':
      return 'es';
    default:
      return 'en';
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState(baseTranslations[language]);
  const { toast } = useToast();

  const translateContent = useCallback(async (text: string, targetLang: Language) => {
    try {
      const sourceLang = getLanguageCode(language);
      const targetLangCode = getLanguageCode(targetLang);
      
      if (sourceLang === targetLangCode) {
        return text;
      }

      const translatedText = await translateText(text, sourceLang, targetLangCode);
      return translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  }, [language]);

  const setLanguage = useCallback(async (newLanguage: Language) => {
    try {
      const currentLangCode = getLanguageCode(language);
      const newLangCode = getLanguageCode(newLanguage);

      if (currentLangCode !== newLangCode) {
        toast({
          title: "Traduzindo conteúdo...",
          description: "Por favor, aguarde enquanto traduzimos o site.",
        });

        const translatedContent = await translateObject(
          baseTranslations[language],
          currentLangCode,
          newLangCode
        );

        setTranslations(translatedContent);
      }

      setLanguageState(newLanguage);
    } catch (error) {
      console.error('Error changing language:', error);
      toast({
        title: "Erro na tradução",
        description: "Não foi possível traduzir o conteúdo. Usando traduções padrão.",
        variant: "destructive",
      });
      setTranslations(baseTranslations[newLanguage]);
      setLanguageState(newLanguage);
    }
  }, [language, toast]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translateContent, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}