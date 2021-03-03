import * as AtctionTypes from "./constants.js";
import api from "./../../../../api/index.js";
export const actListMovieAPI=()=>{
    return (dispatch)=>{
        dispatch(actListMovieRequest())
        api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP04")
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
        type:AtctionTypes.LIST_MOVIE_REQUEST,
    };
};
export const actListMovieSuccess = (data) =>{
    return{
        type:AtctionTypes.LIST_MOVIE_SUCCESS,
        payload: data,
    };
};

export const actListMovieFailed= (err) =>{
    return{
        type:AtctionTypes.LIST_MOVIE_FAILED,
        payload: err,
    };
};

