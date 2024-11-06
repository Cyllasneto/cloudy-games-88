import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { countries } from "@/data/countries";
import { ActivityCard, ActivityDetail } from "@/components/itinerary/ActivityCard";
import { ItineraryHeader } from "@/components/itinerary/ItineraryHeader";

interface DailyActivity {
  day: number;
  morning: string;
  afternoon: string;
  evening: string;
  description: string;
  morningDetails?: ActivityDetail;
  afternoonDetails?: ActivityDetail;
  eveningDetails?: ActivityDetail;
}

interface Itinerary {
  id?: string;
  country: string;
  days: number;
  date: string;
  preferences: string[];
  dailyActivities: DailyActivity[];
}

const ItineraryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  useEffect(() => {
    const loadItinerary = () => {
      const saved = localStorage.getItem("myItineraries");
      if (saved) {
        const itineraries = JSON.parse(saved);
        const found = itineraries.find((it: Itinerary) => it.id === id);
        if (found) {
          const countryData = countries[found.country.toLowerCase()];
          
          // Convert string activities to detailed activities with location data
          const enhancedItinerary = {
            ...found,
            dailyActivities: found.dailyActivities.map((day: DailyActivity) => ({
              ...day,
              morningDetails: {
                time: "09:00",
                title: day.morning,
                description: "Atividade programada com guia local.",
                location: "Centro Histórico",
                address: "Rua Principal, 123",
                duration: "2-3 horas",
                tips: [
                  "Confirme o horário com antecedência",
                  "Verifique as condições climáticas",
                  "Leve documento de identificação",
                  "Use roupas e calçados confortáveis"
                ],
                price: "Consulte valores",
                website: countryData?.tips[0]?.link || "https://www.viator.com",
                rating: 4.5
              },
              afternoonDetails: {
                time: "14:00",
                title: day.afternoon,
                description: "Passeio guiado com experiência local.",
                location: "Região Turística",
                address: "Avenida do Turismo, 456",
                duration: "3-4 horas",
                tips: [
                  "Reserve com antecedência",
                  "Leve protetor solar",
                  "Câmera fotográfica recomendada",
                  "Disponível em vários idiomas"
                ],
                price: "Consulte valores",
                website: countryData?.tips[1]?.link || "https://www.getyourguide.com",
                rating: 4.8
              },
              eveningDetails: {
                time: "19:00",
                title: day.evening,
                description: "Experiência gastronômica local.",
                location: "Bairro Gastronômico",
                address: "Praça da Gastronomia, 789",
                duration: "2-3 horas",
                tips: [
                  "Reserva antecipada necessária",
                  "Menu degustação disponível",
                  "Dress code: Smart casual",
                  "Opções vegetarianas disponíveis"
                ],
                price: "Consulte valores",
                website: countryData?.tips[2]?.link || "https://www.thefork.com",
                rating: 4.7
              }
            }))
          };
          setItinerary(enhancedItinerary);
        }
      }
    };

    loadItinerary();
  }, [id]);

  if (!itinerary) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">Roteiro não encontrado</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ItineraryHeader
        country={itinerary.country}
        date={itinerary.date}
        onBack={() => navigate(-1)}
      />

      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Moeda</h3>
              <p className="mt-1 font-medium">{countries[itinerary.country.toLowerCase()]?.currency}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Idioma</h3>
              <p className="mt-1 font-medium">{countries[itinerary.country.toLowerCase()]?.language}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Clima</h3>
              <p className="mt-1 font-medium">{countries[itinerary.country.toLowerCase()]?.climate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Melhor época</h3>
              <p className="mt-1 font-medium">{countries[itinerary.country.toLowerCase()]?.bestTimeToVisit}</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {itinerary.dailyActivities.map((activity) => (
            <Card key={activity.day} className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Dia {activity.day}
              </h3>
              <div className="space-y-8">
                <ActivityCard activity={activity.morningDetails} period="Manhã" />
                <ActivityCard activity={activity.afternoonDetails} period="Tarde" />
                <ActivityCard activity={activity.eveningDetails} period="Noite" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;