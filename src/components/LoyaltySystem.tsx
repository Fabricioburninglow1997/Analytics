import React from 'react';
import { UserCheck, Award, Gift } from 'lucide-react';

export default function LoyaltySystem() {
  const customerTypes = [
    { type: 'Premium', count: 234, percentage: '15%', color: 'bg-purple-100 text-purple-800' },
    { type: 'Regular', count: 567, percentage: '35%', color: 'bg-blue-100 text-blue-800' },
    { type: 'Ocasional', count: 789, percentage: '50%', color: 'bg-gray-100 text-gray-800' },
  ];

  const popularRewards = [
    { name: 'Café Gratis', redemptions: 145, points: 100 },
    { name: 'Descuento 20%', redemptions: 98, points: 200 },
    { name: 'Pan Gratis', redemptions: 76, points: 150 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Distribución de Clientes</h3>
            <UserCheck className="text-blue-600" />
          </div>
          <div className="space-y-4">
            {customerTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full ${type.color}`}>
                    {type.type}
                  </span>
                  <span className="text-gray-600">{type.count} clientes</span>
                </div>
                <span className="font-medium">{type.percentage}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recompensas Populares</h3>
            <Gift className="text-blue-600" />
          </div>
          <div className="space-y-4">
            {popularRewards.map((reward, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{reward.name}</p>
                  <p className="text-sm text-gray-600">{reward.points} puntos</p>
                </div>
                <span className="text-blue-600">{reward.redemptions} canjes</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Métricas de Membresía</h3>
          <Award className="text-blue-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Puntos Activos</p>
            <p className="text-2xl font-bold text-blue-600">45,678</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Tasa de Canje</p>
            <p className="text-2xl font-bold text-green-600">24%</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600">Retención</p>
            <p className="text-2xl font-bold text-purple-600">85%</p>
          </div>
        </div>
      </div>
    </div>
  );
}