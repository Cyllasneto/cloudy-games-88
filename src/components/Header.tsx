import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container max-w-6xl mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">Cloudy Trip</Link>
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