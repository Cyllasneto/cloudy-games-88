import { useParams } from "react-router-dom";
import { countries } from "@/data/countries";
import CountryHero from "@/components/country/CountryHero";
import CountryGallery from "@/components/country/CountryGallery";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/hooks/useTranslations";
import { 
  Globe2,
  Calendar,
  Coins,
  Languages,
  Clock,
  CloudSun,
  Bus,
  Plane
} from "lucide-react";

const CountryPage = () => {
  const { countryId } = useParams();
  const country = countries[countryId as keyof typeof countries];
  const t = useTranslations();

  if (!country) return <div>País não encontrado</div>;

  const countryTranslation = countryId && t[countryId as keyof typeof t];
  const translatedTitle = typeof countryTranslation === 'object' ? countryTranslation.title : country.title;
  const translatedDescription = typeof countryTranslation === 'object' ? countryTranslation.description : country.description;

  const generalInfoCards = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t.bestTimeToVisit,
      content: country.bestTimeToVisit,
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: t.currency,
      content: country.currency,
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: t.language,
      content: country.language,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t.timeZone,
      content: country.timeZone,
    },
    {
      icon: <CloudSun className="w-6 h-6" />,
      title: t.climate,
      content: country.climate,
    },
    {
      icon: <Bus className="w-6 h-6" />,
      title: t.transportation,
      content: country.transportation,
    },
  ];

  const flightTips = country.tips.filter(tip => tip.type === "flight");

  return (
    <div>
      <CountryHero
        title={translatedTitle}
        description={translatedDescription}
        heroImage={country.heroImage}
      />

      <main className="container max-w-6xl mx-auto py-16 px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t.generalInfo}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalInfoCards.map((card, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary">{card.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t.flightTickets}</h2>
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
                      {t.buyTickets}
                      <Globe2 className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <CountryGallery images={country.gallery} title={country.title} />

        <section>
          <h2 className="text-3xl font-bold mb-8">{t.tipsAndRecommendations}</h2>
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
                        <h4 className="font-semibold mb-2">{t.highlights}:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {tip.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {tip.address && (
                      <p className="text-sm text-gray-500 mt-4">
                        {t.address}: {tip.address}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <div className="text-lg font-semibold text-primary">
                      {tip.price}
                    </div>
                    {tip.duration && (
                      <div className="text-sm text-gray-500">
                        {t.duration}: {tip.duration}
                      </div>
                    )}
                    {tip.link && (
                      <a
                        href={tip.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline mt-4"
                      >
                        {t.book}
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CountryPage;