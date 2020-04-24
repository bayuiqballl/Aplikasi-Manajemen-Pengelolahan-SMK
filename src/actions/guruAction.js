import axios from "axios";

export const GET_GURU_BEGIN = "GET_GURU_BEGIN";
export const GET_GURU_SUCCESS = "GET_GURU_SUCCESS";
export const GET_GURU_FAILED = "GET_GURU_FAILED";

export const getGuruBegin = () => {
  return {
    type: GET_GURU_BEGIN,
  };
};

export const getGuruSuccess = (result) => {
  return {
    type: GET_GURU_SUCCESS,
    result,
  };
};

export const getGuruFailed = (error) => {
  return {
    type: GET_GURU_FAILED,
    error,
  };
};

export const addGuru = (obj) => {
  return function (dispatch) {
    dispatch(getGuruBegin());

    axios
      .post("https://5ea271e9b9f5ca00166c2a8f.mockapi.io/guru", obj)
      .then(() => dispatch(guruShow()))
      .catch((error) => dispatch(getGuruFailed(error.message)));
  };
};

export const guruShow = () => {
  return (dispatch) => {
    dispatch(getGuruBegin());

    axios
      .get(`https://5ea271e9b9f5ca00166c2a8f.mockapi.io/guru`)
      .then((result) => dispatch(getGuruSuccess(result.data)))
      .catch((error) => dispatch(getGuruFailed(error.message)));
  };
};

export const deleteGuru = (id) => {
  return function (dispatch) {
    dispatch(getGuruBegin());
    axios
      .delete(`https://5ea271e9b9f5ca00166c2a8f.mockapi.io/guru/${id}`)
      .then(() => dispatch(guruShow()))
      .catch((error) => dispatch(getGuruFailed(error.massage)));
  };
};
