import React, { createContext, useContext, useState, useCallback } from 'react';
import { translateText } from '../services/translationService';
import { useToast } from "@/components/ui/use-toast";

type Language = 'pt-BR' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translateContent: (text: string, targetLang: Language) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
  const [language, setLanguage] = useState<Language>('pt-BR');
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
      toast({
        title: "Translation Error",
        description: "Failed to translate content. Using original text.",
        variant: "destructive",
      });
      return text;
    }
  }, [language, toast]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translateContent }}>
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