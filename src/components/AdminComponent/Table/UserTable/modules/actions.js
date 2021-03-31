import * as ActionTypes from "./constant";
import api from "../../../../../api";
import apiPost from "../../../../../api/apiPost";
import * as act from "../../../../../container/AdminTemplate/UserManager/modules/actions";

export const actDeleteUser = (user) => {
  return (dispatch) => {
    dispatch(actDeleteUserRequest());
    if (user) {
      if (JSON.parse(sessionStorage.getItem("USER"))) {
        apiPost({
          headers: {
            Authorization: `Bearer ${
              JSON.parse(sessionStorage.getItem("USER")).accessToken
            }`,
          },
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
          method: "DELETE",
        })
          .then((rs) => {
            dispatch(actDeleteUserSuccess(rs.data));
            dispatch(act.actGetAllUserCallApi());
          })
          .catch((er) => {
            dispatch(actDeleteUserFail(er?.response?.data));
          });
      }
    }
    // api
    //   .delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`)
    //   .then((result) => {
    //     dispatch(actDeleteUserSuccess(result.data));
    //     dispatch(act.actGetAllUserCallApi());
    //   })
    //   .catch((err) => {
    //     dispatch(actDeleteUserFail(err.response.data));
    //   });
  };
};

const actDeleteUserRequest = () => {
  return {
    type: ActionTypes.DELETE_USER_REQUEST,
  };
};
const actDeleteUserSuccess = (data) => {
  return {
    type: ActionTypes.DELETE_USER_SUCCESS,
    payload: data,
  };
};

const actDeleteUserFail = (err) => {
  return {
    type: ActionTypes.DELETE_USER_FAIL,
    payload: err,
  };
};
