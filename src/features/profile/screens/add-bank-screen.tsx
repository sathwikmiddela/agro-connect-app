import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, Platform, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function AddBankScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [form, setForm] = useState({
    bankName: 'State Bank of India',
    accountHolder: 'Harish',
    accountNumber: 'XXXX XXXX 4521',
    ifsc: 'SBIN0002467',
    branch: 'Warangal Main',
  });

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Add Bank Account</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}>
        
        {/* Dropdown like field */}
        <View style={styles.fieldBox}>
          <Text style={styles.fieldLabel}>Bank name</Text>
          <View style={styles.dropdownRow}>
            <TextInput
              style={[styles.fieldValue, { flex: 1 }]}
              value={form.bankName}
              onChangeText={(t) => setForm(f => ({ ...f, bankName: t }))}
            />
            <Ionicons name="chevron-down" size={20} color="#000000" />
          </View>
        </View>

        <FieldBox
          label="Account holder name"
          value={form.accountHolder}
          onChangeText={(t: string) => setForm(f => ({ ...f, accountHolder: t }))}
        />

        <FieldBox
          label="Account number"
          value={form.accountNumber}
          onChangeText={(t: string) => setForm(f => ({ ...f, accountNumber: t }))}
        />

        <FieldBox
          label="IFSC code"
          value={form.ifsc}
          onChangeText={(t: string) => setForm(f => ({ ...f, ifsc: t }))}
        />

        <FieldBox
          label="Branch name"
          value={form.branch}
          onChangeText={(t: string) => setForm(f => ({ ...f, branch: t }))}
        />

      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Pressable
          style={styles.verifyButton}
          onPress={() => router.push('/profile/bank-verified')}
        >
          <Text style={styles.verifyButtonText}>Verify Bank Account</Text>
        </Pressable>
      </View>
    </View>
  );
}

function FieldBox({ label, value, onChangeText, keyboardType = 'default' }: any) {
  return (
    <View style={styles.fieldBox}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        style={styles.fieldValue}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
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
    gap: 15,
  },
  fieldBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  fieldLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
    marginBottom: 4,
  },
  fieldValue: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#000000',
    padding: 0,
    margin: 0,
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#FAFAF9',
  },
  verifyButton: {
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
  verifyButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    color: '#FFFFFF',
  },
});
