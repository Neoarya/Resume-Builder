import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";

import Login from "./components/login";
import Navbar from "./components/navbar";
import PersonalData from "./components/personalData";
import QualData from "./components/qualData";
import SignUp from "./components/signup";
import PublicPreview from "./components/publicPreview";
import { auth, firestore } from "./firebase";
import { userCreator } from "./redux/actions/userActions";

let App = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      dispatch(userCreator(user));

      if (user) {
        let { uid, email } = user;
        let docRef = firestore.collection("users").doc(uid);

        let doc = await docRef.get();

        if (!doc.exists) {
          docRef.set({
            email,
          });
        }
      }
    });

    return () => {
      unsub(); //to avoid memory leak (cleanup)
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/publicpreview/:rid">
            <PublicPreview />
          </Route>
          <Route path="/qualData">
            <QualData />
          </Route>
          <Route path="/personal">
            <PersonalData />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
