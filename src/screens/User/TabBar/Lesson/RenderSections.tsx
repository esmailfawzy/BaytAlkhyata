import {
  Image,
  Modal,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import {FONTS} from '../../../../constants/Fonts';
import DownloadIcon from '../../../../assets/icons/DownloadIcon';
import CustomVideoPlayer from '../../Video/CustomViedeoPlayer';
import {CustomBtn} from '../../../../components';

import {observer} from 'mobx-react';
import ChapterStore from '../JourneyHome/Stores/ChapterStore';
import NotificationCard from '../Notifications/NotificationCard';
import LevelCard from './Component/LevelCard';
import LevelStore from './Stores/LevelStore';

type LevelsType = {
  currentStep: number;
  // setActiveStep?: React.Dispatch<React.SetStateAction<number>>;
};

const RenderSections: React.FC<LevelsType> = observer(({currentStep}) => {
  const videoRefs = useRef<any>();
  useEffect(() => {
    console.log('current level', currentStep);
    LevelStore.getSections();
  }, [currentStep, LevelStore.currentLevel]);

  const closeModal = () => {
    LevelStore.setIsVisible(false);
  };
  return (
    <View style={[styles.container]}>
      <Text
        style={{
          fontFamily: FONTS.Manuale,
          fontSize: 18,
          fontWeight: '500',
          color: COLORS.black,
        }}>
        {ChapterStore.currentChapter?.title}
      </Text>

      <SectionList
        sections={LevelStore.sections}
        renderItem={({item, index}) => <LevelCard item={item} key={index} />}
        renderSectionHeader={({section}) => (
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              justifyContent: 'center',
              backgroundColor: '#FF7800',
              padding: RPW(3),
              marginTop: RPW(6),
            }}>
            <Text style={styles.taskTitle}>{section.title}</Text>
          </View>
        )}
        // SectionSeparatorComponent={() => (
        //   <View
        //     style={{
        //       width: '95%',
        //       height: 1,
        //       backgroundColor: 'red',
        //       marginVertical: 26,
        //     }}
        //   />
        // )}
        keyExtractor={(item, index) => index.toString()}
        stickyHeaderHiddenOnScroll={false}
        stickySectionHeadersEnabled={false}
        bounces={false}
      />

      <Modal visible={LevelStore.isVisible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.centeredView}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.contentText}>
              {LevelStore.currentSectionItem?.title}
            </Text>
            <Text style={styles.contentText}>
              {LevelStore.currentSectionItem?.description}
            </Text>

            {LevelStore.currentSectionItem?.type == 'video' && (
              <CustomVideoPlayer
                ref={el => (videoRefs.current = el)}
                source={{uri: `${LevelStore.currentSectionItem?.file}`}}
                componentStyle={styles.videoPlayer}
                resizeMode="cover"
                isSoundButton={true}
              />
            )}

            {LevelStore.currentSectionItem?.type == 'image' && (
              <Image
                resizeMode="contain"
                source={{uri: `${LevelStore.currentSectionItem?.file}`}}
                style={{width: '100%', height: '60%'}}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default RenderSections;

const styles = StyleSheet.create({
  container: {
    marginTop: RPH(2),
    marginBottom: RPH(8),
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flex: 1,
  },

  taskTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
    // textAlign: 'left',
  },

  videoPlayer: {
    width: '100%',
    height: '100%',
  },
  // modal style
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  centeredView: {
    width: RPW(95),
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: RPW(3),
    color: 'black',
  },
});
