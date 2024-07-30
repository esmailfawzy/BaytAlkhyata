import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Button
        title={props.state.routeNames[0]}
        onPress={() => {
          navigation.navigate('Secondary');
        }}
      />
    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
