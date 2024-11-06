import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { countries } from "@/data/countries"
import { Card } from "./ui/card"
import { useNavigate } from "react-router-dom"
import { Edit, Eye } from "lucide-react"

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

export function MyItineraries() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([])
  const navigate = useNavigate()
  
  useEffect(() => {
    const loadItineraries = () => {
      const saved = localStorage.getItem('myItineraries')
      if (saved) {
        const parsedItineraries = JSON.parse(saved).map((itinerary: Itinerary) => ({
          ...itinerary,
          id: crypto.randomUUID()
        }))
        setItineraries(parsedItineraries)
      }
    }

    loadItineraries()
    window.addEventListener('storage', loadItineraries)
    return () => window.removeEventListener('storage', loadItineraries)
  }, [])

  if (itineraries.length === 0) {
    return null
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Meus Roteiros</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Meus Roteiros de Viagem</DialogTitle>
          <DialogDescription>
            Aqui estão seus roteiros personalizados
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            {itineraries.map((itinerary) => (
              <Card key={itinerary.id} className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {countries[itinerary.country].title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {format(new Date(itinerary.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/itinerary/${itinerary.id}/edit`)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/itinerary/${itinerary.id}`)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Visualizar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}