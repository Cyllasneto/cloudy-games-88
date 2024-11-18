import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Cloud } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-primary/5 to-primary/10 px-4 py-8 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white/80 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Cloud className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            Cloudy Trip
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Faça login para começar sua jornada
          </p>
        </div>

        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#1E3D59',
                  brandAccent: '#E8C547',
                }
              }
            },
            className: {
              container: 'w-full',
              button: 'w-full px-4 py-2 rounded-md',
              input: 'w-full px-4 py-2 rounded-md border border-gray-300',
              label: 'text-sm font-medium text-gray-700',
            }
          }}
          providers={['google']}
          theme="light"
        />
      </Card>
    </div>
  );
};

export default Login;