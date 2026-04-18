// web/firebase-messaging-sw.js
// Firebase Cloud Messaging service worker — handles background web push notifications.
// Must live at the root of the /web directory.

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            'AIzaSyD6bS3CSzDyt0_0tbNLzzYW3QqlfBa2VkQ',
  authDomain:        'solar-iq-47e22.firebaseapp.com',
  projectId:         'solar-iq-47e22',
  storageBucket:     'solar-iq-47e22.firebasestorage.app',
  messagingSenderId: '921515443517',
  appId:             '1:921515443517:web:3f9cad485ca7f05cf1f154',
});

const messaging = firebase.messaging();

// Handle messages when the browser tab is in the background / closed
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title ?? 'SolarIQ Alert';
  const options = {
    body: payload.notification?.body ?? '',
    icon: '/icons/Icon-192.png',
  };
  self.registration.showNotification(title, options);
});
