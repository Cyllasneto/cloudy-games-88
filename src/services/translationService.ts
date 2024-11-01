const LIBRETRANSLATE_API = "https://translate.argosopentech.com";

export async function translateText(text: string, source: string, target: string) {
  try {
    if (!text || source === target) return text;
    
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
    return text;
  }
}

export async function translateObject(obj: any, source: string, target: string): Promise<any> {
  if (!obj) return obj;
  
  if (Array.isArray(obj)) {
    return Promise.all(obj.map(item => translateObject(item, source, target)));
  }

  if (typeof obj === 'object' && obj !== null) {
    const translatedObj: any = {};
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        translatedObj[key] = await translateText(obj[key], source, target);
      } else if (Array.isArray(obj[key])) {
        translatedObj[key] = await Promise.all(
          obj[key].map((item: any) => 
            typeof item === 'string' 
              ? translateText(item, source, target)
              : translateObject(item, source, target)
          )
        );
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        translatedObj[key] = await translateObject(obj[key], source, target);
      } else {
        translatedObj[key] = obj[key];
      }
    }
    return translatedObj;
  }

  return obj;
}