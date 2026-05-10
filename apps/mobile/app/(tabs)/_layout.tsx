import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from './index';
import HistoryScreen from './history';
import ProfileScreen from './profile';
import { useColorScheme } from 'nativewind';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? '#1a2526' : '#283739',
          borderTopWidth: 1,
          borderTopColor: isDark ? '#2c5d63' : '#2c5d63',
          height: 100, // 90'dan 100'e çıkarıldı
          paddingBottom: 35, // 25'ten 35'e çıkarıldı
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#a9c52f',
        tabBarInactiveTintColor: '#8a9a9b',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          height: 20, // Yazı için yeterli dikey alan
          lineHeight: 16, // Yazının kutu içinde rahat durması için
          marginBottom: 2, // Alt boşluğu buraya aldık
        }
      }}
    >
      <Tab.Screen
        name="index"
        component={HomeScreen}
        options={{
          title: 'Kontrol',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={HistoryScreen}
        options={{
          title: 'Geçmiş',
          tabBarIcon: ({ color, size }) => (
            <Feather name="clock" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}