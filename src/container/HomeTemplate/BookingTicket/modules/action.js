import * as ActionTypes from './constants';
import api from "./../../../../api/index.js";
export const actAdd = (data) => {
    return {
        type: ActionTypes.ADD_SEAT,
        payload: data,
    };
}
export const actRemove=(data)=>{
    return {
        type: ActionTypes.REMOVE_SEAT,
        payload: data,
    };
}
export const actBookingTicketAPI = (id) =>{
    return (dispatch)=>{
        dispatch(actBookingTicketRequest());
        setTimeout(() => {
            api.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
                .then((rs) => {
                    dispatch(actBookingTicketSuccess(rs.data));
                    console.log(rs.data);
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
export const actResetStateReducer=()=>{
    return {
        type:ActionTypes.RESET_STATE_CHECKOUT,
    }
}