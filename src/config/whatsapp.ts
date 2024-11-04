export const WHATSAPP_CONFIG = {
  API_URL: import.meta.env.VITE_WHATSAPP_API_URL || 'https://graph.facebook.com/v17.0',
  PHONE_NUMBER_ID: import.meta.env.VITE_WHATSAPP_PHONE_NUMBER_ID,
  ACCESS_TOKEN: import.meta.env.VITE_WHATSAPP_ACCESS_TOKEN,
  VERIFY_TOKEN: import.meta.env.VITE_VERIFY_TOKEN
};