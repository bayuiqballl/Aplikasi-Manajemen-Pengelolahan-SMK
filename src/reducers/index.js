import { combineReducers } from "redux";
import siswaReducer from "./siswaReducer";
import guruReducer from "./guruReducer";
import staffReducer from "./staffReducer";

const rootReducer = combineReducers({
  siswaReducer,
  guruReducer,
  staffReducer,
});

export default rootReducer;
