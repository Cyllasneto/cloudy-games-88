import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Login from "@/pages/Login";
import CountryPage from "@/pages/CountryPage";
import ItineraryDetails from "@/pages/ItineraryDetails";
import { supabase } from "./integrations/supabase/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen">
          {isAuthenticated && <Header />}
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Index /> : <Navigate to="/login" />}
            />
            <Route
              path="/contact"
              element={isAuthenticated ? <Contact /> : <Navigate to="/login" />}
            />
            <Route
              path="/privacy"
              element={isAuthenticated ? <Privacy /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/country/:countryId"
              element={isAuthenticated ? <CountryPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/itinerary/:id"
              element={isAuthenticated ? <ItineraryDetails /> : <Navigate to="/login" />}
            />
          </Routes>
          {isAuthenticated && <Footer />}
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;