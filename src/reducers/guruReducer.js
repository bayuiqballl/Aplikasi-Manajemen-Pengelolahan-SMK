import {
  GET_GURU_SUCCESS,
  GET_GURU_FAILED,
  GET_GURU_BEGIN,
} from "../actions/guruAction";

const initialState = {
  data: [],
  error: null,
};

const guruReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GURU_BEGIN:
      return {
        ...state,
      };
    case GET_GURU_SUCCESS:
      return {
        ...state,
        data: action.result,
      };
    case GET_GURU_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default guruReducer;
