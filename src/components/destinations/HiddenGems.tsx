import DestinationCard from "@/components/DestinationCard"
import { hiddenGems } from "@/data/hiddenGems"

const HiddenGems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hiddenGems.map((destination, index) => (
        <DestinationCard
          key={index}
          {...destination}
        />
      ))}
    </div>
  )
}

export default HiddenGems