import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { PROFILE_SECTIONS } from '../profile-data';
import { profileStyles as styles } from '../styles';
import { NavBar } from '@/components/nav-bar';

const AVATAR = require('@/assets/profile_assests/Ellipse 1008.png');
const VERIFIED_ICON = require('@/assets/profile_assests/image 65.svg');
const EDIT_ICON = require('@/assets/profile_assests/image 85.svg'); // Assuming 85 or similar is a good fallback for edit if needed, or we just use Ionicons as in original. Wait, original agricultural used Ionicons for edit. But screenshot doesn't show standard Ionicon, it shows image 27 which I don't have. I will use Ionicons for edit icon since image 27 is missing.

export function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['rgba(76, 175, 80, 0.5)', 'rgba(166, 215, 168, 0.5)', 'rgba(235, 235, 235, 0)']}
        locations={[0, 0.4928, 0.9856]}
        style={{ position: 'absolute', width: '100%', height: 200, left: 0, top: 0 }}
      />
      <ScrollView
        bounces={false}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingTop: Math.max(insets.top, 40) }]}
      >
        <View style={styles.profileHeader}>
          <View style={styles.avatarWrap}>
            <Image source={AVATAR} style={styles.avatar} contentFit="cover" />
          </View>
          <View style={styles.farmerInfoBlock}>
            <View style={styles.farmerNameBlock}>
              <Text selectable style={styles.farmerName}>Rahul Kumar</Text>
              <Text selectable style={styles.farmerMeta}>📍 Warangal, Telangana</Text>
            </View>
            <View style={styles.verifiedPill}>
              <Image source={VERIFIED_ICON} style={styles.verifiedIcon} contentFit="contain" />
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>
        </View>

        <Pressable style={styles.editButton} onPress={() => router.push('/profile/edit' as any)}>
          <Ionicons name="create-outline" size={20} color="#FFFFFF" />
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>

        <View style={styles.sectionList}>
          {PROFILE_SECTIONS.map((section) => (
            <View key={section.title} style={styles.sectionWrap}>
              <View style={styles.sectionHeaderWrap}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              <View style={styles.sectionCard}>
                {section.data.map((action, index) => (
                  <React.Fragment key={action.id}>
                    <Pressable
                      style={styles.actionRow}
                      onPress={() => router.push(action.href as any)}>
                      <View style={[styles.actionIconBox, { backgroundColor: action.iconBg }]}>
                        <Image source={action.icon} style={styles.actionIcon} contentFit="contain" />
                      </View>
                      <Text style={[styles.actionTitle, action.isLogout && { color: '#E62326' }]}>
                        {action.title}
                      </Text>
                    </Pressable>
                    {index < section.data.length - 1 && <View style={styles.actionDivider} />}
                  </React.Fragment>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Adding bottom bar exactly matching the design */}
      <NavBar />
    </View>
  );
}
