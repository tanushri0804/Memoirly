import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const SAMPLE_ENTRIES = [
  {
    id: '1',
    title: 'A quiet morning',
    preview: 'Woke up before the sun and just sat with my thoughts for a while...',
    mood: '🌤️',
    date: 'June 16, 2026',
  },
  {
    id: '2',
    title: "Things I'm grateful for",
    preview: "It's easy to forget how much is already good. Today I made myself stop and list them...",
    mood: '🙏',
    date: 'June 15, 2026',
  },
  {
    id: '3',
    title: 'The dinner that went sideways',
    preview: 'We burned the pasta, the wine was warm, and somehow it was perfect...',
    mood: '😄',
    date: 'June 14, 2026',
  },
];

export default function HomeScreen({ navigation }) {
  const [entries, setEntries] = useState(SAMPLE_ENTRIES);

  const renderEntry = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('EntryDetail', { entry: item })}
      activeOpacity={0.85}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.mood}>{item.mood}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPreview} numberOfLines={2}>
        {item.preview}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF7F2" />
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning ✦</Text>
          <Text style={styles.headerTitle}>Memoirly</Text>
        </View>
        <View style={styles.entryCount}>
          <Text style={styles.entryCountText}>{entries.length}</Text>
          <Text style={styles.entryCountLabel}>entries</Text>
        </View>
      </View>

      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={renderEntry}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>📖</Text>
            <Text style={styles.emptyText}>Your story starts here.</Text>
            <Text style={styles.emptySubtext}>Tap the button below to write your first entry.</Text>
          </View>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('NewEntry')}
        activeOpacity={0.9}
      >
        <Text style={styles.fabIcon}>✦</Text>
        <Text style={styles.fabLabel}>New Entry</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 13,
    color: '#A89880',
    letterSpacing: 0.5,
    marginBottom: 2,
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2C2416',
    letterSpacing: -0.5,
  },
  entryCount: {
    alignItems: 'center',
    backgroundColor: '#EDE8DF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  entryCountText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C2416',
  },
  entryCountLabel: {
    fontSize: 11,
    color: '#A89880',
    letterSpacing: 0.3,
  },
  list: {
    paddingHorizontal: 24,
    paddingBottom: 120,
    paddingTop: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 14,
    shadowColor: '#2C2416',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  mood: {
    fontSize: 22,
  },
  date: {
    fontSize: 12,
    color: '#A89880',
    letterSpacing: 0.3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2416',
    marginBottom: 6,
    letterSpacing: -0.2,
  },
  cardPreview: {
    fontSize: 14,
    color: '#7A6E62',
    lineHeight: 20,
  },
  empty: {
    alignItems: 'center',
    marginTop: 80,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C2416',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#A89880',
    textAlign: 'center',
    lineHeight: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2416',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    shadowColor: '#2C2416',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
    gap: 8,
  },
  fabIcon: {
    fontSize: 14,
    color: '#F5C842',
  },
  fabLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FAF7F2',
    letterSpacing: 0.3,
  },
});
