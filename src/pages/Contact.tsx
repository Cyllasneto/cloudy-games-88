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
      const message = `
Nova mensagem de contato:
Nome: ${values.name}
Telefone: ${values.phone}
Email: ${values.email}
      `

      const response = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem')
      }

      toast({
        title: t.messageSent,
        description: t.messageSuccess,
      })
      form.reset()
    } catch (error) {
      toast({
        title: t.messageError,
        description: t.tryAgain,
        variant: "destructive"
      })
    }
  }

  return (
    <div className="container max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">{t.contact}</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {contactFormData.fields.map((field) => (
            <FormField
              key={field.id}
              control={form.control}
              name={field.id as keyof z.infer<typeof formSchema>}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{t[field.translationKey as keyof typeof t]}</FormLabel>
                  <FormControl>
                    <Input 
                      type={field.type} 
                      placeholder={t[field.translationKey as keyof typeof t]} 
                      {...formField} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="w-full">
            {t[contactFormData.submitButton.translationKey]}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Contact