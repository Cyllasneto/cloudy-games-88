import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { countries } from "@/data/countries"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

interface DailyActivity {
  day: number
  morning: string
  afternoon: string
  evening: string
  description: string
}

interface Itinerary {
  id?: string
  country: string
  days: number
  date: string
  preferences: string[]
  dailyActivities: DailyActivity[]
}

const ItineraryDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [itinerary, setItinerary] = useState<Itinerary | null>(null)

  useEffect(() => {
    const loadItinerary = () => {
      const saved = localStorage.getItem('myItineraries')
      if (saved) {
        const itineraries = JSON.parse(saved)
        const found = itineraries.find((it: Itinerary) => it.id === id)
        if (found) {
          setItinerary(found)
        }
      }
    }

    loadItinerary()
  }, [id])

  if (!itinerary) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">Roteiro não encontrado</div>
      </div>
    )
  }

  const country = countries[itinerary.country]

  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${country.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col justify-end pb-8">
            <Button
              variant="outline"
              className="absolute top-4 left-4 bg-white/90 hover:bg-white"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-4xl font-bold text-white mb-2">{country.title}</h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {format(new Date(itinerary.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{itinerary.days} dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preferências da Viagem</h2>
          <div className="flex flex-wrap gap-2">
            {itinerary.preferences.map((pref) => (
              <span
                key={pref}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {pref}
              </span>
            ))}
          </div>
        </div>

        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Moeda</h3>
              <p className="mt-1 font-medium">{country.currency}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Idioma</h3>
              <p className="mt-1 font-medium">{country.language}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Clima</h3>
              <p className="mt-1 font-medium">{country.climate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Melhor época</h3>
              <p className="mt-1 font-medium">{country.bestTimeToVisit}</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {itinerary.dailyActivities.map((activity) => (
            <Card key={activity.day} className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Dia {activity.day}</h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary"></div>
                  <h4 className="font-medium text-primary">Manhã</h4>
                  <p className="mt-1 text-gray-600">{activity.morning}</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary"></div>
                  <h4 className="font-medium text-primary">Tarde</h4>
                  <p className="mt-1 text-gray-600">{activity.afternoon}</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary"></div>
                  <h4 className="font-medium text-primary">Noite</h4>
                  <p className="mt-1 text-gray-600">{activity.evening}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;