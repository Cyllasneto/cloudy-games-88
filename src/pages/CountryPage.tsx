import { useParams } from "react-router-dom";
import { countries } from "@/data/countries";
import CountryHero from "@/components/country/CountryHero";
import CountryGallery from "@/components/country/CountryGallery";
import CountryContent from "@/components/country/CountryContent";
import CountryItinerary from "@/components/country/CountryItinerary";

const CountryPage = () => {
  const { countryId } = useParams();
  const country = countries[countryId as keyof typeof countries];

  if (!country) return <div>País não encontrado</div>;

  return (
    <div>
      <CountryHero
        title={country.title}
        description={country.description}
        heroImage={country.heroImage}
      />

      <CountryContent country={country} />

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