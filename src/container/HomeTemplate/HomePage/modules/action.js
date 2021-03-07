import * as AtctionTypes from "./constants.js";
import api from "./../../../../api/index.js";
export const actListMovieAPI=(count,currentPage)=>{
    return (dispatch)=>{
        dispatch(actListMovieRequest())
        api.get(`/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP04&soTrang=${currentPage}&soPhanTuTrenTrang=${count}`)
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

export const actHandleChangePage=(index)=>{
    return{
        type:AtctionTypes.LIST_MOVIE_CHANGE_PAGE_POST,
        payload:index,
    }
}
export const actCallApiGetInfoCinemaSytem=()=>{
    return(dispatch)=>{
        dispatch(actListSytemCinemRequest())
        api.get(`/QuanLyRap/LayThongTinHeThongRap`)
        .then((rs)=>{
            dispatch(actListSytemCinemSuccess(rs.data));
        }).catch((err)=>{
            dispatch(actListSytemCinemFailed(err));
        })
        ;
    }
}
export const actListSytemCinemRequest=()=>{
    return{
        type:AtctionTypes.LIST_SYSTEM_CINEMA_REQUEST,
    }
};
export const actListSytemCinemSuccess = (data) =>{
    return{
        type:AtctionTypes.LIST_SYSTEM_CINEMA_SUCCESS,
        payload: data,
    };
};

export const actListSytemCinemFailed= (err) =>{
    return{
        type:AtctionTypes.LIST_SYSTEM_CINEMA_FAILED,
        payload: err,
    };
};

export const actCallApiGetListCinemaPost=(maHeThongRap)=>{
    return(dispatch)=>{
        dispatch(actListCinemRequest())
        api.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP04`)
        .then((rs)=>{
            dispatch(actListCinemSuccess(rs.data[0].lstCumRap));
        }).catch((err)=>{
            dispatch(actListCinemFailed(err));
        })
        ;
    }
}
export const actListCinemRequest=()=>{
    return{
        type:AtctionTypes.LIST_CINEMA_REQUEST,
    }
};
export const actListCinemSuccess = (data) =>{
    return{
        type:AtctionTypes.LIST_CINEMA_SUCCESS,
        payload: data,
    };
};

export const actListCinemFailed= (err) =>{
    return{
        type:AtctionTypes.LIST_CINEMA_FAILED,
        payload: err,
    };
};
export const actChangeSyTemCinema=(maHeThongRap)=>{
    return{
        type:AtctionTypes.CHANGE_SYSTEM_CINEMA,
        payload:maHeThongRap
    }
}