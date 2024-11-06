import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { contactFormData } from "@/data/contactForm"
import { CheckCircle2, XCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres"
  }),
  phone: z.string().regex(/^[0-9]+$/, {
    message: "Telefone deve conter apenas números"
  }),
  email: z.string().email({
    message: "Formato de email inválido (exemplo: exemplo@exemplo.com)"
  }),
  comment: z.string().optional(),
})

const Contact = () => {
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const message = `
<b>Nova mensagem de contato:</b>
<b>Nome:</b> ${values.name}
<b>Telefone:</b> ${values.phone}
<b>Email:</b> ${values.email}
${values.comment ? `<b>Comentário:</b> ${values.comment}` : ''}
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
        title: (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>Mensagem enviada!</span>
          </div>
        ) as unknown as string,
        description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!",
        className: "bg-green-50 border-green-200",
      })
      form.reset()
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      toast({
        title: (
          <div className="flex items-center gap-2">
            <XCircle className="h-5 w-5" />
            <span>Erro ao enviar mensagem</span>
          </div>
        ) as unknown as string,
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contato</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {contactFormData.fields.map((field) => {
            if (field.id === 'phone') {
              return (
                <FormField
                  key={field.id}
                  control={form.control}
                  name="phone"
                  render={({ field: formField }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="Digite apenas números"
                          {...formField}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '')
                            formField.onChange(value)
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            }
            return (
              <FormField
                key={field.id}
                control={form.control}
                name={field.id as keyof z.infer<typeof formSchema>}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{field.placeholder}</FormLabel>
                    <FormControl>
                      <Input 
                        type={field.type} 
                        placeholder={field.placeholder}
                        {...formField} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          })}

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comentário (opcional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite seu comentário aqui..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Enviar Mensagem
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Contact