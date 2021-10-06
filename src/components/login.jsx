import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { auth } from "../firebase";
import "./css/login.css";

let Login = (props) => {
  let user = useSelector((state) => state.user);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
      {user ? <Redirect to="/home" /> : ""}

      <div className="container">
          <div className="row" id="box">
            <div className="col-7 offset-3">
              
              <h1 className="mt-4 mb-4">Login</h1>
              <form className="mt-4">
                <div className="mb-3">
                  <label for="exampleInputEmail1" id = "l-email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                    }}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" id = "l-pass" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.currentTarget.value);
                    }}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    auth.signInWithEmailAndPassword(email, password);
                  }}
                  type="submit"
                  className="btn-login"
                >
                  Let's go
                </button>
                <br />
                <br />
                <button
                  onClick={() => {
                    props.history.push("/signup");
                  }}
                  className="btn-signup"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default withRouter(Login);
