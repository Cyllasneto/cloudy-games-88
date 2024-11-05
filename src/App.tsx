import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { LanguageProvider } from "./contexts/LanguageContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Index from "./pages/Index"
import CountryPage from "./pages/CountryPage"
import Privacy from "./pages/Privacy"
import Contact from "./pages/Contact"

// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <BrowserRouter>
              <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/country/:countryId" element={<CountryPage />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
                <Footer />
              </div>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default App