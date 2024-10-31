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
      validation: {
        required: true,
        minLength: 2
      }
    },
    {
      id: "phone",
      type: "tel",
      translationKey: "phone",
      validation: {
        required: true,
        minLength: 11
      }
    },
    {
      id: "email",
      type: "email",
      translationKey: "email",
      validation: {
        required: true,
        pattern: "email"
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