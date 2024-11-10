import React from 'react';
import { Link2, Database, MessageCircle, Users, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SystemIntegrations() {
  const integrations = [
    {
      name: 'Sistema POS',
      status: 'Conectado',
      lastSync: 'Hace 5 minutos',
      metrics: [
        { label: 'Transacciones Sincronizadas', value: '1,234' },
        { label: 'Precisión', value: '99.9%' }
      ],
      icon: Database
    },
    {
      name: 'Sistema de Inventario',
      status: 'Conectado',
      lastSync: 'Hace 2 minutos',
      metrics: [
        { label: 'Productos Monitoreados', value: '45' },
        { label: 'Alertas Activas', value: '2' }
      ],
      icon: Link2
    },
    {
      name: 'WhatsApp Business',
      status: 'Conectado',
      lastSync: 'Hace 15 minutos',
      metrics: [
        { label: 'Mensajes Enviados', value: '567' },
        { label: 'Tasa de Apertura', value: '82%' }
      ],
      icon: MessageCircle
    },
    {
      name: 'Sistema de Fidelización',
      status: 'Conectado',
      lastSync: 'Tiempo Real',
      metrics: [
        { label: 'Usuarios Activos', value: '890' },
        { label: 'Puntos Emitidos', value: '45,678' }
      ],
      icon: Users
    }
  ];

  const syncStatus = [
    { system: 'POS', status: 'success', message: 'Sincronización exitosa' },
    { system: 'Inventario', status: 'warning', message: 'Stock bajo de Croissants' },
    { system: 'WhatsApp', status: 'success', message: 'Campaña enviada' },
    { system: 'Fidelización', status: 'success', message: 'Puntos actualizados' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <integration.icon className="text-blue-600" />
                <h3 className="text-lg font-semibold">{integration.name}</h3>
              </div>
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                {integration.status}
              </span>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Última sincronización: {integration.lastSync}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {integration.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">{metric.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Estado de Sincronización</h3>
        <div className="space-y-3">
          {syncStatus.map((status, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {status.status === 'success' ? (
                  <CheckCircle2 className="text-green-600" size={20} />
                ) : (
                  <AlertCircle className="text-yellow-600" size={20} />
                )}
                <span className="font-medium">{status.system}</span>
              </div>
              <span className={`text-sm ${
                status.status === 'success' ? 'text-green-600' : 'text-yellow-600'
              }`}>
                {status.message}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}