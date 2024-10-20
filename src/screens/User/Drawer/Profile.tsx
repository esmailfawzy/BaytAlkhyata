import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import ChevronRight from '../../../assets/icons/ChevronRight';
import UserIcon from '../../../assets/icons/UserIcon';
import EditIcon from '../../../assets/icons/EditIcon';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../constants/Colors';
import {RPW} from '../../../utils/ScreenSize';

const Profile = () => {
  const navigation = useNavigation();
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
            <Text style={styles.headerTitle}>اسماعيل فوزي</Text>
          </View>

          {/* Profile Avatar */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <UserIcon />
            </View>
            <TouchableOpacity style={styles.editIcon}>
              <EditIcon />
            </TouchableOpacity>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>الاسم</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value="اسماعيل فوزي"
                  textAlign="right"
                />
                <TouchableOpacity style={styles.editButton}>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>هاتف التواصل</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value="01554400447"
                  textAlign="right"
                />
                <TouchableOpacity style={styles.editButton}>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>البريد الالكتروني</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value="esmail.elshishtawy.2001@gmail.com"
                  textAlign="right"
                />
                <TouchableOpacity style={styles.editButton}>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>كلمة المرور</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value="***********"
                  secureTextEntry
                  textAlign="right"
                />
                <TouchableOpacity style={styles.editButton}>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
