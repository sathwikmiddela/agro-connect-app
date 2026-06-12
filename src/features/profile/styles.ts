import { Platform, StyleSheet } from 'react-native';

const colors = {
  background: '#FAFAF9',
  card: '#FFFFFF',
  border: '#EBEBEB',
  text: '#000000',
  muted: '#737373',
  primary: '#4CAF50',
};

const softShadow = Platform.select({
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
    boxShadow: '0px 2px 4px rgba(76, 175, 80, 0.12)',
  },
});

export const profileStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 112,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    height: 150,
  },
  avatarWrap: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: colors.primary,
    overflow: 'hidden',
    backgroundColor: '#EAF7EB',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  farmerInfoBlock: {
    height: 88,
    gap: 8,
    justifyContent: 'center',
  },
  farmerNameBlock: {
    gap: 6,
  },
  farmerName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 18,
    lineHeight: 23,
    color: colors.text,
  },
  farmerMeta: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    lineHeight: 21,
    color: colors.text,
  },
  verifiedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 1,
    gap: 7,
    height: 30,
    width: 100,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.5)',
    borderRadius: 25,
  },
  verifiedIcon: {
    width: 20,
    height: 20,
  },
  verifiedText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  editButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 8,
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 14,
    marginTop: 30,
    marginBottom: 20,
    ...softShadow,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  editButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.card,
  },
  sectionList: {
    gap: 15,
  },
  sectionWrap: {
    gap: 6,
  },
  sectionHeaderWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    gap: 10,
    height: 29,
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    lineHeight: 21,
    color: colors.text,
  },
  sectionCard: {
    backgroundColor: colors.card,
    borderWidth: 1.8,
    borderColor: colors.border,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 5,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    height: 62,
  },
  actionIconBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  actionIcon: {
    width: 22,
    height: 22,
  },
  actionTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
  },
  actionDivider: {
    height: 0,
    borderTopWidth: 0.8,
    borderTopColor: colors.border,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 84,
    backgroundColor: colors.card,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    gap: 18,
    boxShadow: '0px 0px 4px rgba(76, 175, 80, 0.15)',
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    gap: 3,
    backgroundColor: colors.card,
    borderRadius: 15,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
    color: colors.muted,
  },
  tabLabelActive: {
    color: colors.primary,
  },
  // Legacy styles for other screens to compile
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detailHero: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detailHeroIconBox: {
    width: 60,
    height: 60,
    backgroundColor: '#eee',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailHeroIcon: {
    width: 30,
    height: 30,
  },
  detailHeroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  detailSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  detailLabel: {
    color: '#666',
  },
  detailValue: {
    fontWeight: '500',
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  field: {
    marginBottom: 15,
  },
  fieldLabel: {
    color: '#666',
    marginBottom: 5,
  },
  fieldBox: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  fieldValue: {
    fontSize: 16,
  },
});
