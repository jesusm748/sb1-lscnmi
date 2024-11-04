import type { Chat, Message } from '../types/whatsapp';

class ChatService {
  private chats: Map<string, Chat> = new Map();
  private messages: Map<string, Message[]> = new Map();

  addChat(chat: Chat): void {
    this.chats.set(chat.id, chat);
    if (!this.messages.has(chat.id)) {
      this.messages.set(chat.id, []);
    }
  }

  getChat(chatId: string): Chat | undefined {
    return this.chats.get(chatId);
  }

  getAllChats(): Chat[] {
    return Array.from(this.chats.values()).sort((a, b) => b.timestamp - a.timestamp);
  }

  addMessage(chatId: string, message: Message): void {
    const messages = this.messages.get(chatId) || [];
    messages.push(message);
    this.messages.set(chatId, messages);

    const chat = this.chats.get(chatId);
    if (chat) {
      chat.lastMessage = message.text;
      chat.timestamp = message.timestamp;
      chat.unread = message.sender === 'user';
      this.chats.set(chatId, chat);
    }
  }

  getMessages(chatId: string): Message[] {
    return this.messages.get(chatId) || [];
  }

  markChatAsRead(chatId: string): void {
    const chat = this.chats.get(chatId);
    if (chat) {
      chat.unread = false;
      this.chats.set(chatId, chat);
    }
  }
}

export const chatService = new ChatService();