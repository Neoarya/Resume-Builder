import { useDispatch, useSelector } from "react-redux";
import "./css/form.css";
import Preview from "./preview";
import { detailCreator } from "../redux/actions/detailsActions";
import { saveResume } from "../redux/actions/saveAction";
import { withRouter } from "react-router-dom";

let QualData = (props) => {
  let dispatch = useDispatch();

  let {
    schoolX,
    placeX,
    cgpaX,
    passX,
    schoolXII,
    placeXII,
    cgpaXII,
    passXII,
    degree,
    college,
    course,
    cplace,
    cgpa,
    year,
    isPublic,
  } = useSelector((state) => state.details);

  let { id } = useSelector((state) => state.saveState);

  let details = useSelector((state) => state.details);
  let code = useSelector((state) => state.template);
  let { uid } = useSelector((state) => state.user);
  return (
    <>
      <div className="qual-container">
        <div className="qual-form">
          <h3 className="m-4" id="headings">
            ~ Education Details ~
          </h3>
          <div className="row m-3">
            <div>
              <b style={{ color: "white" }}>Class Xth:</b>
              <hr style={{ color: "white" }} />
              <div className="col-5 mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="School Name"
                  value={schoolX}
                  onChange={(e) => {
                    dispatch(detailCreator({ schoolX: e.currentTarget.value }));
                  }}
                />
              </div>

              <div className="col-5 mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Place"
                  value={placeX}
                  onChange={(e) => {
                    dispatch(detailCreator({ placeX: e.currentTarget.value }));
                  }}
                />
              </div>
              <div className="col-5 mb-1">
                <input
                  type="number"
                  className="form-control"
                  placeholder="CGPA"
                  value={cgpaX}
                  onChange={(e) => {
                    dispatch(detailCreator({ cgpaX: e.currentTarget.value }));
                  }}
                />
              </div>
              <div className="col-5 mb-1">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Passout Year"
                  value={passX}
                  onChange={(e) => {
                    dispatch(detailCreator({ passX: e.currentTarget.value }));
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row m-3">
            <div>
              <b style={{ color: "white" }}>Class XIIth:</b>
              <hr style={{ color: "white" }} />
              <div className="col-5 mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="School Name"
                  value={schoolXII}
                  onChange={(e) => {
                    dispatch(
                      detailCreator({ schoolXII: e.currentTarget.value })
                    );
                  }}
                />
              </div>

              <div className="col-5 mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Place"
                  value={placeXII}
                  onChange={(e) => {
                    dispatch(
                      detailCreator({ placeXII: e.currentTarget.value })
                    );
                  }}
                />
              </div>
              <div className="col-5 mb-1">
                <input
                  type="number"
                  className="form-control"
                  placeholder="CGPA"
                  value={cgpaXII}
                  onChange={(e) => {
                    dispatch(detailCreator({ cgpaXII: e.currentTarget.value }));
                  }}
                />
              </div>
              <div className="col-5 mb-1">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Passout Year"
                  value={passXII}
                  onChange={(e) => {
                    dispatch(detailCreator({ passXII: e.currentTarget.value }));
                  }}
                />
              </div>
            </div>
          </div>

          <h3 className="m-4" id="headings">
            ~ Honors Details ~
          </h3>

          <div className="row m-3">
            <div className="col-5 mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="College Name"
                value={college}
                onChange={(e) => {
                  dispatch(detailCreator({ college: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5 mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Place"
                value={cplace}
                onChange={(e) => {
                  dispatch(detailCreator({ cplace: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Degree"
                value={degree}
                onChange={(e) => {
                  dispatch(detailCreator({ degree: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5 mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Course"
                value={course}
                onChange={(e) => {
                  dispatch(detailCreator({ course: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5">
              <input
                type="number"
                className="form-control"
                placeholder="CGPA"
                value={cgpa}
                onChange={(e) => {
                  dispatch(detailCreator({ cgpa: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5">
              <input
                type="number"
                className="form-control"
                placeholder="Passout Year"
                value={year}
                onChange={(e) => {
                  dispatch(detailCreator({ year: e.currentTarget.value }));
                }}
              />
            </div>
          </div>
          <hr style={{ color: "white" }} />

          <div className="form-check m-4">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isPublic}
              onClick={(e) => {
                dispatch(detailCreator({ isPublic: e.currentTarget.checked }));
              }}
              id="flexCheckDefault"
            />
            <label
              className="form-check-label"
              for="flexCheckDefault"
              style={{ color: "white" }}
            >
              Make Public
            </label>
          </div>
          <button
            onClick={() => {
              props.history.push("/personal");
            }}
            className="btn btn-primary"
            id="bck-btn"
          >
            Back
          </button>
        </div>
        <Preview />
      </div>
      <button
        onClick={() => {
          alert(`localhost:3000/publicpreview/${id}`);
        }}
        className="btn btn-primary qual-gen"
      >
        Generate Link
      </button>
      <button
        onClick={() => {
          dispatch(saveResume(uid, details, code));
        }}
        className="btn btn-primary qual-save"
      >
        Save to database
      </button>
    </>
  );
};

export default withRouter(QualData);
