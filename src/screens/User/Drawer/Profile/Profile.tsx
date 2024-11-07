import React, {LegacyRef, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
  RefreshControl,
} from 'react-native';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import UserIcon from '../../../../assets/icons/UserIcon';
import EditIcon from '../../../../assets/icons/EditIcon';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../../constants/Colors';
import {RPW} from '../../../../utils/ScreenSize';
import {observer} from 'mobx-react';
import ProfileStore from './ProfileStore';
import {CustomBtn} from '../../../../components';
import {launchImageLibrary} from 'react-native-image-picker';

const Profile = observer(() => {
  const navigation = useNavigation();
  const nameInputRef = useRef<TextInput | null>(null);
  const phoneInputRef = useRef<TextInput | null>(null);
  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    ProfileStore.getProfile();
  }, []);

  const selectImage = async () => {
    const res = await launchImageLibrary({
      mediaType: 'photo',
      presentationStyle: 'fullScreen',
      quality: 1,
      selectionLimit: 1,
    });

    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.errorMessage) {
      console.log('ImagePicker Error: ', res.errorMessage);
    } else {
      const uri = res.assets[0].uri || '';
      ProfileStore.setImage(uri);
      console.log(uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: RPW(120),
          height: RPW(120),
          borderRadius: RPW(120),
          // start: 0,
          // end: -RPW(10),
          top: -RPW(65),
          alignSelf: 'center',
          backgroundColor: '#E7A44D',
          position: 'absolute',
          overflow: 'hidden',
        }}
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={ProfileStore.isLoading}
            onRefresh={() => {
              ProfileStore.getProfile();
            }}
          />
        }
        keyboardDismissMode="on-drag"
        automaticallyAdjustKeyboardInsets>
        <View
          style={{
            flex: 1,
          }}>
          {/* Header with back button */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.backButton}>
              <ChevronRight color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{ProfileStore.name}</Text>
          </View>

          {/* Profile Avatar */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              {ProfileStore.image !== '' &&
              !ProfileStore.image.endsWith('/uploads/images/null') ? (
                <Image
                  source={{uri: ProfileStore.image}}
                  style={{
                    width: RPW(18),
                    height: RPW(18),
                    borderRadius: RPW(18),
                  }}
                  resizeMode="contain"
                />
              ) : (
                <UserIcon />
              )}
            </View>
            <TouchableOpacity onPress={selectImage} style={styles.editIcon}>
              <EditIcon />
            </TouchableOpacity>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>الاسم</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  ref={nameInputRef}
                  style={styles.input}
                  value={ProfileStore.name}
                  textAlign="right"
                  onChangeText={val => ProfileStore.setName(val)}
                />
                <TouchableOpacity
                  onPress={() => {
                    nameInputRef.current?.focus();
                  }}
                  style={styles.editButton}>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>هاتف التواصل</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  ref={phoneInputRef}
                  value={ProfileStore.phone}
                  onChangeText={val => ProfileStore.setPhone(val)}
                  textAlign="right"
                />
                <TouchableOpacity
                  onPress={() => {
                    phoneInputRef.current?.focus();
                  }}
                  style={styles.editButton}>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>البريد الالكتروني</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  ref={emailInputRef}
                  value={ProfileStore.email}
                  onChangeText={val => ProfileStore.setEmail(val)}
                  textAlign="right"
                  keyboardType="email-address"
                />
                <TouchableOpacity
                  onPress={() => {
                    emailInputRef.current?.focus();
                  }}
                  style={styles.editButton}>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.inputGroup, {marginBottom: RPW(15)}]}>
              <Text style={styles.label}>كلمة المرور</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  ref={passwordInputRef}
                  value={ProfileStore.password || '********'}
                  onChangeText={val => ProfileStore.setPassword(val)}
                  secureTextEntry
                  textAlign="right"
                />
                <TouchableOpacity
                  onPress={() => {
                    passwordInputRef.current?.focus();
                  }}
                  style={styles.editButton}>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>

            <CustomBtn
              title="تعديل"
              backgroundColor={COLORS.main}
              borderRadius={10}
              onPress={() => ProfileStore.updateProfile()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? 50 : 0,
    marginBottom: 20,
  },
  avatar: {
    // width: 100,
    // height: 100,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#FAB65E',
    padding: RPW(6),
  },
  editIcon: {
    position: 'absolute',
    left: '30%',
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    color: COLORS.black,
  },
  editButton: {
    padding: 8,
  },
});
