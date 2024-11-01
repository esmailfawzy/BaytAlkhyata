import {useNavigation, NavigatorScreenParams} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, View, SafeAreaView} from 'react-native';
import Pdf from 'react-native-pdf';

const PDFViewer = ({route, navigation}: {route: any; navigation: any}) => {
  const {url} = route.params;
  useEffect(() => {
    navigation.setOptions({title: route.params?.title || 'Default Title'});
  }, [navigation, route.params?.title]);
  return (
    <SafeAreaView style={styles.container}>
      <Pdf
        source={{uri: url}}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </SafeAreaView>
  );
};

export default PDFViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
