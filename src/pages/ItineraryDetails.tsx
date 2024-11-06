import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { countries } from "@/data/countries"
import { ArrowLeft } from "lucide-react"

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
    return <div>Roteiro não encontrado</div>
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Button
        variant="outline"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar
      </Button>

      <h1 className="text-3xl font-bold mb-2">{countries[itinerary.country].title}</h1>
      <p className="text-gray-500 mb-6">
        {format(new Date(itinerary.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
      </p>

      <div className="space-y-6">
        {itinerary.dailyActivities.map((activity) => (
          <Card key={activity.day} className="p-6">
            <h3 className="text-xl font-semibold mb-4">Dia {activity.day}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">Manhã</h4>
                <p className="text-gray-600">{activity.morning}</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Tarde</h4>
                <p className="text-gray-600">{activity.afternoon}</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Noite</h4>
                <p className="text-gray-600">{activity.evening}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-2">Preferências da Viagem</h3>
        <div className="flex flex-wrap gap-2">
          {itinerary.preferences.map((pref) => (
            <span
              key={pref}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {pref}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItineraryDetails