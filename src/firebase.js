import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDB9fvZhnZSvA41rVAXd--Ab05C5znYteU",
  authDomain: "resume-maker-4e9ed.firebaseapp.com",
  projectId: "resume-maker-4e9ed",
  storageBucket: "resume-maker-4e9ed.appspot.com",
  messagingSenderId: "50617759578",
  appId: "1:50617759578:web:7838c644bd5fbbfe096563"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

  