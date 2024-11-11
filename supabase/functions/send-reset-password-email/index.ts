import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string[];
  resetLink: string;
  username?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, resetLink, username = "Usuário" }: EmailRequest = await req.json();
    
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="margin-bottom: 16px;">Olá ${username},</p>
        
        <p style="margin-bottom: 16px;">Recebemos uma solicitação para redefinir sua senha no Cloudy Trip. Se você não fez essa solicitação, por favor, ignore este e-mail.</p>
        
        <p style="margin-bottom: 16px;">Para redefinir sua senha e recuperar o acesso à sua conta, clique no botão abaixo:</p>
        
        <div style="text-align: center; margin: 32px 0;">
          <a href="${resetLink}" 
             style="background-color: #2563eb; 
                    color: white; 
                    padding: 12px 24px; 
                    text-decoration: none; 
                    border-radius: 6px; 
                    font-weight: bold;">
            Redefinir Senha
          </a>
        </div>
        
        <p style="margin-bottom: 16px;">Este link será válido por 30 minutos. Após esse tempo, será necessário solicitar uma nova redefinição de senha.</p>
        
        <div style="margin: 24px 0;">
          <p style="margin-bottom: 12px;"><strong>Dicas para manter sua conta segura:</strong></p>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Use uma senha forte, com letras, números e símbolos</li>
            <li>Evite reutilizar senhas de outros sites</li>
            <li>Ative a autenticação de dois fatores, se disponível</li>
          </ul>
        </div>
        
        <p style="margin-top: 24px;">Se precisar de mais ajuda, entre em contato com nosso suporte pelo e-mail suporte@cloudytrip.netlify.app</p>
        
        <p style="margin-top: 24px;">
          Atenciosamente,<br>
          Equipe Cloudy Trip
        </p>
      </div>
    `;

    console.log("Sending email to:", to);
    
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cloudy Trip <onboarding@resend.dev>",
        to,
        subject: "Redefinição de Senha - Cloudy Trip",
        html: emailContent,
      }),
    });

    console.log("Resend API response status:", res.status);

    if (res.ok) {
      const data = await res.json();
      console.log("Email sent successfully:", data);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      const error = await res.text();
      console.error("Error from Resend API:", error);
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error: any) {
    console.error("Error in send-reset-password-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);