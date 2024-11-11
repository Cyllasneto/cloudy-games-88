import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });

    // Listen for auth errors
    const handleAuthError = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "USER_NOT_FOUND") {
        Auth.signUp(); // Switch to sign up view
        toast({
          title: "Usuário não encontrado",
          description: "Por favor, crie uma nova conta.",
          variant: "destructive",
        });
      }
    });

    return () => {
      handleAuthError.data.subscription.unsubscribe();
    };
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
          appearance={{ theme: ThemeSupa }}
          theme="light"
          providers={[]}
          view="sign_in"
          showLinks={true}
        />
      </div>
    </div>
  );
};

export default Login;