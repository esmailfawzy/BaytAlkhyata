// import {
//   Alert,
//   Button,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useCallback, useEffect, useRef, useState} from 'react';
// import {RPH, RPW} from '../../../../utils/ScreenSize';
// import {COLORS} from '../../../../constants/Colors';
// import CustomTrackPlayer from '../../../../components/CustomTrackPlayer';
// import CustomVideoPlayer from '../../Video/CustomViedeoPlayer';
// import {FONTS} from '../../../../constants/Fonts';
// import DownloadIcon from '../../../../assets/icons/DownloadIcon';
// import LessonImage from '../../../../assets/imgs/LessonImage';
// import {CustomBtn} from '../../../../components';
// import YoutubePlayer from 'react-native-youtube-iframe';

// interface KnownTypes {
//   currentStep: number;
//   setActiveStep: React.Dispatch<React.SetStateAction<number>>;
// }

// const LessonView = ({currentStep, setActiveStep}: KnownTypes) => {
//   const videoRefs = useRef<any>();

//   const [playing, setPlaying] = useState<boolean>(false);

//   const onStateChange = useCallback((state: any) => {
//     if (state === 'ended') {
//       setPlaying(false);
//       // Alert.alert('video has finished playing!');
//     }
//   }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying(prev => !prev);
//   }, []);

//   const pauseAllVideos = async () => {
//     for (let refIndex in videoRefs.current) {
//       const ref = videoRefs.current[refIndex];
//       if (ref && ref.pause) {
//         await ref.pause();
//       }
//     }
//   };

//   // if (currentStep == 5) {
//   //   return (
//   //     <View style={[styles.container]}>
//   //       <Text>Lesson Quiz</Text>
//   //     </View>
//   //   );
//   // }
//   if (currentStep % 2 == 0) {
//     return (
//       <View style={[styles.container]}>
//         <View
//           style={{
//             marginBottom: RPW(8),
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             width: '95%',
//           }}>
//           <LessonImage />
//           <View
//             style={{
//               width: '50%',
//               gap: 10,
//             }}>
//             <Text
//               style={{
//                 fontFamily: FONTS.Manuale,
//                 fontSize: 12,
//                 color: COLORS.black,
//                 fontWeight: '600',
//               }}>
//               عنوان الصورة
//             </Text>
//             <Text
//               style={{
//                 color: '#939090',
//                 fontFamily: FONTS.Manuale,
//                 fontSize: 12,
//                 fontWeight: '400',
//               }}>
//               لقد كان الكورس مذهلاً! تعلمت الكثير من المهارات الجديدة في الخياطة
//               وأصبح بإمكاني الآن تصميم وتنفيذ ملابسي بنفسي. المدربون كانوا
//               رائعين ودروسهم سهلة الفهمs
//             </Text>
//           </View>
//         </View>
//         <CustomTrackPlayer />
//         <View
//           style={{
//             marginVertical: RPW(8),
//             backgroundColor: 'transparent',
//             // height: RPW(),
//           }}>
//           <YoutubePlayer
//             height={RPW(55)}
//             play={playing}
//             videoId={'QrOcfn4Anro'}
//             onChangeState={onStateChange}
//             width={RPW(95)}
//             volume={100}
//           />
//         </View>
//         <View
//           style={{
//             width: '100%',
//             alignSelf: 'center',
//             marginVertical: RPW(8),
//           }}>
//           <CustomBtn
//             backgroundColor={COLORS.main}
//             borderRadius={10}
//             borderWidth={1}
//             title="امتحان علي ما سبق"
//             titleColor={COLORS.white}
//             onPress={() => {
//               setActiveStep(5);
//             }}
//           />
//         </View>
//       </View>
//     );
//   } else {
//     return (
//       <View style={[styles.container]}>
//         <CustomVideoPlayer
//           ref={el => (videoRefs.current = el)}
//           source={{
//             uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//           }}
//           componentStyle={styles.videoPlayer}
//           resizeMode="cover"
//           isSoundButton={true}
//         />
//         <View
//           style={{
//             marginTop: RPW(8),
//           }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               width: '100%',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: RPW(6),
//             }}>
//             <Text
//               style={{
//                 fontFamily: FONTS.Manuale,
//                 fontSize: 12,
//                 fontWeight: '600',
//                 color: COLORS.black,
//               }}>
//               عنوان الفديو
//             </Text>
//             <Text
//               style={{
//                 fontFamily: FONTS.Manuale,
//                 fontSize: 12,
//                 fontWeight: '600',
//                 color: COLORS.main,
//               }}>
//               3:25
//             </Text>
//           </View>

//           <Text
//             style={{
//               fontFamily: FONTS.Manuale,
//               color: '#939090',
//               fontSize: 14,
//               fontWeight: '400',
//               textAlign: 'left',
//               marginBottom: RPW(8),
//             }}>
//             لقد كان الكورس مذهلاً! تعلمت الكثير من المهارات الجديدة في الخياطة
//             وأصبح بإمكاني الآن تصميم وتنفيذ ملابسي بنفسي. المدربون كانوا رائعين
//             ودروسهم سهلة الفهم
//           </Text>
//           <View
//             style={{
//               borderColor: '#D9D9D9',
//               width: RPW(65),
//               alignSelf: 'center',
//               borderWidth: 1,
//             }}
//           />
//         </View>
//         <TouchableOpacity
//           style={{
//             width: '95%',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             backgroundColor: COLORS.main,
//             borderRadius: 10,
//             // borderWidth: 1,
//             height: RPH(7),
//             marginTop: RPW(10),
//             marginBottom: RPW(8),
//           }}>
//           <View
//             style={{
//               // backgroundColor: COLORS.main,
//               borderTopEndRadius: 10,
//               borderBottomEndRadius: 10,
//               padding: RPW(4),
//               height: RPH(7),
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <DownloadIcon />
//           </View>

//           <Text
//             style={{
//               fontFamily: FONTS.Manuale,
//               fontSize: 12,
//               fontWeight: '600',
//               color: COLORS.white,
//             }}>
//             تلخيص المحاضرة
//           </Text>

//           <View
//             style={{
//               backgroundColor: '#FAB65E',
//               borderTopEndRadius: 10,
//               borderBottomEndRadius: 10,
//               padding: RPW(4),
//               height: RPH(7),
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 fontFamily: FONTS.Manuale,
//                 color: COLORS.white,
//                 fontSize: 12,
//                 fontWeight: '600',
//               }}>
//               .pdf
//             </Text>
//           </View>
//         </TouchableOpacity>

//         <View
//           style={{
//             width: '100%',
//             alignSelf: 'center',
//             marginVertical: RPW(8),
//           }}>
//           <CustomBtn
//             backgroundColor={COLORS.main}
//             borderRadius={10}
//             borderWidth={1}
//             title="امتحان علي ما سبق"
//             titleColor={COLORS.white}
//             onPress={() => {
//               setActiveStep(5);
//             }}
//           />
//         </View>
//       </View>
//     );
//   }
// };

// export default LessonView;

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: RPH(2),
//     // marginBottom: RPH(8),
//     width: '95%',
//     alignSelf: 'center',
//     alignItems: 'center',
//     backgroundColor: COLORS.white,
//   },
//   videoPlayer: {
//     width: '100%',
//     height: '100%',
//   },
// });
