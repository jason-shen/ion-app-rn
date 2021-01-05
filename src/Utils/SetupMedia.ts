// @ts-ignore
export const SetupAudio = (type: string) => {
  const constraints = {
    audio: true,
    video: type === 'video' ? true : false,
    options: {
      mirror: true,
    },
  };
  return new Promise(async (resolve, reject) => {
    // @ts-ignore
    navigator.mediaDevices
      .getUserMedia(constraints)
      // @ts-ignore
      .then((stream) => {
        const localStream = stream;
        console.log('add local stream');
        resolve(localStream);
      })
      // @ts-ignore
      .catch((e) => {
        console.log('getUserMedia() error:' + e);
        reject(e);
      });
  });
};
