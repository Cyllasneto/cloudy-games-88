import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Cloudy Trip</h3>
            <p className="text-sm">Sua melhor experiência em viagens começa aqui.</p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-secondary">Home</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-secondary">Política de Privacidade</Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-sm">contato@cloudytrip.com</p>
            <p className="text-sm">+55 11 99999-9999</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Cloudy Company. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer