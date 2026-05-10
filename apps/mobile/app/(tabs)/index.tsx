import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { deviceStatus } from '../../constants/mockData';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withRepeat, Easing } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const [barrierState, setBarrierState] = useState(deviceStatus.barrierState);
  
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const toggleBarrier = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    
    // Animate scale
    scale.value = withSpring(0.92, {}, () => {
      scale.value = withSpring(1.05, {}, () => {
        scale.value = withSpring(1);
      });
    });

    if (barrierState === 'closed') {
      setBarrierState('opening');
      rotation.value = withRepeat(withTiming(360, { duration: 2000, easing: Easing.linear }), -1);
      setTimeout(() => {
        setBarrierState('open');
        rotation.value = 0;
      }, 2000);
    } else if (barrierState === 'open') {
      setBarrierState('closing');
      rotation.value = withRepeat(withTiming(-360, { duration: 2000, easing: Easing.linear }), -1);
      setTimeout(() => {
        setBarrierState('closed');
        rotation.value = 0;
      }, 2000);
    }
  };

  const buttonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  const getStatusColor = () => {
    switch (barrierState) {
      case 'open': return '#a9c52f'; // accent
      case 'closed': return '#ef4444'; // red
      case 'opening': 
      case 'closing': return '#f59e0b'; // amber
    }
  };

  const getStatusText = () => {
    switch (barrierState) {
      case 'open': return 'AÇIK';
      case 'closed': return 'KAPALI';
      case 'opening': return 'AÇILIYOR...';
      case 'closing': return 'KAPANIYOR...';
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={{ backgroundColor: '#2c5d63', borderRadius: 16, padding: 20, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>{deviceStatus.name}</Text>
              <Text style={{ color: '#8a9a9b', fontFamily: 'monospace', marginTop: 4 }}>{deviceStatus.id}</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: 10, borderRadius: 50 }}>
              <Feather name="bell" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Durum Kartı */}
        <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 16, marginBottom: 40, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="wifi" size={16} color="#2c5d63" />
              <Text style={{ marginLeft: 6, color: '#283739', fontWeight: '600' }}>WiFi</Text>
              <Text style={{ marginLeft: 4, color: '#8a9a9b' }}>{deviceStatus.signalStrength}%</Text>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="battery" size={16} color="#2c5d63" />
              <Text style={{ marginLeft: 6, color: '#283739', fontWeight: '600' }}>{deviceStatus.batteryLevel}%</Text>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="clock" size={16} color="#2c5d63" />
              <Text style={{ marginLeft: 6, color: '#8a9a9b', fontSize: 12 }}>2 dk önce</Text>
            </View>
            
          </View>
          <View style={{ position: 'absolute', top: -4, right: -4, width: 12, height: 12, borderRadius: 6, backgroundColor: '#a9c52f', borderWidth: 2, borderColor: 'white' }} />
        </View>

        {/* Ana Kontrol Butonu */}
        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Animated.View style={[{ alignItems: 'center' }, buttonStyle]}>
            <TouchableOpacity 
              activeOpacity={1}
              onPress={toggleBarrier}
              style={{
                width: 200, height: 200, borderRadius: 100,
                borderWidth: 2, borderColor: '#a9c52f',
                alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'rgba(169, 197, 47, 0.05)'
              }}
            >
              <View style={{
                width: 160, height: 160, borderRadius: 80,
                backgroundColor: '#283739',
                alignItems: 'center', justifyContent: 'center',
                shadowColor: getStatusColor(),
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.6,
                shadowRadius: 20,
                elevation: 10,
              }}>
                <Animated.View style={iconStyle}>
                  <Feather name={barrierState === 'open' ? 'unlock' : 'lock'} size={48} color={getStatusColor()} />
                </Animated.View>
              </View>
            </TouchableOpacity>
          </Animated.View>
          
          <Text style={{ marginTop: 24, fontSize: 28, fontWeight: 'bold', color: getStatusColor(), letterSpacing: 2 }}>
            {getStatusText()}
          </Text>
        </View>

        {/* Alt Hızlı İşlemler */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12 }}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#2c5d63', padding: 16, borderRadius: 12, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: 8, borderRadius: 8, marginRight: 10 }}>
              <Feather name="calendar" size={20} color="#a9c52f" />
            </View>
            <View>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}>Zamanlayıcı Kur</Text>
              <Text style={{ color: '#8a9a9b', fontSize: 11, marginTop: 2 }}>Sabah 09:00</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, backgroundColor: '#2c5d63', padding: 16, borderRadius: 12, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: 8, borderRadius: 8, marginRight: 10 }}>
              <Feather name="bell" size={20} color="#a9c52f" />
            </View>
            <View>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}>Bildirim Ayarları</Text>
              <Text style={{ color: '#8a9a9b', fontSize: 11, marginTop: 2 }}>Her harekette uyar</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}