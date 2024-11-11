import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { AuthError } from "@supabase/supabase-js";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [view, setView] = useState<"sign_in" | "sign_up">("sign_in");

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }

      // Handle authentication errors
      if (!session && (event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED')) {
        setView("sign_up");
        toast({
          title: "Erro de autenticação",
          description: "Credenciais inválidas. Por favor, tente novamente ou crie uma nova conta.",
          variant: "destructive",
        });
      }
    });
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Bem-vindo ao Cloudy Trip
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {view === "sign_in" ? "Faça login na sua conta" : "Crie sua conta"}
          </p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#2563eb',
                  brandAccent: '#1d4ed8',
                }
              }
            }
          }}
          theme="light"
          providers={[]}
          view={view}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email',
                password_label: 'Senha',
                button_label: 'Entrar',
                loading_button_label: 'Entrando...',
                social_provider_text: 'Entrar com {{provider}}',
                link_text: 'Já tem uma conta? Entre',
              },
              sign_up: {
                email_label: 'Email',
                password_label: 'Senha',
                button_label: 'Criar conta',
                loading_button_label: 'Criando conta...',
                social_provider_text: 'Criar conta com {{provider}}',
                link_text: 'Não tem uma conta? Cadastre-se',
              },
            },
          }}
          showLinks={true}
        />
      </div>
    </div>
  );
};

export default Login;