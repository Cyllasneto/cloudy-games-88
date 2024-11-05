import { countries } from "@/data/countries";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const tripTypes = {
  cultural: "Cultural",
  adventure: "Aventura",
  romantic: "Romântico",
  family: "Família",
};

const Itineraries = () => {
  const countriesWithItineraries = Object.entries(countries).filter(
    ([_, country]) => country.itinerary
  );

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Roteiros de Viagem</h1>
      
      <Tabs defaultValue="cultural" className="mb-8">
        <TabsList className="mb-4">
          {Object.entries(tripTypes).map(([key, label]) => (
            <TabsTrigger key={key} value={key}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(tripTypes).map((type) => (
          <TabsContent key={type} value={type}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countriesWithItineraries.map(([countryId, country]) => (
                <Link key={countryId} to={`/country/${countryId}`}>
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