import React from 'react';
import { MessageSquare, Users, Clock, CheckCircle } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, color }: {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  </div>
);

const Stats = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Estadísticas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Conversaciones Activas"
          value={24}
          icon={MessageSquare}
          color="bg-blue-500"
        />
        <StatsCard
          title="Usuarios Atendidos"
          value={156}
          icon={Users}
          color="bg-green-500"
        />
        <StatsCard
          title="Tiempo Promedio"
          value="5m 30s"
          icon={Clock}
          color="bg-yellow-500"
        />
        <StatsCard
          title="Resueltos Hoy"
          value={45}
          icon={CheckCircle}
          color="bg-purple-500"
        />
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Rendimiento por Hora</h3>
        {/* Aquí iría un gráfico de rendimiento */}
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Gráfico de Rendimiento</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Categorías Más Consultadas</h3>
          <div className="space-y-4">
            {[
              { name: 'Soporte Técnico', value: '35%', color: 'bg-blue-500' },
              { name: 'Ventas', value: '28%', color: 'bg-green-500' },
              { name: 'Facturación', value: '20%', color: 'bg-yellow-500' },
              { name: 'Información General', value: '17%', color: 'bg-purple-500' },
            ].map((category) => (
              <div key={category.name} className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium">{category.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                    <div
                      className={`h-2.5 rounded-full ${category.color}`}
                      style={{ width: category.value }}
                    ></div>
                  </div>
                </div>
                <span className="ml-4 text-sm font-medium">{category.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Agentes Más Activos</h3>
          <div className="space-y-4">
            {[
              { name: 'Ana García', conversations: 45, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
              { name: 'Carlos López', conversations: 38, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
              { name: 'María Rodríguez', conversations: 32, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
            ].map((agent) => (
              <div key={agent.name} className="flex items-center gap-3">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{agent.name}</p>
                  <p className="text-sm text-gray-500">{agent.conversations} conversaciones</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;