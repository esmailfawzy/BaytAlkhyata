import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import {COLORS} from '../../../../constants/Colors';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const PDFViewer = ({route, navigation}: {route: any; navigation: any}) => {
  const {url} = route.params;
  const [pdfPath, setPdfPath] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    console.log(url);
    navigation.setOptions({title: route.params?.title || 'PDF Viewer'});

    const downloadPdf = async () => {
      try {
        const {fs} = RNFetchBlob;
        const path = fs.dirs.DocumentDir + '/temp.pdf';

        // Download the PDF
        const res = await RNFetchBlob.config({
          trusty: true, // Bypass SSL if needed for testing
          path,
        }).fetch('GET', url);

        setPdfPath(res.path());
      } catch (error) {
        console.error('PDF download error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    downloadPdf();
  }, [navigation, route.params?.title]);

  if (!pdfPath) return null;
  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator color={COLORS.main} size={'large'} />
      </View>
    );
  return (
    <SafeAreaView style={styles.container}>
      <Pdf
        source={{
          uri: pdfPath,
        }}
        trustAllCerts
        // onLoadComplete={(numberOfPages, filePath) => {
        //   console.log(`Number of pages: ${numberOfPages}`);
        // }}
        // onPageChanged={(page, numberOfPages) => {
        //   console.log(`Current page: ${page}`);
        // }}
        onLoadProgress={percent => {
          console.log(percent);
        }}
        onError={error => {
          console.error(error);
        }}
        // onPressLink={uri => {
        //   console.log(`Link pressed: ${uri}`);
        // }}
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
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
