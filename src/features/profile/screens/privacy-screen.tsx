import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIVACY_POLICIES = [
  {
    title: '1. What We Collect',
    content: 'We collect your name, mobile number, farm location, (for verification), and crop listing data to operate the platform.',
  },
  {
    title: '2. How We Use Your Data',
    content: 'Your data is used to show your listings to buyers, process payments, assign delivery riders, and improve our services. We never sell your data.',
  },
  {
    title: '3. What Buyers Can See',
    content: 'Buyers can only see your profile. Your phone number and bank details are never shown to buyers.',
  },
  {
    title: '4. Rider Data Sharing',
    content: 'For deliveries, your pickup address and order details are shared with the assigned rider only. This data is deleted after delivery.',
  },
  {
    title: '5. Location Data',
    content: 'Location is collected only when you set your farm address. We do not track your live location in the background.',
  },
  {
    title: '6. Data Deletion',
    content: 'You can request deletion of your account and all associated data at any time from Privacy & Security settings.',
  },
  {
    title: '7. Contact for Privacy',
    content: 'For privacy concerns call 1800-XXX-XXXX.',
  },
];

export function PrivacyScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 40 },
        ]}>
        
        <View style={styles.highlightBox}>
          <Ionicons name="lock-closed-outline" size={28} color="#4CAF50" />
          <Text style={styles.highlightText}>
            Your data belongs to you. We are committed to protecting it.
          </Text>
        </View>

        <View style={styles.listContainer}>
          {PRIVACY_POLICIES.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardContent}>{item.content}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
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
  },
  highlightBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    padding: 14,
    gap: 12,
    marginBottom: 24,
  },
  highlightText: {
    flex: 1,
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#4CAF50',
    lineHeight: 18,
  },
  listContainer: {
    gap: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.8,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    padding: 16,
    gap: 4,
  },
  cardTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#000000',
    lineHeight: 18,
  },
  cardContent: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
    lineHeight: 22,
  },
});
