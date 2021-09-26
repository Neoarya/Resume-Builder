import { useDispatch, useSelector } from "react-redux";
import "./css/form.css";
import Preview from "./preview";
import { detailCreator } from "../redux/actions/detailsActions";
import { withRouter } from "react-router-dom";

let PersonalData = (props) => {
  let details = useSelector((state) => state.details);
  let dispatch = useDispatch();

  let { fname, lname, email, phone, city, state, psum, oname1, pos1, place1, crole1, oname2, pos2, place2, crole2 } = details;

  return (
    <>
      <div className="personal-container">
        <div className="personal-form">
          <h3 className="m-4" id = "headings">~ Personal Details ~</h3>
          <div className="row m-3">
            <div className="col-5 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={fname}
                onChange={(e) => {
                  dispatch(detailCreator({ fname: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                value={lname}
                onChange={(e) => {
                  dispatch(detailCreator({ lname: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                value={city}
                onChange={(e) => {
                  dispatch(detailCreator({ city: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                value={state}
                onChange={(e) => {
                  dispatch(detailCreator({ state: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  dispatch(detailCreator({ email: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5 mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  dispatch(detailCreator({ phone: e.currentTarget.value }));
                }}
              />
            </div>
            
          </div>
                <hr style ={{"color": "white"}}/>
          <h3 className="m-4" id = "headings">~ Professional Summary ~</h3>

          <div className="col-9 m-4">
            <textarea
              type="text"
              className="form-control"
              placeholder="Tell us something about yourself"
              value={psum}
              onChange={(e) => {
                dispatch(detailCreator({ psum: e.currentTarget.value }));
              }}
            />
          </div>
          <hr style ={{"color": "white"}}/>

          <h3 className="m-4" id = "headings">~ Employment History ~</h3>

          <div className="row m-1">
            <div className="col-3 m-2">
              <input
                type="text"
                className="form-control"
                placeholder="Position-1"
                value={pos1}
                onChange={(e) => {
                  dispatch(detailCreator({ pos1: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-3 m-2">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name-1"
                value={oname1}
                onChange={(e) => {
                  dispatch(detailCreator({ oname1: e.currentTarget.value }));
                }}
              />
            </div>

            <div className="col-2 m-2">
              <input
                type="text"
                className="form-control"
                placeholder="Place-1"
                value={place1}
                onChange={(e) => {
                  dispatch(detailCreator({ place1: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-9 m-2">
            <textarea
              type="text"
              className="form-control"
              placeholder="Your role in the company..."
              value={crole1}
              onChange={(e) => {
                dispatch(detailCreator({ crole1: e.currentTarget.value }));
              }}
            />
          </div>
          </div>

          <div className="row m-1 mt-5">
          <div className="col-3 m-2">
            <input
              type="text"
              className="form-control"
              placeholder="Position-2"
              value={pos2}
              onChange={(e) => {
                dispatch(detailCreator({ pos2: e.currentTarget.value }));
              }}
            />
          </div>
          <div className="col-3 m-2">
            <input
              type="text"
              className="form-control"
              placeholder="Company Name-2"
              value={oname2}
              onChange={(e) => {
                dispatch(detailCreator({ oname2: e.currentTarget.value }));
              }}
            />
          </div>

          <div className="col-2 m-2">
            <input
              type="text"
              className="form-control"
              placeholder="Place-2"
              value={place2}
              onChange={(e) => {
                dispatch(detailCreator({ place2: e.currentTarget.value }));
              }}
            />
          </div>
          <div className="col-9 m-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Your role in the company..."
            value={crole2}
            onChange={(e) => {
              dispatch(detailCreator({ crole2: e.currentTarget.value }));
            }}
          />
        </div>
        </div>
          

          <button
            onClick={() => {
              props.history.push("/qualData");
            }}
            className="btn btn-primary" id = "next-btn"
          >
            Next
          </button>
        </div>
        <Preview />
      </div>
    </>
  );
};

export default withRouter(PersonalData);
