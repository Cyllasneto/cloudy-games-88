import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HiddenGems from "./HiddenGems"

const DestinationGuides = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Joias Escondidas do Mundo</h2>
        <HiddenGems />
      </div>
    </section>
  )
}

export default DestinationGuides