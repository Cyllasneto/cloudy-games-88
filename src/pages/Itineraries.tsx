import { countries } from "@/data/countries";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const tripTypes = {
  cultural: {
    label: "Cultural",
    countries: ["france", "japan", "italy", "greece", "turkey", "morocco"]
  },
  adventure: {
    label: "Aventura",
    countries: ["brazil", "norway", "thailand", "morocco", "philippines", "cambodia"]
  },
  romantic: {
    label: "Romântico",
    countries: ["france", "italy", "greece", "portugal", "spain", "montenegro"]
  },
  family: {
    label: "Família",
    countries: ["usa", "england", "spain", "brazil", "portugal", "slovenia"]
  }
};

const Itineraries = () => {
  const getCountriesForType = (type: keyof typeof tripTypes) => {
    return tripTypes[type].countries.map(countryId => ({
      id: countryId,
      ...countries[countryId]
    })).filter(country => country.itinerary); // Filtra apenas países com roteiros
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Roteiros de Viagem</h1>
      
      <Tabs defaultValue="cultural" className="mb-8">
        <TabsList className="mb-4">
          {Object.entries(tripTypes).map(([key, { label }]) => (
            <TabsTrigger key={key} value={key}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(tripTypes).map((type) => (
          <TabsContent key={type} value={type}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCountriesForType(type as keyof typeof tripTypes).map((country) => (
                <Link key={country.id} to={`/country/${country.id}`}>
                  <Card className="overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105">
                    <div className="relative h-48">
                      <img
                        src={country.heroImage}
                        alt={country.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">
                          {country.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <MapPin size={16} />
                        <span className="text-sm">
                          {country.itinerary?.routes.length} dias de roteiro
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {country.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Itineraries;