import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { PROFILE_DETAIL_COPY } from '../profile-data';
import { profileStyles as styles } from '../styles';

type ProfileDetailScreenProps = {
  detailId: string;
};

export function ProfileDetailScreen({ detailId }: ProfileDetailScreenProps) {
  const detail = PROFILE_DETAIL_COPY[detailId] || PROFILE_DETAIL_COPY['default'];
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#E0E7FF', '#F4F6F9']}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 250 }}
      />
      <ScrollView
        bounces={false}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: Math.max(insets.top, 18) + 12,
            paddingBottom: Math.max(insets.bottom, 18) + 24,
          },
        ]}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="#111827" />
          </Pressable>
          <Text style={styles.headerTitle}>{detail?.title}</Text>
          <View style={styles.headerIconButton}>
            <Ionicons name="ellipsis-horizontal" size={22} color="#2563EB" />
          </View>
        </View>

        <View style={styles.detailHero}>
          <View style={styles.detailHeroIconBox}>
            <Image source={detail?.heroIcon} style={styles.detailHeroIcon} contentFit="contain" />
          </View>
          <Text selectable style={styles.detailHeroTitle}>{detail?.title}</Text>
        </View>

        {detail?.sections?.map((section: any) => (
          <View key={section.heading} style={styles.detailSection}>
            <Text style={styles.detailSectionTitle}>{section.heading}</Text>
            {section.rows?.map((row: any) => (
              <View key={row.label} style={styles.detailRow}>
                <Text style={styles.detailLabel}>{row.label}</Text>
                <Text selectable style={styles.detailValue}>{row.value}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
