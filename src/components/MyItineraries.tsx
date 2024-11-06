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

interface DailyActivity {
  day: number
  morning: string
  afternoon: string
  evening: string
  description: string
}

interface Itinerary {
  country: string
  days: number
  date: string
  preferences: string[]
  dailyActivities: DailyActivity[]
}

export function MyItineraries() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([])

  useEffect(() => {
    const loadItineraries = () => {
      const saved = localStorage.getItem('myItineraries')
      if (saved) {
        setItineraries(JSON.parse(saved))
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
            {itineraries.map((itinerary, index) => (
              <Card key={index} className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {countries[itinerary.country].title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {format(new Date(itinerary.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
                <div className="space-y-4">
                  {itinerary.dailyActivities?.map((activity, idx) => (
                    <div key={idx} className="border-l-2 border-primary pl-4">
                      <h4 className="font-medium">{activity.description}</h4>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li><span className="font-medium">Manhã:</span> {activity.morning}</li>
                        <li><span className="font-medium">Tarde:</span> {activity.afternoon}</li>
                        <li><span className="font-medium">Noite:</span> {activity.evening}</li>
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {itinerary.preferences.map((pref, idx) => (
                    <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                      {pref}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}