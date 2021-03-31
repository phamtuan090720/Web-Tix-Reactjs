import * as ActionTypes from "./constants";
import apiPost from "../../../../../api/apiPost";
import * as act from "../../../../../container/AdminTemplate/UserManager/modules/actions";

export const actChangeInfoUser = (user) => {
  return (dispatch) => {
    dispatch(UserRequest());
    if (user) {
      if (JSON.parse(sessionStorage.getItem("USER"))) {
        apiPost({
          headers: {
            Authorization: `Bearer ${
              JSON.parse(sessionStorage.getItem("USER")).accessToken
            }`,
          },
          url:
            "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
          method: "PUT",
          data: user,
        })
          .then((rs) => {
            dispatch(UserSuccess(rs.data));
            dispatch(act.actGetAllUserCallApi());
          })
          .catch((er) => {
            dispatch(UserFail(er?.response?.data));
          });
      }
    }
  };
};

const UserRequest = () => {
  return {
    type: ActionTypes.CHANGE_INFO_USER_REQUEST,
  };
};

const UserSuccess = (data) => {
  return {
    type: ActionTypes.CHANGE_INFO_USER_SUCCESS,
    payload: data,
  };
};

const UserFail = (err) => {
  return {
    type: ActionTypes.CHANGE_INFO_USER_FAIL,
    payload: err,
  };
};
