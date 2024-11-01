const LIBRETRANSLATE_API = "https://translate.argosopentech.com";

export async function translateText(text: string, source: string, target: string) {
  try {
    const response = await fetch(`${LIBRETRANSLATE_API}/translate`, {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: source,
        target: target,
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      throw new Error('Translation failed');
    }

    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
}

export async function translateObject(obj: any, source: string, target: string): Promise<any> {
  const translatedObj: any = {};

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      translatedObj[key] = await translateText(obj[key], source, target);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      translatedObj[key] = await translateObject(obj[key], source, target);
    } else {
      translatedObj[key] = obj[key];
    }
  }

  return translatedObj;
}