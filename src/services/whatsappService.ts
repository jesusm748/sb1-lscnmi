import { WHATSAPP_CONFIG } from '../config/whatsapp';
import { chatService } from './chatService';
import type { WhatsAppMessage, WhatsAppResponse } from '../types/whatsapp';

export class WhatsAppService {
  static async sendMessage(to: string, message: string): Promise<WhatsAppResponse> {
    try {
      const messageData: WhatsAppMessage = {
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: { body: message }
      };

      const response = await fetch(
        `${WHATSAPP_CONFIG.apiUrl}/${WHATSAPP_CONFIG.phoneNumberId}/messages`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${WHATSAPP_CONFIG.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(messageData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error al enviar mensaje de WhatsApp: ${JSON.stringify(errorData)}`);
      }

      const responseData = await response.json();

      // Registrar el mensaje en el servicio de chat
      chatService.addMessage(to, {
        id: responseData.messages[0].id,
        chatId: to,
        text: message,
        timestamp: Date.now(),
        sender: 'agent',
        status: 'sent'
      });

      return responseData;
    } catch (error) {
      console.error('Error en WhatsAppService.sendMessage:', error);
      throw error;
    }
  }

  static async verifyWebhook(mode: string, token: string, challenge: string): Promise<string | null> {
    if (mode === 'subscribe' && token === WHATSAPP_CONFIG.verifyToken) {
      return challenge;
    }
    return null;
  }

  static async handleIncomingMessage(message: any): Promise<void> {
    try {
      const { from, text, timestamp } = message;
      console.log(`Mensaje recibido de ${from}: ${text.body}`);

      // Registrar el chat si no existe
      if (!chatService.getChat(from)) {
        chatService.addChat({
          id: from,
          phoneNumber: from,
          name: `Usuario ${from.slice(-4)}`,
          lastMessage: text.body,
          timestamp: timestamp * 1000,
          unread: true
        });
      }

      // Registrar el mensaje
      chatService.addMessage(from, {
        id: message.id,
        chatId: from,
        text: text.body,
        timestamp: timestamp * 1000,
        sender: 'user',
        status: 'delivered'
      });

      // Implementar respuesta automática básica
      await this.sendMessage(from, `Recibimos tu mensaje: ${text.body}`);
    } catch (error) {
      console.error('Error al procesar mensaje entrante:', error);
      throw error;
    }
  }
}