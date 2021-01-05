import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
} from 'react-native-webrtc';
import {v4 as uuidv4} from 'uuid';
import {Client} from 'ion-sdk-js';
import {IonSFUJSONRPCSignal} from 'ion-sdk-js/lib/signal/json-rpc-impl';

import {UserContext} from '../Context/User';
import LocalVideo from '../Components/LocalVideo';
import {SetupAudio} from '../Utils/SetupMedia';
import RemoteVideo from '../Components/RemoteVideo';
import {SIGNAL_URL} from '../Constants';
import {Button} from 'react-native-elements';

// Polyfill WebRTC
// @ts-ignore
global.MediaStream = MediaStream;
// @ts-ignore
global.RTCSessionDescription = RTCSessionDescription;
// @ts-ignore
global.RTCPeerConnection = RTCPeerConnection;
// @ts-ignore
global.navigator.mediaDevices = {
  // @ts-ignore
  ...global.navigator.mediaDevices,
  getUserMedia: mediaDevices.getUserMedia,
};

const MainScreen = () => {
  const {user} = useContext(UserContext);
  const [localstream, setLocalstream] = useState(null);
  const [remotestream, setRemotestream] = useState([]);
  const userObj = JSON.parse(user as string);
  console.log(userObj);
  const sid = userObj.roomid || 'room1';
  const uid = uuidv4();
  const Localsignal = new IonSFUJSONRPCSignal(SIGNAL_URL + '/ws?uid=' + uid);
  const Remotesignal = new IonSFUJSONRPCSignal(SIGNAL_URL + '/ws?uid=' + uid);
  const clientLocal = new Client(Localsignal);
  const clientRemote = new Client(Remotesignal);
  // useEffect(() => {
  //   // Get a local stream
  //   LocalStream.getUserMedia({
  //     // @ts-ignore
  //     audio: true,
  //     video: true,
  //     simulcast: true, // enable simulcast
  //   }).then((stream) => {
  //     // @ts-ignore
  //     setLocalstream(stream);
  //   });
  // }, []);
  useEffect(() => {
    // @ts-ignore
    SetupAudio('video').then((stream) => setLocalstream(stream));
  }, []);

  const start = () => {
    clientLocal.join(sid);
    clientRemote.join(sid);

    clientLocal.publish(localstream as any);
  };

  clientRemote.ontrack = (track, stream) => {
    if (track === 'video') {
      setRemotestream(stream as any);
    }
  };

  return (
    <View>
      <LocalVideo stream={localstream as any} />
      <View>
        {remotestream.forEach((stream) => {
          <RemoteVideo stream={stream as any} />;
        })}
      </View>
      <Button title="Start" onPress={start} />
    </View>
  );
};

export default MainScreen;
