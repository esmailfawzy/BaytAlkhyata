import {action, makeAutoObservable, observable} from 'mobx';
import {server} from '../../../../../utils/ServerConfig';
import ProfileStore from '../../../Drawer/Profile/ProfileStore';
import GlobalStore from '../../../../../utils/GlobalStore';
import {IMessage} from 'react-native-gifted-chat';
import {ADMIN_ID, BASE_DOMAIN} from '../../../../../constants/AppConfig';

interface UserSchema {
  _id: string;
  name?: string;
  avatar?: string;
}
interface MessageSchema {
  _id: string;
  text: string;
  createdAt: string;
  receiver: string;
  sender: string;
  user: UserSchema;
}

// interface IMessage {
//   _id: string | number;
//   text: string;
//   createdAt: Date | number;
//   user: User;
//   receiver: string;
//   sender: string;
//   image?: string;
//   video?: string;
//   audio?: string;
//   system?: boolean;
//   sent?: boolean;
//   received?: boolean;
//   pending?: boolean;
//   quickReplies?: null;
// }

// interface User {
//   _id: string | number;
//   name?: string;
//   avatar?: string | number | null;
// }

interface FAQType {
  _id: string;
  title: string;
}
class ChatStore {
  messages: IMessage[] = [];
  faqArr: FAQType[] = [];

  constructor() {
    makeAutoObservable(this, {
      messages: observable,
      faqArr: observable,
      getMessages: action,
      resetMessages: action,
      pushToMessages: action,
      getFAQ: action,
      setFAQArray: action,
      resetFAQ: action,
    });
  }

  setMessages(value: []) {
    this.messages = value;
  }

  setFAQArray(value: FAQType[]) {
    this.faqArr = value;
  }

  resetFAQ() {
    this.faqArr = [];
  }

  resetMessages() {
    console.log('resetmessage');
    this.messages = [];
    // {
    //   user: {_id: ProfileStore._id},
    //   text: 'Demo message',
    //   _id: 2,
    //   createdAt: new Date(),
    // },
  }

  pushToMessages(obj: IMessage) {
    // console.log('obj', obj);
    this.messages.push(obj);
  }

  async getMessages() {
    try {
      const res = await server.get(`/message/${ProfileStore._id}`, {
        headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
      });
      if (res.status == 200 || res.data?.result?.length > 0) {
        // console.log('chat', res.data.result);
        // this.setMessages(res.data.result);
        // return res.data.result;
        this.resetMessages();
        res.data.result?.forEach((msg: any, ind: any) => {
          this.pushToMessages({
            _id: msg._id,
            text: msg.text,
            createdAt: msg.createdAt,
            user: {
              _id: msg.sender,
              avatar:
                msg.sender !== ProfileStore._id
                  ? BASE_DOMAIN + '/uploads/images/admin-avatart.jpg'
                  : ProfileStore.image,
            },
          });
        });
        this.messages.reverse();
      }
    } catch (error) {
      console.error('error getting messages', error);
    }
  }

  async sendMessage(text: string) {
    try {
      const res = await server.post(
        '/message',
        {
          sender: ProfileStore._id,
          reciver: ADMIN_ID,
          text,
        },
        {headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken}},
      );
      if (res.status == 201 || res.status == 200) {
        console.log('sended successfully', res.data);
        this.getMessages();
      }
    } catch (error) {
      console.error('error sending message', error);
    }
  }

  async getFAQ() {
    try {
      const res = await server.get('/student/FQA', {
        headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
      });
      if (res.status == 200 && res.data?.result.length > 0) {
        // this.resetFAQ();
        this.setFAQArray(res.data.result);
      }
    } catch (error) {
      console.error('error getting faq', error);
    }
  }
}

export default new ChatStore();
