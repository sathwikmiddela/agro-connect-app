import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function PaymentMethodsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Bank & Payments</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 40 },
        ]}>
        
        {/* Bank Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bank Account</Text>
          <View style={styles.cardList}>
            <InfoRow label="Bank Name" value="State Bank of India" />
            <InfoRow label="Account Holder" value="Rahul kumar" />
            <InfoRow label="Account Number" value="XXXX XXXX 4521" />
            <InfoRow label="IFSC Code" value="SBIN0004521" />
            <InfoRow label="Branch" value="Warangal Main" />
            <InfoRow label="Status" value="Verified" valueColor="#4CAF50" />
            <Pressable
              style={styles.actionButton}
              onPress={() => router.push('/profile/add-bank')}
            >
              <Text style={styles.actionButtonText}>Add Bank Account</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.divider} />

        {/* UPI Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>UPI Details</Text>
          <View style={styles.cardList}>
            <InfoRow label="UPI ID" value="rahul@ybl" />
            <InfoRow label="Linked Mobile" value="00000 00000" />
            <InfoRow label="Status" value="Active" valueColor="#4CAF50" />
            <Pressable style={styles.actionButton} onPress={() => router.push('/profile/add-upi')}>
              <Text style={styles.actionButtonText}>Add UPI ID</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Payout Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payout Preferences</Text>
          <View style={styles.cardList}>
            <InfoRow label="Payout Schedule" value="After Order Delivered" />
            <InfoRow label="Minmium Payout" value="500" />
            <InfoRow label="Auto-Transfer" value="Enabled" />
            <InfoRow label="GST Number" value="22AAAAA0000A1Z5" />
            <Pressable style={styles.actionButton} onPress={() => router.push('/profile/payout-preferences')}>
              <Text style={styles.actionButtonText}>Change Payout Preferences</Text>
            </Pressable>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

function InfoRow({ label, value, valueColor = '#000000' }: { label: string, value: string, valueColor?: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={[styles.infoValue, { color: valueColor }]}>{value}</Text>
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
    gap: 20,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
  },
  cardList: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
  },
  infoLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
  },
  infoValue: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
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
  actionButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#EBEBEB',
    marginVertical: 4,
  },
});
