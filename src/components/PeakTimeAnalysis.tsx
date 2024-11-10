import React from 'react';
import { Clock, Users, TrendingUp } from 'lucide-react';

export default function PeakTimeAnalysis() {
  const peakHours = [
    { time: '7:00 - 9:00', customers: 245, staff: 4, status: 'Pico Alto' },
    { time: '9:00 - 11:00', customers: 180, staff: 3, status: 'Pico Medio' },
    { time: '11:00 - 13:00', customers: 156, staff: 3, status: 'Estable' },
    { time: '13:00 - 15:00', customers: 198, staff: 3, status: 'Pico Medio' },
    { time: '15:00 - 17:00', customers: 134, staff: 2, status: 'Valle' },
    { time: '17:00 - 19:00', customers: 223, staff: 4, status: 'Pico Alto' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Análisis de Horas Pico</h3>
        <Clock className="text-blue-600" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Horario
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Clientes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Personal Recomendado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {peakHours.map((hour, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {hour.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {hour.customers}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {hour.staff}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      hour.status === 'Pico Alto'
                        ? 'bg-red-100 text-red-800'
                        : hour.status === 'Pico Medio'
                        ? 'bg-yellow-100 text-yellow-800'
                        : hour.status === 'Estable'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {hour.status}
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