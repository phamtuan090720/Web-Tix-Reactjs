import * as ActionTypes from './constants';
import api from "./../../../../api/index.js";
import apiPost from '../../../../api/apiPost';
export const actAdd = (data) => {
    return {
        type: ActionTypes.ADD_SEAT,
        payload: data,
    };
}
export const actRemove = (data) => {
    return {
        type: ActionTypes.REMOVE_SEAT,
        payload: data,
    };
}
export const actBookingTicketAPI = (id) => {
    return (dispatch) => {
        dispatch(actBookingTicketRequest());
        setTimeout(() => {
            api.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
                .then((rs) => {
                    dispatch(actBookingTicketSuccess(rs.data));
                }).catch((err) => {
                    dispatch(actBookingTicketFailed(err));
                })
        }, 1000);
    }
}
export const actBookingTicketRequest = () => {
    return {
        type: ActionTypes.BOOKING_TICKET_REQUEST,
    };
}
const actBookingTicketSuccess = (data) => {
    return {
        type: ActionTypes.BOOKING_TICKET_SUCCESS,
        payload: data,
    };
}
const actBookingTicketFailed = (err) => {
    return {
        type: ActionTypes.BOOKING_TICKET_FAILED,
        payload: err,
    };
}
export const actResetStateReducer = () => {
    return {
        type: ActionTypes.RESET_STATE_CHECKOUT,
    }
}

export const actDatVe = (dataTicket) => {
    if (dataTicket) {
        if(JSON.parse(sessionStorage.getItem("USER"))){
            return (dispatch) => {
                apiPost({
                    headers:{
                        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("USER")).accessToken}` 
                     },
                    url:"https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
                    method:"POST",
                    data:dataTicket,
                }).then((rs) => {
                    dispatch(actDatVeSucces(rs.data));
                }).catch((e) => {
                    dispatch(actDatVeFailed(e.response.data));
                });
            }
        } 
    }
}
const actDatVeSucces = (data) => {
    return {
        type: ActionTypes.DAT_VE_SUCCESS,
        payload: data
    };
}
const actDatVeFailed = (data) => {
    return {
        type: ActionTypes.DAT_VE_FAILED,
        payload: data
    };
}
export const actCloseAlret = () => {
    return {
        type: 'CLOSE_ALERT',
    };
}
export const getInfoCustomer = (data) => {
    return {
        type: 'INFO_CUSTOMER',
        payload: data
    };
}
export const ResetStateDatVe = () => {
    return {
        type: "RESET_STATE_DATVE",
    }
}