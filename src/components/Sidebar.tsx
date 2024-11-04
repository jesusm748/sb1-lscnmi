import React from 'react';
import { MessageSquare, Users, Database, BarChart2, Settings } from 'lucide-react';

interface SidebarProps {
  onViewChange: (view: 'chats' | 'knowledge' | 'stats') => void;
  currentView: string;
}

const Sidebar = ({ onViewChange, currentView }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <MessageSquare className="w-8 h-8 text-green-500" />
        <h1 className="text-xl font-bold">WhatsApp Admin</h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onViewChange('chats')}
              className={`w-full flex items-center gap-3 p-3 rounded hover:bg-gray-800 transition-colors ${
                currentView === 'chats' ? 'bg-gray-800' : ''
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Conversaciones</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onViewChange('knowledge')}
              className={`w-full flex items-center gap-3 p-3 rounded hover:bg-gray-800 transition-colors ${
                currentView === 'knowledge' ? 'bg-gray-800' : ''
              }`}
            >
              <Database className="w-5 h-5" />
              <span>Base de Conocimiento</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onViewChange('stats')}
              className={`w-full flex items-center gap-3 p-3 rounded hover:bg-gray-800 transition-colors ${
                currentView === 'stats' ? 'bg-gray-800' : ''
              }`}
            >
              <BarChart2 className="w-5 h-5" />
              <span>Estadísticas</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-gray-800 transition-colors">
              <Settings className="w-5 h-5" />
              <span>Configuración</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;