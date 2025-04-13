import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

async function requestNotificationPermission() {
  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }
  const authStatus = await messaging().requestPermission();
  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
}

export default function App() {
  useEffect(() => {
    // Request notification permission
    requestNotificationPermission().then((hasPermission) => {
      if (hasPermission) {
        // Get FCM token
        messaging().getToken().then(token => {
          console.log('FCM Token:', token);
          // Send this token to your server
        });
      }
    });

    // Handle foreground messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'New Notification',
        remoteMessage.notification?.body || 'Test notification'
      );
    });

    // Handle background/quit state messages
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Background message:', remoteMessage);
    });

    return unsubscribe;
  }, []);

  return (
    <WebView 
      source={{ uri: 'http://10.0.2.2:3000' }} // For Android emulator
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowsFullscreenVideo={true}
    />
  );
}