import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const QUICK_TAGS = [
  'Easy to use',
  'Helpful',
  'Good design',
  'Fast',
  'Needs improvement',
];

export function RateAppScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const [rating, setRating] = useState(4); // Default to 4 stars based on UI
  const [feedback, setFeedback] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const getRatingText = () => {
    switch (rating) {
      case 1: return 'Very Poor';
      case 2: return 'Poor';
      case 3: return 'Average';
      case 4: return 'Very Good';
      case 5: return 'Excellent';
      default: return '';
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.screen} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Rate the App</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: Math.max(insets.bottom, 20) + 100 },
        ]}>
        
        <View style={styles.ratingCard}>
          <View style={styles.avatarPlaceholder} />
          
          <View style={styles.ratingHeader}>
            <Text style={styles.ratingTitle}>How's your experience?</Text>
            <Text style={styles.ratingSubtitle}>Tap a star to rate AgroConnect</Text>
          </View>

          <View style={styles.starsContainer}>
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Pressable key={star} onPress={() => setRating(star)}>
                  <Ionicons 
                    name="star" 
                    size={28} 
                    color={star <= rating ? '#FDCB58' : '#D9D9D9'} 
                  />
                </Pressable>
              ))}
            </View>
            <Text style={styles.ratingText}>{getRatingText()}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Tell us more (optional)</Text>

        <View style={styles.feedbackCard}>
          <View style={styles.feedbackSection}>
            <Text style={styles.feedbackLabel}>What did you like or dislike?</Text>
            <View style={styles.textInputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Write your feedback here..."
                placeholderTextColor="#898989"
                multiline
                numberOfLines={3}
                textAlignVertical="top"
                value={feedback}
                onChangeText={setFeedback}
              />
            </View>
          </View>

          <View style={styles.tagsSection}>
            <Text style={styles.tagsLabel}>Quick tags:</Text>
            <View style={styles.tagsWrapper}>
              {QUICK_TAGS.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <Pressable 
                    key={tag}
                    style={[styles.tagPill, isSelected && styles.tagPillSelected]}
                    onPress={() => toggleTag(tag)}
                  >
                    <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>
                      {tag}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>

      </ScrollView>

      <View style={[styles.bottomContainer, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Pressable 
          style={styles.submitButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    zIndex: 10,
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    gap: 16,
  },
  ratingCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  ratingHeader: {
    alignItems: 'center',
    gap: 6,
  },
  ratingTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  ratingSubtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
    textAlign: 'center',
  },
  starsContainer: {
    alignItems: 'center',
    gap: 12,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  ratingText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#4CAF50',
    textAlign: 'center',
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
    marginTop: 8,
  },
  feedbackCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.8,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    padding: 16,
    gap: 15,
  },
  feedbackSection: {
    gap: 10,
  },
  feedbackLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#000000',
  },
  textInputWrapper: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    padding: 14,
    minHeight: 101,
  },
  textInput: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#000000',
    flex: 1,
  },
  tagsSection: {
    gap: 10,
  },
  tagsLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#000000',
  },
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagPill: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagPillSelected: {
    backgroundColor: '#4CAF50',
  },
  tagText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#4CAF50',
    textAlign: 'center',
  },
  tagTextSelected: {
    color: '#FFFFFF',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FAFAF9',
    paddingTop: 10,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.05)',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      },
      web: {
        boxShadow: '0px -3px 5px rgba(0,0,0,0.05)' as any,
      },
    }),
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(76, 175, 80, 0.12)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(76, 175, 80, 0.12)' as any,
      },
    }),
  },
  submitButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    color: '#FFFFFF',
  },
});
