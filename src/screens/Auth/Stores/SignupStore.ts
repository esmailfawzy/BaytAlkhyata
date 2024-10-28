import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../utils/ServerConfig';
import {Alert} from 'react-native';
import GlobalStore from '../../../utils/GlobalStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JWT_TOKEN} from '../../../constants/AppConfig';

class SignupStore {
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  re_password: string = '';

  constructor() {
    makeAutoObservable(this, {
      name: observable,
      setName: action,
      email: observable,
      setEmail: action,
      phoneNumber: observable,
      setPhoneNumber: action,
      password: observable,
      setPassword: action,
      re_password: observable,
      setRePassword: action,
    });
  }

  setName(value: string) {
    this.name = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPhoneNumber(value: string) {
    this.phoneNumber = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  setRePassword(value: string) {
    this.re_password = value;
  }

  async doSignup() {
    try {
      if (this.password === this.re_password) {
        const res = await server.post(
          '/auth/signup',
          {
            fullName: this.name,
            password: this.password,
            phone: this.phoneNumber,
            email: this.email,
          },
          {headers: {'Content-Type': 'application/json'}},
        );
        console.log(res.status);
        if (res.status == 201) {
          return true;
        } else if (res.status == 400) {
          Alert.alert('تحقق من رقم الهاتف والبريد الالكتروني');
          return false;
        }
      } else {
        Alert.alert('كلمة المرور ليست متطابقة');
        return false;
      }
    } catch (error) {
      Alert.alert('تحقق من رقم الهاتف والبريد الالكتروني');
      console.error('error in doSignup', error);
      return false;
    }
  }

  async doLogin() {
    try {
      const res = await server.post(
        '/auth/login',
        {
          password: this.password,
          phone: this.phoneNumber,
        },
        {headers: {'Content-Type': 'application/json'}},
      );
      console.log(res.status);
      if (res.status == 200 && res.data?.result?.token) {
        console.log(res.data?.result?.token);
        GlobalStore.setJWTToken(res.data?.result?.token);
        await AsyncStorage.setItem(JWT_TOKEN, res.data?.result?.token);

        return true;
      } else if (res.status == 400) {
        Alert.alert('تحقق من رقم الهاتف والبريد الالكتروني');
        return false;
      }
    } catch (error) {
      Alert.alert('تحقق من رقم الهاتف وكلمة المرور');
      console.error('error in doSignup', error);
      return false;
    }
  }
}

export default new SignupStore();
