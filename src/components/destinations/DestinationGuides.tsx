import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PopularDestinations from "./PopularDestinations"
import HiddenGems from "./HiddenGems"

const DestinationGuides = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Guias de Destinos</h2>
        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="popular">Destinos Populares</TabsTrigger>
            <TabsTrigger value="hidden">Joias Escondidas</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <PopularDestinations />
          </TabsContent>
          <TabsContent value="hidden">
            <HiddenGems />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default DestinationGuides