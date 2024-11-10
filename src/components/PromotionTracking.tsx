import React from 'react';
import { Gift, TrendingUp, DollarSign } from 'lucide-react';

export default function PromotionTracking() {
  const promotions = [
    {
      name: '2x1 en Croissants',
      impact: '+45%',
      conversion: '28%',
      roi: '180%',
      status: 'Activa',
    },
    {
      name: 'Descuento Mañanero',
      impact: '+32%',
      conversion: '22%',
      roi: '145%',
      status: 'Activa',
    },
    {
      name: 'Pack Familiar',
      impact: '+38%',
      conversion: '25%',
      roi: '160%',
      status: 'Activa',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Seguimiento de Promociones</h3>
        <Gift className="text-blue-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Mejor Promoción</span>
            <TrendingUp className="text-blue-600" size={20} />
          </div>
          <p className="text-lg font-semibold">2x1 en Croissants</p>
          <p className="text-sm text-blue-600">ROI: 180%</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Promoción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Impacto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Conversión
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ROI
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {promotions.map((promo, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {promo.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                  {promo.impact}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {promo.conversion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                  {promo.roi}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {promo.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}