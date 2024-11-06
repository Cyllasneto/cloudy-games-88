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
          // Convert string activities to detailed activities
          const enhancedItinerary = {
            ...found,
            dailyActivities: found.dailyActivities.map((day: DailyActivity) => ({
              ...day,
              morningDetails: {
                time: "09:00",
                title: day.morning,
                description: "Atividade programada com guia local.",
                duration: "2-3 horas",
                tips: ["Confirme o horário com antecedência", "Verifique as condições climáticas"],
                price: "Consulte valores"
              },
              afternoonDetails: {
                time: "14:00",
                title: day.afternoon,
                description: "Atividade programada com guia local.",
                duration: "2-3 horas",
                tips: ["Confirme o horário com antecedência", "Verifique as condições climáticas"],
                price: "Consulte valores"
              },
              eveningDetails: {
                time: "19:00",
                title: day.evening,
                description: "Atividade programada com guia local.",
                duration: "2-3 horas",
                tips: ["Confirme o horário com antecedência", "Verifique as condições climáticas"],
                price: "Consulte valores"
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
              <p className="mt-1 font-medium">{countries[itinerary.country].currency}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Idioma</h3>
              <p className="mt-1 font-medium">{countries[itinerary.country].language}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Clima</h3>
              <p className="mt-1 font-medium">{countries[itinerary.country].climate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Melhor época</h3>
              <p className="mt-1 font-medium">{countries[itinerary.country].bestTimeToVisit}</p>
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