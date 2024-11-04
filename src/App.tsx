import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import KnowledgeBase from './components/KnowledgeBase';
import Stats from './components/Stats';

function App() {
  const [currentView, setCurrentView] = useState('chats');

  const renderMainContent = () => {
    switch (currentView) {
      case 'chats':
        return (
          <div className="flex ml-64">
            <ChatList />
            <ChatWindow />
          </div>
        );
      case 'knowledge':
        return <KnowledgeBase />;
      case 'stats':
        return <Stats />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onViewChange={setCurrentView} currentView={currentView} />
      <main className="flex-1 ml-64 overflow-auto">
        {renderMainContent()}
      </main>
    </div>
  );
}

export default App;