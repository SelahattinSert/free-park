export const deviceStatus = {
  id: 'FP-2024-IZM-001',
  name: 'Ev Garajı',
  isConnected: true,
  connectionType: 'WiFi' as 'WiFi' | 'Bluetooth',
  signalStrength: 87,      // %87
  batteryLevel: 64,        // %64
  barrierState: 'closed' as 'open' | 'closed' | 'opening' | 'closing',
  lastSeen: '2 dakika önce',
};

export const historyData = [
  { id: '1', action: 'open',  timestamp: '14:32', date: 'Bugün',    triggeredBy: 'Uygulama' },
  { id: '2', action: 'close', timestamp: '14:35', date: 'Bugün',    triggeredBy: 'Uygulama' },
  { id: '3', action: 'open',  timestamp: '09:10', date: 'Bugün',    triggeredBy: 'Otomatik' },
  { id: '4', action: 'close', timestamp: '09:45', date: 'Bugün',    triggeredBy: 'Uygulama' },
  { id: '5', action: 'open',  timestamp: '18:20', date: 'Dün',      triggeredBy: 'Uygulama' },
  { id: '6', action: 'close', timestamp: '18:50', date: 'Dün',      triggeredBy: 'Zamanlayıcı' },
  { id: '7', action: 'open',  timestamp: '08:00', date: '9 Mayıs',  triggeredBy: 'Otomatik' },
  { id: '8', action: 'close', timestamp: '20:00', date: '9 Mayıs',  triggeredBy: 'Zamanlayıcı' },
];

export const userProfile = {
  name: 'Ahmet Yılmaz',
  email: 'ahmet@example.com',
  phone: '+90 555 123 45 67',
  memberSince: 'Ocak 2024',
  plan: 'Pro',
};