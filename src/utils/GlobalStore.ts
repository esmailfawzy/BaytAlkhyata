import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, makeObservable, observable} from 'mobx';
import {JWT_TOKEN} from '../constants/AppConfig';

class GlobalStore {
  jwtToken: string | null = null;

  constructor() {
    makeObservable(this, {
      jwtToken: observable,
      setJWTToken: action,
    });
  }

  async setJWTToken(value: string | null) {
    this.jwtToken = value;
  }
}

export default new GlobalStore();
