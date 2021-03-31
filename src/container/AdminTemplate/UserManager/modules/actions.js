import * as ActionTypes from "./constants";
import api from "../../../../api/index";
import apiPost from "../../../../api/apiPost";



// GET ALL USER
export const actGetAllUserCallApi = () => {
  return (dispatch) => {
    dispatch(actGetUserRequest());
    api
      .get("/QuanLyNguoiDung/LayDanhSachNguoiDung")
      .then((result) => {
        dispatch(actGetUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetUserFail(err));
      });
  };
};

const actGetUserRequest = () => {
  return {
    type: ActionTypes.getAllUserRequest,
  };
};

const actGetUserSuccess = (data) => {
  return {
    type: ActionTypes.getAllUserSuccess,
    payload: data,
  };
};

const actGetUserFail = (err) => {
  return {
    type: ActionTypes.getAllUserFail,
    payload: err,
  };
};

// ADD NEW USER
export const actAddNewUser = (data) => {
  return (dispatch) => {
		dispatch(actAddNewUserRequest());
		if (data) {
      if (JSON.parse(sessionStorage.getItem("USER"))) {
        apiPost({
          headers: {
            Authorization: `Bearer ${
              JSON.parse(sessionStorage.getItem("USER")).accessToken
            }`,
          },
          url:
            "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
          method: "POST",
          data,
        })
          .then((rs) => {
            dispatch(actAddNewUserSucess(rs.data));
            dispatch(actGetAllUserCallApi());
          })
          .catch((er) => {
            dispatch(actAddNewUserFail(er?.response?.data));
          });
      }
    }
  };
};

const actAddNewUserRequest = () => {
  return {
    type: ActionTypes.addNewUserRequest,
  };
};

const actAddNewUserSucess = (data) => {
  return {
    type: ActionTypes.addNewUserSuccess,
    payload: data,
  };
};

const actAddNewUserFail = (err) => {
  return {
    type: ActionTypes.addNewUserFail,
    payload: err,
  };
};

// SEARCH USER

export const actSearchUser = (data, group) => {
  return (dispatch) => {
    dispatch(actSearchUserRequest());
    api
      .get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${group}&tuKhoa=${data}`)
      .then((result) => {
        dispatch(actSearchUserSuccess(result?.data));
      })
      .catch((err) => {
        dispatch(actSearchUserFail(err?.response?.data));
      });
  };
};

const actSearchUserRequest = () => {
  return {
    type: ActionTypes.searchUserRequest,
  };
};

const actSearchUserSuccess = (data) => {
  return {
    type: ActionTypes.searchUserSuccess,
    payload: data,
  };
};

const actSearchUserFail = (err) => {
  return {
    type: ActionTypes.searchUserFail,
    payload: err,
  };
};
