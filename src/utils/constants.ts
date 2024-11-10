export const DASHBOARD_TABS = [
  { id: 'general', label: 'General' },
  { id: 'productos', label: 'Productos' },
  { id: 'horarios', label: 'Horarios Pico' },
  { id: 'promociones', label: 'Promociones' },
  { id: 'fidelizacion', label: 'Fidelización' },
  { id: 'integraciones', label: 'Integraciones' }
] as const;

export const MOCK_PRODUCTS = [
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
] as const;