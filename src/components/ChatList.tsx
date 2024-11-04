import React from 'react';
import { Clock, CheckCheck } from 'lucide-react';

const chats = [
  {
    id: 1,
    name: 'Juan Pérez',
    lastMessage: '¿Tienen disponible el modelo X?',
    time: '10:30',
    unread: true,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'María González',
    lastMessage: 'Gracias por la información',
    time: '09:45',
    unread: false,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Carlos Rodríguez',
    lastMessage: '¿Cuál es el precio del servicio?',
    time: '09:15',
    unread: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  }
];

const ChatList = () => {
  return (
    <div className="w-80 border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <input
          type="search"
          placeholder="Buscar conversación..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      
      <div className="divide-y divide-gray-200">
        {chats.map((chat) => (
          <div key={chat.id} className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{chat.name}</h3>
                  <span className="text-sm text-gray-500">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  {chat.unread ? (
                    <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      1
                    </span>
                  ) : (
                    <CheckCheck className="w-4 h-4 text-green-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;