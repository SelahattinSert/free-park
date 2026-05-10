import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { userProfile } from '../../constants/mockData';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const SettingRow = ({ icon, title, subtitle, rightElement, isDestructive = false }: any) => (
    <TouchableOpacity 
      style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
      activeOpacity={0.7}
      disabled={!rightElement || rightElement.type === Switch}
    >
      <View style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: isDestructive ? '#fee2e2' : '#f5f5f5', justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
        <Feather name={icon} size={18} color={isDestructive ? '#ef4444' : '#2c5d63'} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: isDestructive ? '#ef4444' : '#283739' }}>{title}</Text>
        {subtitle && <Text style={{ fontSize: 13, color: '#8a9a9b', marginTop: 2 }}>{subtitle}</Text>}
      </View>
      {rightElement || <Feather name="chevron-right" size={20} color="#8a9a9b" />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Profil Kartı */}
        <View style={{ alignItems: 'center', paddingVertical: 32, backgroundColor: 'white', paddingBottom: 40 }}>
          <LinearGradient
            colors={['#2c5d63', '#283739']}
            style={{ width: 100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 16, shadowColor: '#2c5d63', shadowOpacity: 0.4, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } }}
          >
            <Text style={{ fontSize: 36, fontWeight: 'bold', color: 'white' }}>AY</Text>
          </LinearGradient>
          
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#283739', marginBottom: 4 }}>{userProfile.name}</Text>
          <Text style={{ fontSize: 15, color: '#8a9a9b', marginBottom: 16 }}>{userProfile.email}</Text>
          
          <View style={{ backgroundColor: '#a9c52f', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20 }}>
            <Text style={{ color: '#283739', fontWeight: 'bold', fontSize: 12, letterSpacing: 1 }}>{userProfile.plan.toUpperCase()} PLAN</Text>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          
          {/* Cihaz Bilgisi Kartı */}
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8a9a9b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Bağlı Cihaz</Text>
          <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 20, marginBottom: 32, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#283739', marginBottom: 4 }}>Ev Garajı</Text>
              <Text style={{ fontSize: 12, fontFamily: 'monospace', color: '#8a9a9b' }}>FP-2024-IZM-001</Text>
              <Text style={{ fontSize: 12, color: '#8a9a9b', marginTop: 4 }}>v2.1.4</Text>
            </View>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#2c5d63', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8 }}>
              <Text style={{ color: '#2c5d63', fontSize: 12, fontWeight: '600' }}>Güncelle</Text>
            </TouchableOpacity>
          </View>

          {/* Uygulama Ayarları */}
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8a9a9b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Uygulama Ayarları</Text>
          <View style={{ backgroundColor: 'white', borderRadius: 16, paddingHorizontal: 20, marginBottom: 32 }}>
            <SettingRow 
              icon="bell" 
              title="Bildirimler" 
              rightElement={
                <Switch 
                  value={notifications} 
                  onValueChange={setNotifications} 
                  trackColor={{ false: '#e5e7eb', true: '#a9c52f' }} 
                  thumbColor="white"
                />
              } 
            />
            <SettingRow 
              icon="moon" 
              title="Karanlık Mod" 
              rightElement={
                <Switch 
                  value={darkMode} 
                  onValueChange={setDarkMode} 
                  trackColor={{ false: '#e5e7eb', true: '#a9c52f' }} 
                  thumbColor="white"
                />
              } 
            />
            <SettingRow icon="globe" title="Dil" rightElement={<Text style={{ color: '#8a9a9b', marginRight: 4 }}>Türkçe</Text>} />
          </View>

          {/* Cihaz Ayarları */}
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8a9a9b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Cihaz Ayarları</Text>
          <View style={{ backgroundColor: 'white', borderRadius: 16, paddingHorizontal: 20, marginBottom: 32 }}>
            <SettingRow icon="wifi" title="Bağlantı Türü" rightElement={<Text style={{ color: '#8a9a9b', marginRight: 4 }}>WiFi</Text>} />
            <SettingRow icon="clock" title="Otomatik Kapanma" rightElement={<Text style={{ color: '#8a9a9b', marginRight: 4 }}>30 dakika</Text>} />
            <SettingRow icon="battery" title="Düşük Pil Uyarısı" rightElement={<Text style={{ color: '#8a9a9b', marginRight: 4 }}>%20'de uyar</Text>} />
          </View>

          {/* Hesap */}
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8a9a9b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Hesap</Text>
          <View style={{ backgroundColor: 'white', borderRadius: 16, paddingHorizontal: 20, marginBottom: 32 }}>
            <SettingRow icon="user" title="Profili Düzenle" />
            <SettingRow icon="lock" title="Şifre Değiştir" />
            <SettingRow icon="log-out" title="Çıkış Yap" isDestructive={true} />
          </View>

          <Text style={{ textAlign: 'center', color: '#8a9a9b', fontSize: 11, marginBottom: 40 }}>
            Free Park v1.0.0 · Demo Build
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}