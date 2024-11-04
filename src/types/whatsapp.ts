export interface WhatsAppMessage {
  messaging_product: string;
  to: string;
  type: string;
  text: {
    body: string;
  };
}

export interface WhatsAppResponse {
  messaging_product: string;
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
}

export interface WebhookMessage {
  object: string;
  entry: Array<{
    id: string;
    changes: Array<{
      value: {
        messaging_product: string;
        metadata: {
          display_phone_number: string;
          phone_number_id: string;
        };
        contacts: Array<{
          profile: {
            name: string;
          };
          wa_id: string;
        }>;
        messages: Array<{
          from: string;
          id: string;
          timestamp: string;
          text: {
            body: string;
          };
          type: string;
        }>;
      };
      field: string;
    }>;
  }>;
}

export interface Chat {
  id: string;
  phoneNumber: string;
  name: string;
  lastMessage: string;
  timestamp: number;
  unread: boolean;
}

export interface Message {
  id: string;
  chatId: string;
  text: string;
  timestamp: number;
  sender: 'user' | 'bot' | 'agent';
  status: 'sent' | 'delivered' | 'read';
}