import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

const MOODS = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '🙏', label: 'Grateful' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😤', label: 'Frustrated' },
  { emoji: '🌤️', label: 'Calm' },
  { emoji: '🔥', label: 'Motivated' },
  { emoji: '😴', label: 'Tired' },
  { emoji: '🤔', label: 'Reflective' },
];

export default function NewEntryScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedMood, setSelectedMood] = useState(null);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleSave = () => {
    if (!title.trim() && !body.trim()) {
      Alert.alert('Empty entry', 'Write something before saving.');
      return;
    }
    // TODO: persist to storage
    Alert.alert('Saved ✦', 'Your entry has been saved.', [
      { text: 'Done', onPress: () => navigation.goBack() },
    ]);
  };

  const wordCount = body.trim() ? body.trim().split(/\s+/).length : 0;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Date */}
          <Text style={styles.dateLabel}>{today}</Text>

          {/* Title */}
          <TextInput
            style={styles.titleInput}
            placeholder="Give this moment a title..."
            placeholderTextColor="#C4B8A8"
            value={title}
            onChangeText={setTitle}
            maxLength={80}
            returnKeyType="next"
          />

          {/* Divider */}
          <View style={styles.divider} />

          {/* Mood Picker */}
          <Text style={styles.sectionLabel}>How are you feeling?</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.moodScroll}
            contentContainerStyle={styles.moodList}
          >
            {MOODS.map((mood) => (
              <TouchableOpacity
                key={mood.label}
                style={[
                  styles.moodChip,
                  selectedMood?.label === mood.label && styles.moodChipSelected,
                ]}
                onPress={() =>
                  setSelectedMood(selectedMood?.label === mood.label ? null : mood)
                }
                activeOpacity={0.8}
              >
                <Text style={styles.moodEmoji}>{mood.emoji}</Text>
                <Text
                  style={[
                    styles.moodLabel,
                    selectedMood?.label === mood.label && styles.moodLabelSelected,
                  ]}
                >
                  {mood.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Body */}
          <TextInput
            style={styles.bodyInput}
            placeholder="What's on your mind today? Write freely..."
            placeholderTextColor="#C4B8A8"
            value={body}
            onChangeText={setBody}
            multiline
            textAlignVertical="top"
          />

          {/* Word count */}
          <Text style={styles.wordCount}>{wordCount} words</Text>
        </ScrollView>
      </KeyboardAvoidingView>
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
  saveBtn: {
    backgroundColor: '#2C2416',
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 20,
  },
  saveBtnText: {
    color: '#FAF7F2',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 60,
  },
  dateLabel: {
    fontSize: 12,
    color: '#A89880',
    letterSpacing: 0.5,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  titleInput: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2C2416',
    letterSpacing: -0.3,
    marginBottom: 16,
    padding: 0,
  },
  divider: {
    height: 1,
    backgroundColor: '#EDE8DF',
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 12,
    color: '#A89880',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 12,
    fontWeight: '500',
  },
  moodScroll: {
    marginBottom: 24,
    marginHorizontal: -24,
  },
  moodList: {
    paddingHorizontal: 24,
    gap: 8,
  },
  moodChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: '#EDE8DF',
    gap: 6,
    shadowColor: '#2C2416',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  moodChipSelected: {
    backgroundColor: '#2C2416',
    borderColor: '#2C2416',
  },
  moodEmoji: {
    fontSize: 16,
  },
  moodLabel: {
    fontSize: 13,
    color: '#7A6E62',
    fontWeight: '500',
  },
  moodLabelSelected: {
    color: '#FAF7F2',
  },
  bodyInput: {
    fontSize: 16,
    color: '#2C2416',
    lineHeight: 26,
    minHeight: 220,
    padding: 0,
  },
  wordCount: {
    marginTop: 16,
    fontSize: 12,
    color: '#C4B8A8',
    textAlign: 'right',
    letterSpacing: 0.3,
  },
});
