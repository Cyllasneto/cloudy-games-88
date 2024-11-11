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
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, resetLink }: EmailRequest = await req.json();
    
    const emailContent = `
      <h2>Olá,</h2>
      
      <p>Recebemos uma solicitação para redefinir sua senha no Cloudy Trip. Se você não fez essa solicitação, por favor, ignore este e-mail.</p>
      
      <p>Para redefinir sua senha e recuperar o acesso à sua conta, clique no botão abaixo:</p>
      
      <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 15px 0;">Redefinir Senha</a>
      
      <p>Este link será válido por 30 minutos. Após esse tempo, será necessário solicitar uma nova redefinição de senha.</p>
      
      <h3>Dicas para manter sua conta segura:</h3>
      <ul>
        <li>Use uma senha forte, com letras, números e símbolos.</li>
        <li>Evite reutilizar senhas de outros sites.</li>
        <li>Ative a autenticação de dois fatores, se disponível.</li>
      </ul>
      
      <p>Se precisar de mais ajuda, entre em contato com nosso suporte pelo e-mail suporte@cloudytrip.netlify.app.</p>
      
      <p>Atenciosamente,<br>Equipe Cloudy Trip</p>
    `;

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

    if (res.ok) {
      const data = await res.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      const error = await res.text();
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);