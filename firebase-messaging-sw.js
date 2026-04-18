// web/firebase-messaging-sw.js
// Firebase Cloud Messaging service worker for background web push notifications.
// This file must live at the root of the /web directory.

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

// Replace the config values below with your Firebase web app config.
// Copy from: Firebase Console → Project Settings → Your apps → Web app → SDK setup
firebase.initializeApp({
  apiKey:            'TODO_WEB_API_KEY',
  authDomain:        'TODO_PROJECT_ID.firebaseapp.com',
  projectId:         'TODO_PROJECT_ID',
  storageBucket:     'TODO_PROJECT_ID.firebasestorage.app',
  messagingSenderId: 'TODO_SENDER_ID',
  appId:             'TODO_WEB_APP_ID',
});

const messaging = firebase.messaging();

// Handle background messages (browser tab not focused)
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title ?? 'SolarIQ Alert';
  const options = {
    body: payload.notification?.body ?? '',
    icon: '/icons/Icon-192.png',
  };
  self.registration.showNotification(title, options);
});
