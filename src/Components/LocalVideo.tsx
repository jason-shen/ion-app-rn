import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {RTCView} from 'react-native-webrtc';

interface PropsType {
  stream: string;
}

const LocalVideo: FC<PropsType> = ({stream}: PropsType) => {
  console.log('got stream');
  return (
    <View style={{width: '100%'}}>
      <RTCView
        key={2}
        mirror={true}
        style={styles.rtcView}
        objectFit="contain"
        // @ts-ignore
        streamURL={stream && stream.toURL()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rtcView: {
    right: 10,
    width: 100, //dimensions.width,
    height: 200, //dimensions.height / 2,
    backgroundColor: 'black',
  },
  rtcViewRemote: {
    width: '100%', //dimensions.width - 30,
    height: '100%', //dimensions.height / 2,
    backgroundColor: 'black',
  },
});

export default LocalVideo;
