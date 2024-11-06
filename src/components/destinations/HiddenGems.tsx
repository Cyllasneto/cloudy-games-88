import { Link } from "react-router-dom"
import DestinationCard from "@/components/DestinationCard"
import { hiddenGems } from "@/data/hiddenGems"

const countryToId: { [key: string]: string } = {
  "Laos": "laos",
  "Eslovênia": "slovenia",
  "Marrocos": "morocco",
  "Filipinas": "philippines",
  "Bulgária": "bulgaria",
  "Peru": "peru",
  "Camboja": "cambodia",
  "Montenegro": "montenegro",
  "Turquia": "turkey"
}

const HiddenGems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hiddenGems.map((destination, index) => (
        <Link 
          key={index} 
          to={`/country/${countryToId[destination.country]}`}
        >
          <DestinationCard
            {...destination}
          />
        </Link>
      ))}
    </div>
  )
}

export default HiddenGems