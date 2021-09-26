let initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  psum: "",
  oname1: "",
  pos1: "",
  place1: "",
  crole1: "",
  oname2: "",
  pos2: "",
  place2: "",
  crole2: "",
  schoolX: "",
  placeX: "",
  cgpaX: "",
  passX: "",
  schoolXII: "",
  placeXII: "",
  cgpaXII: "",
  passXII: "",
  degree: "",
  college: "",
  cplace: "",
  course: "",
  cgpa: "",
  year: "",
  isPublic: false,
};

let detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return { ...state, ...action.payload }; //spread operator overwrites previous empty values in state with latest payload values
    default:
      return state;
  }
};

export default detailsReducer;
