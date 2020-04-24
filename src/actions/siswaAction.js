import axios from "axios";

export const GET_SISWA_BEGIN = "GET_SISWA_BEGIN";
export const GET_SISWA_SUCCESS = "GET_SISWA_SUCCESS";
export const GET_SISWA_FAILED = "GET_SISWA_FAILED";

export const getSiswaBegin = () => {
  return {
    type: GET_SISWA_BEGIN,
  };
};

export const getSiswaSuccess = (result) => {
  return {
    type: GET_SISWA_SUCCESS,
    result,
  };
};

export const getSiswaFailed = (error) => {
  return {
    type: GET_SISWA_FAILED,
    error,
  };
};

export const siswaAction = () => {
  return (dispatch) => {
    dispatch(getSiswaBegin());

    axios
      .get(`https://5ea271e9b9f5ca00166c2a8f.mockapi.io/siswa`)
      .then((result) => dispatch(getSiswaSuccess(result.data)))
      .catch((error) => dispatch(getSiswaFailed(error.message)));
  };
};
