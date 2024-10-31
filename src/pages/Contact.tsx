import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useTranslations } from "@/hooks/useTranslations"
import { contactFormData } from "@/data/contactForm"

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(11, "Celular deve ter pelo menos 11 dígitos"),
  email: z.string().email("Email inválido"),
})

const Contact = () => {
  const { toast } = useToast()
  const t = useTranslations()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Formatando a mensagem em HTML para melhor legibilidade no Telegram
      const message = `
<b>Nova mensagem de contato:</b>
<b>Nome:</b> ${values.name}
<b>Telefone:</b> ${values.phone}
<b>Email:</b> ${values.email}
      `.trim()

      const response = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: String(import.meta.env.VITE_TELEGRAM_CHAT_ID),
          text: message,
          parse_mode: 'HTML'
        })
      })

      const data = await response.json()

      if (!response.ok || !data.ok) {
        throw new Error(data.description || 'Erro ao enviar mensagem')
      }

      toast({
        title: String(t.messageSent),
        description: String(t.messageSuccess),
      })
      form.reset()
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      toast({
        title: String(t.messageError),
        description: String(t.tryAgain),
        variant: "destructive"
      })
    }
  }

  return (
    <div className="container max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">{String(t.contact)}</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {contactFormData.fields.map((field) => (
            <FormField
              key={field.id}
              control={form.control}
              name={field.id as keyof z.infer<typeof formSchema>}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{String(t[field.translationKey as keyof typeof t])}</FormLabel>
                  <FormControl>
                    <Input 
                      type={field.type} 
                      placeholder={String(t[field.translationKey as keyof typeof t])} 
                      {...formField} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="w-full">
            {String(t[contactFormData.submitButton.translationKey])}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Contact