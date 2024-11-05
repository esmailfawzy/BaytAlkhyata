import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {
  Bubble,
  GiftedChat,
  IMessage,
  InputToolbarProps,
} from 'react-native-gifted-chat';
import {COLORS} from '../../../../constants/Colors';
import {observer} from 'mobx-react';
import ChatStore from './Store/ChatStore';
import ProfileStore from '../../Drawer/Profile/ProfileStore';
import {RPW} from '../../../../utils/ScreenSize';
import {FONTS} from '../../../../constants/Fonts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const renderCustomBubble = observer(() => {
  return (
    <Bubble
      wrapperStyle={{
        right: {
          backgroundColor: '#6200ea',
          borderRadius: 10,
          padding: 5,
        },
        left: {
          backgroundColor: '#e0e0e0',
          borderRadius: 10,
          padding: 5,
        },
      }}
      textStyle={{
        right: {
          color: '#fff',
        },
        left: {
          color: '#000',
        },
      }}
    />
  );
});

const RenderAccessory = observer(() => {
  return (
    <View
      style={{
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        margin: RPW(1),
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {ChatStore.faqArr.map((item, ind) => (
        <TouchableOpacity
          key={ind}
          onPress={() => {
            ChatStore.sendMessage(item.title);
          }}
          style={{
            // width: '90%',
            padding: RPW(1),
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.main,
            margin: 4,
          }}>
          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 12,
              color: COLORS.black,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
});

const ContactUs = observer(() => {
  const [messages, setMessages] = useState<IMessage[]>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    ChatStore.getMessages();
    ChatStore.getFAQ();
    // setMessages(ChatStore.messages);
    console.log(ProfileStore._id);
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer 1',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 1,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    //   {
    //     _id: 2,
    //     text: 'Hello developer 2 my',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 1,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    //   {
    //     _id: 3,
    //     text: 'Hello esmail',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);
  }, []);

  // const onSend = useCallback((messages = []) => {
  //   setMessages(previousMessages =>
  //     GiftedChat.append(previousMessages, messages),
  //   );
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: RPW(2),
        backgroundColor: 'white',
      }}>
      <GiftedChat
        messages={ChatStore.messages}
        renderAvatarOnTop
        showUserAvatar
        onPressAvatar={ChatStore.getMessages}
        onSend={messages => {
          console.log('messages', messages);
          // onSend(messages);
          ChatStore.sendMessage(messages[0].text);
        }}
        user={{
          _id: ProfileStore._id,
        }}
        messagesContainerStyle={{
          backgroundColor: 'white',
        }}
        renderChatFooter={() => <RenderAccessory />}
        // textInputProps={{
        //   style: {
        //     color: COLORS.black,
        //     width: '90%',
        //     marginBottom: insets.bottom + RPW(1),
        //   },
        //   // placeholderTextColor: '#666',
        // }}
      />
    </View>
  );
});

export default ContactUs;

const styles = StyleSheet.create({});
