import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { AuthChangeEvent } from "@supabase/supabase-js";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event: AuthChangeEvent, session) => {
      if (session) {
        navigate("/");
      }

      if (event === "SIGNED_OUT") {
        toast({
          title: "Sessão encerrada",
          description: "Você foi desconectado da sua conta.",
          variant: "destructive",
        });
      }

      if (event === "PASSWORD_RECOVERY") {
        console.log("Password recovery event triggered");
        console.log("User email:", session?.user?.email);
        
        const { error } = await supabase.functions.invoke("send-reset-password-email", {
          body: {
            to: [session?.user?.email || ""],
            resetLink: window.location.href,
          },
        });

        if (error) {
          console.error("Error sending reset password email:", error);
          toast({
            title: "Erro ao enviar email",
            description: "Houve um problema ao enviar o email de redefinição de senha.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Email enviado",
            description: "Verifique seu email para redefinir sua senha.",
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Bem-vindo ao Cloudy Trip
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Faça login ou crie sua conta
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
              forgotten_password: {
                email_label: 'Email',
                password_label: 'Senha',
                button_label: 'Enviar instruções',
                loading_button_label: 'Enviando instruções...',
                link_text: 'Esqueceu sua senha?',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;