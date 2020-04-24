import axios from "axios";

export const GET_STAFF_BEGIN = "GET_STAFF_BEGIN";
export const GET_STAFF_SUCCESS = "GET_STAFF_SUCCESS";
export const GET_STAFF_FAILED = "GET_STAFF_FAILED";

export const getStaffBegin = () => {
  return {
    type: GET_STAFF_BEGIN,
  };
};

export const getStaffSuccess = (result) => {
  return {
    type: GET_STAFF_SUCCESS,
    result,
  };
};

export const getStaffFailed = (error) => {
  return {
    type: GET_STAFF_FAILED,
    error,
  };
};

export const addStaff = (obj) => {
  return function (dispatch) {
    dispatch(getStaffBegin());

    axios
      .post("https://5ea271e9b9f5ca00166c2a8f.mockapi.io/staff", obj)
      .then(() => dispatch(staffShow()))
      .catch((error) => dispatch(getStaffFailed(error.message)));
  };
};

export const staffShow = () => {
  return (dispatch) => {
    dispatch(getStaffBegin());

    axios
      .get(`https://5ea271e9b9f5ca00166c2a8f.mockapi.io/staff`)
      .then((result) => dispatch(getStaffSuccess(result.data)))
      .catch((error) => dispatch(getStaffFailed(error.message)));
  };
};

export const deleteStaff = (id) => {
  return function (dispatch) {
    dispatch(getStaffBegin());
    axios
      .delete(`https://5ea271e9b9f5ca00166c2a8f.mockapi.io/staff/${id}`)
      .then(() => dispatch(staffShow()))
      .catch((error) => dispatch(getStaffFailed(error.massage)));
  };
};
