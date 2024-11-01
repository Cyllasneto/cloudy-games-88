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