import {action, makeAutoObservable} from 'mobx';
import {server} from '../../../utils/ServerConfig';
import GlobalStore from '../../../utils/GlobalStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JWT_TOKEN} from '../../../constants/AppConfig';

class AuthStore {
  constructor() {
    makeAutoObservable(this, {
      doLogout: action,
    });
  }

  async doLogout(navigation: any) {
    try {
      const res = await server.post('/auth/logout', null, {
        headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
      });
      // console.log('res',)
      // if (res.status == 200) {

      // }
    } catch (error) {
      console.log('error from doLogout', error);
    } finally {
      await AsyncStorage.removeItem(JWT_TOKEN);
      navigation.navigate('AuthStack');
    }
  }
}

export default new AuthStore();
