import * as ActionTypes from "./constant";
import api from "../../../../api/index";
import apiPost from "../../../../api/apiPost";


export const actGetListMovieCallApi = () => {
  return (dispatch) => {
    dispatch(getListMovieRequest());
    api
      .get("/QuanLyPhim/LayDanhSachPhim")
      .then((result) => {
        dispatch(getListMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(getListMovieFail(err));
      });
  };
};

const getListMovieRequest = () => {
  return {
    type: ActionTypes.getListMovieRequest,
  };
};

const getListMovieSuccess = (data) => {
  return {
    type: ActionTypes.getListMovieSuccess,
    payload: data,
  };
};

const getListMovieFail = (err) => {
  return {
    type: ActionTypes.getListMovieFail,
    payload: err,
  };
};

// Sort Movie by Date

export const actGetListMovieByDate = (data) => {
  return (dispatch) => {
    dispatch(actGetListMovieByDateRequest());
    api
      .get(
        `/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=${data.maNhom}&soTrang=1&soPhanTuTrenTrang=10&tuNgay=${data.tuNgay}&denNgay=${data.denNgay}`
      )
      .then((result) => {
        dispatch(actGetListMovieByDateSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetListMovieByDateFail(err.response.data));
      });
  };
};

const actGetListMovieByDateRequest = () => {
  return {
    type: ActionTypes.getListMovieByDateRequest,
  };
};

const actGetListMovieByDateSuccess = (data) => {
  return {
    type: ActionTypes.getListMovieByDateSuccess,
    payload: data,
  };
};

const actGetListMovieByDateFail = (err) => {
  return {
    type: ActionTypes.getListMovieByDateFail,
    payload: err,
  };
};

// Add New Movie

export const actAddNewMovieCallApi = (formdata) => {
  return (dispatch) => {
		dispatch(actAddNewMovieRequest());
		if (formdata) {
      if (JSON.parse(sessionStorage.getItem("USER"))) {
        apiPost({
          headers: {
            Authorization: `Bearer ${
              JSON.parse(sessionStorage.getItem("USER")).accessToken
            }`,
          },
          url:
            "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
          method: "POST",
          data: formdata,
        })
          .then((rs) => {
            dispatch(actAddNewMovieSuccess(rs.data));
            dispatch(actGetListMovieCallApi());
          })
          .catch((er) => {
            dispatch(actAddNewMovieFail(er?.response?.data));
          });
      }
    }
  };
};

const actAddNewMovieRequest = () => {
  return {
    type: ActionTypes.addNewMovieRequest,
  };
};

const actAddNewMovieSuccess = (data) => {
  return {
    type: ActionTypes.addNewMovieSuccess,
    payload: data,
  };
};

const actAddNewMovieFail = (err) => {
  return {
    type: ActionTypes.addNewMovieFail,
    payload: err,
  };
};
