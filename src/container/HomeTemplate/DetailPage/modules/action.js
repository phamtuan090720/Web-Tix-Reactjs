// import Axios from "axios";
import * as AtctionTypes from "./constants.js";
import api from "./../../../../api/index.js";
export const actDeailMovieAPI = (id) => {
    return (dispatch) => {
        dispatch(actDetailMovieRequest());
        setTimeout(() => {
            api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
                .then((rs) => {
                    dispatch(actDetailMovieSuccess(rs.data));
                    console.log(rs.data);
                }).catch((err) => {
                    dispatch(actDetailMovieFailed(err));
                })
        }, 2000);
    }
}
export const actDetailMovieRequest = () => {
    return {
        type: AtctionTypes.DETAIL_MOVIE_REQUEST,
    };
}
const actDetailMovieSuccess = (data) => {
    return {
        type: AtctionTypes.DETAIL_MOVIE_SUCCESS,
        payload: data,
    };
}
const actDetailMovieFailed = (err) => {
    return {
        type: AtctionTypes.DETAIL_MOVIE_FAILED,
        payload: err,
    };
}