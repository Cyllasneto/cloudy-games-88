import { useParams } from "react-router-dom";
import { countries } from "@/data/countries";
import CountryHero from "@/components/country/CountryHero";
import CountryGallery from "@/components/country/CountryGallery";
import TravelTips from "@/components/TravelTips";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

      <main className="container max-w-6xl mx-auto py-16 px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Informações Gerais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Melhor Época para Visitar</h3>
              <p>{country.bestTimeToVisit}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Moeda e Idioma</h3>
              <p>Moeda: {country.currency}</p>
              <p>Idioma: {country.language}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Clima</h3>
              <p>{country.climate}</p>
            </Card>
          </div>
        </section>

        <CountryGallery images={country.gallery} title={country.title} />

        <section>
          <h2 className="text-3xl font-bold mb-8">Dicas e Recomendações</h2>
          <div className="space-y-8">
            {country.tips.map((tip, index) => (
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
                        <h4 className="font-semibold mb-2">Destaques:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {tip.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {tip.address && (
                      <p className="text-sm text-gray-500 mt-4">
                        Endereço: {tip.address}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <div className="text-lg font-semibold text-primary">
                      {tip.price}
                    </div>
                    {tip.duration && (
                      <div className="text-sm text-gray-500">
                        Duração: {tip.duration}
                      </div>
                    )}
                    {tip.link && (
                      <a
                        href={tip.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline mt-4"
                      >
                        Reservar
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