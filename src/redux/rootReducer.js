import { combineReducers } from "redux";
import detailsReducer from "./reducers/detailsReducer";
import { saveReducer } from "./reducers/saveReducers";
import templateReducer from "./reducers/templateReducer";
import userReducer from "./reducers/userReducer";

let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
  details: detailsReducer,
  saveState: saveReducer,
});

export default rootReducer;
