import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe2, Plane } from "lucide-react";
import { Country } from "@/data/types";

interface CountryContentProps {
  country: Country;
  translations: any;
  translatedInfo: {
    bestTimeToVisit: string;
    currency: string;
    language: string;
    timeZone: string;
    climate: string;
    transportation: string;
  };
}

const CountryContent = ({ country, translations, translatedInfo }: CountryContentProps) => {
  const flightTips = country.tips.filter(tip => tip.type === "flight");

  return (
    <main className="container max-w-6xl mx-auto py-16 px-4">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{translations.generalInfo}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{translations.bestTimeToVisit}</h3>
                <p className="text-gray-600">{translatedInfo.bestTimeToVisit || country.bestTimeToVisit}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{translations.currency}</h3>
                <p className="text-gray-600">{translatedInfo.currency || country.currency}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{translations.language}</h3>
                <p className="text-gray-600">{translatedInfo.language || country.language}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{translations.timeZone}</h3>
                <p className="text-gray-600">{translatedInfo.timeZone || country.timeZone}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{translations.climate}</h3>
                <p className="text-gray-600">{translatedInfo.climate || country.climate}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{translations.transportation}</h3>
                <p className="text-gray-600">{translatedInfo.transportation || country.transportation}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{translations.flightTickets}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flightTips.map((tip, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">{tip.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{tip.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">{tip.price}</span>
                {tip.link && (
                  <a
                    href={tip.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    {translations.buyTickets}
                    <Globe2 className="w-4 h-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{translations.tipsAndRecommendations}</h2>
        <div className="space-y-8">
          {country.tips.filter(tip => tip.type !== "flight").map((tip, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">{tip.type}</Badge>
                    <h3 className="text-xl font-semibold">{tip.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  {tip.highlights && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">{translations.highlights}:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {tip.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tip.address && (
                    <p className="text-sm text-gray-500 mt-4">
                      {translations.address}: {tip.address}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-end justify-between">
                  <div className="text-lg font-semibold text-primary">
                    {tip.price}
                  </div>
                  {tip.duration && (
                    <div className="text-sm text-gray-500">
                      {translations.duration}: {tip.duration}
                    </div>
                  )}
                  {tip.link && (
                    <a
                      href={tip.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline mt-4"
                    >
                      {translations.book}
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CountryContent;
