import { useParams } from "react-router-dom";
import { countries } from "@/data/countries";
import CountryHero from "@/components/country/CountryHero";
import CountryGallery from "@/components/country/CountryGallery";
import CountryContent from "@/components/country/CountryContent";
import CountryItinerary from "@/components/country/CountryItinerary";
import { useTranslations } from "@/hooks/useTranslations";
import { useEffect, useState } from "react";

const CountryPage = () => {
  const { countryId } = useParams();
  const country = countries[countryId as keyof typeof countries];
  const { t, rawTranslations: translations } = useTranslations();
  const [translatedInfo, setTranslatedInfo] = useState({
    bestTimeToVisit: "",
    currency: "",
    language: "",
    timeZone: "",
    climate: "",
    transportation: ""
  });

  useEffect(() => {
    const translateInfo = async () => {
      try {
        const [
          bestTime,
          currencyInfo,
          languageInfo,
          timeZoneInfo,
          climateInfo,
          transportationInfo
        ] = await Promise.all([
          t(country.bestTimeToVisit),
          t(country.currency),
          t(country.language),
          t(country.timeZone),
          t(country.climate),
          t(country.transportation)
        ]);

        setTranslatedInfo({
          bestTimeToVisit: bestTime,
          currency: currencyInfo,
          language: languageInfo,
          timeZone: timeZoneInfo,
          climate: climateInfo,
          transportation: transportationInfo
        });
      } catch (error) {
        console.error("Translation error:", error);
      }
    };

    if (country) {
      translateInfo();
    }
  }, [country, t]);

  if (!country) return <div>País não encontrado</div>;

  const countryTranslation = countryId && translations[countryId as keyof typeof translations];
  const translatedTitle = typeof countryTranslation === 'object' ? countryTranslation.title : country.title;
  const translatedDescription = typeof countryTranslation === 'object' ? countryTranslation.description : country.description;

  return (
    <div>
      <CountryHero
        title={translatedTitle}
        description={translatedDescription}
        heroImage={country.heroImage}
      />

      <CountryContent 
        country={country}
        translations={translations}
        translatedInfo={translatedInfo}
      />

      <div className="container max-w-6xl mx-auto px-4 mb-16">
        <CountryGallery images={country.gallery} title={country.title} />
      </div>

      {country.itinerary && (
        <div className="container max-w-6xl mx-auto px-4 mb-16">
          <CountryItinerary
            itinerary={country.itinerary.routes}
            center={country.itinerary.mapCenter}
            zoom={country.itinerary.mapZoom}
          />
        </div>
      )}
    </div>
  );
};

export default CountryPage;