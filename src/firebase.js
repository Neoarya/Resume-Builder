import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZZUQ0Km_Uw4nvtj6Ss7wzLKYqCC6kq4A",
  authDomain: "resume-builder-816b0.firebaseapp.com",
  projectId: "resume-builder-816b0",
  storageBucket: "resume-builder-816b0.appspot.com",
  messagingSenderId: "434371101589",
  appId: "1:434371101589:web:657c7fa3ef0bf8bb78ec9c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

  