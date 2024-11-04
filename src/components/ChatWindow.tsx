import React, { useState } from 'react';
import { Send, Paperclip, Bot } from 'lucide-react';
import { WhatsAppService } from '../services/whatsappService';

const ChatWindow = () => {
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      text: '¿Tienen disponible el modelo X?',
      sender: 'user',
      time: '10:30',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      text: 'Sí, el modelo X está disponible en colores negro y plateado. El precio es de $999.',
      sender: 'bot',
      time: '10:31',
      isBot: true
    },
    {
      id: 3,
      text: '¿En qué color me lo recomiendan?',
      sender: 'user',
      time: '10:32',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    }
  ];

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    try {
      // Aquí deberías reemplazar con el número de teléfono real del destinatario
      await WhatsAppService.sendMessage('NUMERO_DESTINO', message);
      setMessage('');
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Juan Pérez"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-medium">Juan Pérez</h2>
            <p className="text-sm text-gray-500">En línea</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${
              msg.sender === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            {msg.isBot ? (
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
            ) : (
              <img
                src={msg.avatar}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.sender === 'user'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs mt-1 block opacity-70">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <button className="text-gray-500 hover:text-gray-700">
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button 
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
            onClick={handleSendMessage}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;