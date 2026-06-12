import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, TextInput, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function AddUpiScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [upiId, setUpiId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [status, setStatus] = useState<'Active' | 'Inactive'>('Active');

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Add UPI Details</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>UPI ID</Text>
          <TextInput
            style={styles.input}
            placeholder="harish@ybl"
            placeholderTextColor="#000000"
            value={upiId}
            onChangeText={setUpiId}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Linked mobile number</Text>
          <TextInput
            style={styles.input}
            placeholder="00000 00000"
            placeholderTextColor="#000000"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Status</Text>
          <View style={styles.radioGroup}>
            <Pressable style={styles.radioOption} onPress={() => setStatus('Active')}>
              <View style={[styles.outerCircle, status === 'Active' && styles.outerCircleActive]}>
                {status === 'Active' && <View style={styles.innerCircle} />}
              </View>
              <Text style={styles.radioText}>Active</Text>
            </Pressable>
            
            <Pressable style={styles.radioOption} onPress={() => setStatus('Inactive')}>
              <View style={[styles.outerCircle, status === 'Inactive' && styles.outerCircleActive]}>
                {status === 'Inactive' && <View style={styles.innerCircle} />}
              </View>
              <Text style={styles.radioText}>Inactive</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomContainer, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <View style={styles.divider} />
        <Pressable 
          style={styles.verifyButton} 
          onPress={() => router.push('/profile/upi-verified')}
        >
          <Text style={styles.verifyButtonText}>Verify UPI ID</Text>
        </Pressable>
      </View>
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
    gap: 16,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  inputLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
    marginBottom: 4,
  },
  input: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#000000',
    padding: 0,
    height: 24,
  },
  statusContainer: {
    marginTop: 8,
    gap: 12,
  },
  statusTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
  },
  radioGroup: {
    flexDirection: 'row',
    gap: 40,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  outerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.8,
    borderColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  outerCircleActive: {
    borderColor: '#4CAF50',
  },
  innerCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
  radioText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#000000',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FAFAF9',
    paddingTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#EBEBEB',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  verifyButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
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
