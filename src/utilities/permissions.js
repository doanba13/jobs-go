import { PermissionsAndroid } from 'react-native';

export const requestAudioPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.AUDIO_RECORDING, {
      title: 'Audio Recording Permission',
      message: 'This app needs access to your microphone to record audio.',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK'
    });
     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the audio');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
