import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';

interface KnowledgeItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const KnowledgeBase = () => {
  const [items, setItems] = useState<KnowledgeItem[]>([
    {
      id: 1,
      question: '¿Cuál es el horario de atención?',
      answer: 'Nuestro horario es de lunes a viernes de 9:00 AM a 6:00 PM',
      category: 'General'
    },
    {
      id: 2,
      question: '¿Cuáles son los métodos de pago?',
      answer: 'Aceptamos tarjetas de crédito, débito y transferencias bancarias',
      category: 'Pagos'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Base de Conocimiento</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600">
          <Plus className="w-5 h-5" />
          Nuevo Item
        </button>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="search"
          placeholder="Buscar en la base de conocimiento..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pregunta
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Respuesta
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.question}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">{item.answer}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KnowledgeBase;