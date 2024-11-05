import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import JourneysData from '../../../../dummy_data/Journeys.json';
import {useNavigation} from '@react-navigation/native';
import Card from './Card';
import {COLORS} from '../../../../constants/Colors';
import {RPW} from '../../../../utils/ScreenSize';
import {observer} from 'mobx-react';
import DiplomasStore from './Stores/DiplomasStore';

const Journeys = observer((): React.JSX.Element => {
  const navigation = useNavigation();
  useEffect(() => {
    DiplomasStore.getAllDiplomas();
    DiplomasStore.getStudentDiplomas();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: RPW(8),
            alignItems: 'center',
          }}>
          {DiplomasStore.studentDiplomas.map((item, id) => (
            <Card key={id} item={item} id={id} owned={true} />
          ))}
          {DiplomasStore.allDiplomas.map((item, id) => (
            <Card key={id} item={item} id={id} owned={false} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default Journeys;

const styles = StyleSheet.create({});
