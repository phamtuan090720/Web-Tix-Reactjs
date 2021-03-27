// Lấy Trang này
import * as ActionTypes from "./constant";
import api from "../../../../api/index";
import { actSetLocationLogin } from "../../../../components/NavbarHome/modules/action";
export const actLoginCallApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        dispatch(actSetLocationLogin(result.data.maNhom));
        sessionStorage.setItem("USER", JSON.stringify(result.data));
        history.replace("/");
      })
      .catch((err) => {
        dispatch(actLoginFail(err?.response?.data));
      });
  };
};
// thêm cái này để set đăng nhập lại
export const actLogin = (user) => {
  return (dispatch) => {
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        dispatch(actSetLocationLogin(result.data.maNhom));
        console.log("đã đăng nhập");
      })
      .catch((err) => {
        dispatch(actLoginFail(err?.response?.data));
      });
  };
};
export const actUserLogot = () => {
  sessionStorage.removeItem("USER");
  return {
    type: ActionTypes.USER_LOGOUT,
  };
};

const actLoginRequest = () => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFail = (err) => {
  return {
    type: ActionTypes.LOGIN_FAIL,
    payload: err,
  };
};
