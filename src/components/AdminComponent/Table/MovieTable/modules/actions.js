import * as ActionTypes from "./constant";
import apiPost from "../../../../../api/apiPost";
import * as act from "../../../../../container/AdminTemplate/MovieManager/modules/actions";

export const actDeleteMovie = (maPhim) => {
  return (dispatch) => {
    dispatch(actDeleteMovieRequest());
    if (maPhim) {
      if (JSON.parse(sessionStorage.getItem("USER"))) {
        apiPost({
          headers: {
            Authorization: `Bearer ${
              JSON.parse(sessionStorage.getItem("USER")).accessToken
            }`,
          },
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
          method: "DELETE",
        })
          .then((rs) => {
            dispatch(actDeleteMovieSuccess(rs.data));
            dispatch(act.actGetListMovieCallApi());
          })
          .catch((er) => {
            dispatch(actDeleteMovieFail(er?.response?.data));
          });
      }
    }
  };
};

const actDeleteMovieRequest = () => {
  return {
    type: ActionTypes.deleteMovieRequest,
  };
};

const actDeleteMovieSuccess = (data) => {
  return {
    type: ActionTypes.deleteMovieSuccess,
    payload: data,
  };
};

const actDeleteMovieFail = (err) => {
  return {
    type: ActionTypes.deleteMovieFail,
    payload: err,
  };
};

// CHANGE INFO MOVIE

export const actChangeInfoMovie = (fomData) => {
  return (dispatch) => {
    dispatch(actChangeInfoMovieRequest());
    if (fomData) {
      if (JSON.parse(sessionStorage.getItem("USER"))) {
        apiPost({
          headers: {
            Authorization: `Bearer ${
              JSON.parse(sessionStorage.getItem("USER")).accessToken
            }`,
          },
          url:
            "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
          method: "POST",
          data: fomData,
        })
          .then((rs) => {
            dispatch(actChangeInfoMovieSuccess(rs.data));
            dispatch(act.actGetListMovieCallApi());
          })
          .catch((er) => {
            dispatch(actChangeInfoMoviefail(er?.response?.data));
          });
      }
    }
  };
};

const actChangeInfoMovieRequest = () => {
  return {
    type: ActionTypes.changeInfoMovieRequest,
  };
};

const actChangeInfoMovieSuccess = (data) => {
  return {
    type: ActionTypes.changeInfoMovieSuccess,
    payload: data,
  };
};

const actChangeInfoMoviefail = (err) => {
  return {
    type: ActionTypes.changeInfoMovieFail,
    payload: err,
  };
};
