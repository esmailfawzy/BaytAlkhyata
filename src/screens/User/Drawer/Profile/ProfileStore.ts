import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../../utils/ServerConfig';
import GlobalStore from '../../../../utils/GlobalStore';
import {Alert} from 'react-native';

interface ProfileType {
  fullName?: string;
  phone?: string;
  email?: string;
  image?: string;
  password?: string;
}

class ProfileStore {
  _id: string = '';
  name: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  image: string = '';
  isLoading: boolean = false;
  points: number = 0;
  constructor() {
    makeAutoObservable(this, {
      _id: observable,
      name: observable,
      phone: observable,
      email: observable,
      password: observable,
      image: observable,
      isLoading: observable,
      points: observable,
      setName: action,
      setPhone: action,
      setEmail: action,
      setPassword: action,
      setImage: action,
      setPoints: action,
      set_id: action,
    });
  }

  set_id(value: string) {
    this._id = value;
  }
  setPoints(value: number) {
    this.points = 0;
  }

  setName(value: string) {
    this.name = value;
  }

  setPhone(value: string) {
    this.phone = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  setImage(value: string) {
    this.image = value;
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  async getProfile() {
    try {
      this.setIsLoading(true);
      const res = await server.get('/student/profile', {
        headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
      });
      // console.log('Profile: ', res.data);
      if (res.status == 200) {
        this.set_id(res.data.result._id);
        console.log('res.data.result._id', res.data.result._id);
        this.setName(res.data.result.fullName);
        this.setPhone(res.data.result.phone);
        this.setEmail(res.data.result.email);
        this.setImage(res.data.result.image);
        this.setPoints(res.data.result.points);
      }
    } catch (error) {
      console.error('error getting profile', error);
    } finally {
      this.setIsLoading(false);
    }
  }

  async updateProfile() {
    try {
      this.setIsLoading(true);
      const data: ProfileType = {
        fullName: this.name,
        email: this.email,
        phone: this.phone,
      };

      if (this.image !== '' && !this.image.endsWith('/uploads/images/null')) {
        data['image'] = this.image;
      }

      if (this.password.length > 1) {
        data['password'] = this.password;
      }
      const res = await server.patch('/student/profile', data, {
        headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
      });
      if (res.status == 200) {
        Alert.alert(res.data.status, res.data.message);
        this.getProfile();
      }
    } catch (error) {
      console.error('error getting profiel', error);
    } finally {
      this.setIsLoading(false);
    }
  }
}

export default new ProfileStore();
