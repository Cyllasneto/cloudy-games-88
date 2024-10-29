import { Card } from "@/components/ui/card"
import { Hotel, Map, Utensils, ExternalLink } from "lucide-react"

interface Tip {
  type: "hotel" | "activity" | "restaurant"
  title: string
  description: string
  price?: string
  link?: string
}

interface TravelTipsProps {
  tips: Tip[]
}

const TravelTips = ({ tips }: TravelTipsProps) => {
  const getIcon = (type: Tip["type"]) => {
    switch (type) {
      case "hotel":
        return <Hotel className="w-5 h-5" />
      case "activity":
        return <Map className="w-5 h-5" />
      case "restaurant":
        return <Utensils className="w-5 h-5" />
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {tips.map((tip, index) => (
        <Card key={index} className="p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-primary shrink-0">{getIcon(tip.type)}</div>
            <h3 className="font-semibold text-base md:text-lg line-clamp-2">{tip.title}</h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-3">{tip.description}</p>
          <div className="flex items-center justify-between mt-auto">
            {tip.price && (
              <span className="text-sm font-medium text-primary">{tip.price}</span>
            )}
            {tip.link && (
              <a
                href={tip.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
              >
                Visitar site <ExternalLink size={14} />
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}

export default TravelTips