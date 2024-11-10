import React, { useState } from 'react';
import { 
  BarChart3, 
  ShoppingBag, 
  Users, 
  TrendingUp,
  Cake,
  Clock,
  Gift,
  UserCheck,
  Link2
} from 'lucide-react';
import Navbar from './components/Navbar';
import DashboardCard from './components/DashboardCard';
import SalesChart from './components/SalesChart';
import ProductsTable from './components/ProductsTable';
import ConversionFunnel from './components/ConversionFunnel';
import ProductAnalytics from './components/ProductAnalytics';
import PeakTimeAnalysis from './components/PeakTimeAnalysis';
import PromotionTracking from './components/PromotionTracking';
import LoyaltySystem from './components/LoyaltySystem';
import SystemIntegrations from './components/SystemIntegrations';

function App() {
  const [selectedTab, setSelectedTab] = useState('general');

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'productos':
        return <ProductAnalytics />;
      case 'horarios':
        return <PeakTimeAnalysis />;
      case 'promociones':
        return <PromotionTracking />;
      case 'fidelizacion':
        return <LoyaltySystem />;
      case 'integraciones':
        return <SystemIntegrations />;
      default:
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Ventas y Tendencias</h2>
                <SalesChart />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Embudo de Conversión</h2>
                <ConversionFunnel />
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Rendimiento de Productos</h2>
              <ProductsTable />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard de Marketing - Panadería La Española
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Ventas Totales"
            value="$45,892"
            change="+12.5%"
            icon={<ShoppingBag className="text-blue-600" />}
          />
          <DashboardCard
            title="Clientes Nuevos"
            value="234"
            change="+8.1%"
            icon={<Users className="text-green-600" />}
          />
          <DashboardCard
            title="Tasa de Conversión"
            value="6.8%"
            change="+2.4%"
            icon={<TrendingUp className="text-purple-600" />}
          />
          <DashboardCard
            title="Productos Vendidos"
            value="1,892"
            change="+15.3%"
            icon={<Cake className="text-orange-600" />}
          />
        </div>

        <div className="flex space-x-4 mb-8 border-b border-gray-200 overflow-x-auto">
          {[
            { id: 'general', label: 'General', icon: BarChart3 },
            { id: 'productos', label: 'Productos', icon: Cake },
            { id: 'horarios', label: 'Horarios Pico', icon: Clock },
            { id: 'promociones', label: 'Promociones', icon: Gift },
            { id: 'fidelizacion', label: 'Fidelización', icon: UserCheck },
            { id: 'integraciones', label: 'Integraciones', icon: Link2 }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 border-b-2 transition-colors whitespace-nowrap ${
                selectedTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {renderTabContent()}
      </main>
    </div>
  );
}

export default App;