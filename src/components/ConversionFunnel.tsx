import React from 'react';

export default function ConversionFunnel() {
  const steps = [
    { label: 'Visitantes', value: '2,345', percentage: '100%' },
    { label: 'Interesados', value: '1,456', percentage: '62%' },
    { label: 'Compradores', value: '789', percentage: '34%' },
    { label: 'Recurrentes', value: '234', percentage: '10%' },
  ];

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">
              {step.label}
            </span>
            <span className="text-sm text-gray-500">
              {step.value} ({step.percentage})
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: step.percentage }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}