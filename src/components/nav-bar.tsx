import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter, usePathname } from 'expo-router';

export function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <Pressable style={styles.item} onPress={() => router.push('/home' as any)}>
        <Image source={require('@/assets/images/image 13.svg')} style={{ width: 30, height: 30 }} contentFit="contain" />
        <Text style={[styles.text, pathname === '/home' && styles.activeText]}>Home</Text>
      </Pressable>

      <Pressable style={styles.item} onPress={() => router.push('/crops' as any)}>
        <Image source={require('@/assets/images/image 84.svg')} style={{ width: 31, height: 31 }} contentFit="contain" />
        <Text style={[styles.text, pathname === '/crops' && styles.activeText]}>Crops</Text>
      </Pressable>

      <Pressable style={styles.item} onPress={() => router.push('/analytics' as any)}>
        <Image source={require('@/assets/images/image 134.svg')} style={{ width: 28, height: 28 }} contentFit="contain" />
        <Text style={[styles.text, pathname === '/analytics' && styles.activeText]}>Analytics</Text>
      </Pressable>

      <Pressable style={styles.item} onPress={() => router.push('/orders' as any)}>
        <Image source={require('@/assets/images/image 85.svg')} style={{ width: 28, height: 28 }} contentFit="contain" />
        <Text style={[styles.text, pathname?.startsWith('/orders') && styles.activeText]}>Orders</Text>
      </Pressable>

      <Pressable style={styles.item} onPress={() => router.push('/profile' as any)}>
        <Image source={require('@/assets/images/Ellipse 1008.svg')} style={{ width: 30, height: 30 }} contentFit="contain" />
        <Text style={[styles.text, pathname?.startsWith('/profile') && styles.activeText]}>Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    gap: 18,
    backgroundColor: '#FFFFFF',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: 84,
    position: 'absolute',
    bottom: 0,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    gap: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  text: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
    color: '#737373',
  },
  activeText: {
    color: '#4CAF50',
  },
});
