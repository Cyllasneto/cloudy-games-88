import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { countries } from "@/data/countries"
import { ArrowLeft, Calendar, Clock, ExternalLink, MapPin, Info, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DailyActivity {
  day: number
  morning: string
  afternoon: string
  evening: string
  description: string
}

interface ActivityDetail {
  time: string
  title: string
  description: string
  location?: string
  duration?: string
  tips?: string[]
  links?: Array<{ title: string, url: string }>
  price?: string
  rating?: number
}

interface EnhancedDailyActivity extends DailyActivity {
  morningDetails: ActivityDetail
  afternoonDetails: ActivityDetail
  eveningDetails: ActivityDetail
}

interface Itinerary {
  id?: string
  country: string
  days: number
  date: string
  preferences: string[]
  dailyActivities: EnhancedDailyActivity[]
}

const getActivityDetails = (activity: string, period: string): ActivityDetail => {
  // Função auxiliar para gerar detalhes das atividades
  const baseTime = period === 'morning' ? '09:00' : 
                   period === 'afternoon' ? '14:00' : '19:00'

  const details: Record<string, ActivityDetail> = {
    // Exemplos de detalhes para atividades culturais
    "Visita guiada ao museu histórico local": {
      time: "09:00",
      title: "Tour Guiado no Museu Nacional",
      description: "Explore a rica história e cultura local com um guia especializado. O tour inclui acesso a todas as exposições permanentes e temporárias.",
      location: "Av. Principal, 123",
      duration: "3 horas",
      tips: [
        "Chegue 15 minutos antes para fazer o check-in",
        "Fotografias são permitidas sem flash",
        "Guarda-volumes disponível gratuitamente",
        "Audioguia disponível em português"
      ],
      links: [
        { title: "Site oficial do museu", url: "https://www.museu.com" },
        { title: "Comprar ingressos", url: "https://www.museu.com/ingressos" }
      ],
      price: "€15",
      rating: 4.8
    },
    // Exemplos de detalhes para atividades de aventura
    "Trilha em parques naturais": {
      time: "08:00",
      title: "Trilha Ecológica Guiada",
      description: "Aventure-se por trilhas naturais com vistas deslumbrantes e biodiversidade única. Inclui guia especializado e equipamentos.",
      location: "Parque Nacional",
      duration: "4 horas",
      tips: [
        "Use roupas confortáveis e apropriadas",
        "Traga protetor solar e repelente",
        "Leve água e lanches",
        "Calçados adequados são obrigatórios"
      ],
      links: [
        { title: "Mapa da trilha", url: "https://www.parque.com/trilhas" },
        { title: "Previsão do tempo", url: "https://www.tempo.com" }
      ],
      price: "€25",
      rating: 4.9
    }
  }

  // Se não encontrar detalhes específicos, cria um genérico
  return details[activity] || {
    time: baseTime,
    title: activity,
    description: "Atividade programada com guia local.",
    duration: "2-3 horas",
    tips: ["Confirme o horário com antecedência", "Verifique as condições climáticas"],
    price: "Consulte valores"
  }
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
          // Adiciona detalhes às atividades
          const enhancedItinerary = {
            ...found,
            dailyActivities: found.dailyActivities.map((day: DailyActivity) => ({
              ...day,
              morningDetails: getActivityDetails(day.morning, 'morning'),
              afternoonDetails: getActivityDetails(day.afternoon, 'afternoon'),
              eveningDetails: getActivityDetails(day.evening, 'evening')
            }))
          }
          setItinerary(enhancedItinerary)
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

  const renderActivityCard = (activity: ActivityDetail, period: string) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span className="font-medium">{activity.time}</span>
        </div>
        {activity.rating && (
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{activity.rating}</span>
          </div>
        )}
      </div>

      <h4 className="text-lg font-semibold">{activity.title}</h4>
      <p className="text-gray-600">{activity.description}</p>

      {activity.location && (
        <div className="flex items-start gap-2 text-gray-600">
          <MapPin className="h-4 w-4 mt-1 shrink-0" />
          <span>{activity.location}</span>
        </div>
      )}

      {activity.duration && (
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Duração: {activity.duration}</span>
        </div>
      )}

      {activity.price && (
        <Badge variant="secondary" className="mt-2">
          {activity.price}
        </Badge>
      )}

      {activity.tips && activity.tips.length > 0 && (
        <div className="mt-4 space-y-2">
          <h5 className="font-medium flex items-center gap-2">
            <Info className="h-4 w-4" />
            Dicas Importantes
          </h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {activity.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      {activity.links && activity.links.length > 0 && (
        <div className="mt-4 space-y-2">
          <h5 className="font-medium">Links Úteis</h5>
          <div className="space-y-2">
            {activity.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )

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
              <h3 className="text-xl font-semibold mb-6 text-primary">Dia {activity.day}</h3>
              <div className="space-y-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-primary mb-4">Manhã</h4>
                  {renderActivityCard(activity.morningDetails, 'morning')}
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-primary mb-4">Tarde</h4>
                  {renderActivityCard(activity.afternoonDetails, 'afternoon')}
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-primary mb-4">Noite</h4>
                  {renderActivityCard(activity.eveningDetails, 'evening')}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItineraryDetails