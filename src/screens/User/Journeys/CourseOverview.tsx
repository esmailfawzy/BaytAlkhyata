import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ActionSheet, {useSheetRef} from 'react-native-actions-sheet';
import {TouchableOpacityProps} from 'react-native-gesture-handler';

function Button(
  props: TouchableOpacityProps & {
    btnTitleStyle?: TextStyle;
    title: string;
  },
) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: '#2563eb',
          paddingHorizontal: 10,
          borderRadius: 10,
          elevation: 5,
          shadowColor: 'black',
          shadowOffset: {width: 0.3 * 4, height: 0.5 * 4},
          shadowOpacity: 0.2,
          shadowRadius: 0.7 * 4,
          width: '100%',
          marginBottom: 10,
        },
        props.style,
      ]}>
      <Text
        style={[
          {
            color: 'white',
            fontWeight: 'bold',
          },
          props.btnTitleStyle,
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const CourseOverview = (): React.JSX.Element => {
  const ref = useSheetRef<'snap-me'>();

  return (
    <ActionSheet gestureEnabled snapPoints={[70, 100]}>
      <View
        style={{
          paddingHorizontal: 12,
          height: 400,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
          }}>
          Swipe me up!
        </Text>
        <Text
          style={{
            color: 'black',
          }}>
          OR
        </Text>
        <Button
          title="Snap with a tap!"
          onPress={() => {
            if (!ref.current) return;
            ref.current.snapToIndex(
              ref.current?.currentSnapIndex() === 0 ? 1 : 0,
            );
          }}
          style={{
            width: 250,
          }}
        />
        ,
      </View>
    </ActionSheet>
  );
};

export default CourseOverview;

const styles = StyleSheet.create({});
