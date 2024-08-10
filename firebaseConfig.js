
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX4F8GO7xBVBnXo5SkE9iGrnr0dt4RsCk",
  authDomain: "plantour-35420.firebaseapp.com",
  projectId: "plantour-35420",
  storageBucket: "plantour-35420.appspot.com",
  messagingSenderId: "343479150412",
  appId: "1:343479150412:web:623c750738ef4ab80f51e9"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export{auth};
