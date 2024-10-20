import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import {COLORS} from '../../../../constants/Colors';

const renderCustomBubble = props => {
  return (
    <Bubble
      {...props}
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
};

const ContactUs = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        // paddingHorizontal: 13,
        // backgroundColor: 'red',
      }}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        messagesContainerStyle={{
          backgroundColor: 'white',
        }}
        textInputProps={
          {
            // style: {color: COLORS.black, width: '90%'},
            // placeholderTextColor: '#666',
          }
        }
        renderBubble={renderCustomBubble}
      />
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
