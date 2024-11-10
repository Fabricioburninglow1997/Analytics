export interface DashboardCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

export interface Integration {
  name: string;
  status: string;
  lastSync: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  icon: React.ComponentType;
}

export interface SyncStatus {
  system: string;
  status: 'success' | 'warning' | 'error';
  message: string;
}