import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {RTCView} from 'react-native-webrtc';

interface PropsType {
  stream: string;
}

const RemoteVideo: FC<PropsType> = ({stream}: PropsType) => {
  console.log(stream);
  return (
    <View>
      <RTCView
        key={2}
        mirror={true}
        objectFit="contain"
        // @ts-ignore
        streamURL={stream && stream.toURL()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rtcView: {
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

export default RemoteVideo;
