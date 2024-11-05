import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../utils/ServerConfig';

class ForgetPasswordStore {
  phoneNumber: string = '';
  otpCode: string = '';
  constructor() {
    makeAutoObservable(this, {
      phoneNumber: observable,
      setPhoneNumber: action,
      otpCode: observable,
      setOTPCode: action,
    });
  }

  setPhoneNumber(value: string) {
    this.phoneNumber = value;
  }

  setOTPCode(value: string) {
    this.otpCode = value;
  }
  async sendPhoneNumber() {
    try {
      const res = await server.post('/auth/forgot', {
        phone: this.phoneNumber,
      });
      if (res.status == 200) {
        return true;
      }
    } catch (error) {
      console.log('error sending phone number', error);
      return false;
    }
  }

  async verifyOTP() {
    try {
      const res = await server.post('/auth/verify-otp', {
        phone: this.phoneNumber,
        otp: this.otpCode,
      });
      if (res.status == 200) {
        return true;
      }
    } catch (error) {
      console.error('error verifying otp code', error);
      return false;
    }
  }

  async changePass(newPassword: string) {
    try {
      console.log({
        phone: this.phoneNumber,
        newPassword,
      });
      const res = await server.post('/auth/change-password', {
        phone: this.phoneNumber,
        newPassword,
      });

      if (res.status) {
        return true;
      }
    } catch (error) {
      console.error('error changing password', error);
      return false;
    }
  }
}

export default new ForgetPasswordStore();
