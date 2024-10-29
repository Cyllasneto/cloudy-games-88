import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { Cloud } from "lucide-react"

const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container max-w-6xl mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-3xl font-bold text-primary hover:scale-105 transition-transform duration-200"
          >
            <Cloud className="w-8 h-8" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cloudy Trip
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/privacy" className="text-sm font-medium hover:text-primary ml-6">Política de Privacidade</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}

export default Header