import React from 'react';
import { LineChart, ShoppingBag, TrendingUp, AlertTriangle } from 'lucide-react';

export default function ProductAnalytics() {
  const predictions = [
    { product: 'Pan Baguette', predicted: 500, actual: 458, accuracy: '91.6%' },
    { product: 'Croissant', predicted: 400, actual: 385, accuracy: '96.3%' },
    { product: 'Pan de Masa Madre', predicted: 300, actual: 289, accuracy: '96.3%' },
  ];

  const stockRecommendations = [
    { product: 'Pan Baguette', current: 45, recommended: 60 },
    { product: 'Croissant', current: 32, recommended: 40 },
    { product: 'Pan de Masa Madre', current: 28, recommended: 35 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Predicción de Demanda</h3>
            <LineChart className="text-blue-600" />
          </div>
          <div className="space-y-4">
            {predictions.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{item.product}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Pred: {item.predicted}</span>
                  <span className="text-gray-600">Real: {item.actual}</span>
                  <span className="text-green-600">{item.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recomendaciones de Stock</h3>
            <ShoppingBag className="text-blue-600" />
          </div>
          <div className="space-y-4">
            {stockRecommendations.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{item.product}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Actual: {item.current}</span>
                  <span className="text-blue-600">Recomendado: {item.recommended}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}