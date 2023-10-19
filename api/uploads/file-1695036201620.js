import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

let token = null
let messagIng = null

const firebaseConfig = {
  apiKey: "AIzaSyC9PmHWKRHN13stzdXGkF49Z163ueUAq8Q",
  authDomain: "kedi-3558c.firebaseapp.com",
  projectId: "kedi-3558c",
  storageBucket: "kedi-3558c.appspot.com",
  messagingSenderId: "611524495636",
  appId: "1:611524495636:web:7c4a401ca7348388e81a01",
  measurementId: "G-K4QN5BT7TW"
};

export const requestPermission = () => {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      messagIng = messaging

      getToken(messaging, {
        vapidKey:
          "BKCoa5EWppYDehWNjh9XKC42Ne7s6U4QvdRQhrj_N3qWdRc35yywSuBFxTPSDVCqKCYx3PHiNJmxPL3GVOBduaY",
      }).then((currentToken) => {
        if (currentToken) {
          token = currentToken
          console.log("currentToken :- ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

export const getFCMToken = () => {
  return token
}

requestPermission();