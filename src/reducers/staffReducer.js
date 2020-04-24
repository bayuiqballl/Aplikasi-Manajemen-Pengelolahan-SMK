import {
  GET_STAFF_SUCCESS,
  GET_STAFF_FAILED,
  GET_STAFF_BEGIN,
} from "../actions/StaffAction";

const initialState = {
  data: [],
  error: null,
};

const staffReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STAFF_BEGIN:
      return {
        ...state,
      };
    case GET_STAFF_SUCCESS:
      return {
        ...state,
        data: action.result,
      };
    case GET_STAFF_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default staffReducer;
