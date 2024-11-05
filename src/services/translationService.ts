const MYMEMORY_API = "https://api.mymemory.translated.net";

export async function translateText(text: string, source: string, target: string) {
  try {
    const langPair = `${source}|${target}`;
    const url = `${MYMEMORY_API}/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(langPair)}`;
    
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Translation failed');
    }

    const data = await response.json();
    
    if (data.responseStatus === 200) {
      return data.responseData.translatedText;
    } else {
      throw new Error(data.responseDetails || 'Translation failed');
    }
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
}