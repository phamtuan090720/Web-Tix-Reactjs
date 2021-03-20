import * as AtctionTypes from "./constant.js";
import api from "./../../../../api/index.js";
export const actListMovieAPI=(Nhom)=>{
    return (dispatch)=>{
            dispatch(actListMovieRequest())
            api.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${Nhom}`)
            .then((rs)=>{
                dispatch(actListMovieSuccess(rs.data));
            }).catch((err)=>{
                dispatch(actListMovieFailed(err));
            })
            ;
    }
}
export const actListMovieRequest = () =>{
    return{
        type:AtctionTypes.GET_LIST_REQUEST,
    };
};
export const actListMovieSuccess = (data) =>{
    return{
        type:AtctionTypes.GET_LIST_SUCCESSS,
        payload: data,
    };
};

export const actListMovieFailed= (err) =>{
    return{
        type:AtctionTypes.GET_LIST_FAILED,
        payload: err,
    };
};
export const actListInfoMovie=(id)=>{
    return (dispatch)=>{
            dispatch(actGetInfoMovieRequest())
            api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            .then((rs)=>{
                dispatch(actGetInfoMovieSuccess(rs.data));
            }).catch((err)=>{
                dispatch(actGetInfoMovieFailed(err));
            });
    }
}
export const actGetInfoMovieRequest = () =>{
    return{
        type:AtctionTypes.GET_LIST_CINEMA_REQUEST,
    };
};
export const actGetInfoMovieSuccess = (data) =>{
    return{
        type:AtctionTypes.GET_LIST_CINEMA_SUCCESSS,
        payload: data,
    };
};

export const actGetInfoMovieFailed= (err) =>{
    return{
        type:AtctionTypes.GET_LIST_CINEMA_FAILED,
        payload: err,
    };
};