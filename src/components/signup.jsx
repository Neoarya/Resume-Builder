import { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { auth } from "../firebase";
import "./css/signup.css";

let SignUp = (props) => {
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [email, setEmail] = useState("");
  let user = useSelector((state) => state.user);

  return (
    <>
      {user ? <Redirect to="/home" /> : ""}
      <div className="scontainer">
        <img
          className="imglogin"
          src="https://www.pikpng.com/pngl/b/307-3073981_jobs-png-transparent-background-job-png-clipart.png"
        />

        <div className="row" id="sbox">
          <div className="col-7 offset-4">
            <h1 className="mt-4 mb-4" id="sh1">
              Sign Up!
            </h1>
            <form className="mt-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" id="s-email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                  id="exampleInputEmail1"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  id="s-pass"
                  class="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div class="mb-3">
                <label
                  for="exampleInputPassword2"
                  id="s-cpass"
                  class="form-label"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.currentTarget.value);
                  }}
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (password === confirmPassword) {
                    auth.createUserWithEmailAndPassword(email, password);
                  }
                }}
                class="sbtn-signup"
              >
                Register me
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  props.history.push("/login");
                }}
                class="sbtn-login"
              >
                Ready! Let's go
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(SignUp);
