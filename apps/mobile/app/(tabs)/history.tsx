import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { historyData } from '../../constants/mockData';
import { useColorScheme } from 'nativewind';

export default function HistoryScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Group by date
  const groupedData = historyData.reduce((acc, current) => {
    if (!acc[current.date]) acc[current.date] = [];
    acc[current.date].push(current);
    return acc;
  }, {} as Record<string, typeof historyData>);

  const sections = Object.keys(groupedData).map(date => ({
    title: date,
    data: groupedData[date]
  }));

  const renderItem = ({ item }: { item: typeof historyData[0] }) => (
    <View style={[styles.itemContainer, { borderBottomColor: isDark ? '#334155' : '#e5e7eb' }]}>
      <View style={[styles.iconContainer, { backgroundColor: isDark ? '#1e293b' : '#f5f5f5' }]}>
        <Feather 
          name={item.action === 'open' ? 'arrow-up' : 'arrow-down'} 
          size={20} 
          color={item.action === 'open' ? '#a9c52f' : '#ef4444'} 
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.actionText, { color: isDark ? '#f8fafc' : '#283739' }]}>{item.action === 'open' ? 'Açıldı' : 'Kapandı'}</Text>
        <Text style={styles.triggerText}>{item.triggeredBy}</Text>
      </View>
      <Text style={styles.timeText}>{item.timestamp}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#0f172a' : '#f5f5f5' }}>
      <View style={{ padding: 20, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: isDark ? '#f8fafc' : '#283739' }}>Hareket Geçmişi</Text>
        <Feather name="filter" size={24} color="#2c5d63" />
      </View>

      <View style={{ marginHorizontal: 20, backgroundColor: isDark ? '#1e293b' : 'white', borderRadius: 12, padding: 16, marginBottom: 20, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: '#8a9a9b', marginBottom: 4 }}>Bugün için özet</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#a9c52f' }}>Bugün 4 hareket</Text>
        </View>
        <View style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 6, borderColor: '#a9c52f', borderLeftColor: '#ef4444', transform: [{ rotate: '45deg' }] }} />
      </View>

      <FlatList
        data={sections}
        keyExtractor={item => item.title}
        renderItem={({ item: section }) => (
          <View style={{ marginBottom: 24 }}>
            <View style={{ backgroundColor: isDark ? '#1e293b' : '#283739', paddingVertical: 6, paddingHorizontal: 20, marginBottom: 8 }}>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase' }}>
                {section.title}
              </Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              {section.data.map(item => (
                <View key={item.id}>
                  {renderItem({ item })}
                </View>
              ))}
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 100 }}>
            <Feather name="calendar" size={64} color="#8a9a9b" style={{ opacity: 0.5, marginBottom: 16 }} />
            <Text style={{ color: '#8a9a9b', fontSize: 16 }}>Henüz hareket kaydı yok</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  contentContainer: {
    flex: 1
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2
  },
  triggerText: {
    fontSize: 13,
    color: '#8a9a9b'
  },
  timeText: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#8a9a9b'
  }
});