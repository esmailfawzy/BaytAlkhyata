import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RPH, RPW} from '../utils/ScreenSize';
import {COLORS} from '../constants/Colors';
import {FONTS} from '../constants/Fonts';
import Eye from '../assets/icons/Eye';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

interface KnownProps {
  placeholder: string;
  required: boolean;
  keyboardType?: 'default' | 'number-pad' | 'email-address' | 'phone-pad';
  secureText?: boolean;
  borderRadius?: number;
}

const AuthInput = (props: KnownProps): React.JSX.Element => {
  const [isSecureText, setIsSecureText] = useState(true);
  const toogleSecureText = () => setIsSecureText(!isSecureText);
  return (
    <View
      style={[
        {
          width: '100%',
          // height: RPH(6),
          height: Platform.OS == 'android' ? 55 : 50,
          paddingHorizontal: 18,
          backgroundColor: COLORS.white,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: props.borderRadius || 35,
        },
        Platform.OS == 'ios' ? {...iosShadow} : {elevation: 4},
      ]}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={COLORS.inputColor}
        style={{
          textAlign: 'right',
          color: COLORS.black,
          flex: 1,
          height: '100%',
          fontSize: 14,
          fontWeight: '400',
          fontFamily: FONTS.Manuale,
          marginEnd: 8,
        }}
        cursorColor={COLORS.main}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureText && isSecureText}
      />
      {props.secureText && (
        <TouchableOpacity onPress={toogleSecureText}>
          <Eye />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({});
