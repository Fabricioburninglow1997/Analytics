import React from 'react';

export default function ProductsTable() {
  const products = [
    {
      name: 'Pan Baguette',
      sales: 458,
      revenue: '$1,374',
      growth: '+12.5%',
    },
    {
      name: 'Croissant',
      sales: 385,
      revenue: '$1,155',
      growth: '+8.3%',
    },
    {
      name: 'Pan de Masa Madre',
      sales: 289,
      revenue: '$867',
      growth: '+15.2%',
    },
    {
      name: 'Palmeras',
      sales: 246,
      revenue: '$738',
      growth: '+5.8%',
    },
    {
      name: 'Pan Integral',
      sales: 198,
      revenue: '$594',
      growth: '+9.4%',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Producto
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Unidades Vendidas
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ingresos
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Crecimiento
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.sales}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.revenue}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className="text-green-600 font-medium">
                  {product.growth}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}