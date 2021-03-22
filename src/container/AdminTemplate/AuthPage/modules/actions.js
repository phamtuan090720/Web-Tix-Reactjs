import * as ActionTypes from "./constant";
import api from "../../../../api/index";
// export const actLoginCallApi = (user, history) => {
//   return (dispatch) => {
//     dispatch(actLoginRequest());
//     api
//       .post("/QuanLyNguoiDung/DangNhap", user)
//       .then((result) => {
//         dispatch(actLoginSuccess(result.data));
//         // if (result.data.maLoaiNguoiDung === "QuanTri") {
//         //   sessionStorage.setItem("userAdmin", JSON.stringify(result.data));
//         //   sessionStorage.setItem(
//         //     "qaccessToken",
//         //     JSON.stringify(result.data.accessToken)
//         //   );
//         //   history.replace("/dashboard");
//         // } if(result.data.maLoaiNguoiDung==="KhachHang") {
//         //   sessionStorage.setItem("userKH", JSON.stringify(result.data));
//         //   history.goBack();
//         // }
//         // setToken( JSON.stringify({
//         //   taiKhoan: result.data.taiKhoan,
//         //   accessToken: result.data.accessToken,
//         //   maLoaiNguoiDung: result.data.maLoaiNguoiDung,
//         // }))
//         sessionStorage.setItem(
//           "USER",JSON.stringify(result.data)
//         );
//         history.goBack();
//       })
//       .catch((err) => {
//         dispatch(actLoginFail(err.response.data));
//       });
//   };
// };
export const actLoginCallApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        sessionStorage.setItem("USER", JSON.stringify(result.data));
        history.replace("/");
      })
      .catch((err) => {
        dispatch(actLoginFail(err?.response?.data));
      });
  };
};
export const actUserLogot = (history) => {
  // sessionStorage.removeItem("accessToken");
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
