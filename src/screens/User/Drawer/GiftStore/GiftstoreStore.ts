import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../../utils/ServerConfig';
import GlobalStore from '../../../../utils/GlobalStore';
import {Alert} from 'react-native';

export interface ProductType {
  _id: string;
  title: string;
  points: number;
  image: string;
}

class GiftstoreStore {
  products: Array<ProductType> = [];

  constructor() {
    makeAutoObservable(this, {
      products: observable,
      setProducts: action,
    });
  }

  setProducts(value: Array<ProductType>) {
    this.products = value;
  }

  async getAllProducts() {
    try {
      const res = await server.get('/student/product', {
        headers: {
          Authorization: 'Bearer ' + GlobalStore.jwtToken,
        },
      });
      if (res.status == 200) {
        this.setProducts(res.data.result);
      }
    } catch (error) {
      console.error('error getting books', error);
    }
  }

  async redeemProduct(id: string) {
    try {
      const res = await server.patch(`/student/product/redeem/${id}`, null, {
        headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
      });

      if (res.status == 200) {
        Alert.alert(res.data.status, res.data.message);
      }
    } catch (error) {
      console.error('error redeemProduct,', error);
    }
  }
}

export default new GiftstoreStore();
