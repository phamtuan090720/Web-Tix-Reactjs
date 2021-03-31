import * as ActionTypes from "./constant";
import api from "../../../../api/index";
import apiPost from "../../../../api/apiPost";
import { data } from "jquery";

export const actGetDetailCinema = () => {
  return (dispatch) => {
    dispatch(actGetDetailCinemaRequest());
    api
      .get("/QuanLyRap/LayThongTinHeThongRap")
      .then((result) => {
        dispatch(actGetDetailCinemaSuccess(result?.data));
      })
      .catch((err) => {
        dispatch(actGetDetailCinemaFail(err?.response?.data));
      });
  };
};

const actGetDetailCinemaRequest = () => {
  return {
    type: ActionTypes.getAllCinemaRequest,
  };
};

const actGetDetailCinemaSuccess = (data) => {
  return {
    type: ActionTypes.getAllCinemaSuccess,
    payload: data,
  };
};

const actGetDetailCinemaFail = (err) => {
  return {
    type: ActionTypes.getAllCinemaFail,
    payload: err,
  };
};

// GET SHOWTIMES OF MOVIES

export const actGetMovieOfCinema = (maHeThongRap, maNhom) => {
  return (dispatch) => {
    dispatch(actGetMovieOfCinemaRequest());
    api
      .get(
        `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`
      )
      .then((result) => {
        dispatch(actGetMovieOfCinemaSuccess(result?.data));
      })
      .catch((err) => {
        dispatch(actGetMovieOfCinemaFail(err?.response?.data));
      });
  };
};

const actGetMovieOfCinemaRequest = () => {
  return {
    type: ActionTypes.getShowtimesRequest,
  };
};

const actGetMovieOfCinemaSuccess = (data) => {
  return {
    type: ActionTypes.getShowtimesSuccess,
    payload: data,
  };
};

const actGetMovieOfCinemaFail = (err) => {
  return {
    type: ActionTypes.getShowtimesFail,
    payload: err,
  };
};

// LAY DANH SACH PHONG VE

export const actlayDanhSachPhongVe = (malichChieu) => {
  return (dispatch) => {
    dispatch(actlayDanhSachPhongVeRequest());
    api
      .get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${malichChieu}`)
      .then((rs) => {
        dispatch(actlayDanhSachPhongVeSuccess(rs.data));
      })
      .catch((err) => {
        dispatch(actlayDanhSachPhongVeFail(err?.response?.data));
      });
  };
};

const actlayDanhSachPhongVeRequest = () => {
  return {
    type: ActionTypes.getCinemaRequest,
  };
};

const actlayDanhSachPhongVeSuccess = (data) => {
  return {
    type: ActionTypes.getCinemaSuccess,
    payload: data,
  };
};

const actlayDanhSachPhongVeFail = (err) => {
  return {
    type: ActionTypes.getCinemaFail,
    payload: err,
  };
};

//TAO LICH CHIEU

export const actCreateShowTimes = (data) => {
  return (dispatch) => {
		dispatch(createShowTimesRequest());
		if (data) {
      if (JSON.parse(sessionStorage.getItem("USER"))) {
        apiPost({
          headers: {
            Authorization: `Bearer ${
              JSON.parse(sessionStorage.getItem("USER")).accessToken
            }`,
          },
          url:
            "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
          method: "POST",
          data,
        })
          .then((rs) => {
            dispatch(createShowTimesSuccess(rs.data));
          })
          .catch((er) => {
            dispatch(createShowTimesFail(er?.response?.data));
          });
      }
    }
  };
};

const createShowTimesRequest = () => {
  return {
    type: ActionTypes.createShowTimesRequest,
  };
};

const createShowTimesSuccess = (data) => {
  return {
    type: ActionTypes.createShowTimesSuccess,
    payload: data,
  };
};

const createShowTimesFail = (err) => {
  return {
    type: ActionTypes.createShowTimesFail,
    payload: err,
  };
};
