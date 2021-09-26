import { useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { auth } from "../firebase";
import { templateCreator } from "../redux/actions/templateActions";
import Tilt from "react-vanilla-tilt";
import "./css/home.css";

let Home = (props) => {
  let user = useSelector((state) => state.user);
  let code = useSelector((state) => state.template);
  let dispatch = useDispatch();
  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="template-container">
        <Tilt options={{ scale: 1, max: 25, "max-glare": 1 }}>
          <div
            onClick={() => {
              dispatch(templateCreator("A"));
              props.history.push("/personal");
            }}
            className="template"
            id="atemp"
          >
            <img src="http://localhost:3000/temp1.jpg" alt="template2" />
          </div>
        </Tilt>
        <Tilt options={{ scale: 1, max: 25, "max-glare": 1 }}>
          <div
            onClick={() => {
              dispatch(templateCreator("B"));
              props.history.push("/personal");
            }}
            className="template"
            id="btemp"
          >
            <img src="http://localhost:3000/skin1.svg" alt="template1" />
          </div>
        </Tilt>

        <Tilt options={{ scale: 1, max: 25, "max-glare": 1 }}>
          <div
            onClick={() => {
              dispatch(templateCreator("C"));
              props.history.push("/personal");
            }}
            className="template"
            id="ctemp"
          >
            <img src="http://localhost:3000/skin2.svg" alt="template2" />
          </div>
        </Tilt>
      </div>

      <button
        className="btn btn-secondary home-logout-btn"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default withRouter(Home);
