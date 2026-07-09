import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function EntryDetailScreen({ route, navigation }) {
  const { entry } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Mood + Date */}
        <View style={styles.meta}>
          <Text style={styles.moodBig}>{entry.mood}</Text>
          <View style={styles.metaText}>
            <Text style={styles.dateText}>{entry.date}</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>{entry.title}</Text>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Body */}
        <Text style={styles.body}>
          {entry.preview}
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.{'\n\n'}
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </Text>

        {/* Footer tag */}
        <View style={styles.footer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>✦ Memoirly</Text>
          </View>
        </View>
      </ScrollView>
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
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EDE8DF',
  },
  backBtn: {
    paddingVertical: 4,
  },
  backText: {
    fontSize: 15,
    color: '#7A6E62',
    fontWeight: '500',
  },
  editBtn: {
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  editText: {
    fontSize: 15,
    color: '#2C2416',
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 60,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 20,
  },
  moodBig: {
    fontSize: 48,
  },
  metaText: {
    flex: 1,
  },
  dateText: {
    fontSize: 13,
    color: '#A89880',
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C2416',
    letterSpacing: -0.5,
    lineHeight: 36,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#EDE8DF',
    marginBottom: 24,
  },
  body: {
    fontSize: 17,
    color: '#4A4139',
    lineHeight: 28,
    letterSpacing: 0.1,
  },
  footer: {
    marginTop: 40,
    alignItems: 'flex-start',
  },
  tag: {
    backgroundColor: '#EDE8DF',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  tagText: {
    fontSize: 12,
    color: '#A89880',
    fontWeight: '500',
    letterSpacing: 0.4,
  },
});
