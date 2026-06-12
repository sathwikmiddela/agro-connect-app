import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TERMS = [
  {
    title: '1. Acceptance of Terms',
    content: 'By using AgroConnect, you agree to these terms. If you do not agree, please do not use this application.',
  },
  {
    title: '2. Who Can Use This App',
    content: 'AgroConnect is available for registered farmers, verified buyers, and enrolled delivery riders in India.',
  },
  {
    title: '3. Listing Your Crops',
    content: 'Farmers are responsible for the accuracy of crop listings quantity, quality grade, price, and harvest date must be truthful.',
  },
  {
    title: '4. Payments & Payouts',
    content: 'Payments are processed after order delivery confirmation. AgroConnect charges a platform fee of 2% per transaction.',
  },
  {
    title: '5. Rider & Delivery Policy',
    content: 'Riders are independent contractors. AgroConnect facilitates delivery logistics but is not liable for delays caused by external factors.',
  },
  {
    title: '6. Cancellations & Disputes',
    content: 'Orders can be cancelled before pickup. Disputes must be raised within 24 hours of delivery via the Help Centre.',
  },
  {
    title: '7. Account Termination',
    content: 'AgroConnect reserves the right to suspend accounts that violate platform policies or engage in fraudulent activity.',
  },
];

export function TermsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
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
          <Ionicons name="document-text-outline" size={28} color="#E62326" />
          <Text style={styles.highlightText}>
            Please read these terms carefully before using the app
          </Text>
        </View>

        <View style={styles.listContainer}>
          {TERMS.map((item, index) => (
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
    color: '#E62326',
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
