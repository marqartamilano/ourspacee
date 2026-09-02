importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDrkqmWZCm2xCFe5DCNY8qN56q1DAwuzRo",
  authDomain: "ourspacee9310.firebaseapp.com",
  projectId: "ourspacee9310",
  storageBucket: "ourspacee9310.firebasestorage.app",
  messagingSenderId: "473040127866",
  appId: "1:473040127866:web:dfae0278cdf9f8935b38c3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || "Our Space 🌸", {
    body: body || "Ada postingan baru!",
    icon: icon || "/icon.png",
    badge: "/icon.png",
    vibrate: [200, 100, 200],
    data: payload.data || {}
  });
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
