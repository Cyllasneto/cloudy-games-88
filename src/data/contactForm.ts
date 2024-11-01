export const contactFormData = {
  title: {
    "pt-BR": "Contato",
    "en": "Contact",
    "es": "Contacto"
  },
  fields: [
    {
      id: "name",
      type: "text",
      translationKey: "name",
      placeholder: "Nome",
      validation: {
        required: true,
        minLength: 2
      }
    },
    {
      id: "phone",
      type: "tel",
      translationKey: "phone",
      placeholder: "999999999",
      validation: {
        required: true,
        pattern: "^[0-9]+$"
      }
    },
    {
      id: "email",
      type: "email",
      translationKey: "email",
      placeholder: "exemplo@exemplo.com",
      validation: {
        required: true,
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
      }
    }
  ],
  submitButton: {
    translationKey: "sendMessage"
  },
  messages: {
    success: {
      translationKey: "messageSent"
    },
    error: {
      translationKey: "messageError"
    }
  }
};