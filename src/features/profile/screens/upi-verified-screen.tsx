import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function UpiVerifiedScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Image 
            source={require('@/assets/images/Component 22.svg')} 
            style={{ width: 160, height: 160 }} 
            contentFit="contain" 
          />
        </View>

        <Text style={styles.title}>Verified UPI ID</Text>
        <Text style={styles.subtitle}>Your UPI ID{'\n'}is verified successfully</Text>
      </View>

      <View style={[styles.bottomContainer, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Pressable 
          style={styles.goBackButton} 
          onPress={() => router.replace('/profile/payment-methods')}
        >
          <Text style={styles.goBackButtonText}>Go Back</Text>
        </Pressable>
        
        <Pressable 
          style={styles.addBankButton} 
          onPress={() => router.push('/profile/add-bank')}
        >
          <Text style={styles.addBankButtonText}>Add Bank Account</Text>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -80,
  },
  iconContainer: {
    marginBottom: 32,
  },
  badge: {
    width: 80,
    height: 80,
    backgroundColor: '#1EAD36',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // Using a simple badge shape, ideally we'd use an SVG for the exact jagged badge
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
      web: {
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' as any,
      },
    }),
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#4CAF50',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  goBackButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    color: '#FFFFFF',
  },
  addBankButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#4CAF50',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBankButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    color: '#000000',
  },
});
