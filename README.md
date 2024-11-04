## WhatsApp Admin Panel

Panel de administración para gestionar conversaciones de WhatsApp Business API.

### Características

- Gestión de conversaciones en tiempo real
- Respuestas automáticas con GPT-4
- Base de conocimiento personalizable
- Panel de estadísticas
- Gestión de agentes

### Instalación

```bash
npm install
npm run dev
```

### Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```
WHATSAPP_API_URL=https://graph.facebook.com/v17.0
WHATSAPP_PHONE_NUMBER_ID=tu_phone_number_id
WHATSAPP_ACCESS_TOKEN=tu_access_token
VERIFY_TOKEN=tu_verify_token
```