import { type } from 'jquery';
import * as ActionType from './constants';
const initialStateInfoCheckOut = {
    total: 0,
    listSeatSelector: [],
}
export const InfoCheckOutReducer = (state = initialStateInfoCheckOut, action) => {
    switch (action.type) {
        case ActionType.RESET_STATE_CHECKOUT:
            state.total = 0;
            state.listSeatSelector = [];
            return { ...state };
        case ActionType.ADD_SEAT:
            let arr = [...state.listSeatSelector];
            arr.push(action.payload);
            state.listSeatSelector = arr;
            state.total = 0;
            state.listSeatSelector.forEach((item) => {
                state.total = state.total + item.giaTien;
            })
            return { ...state };
        case ActionType.REMOVE_SEAT:
            let arr1 = [...state.listSeatSelector];
            arr1 = arr1.filter((seat) => {
                return seat.id !== action.payload.id;
            });
            state.listSeatSelector = arr1;
            state.total = 0;
            state.listSeatSelector.forEach((item) => {
                state.total = state.total + item.giaTien;
            })
        default:
            return { ...state };
    }
}
const initialStateBookingTicketReducer = {
    loading: true,
    data: null,
    err: null,
}
export const bookingTicketReducer = (state = initialStateBookingTicketReducer, action) => {
    switch (action.type) {
        case ActionType.BOOKING_TICKET_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state }
        case ActionType.BOOKING_TICKET_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state }
        case ActionType.BOOKING_TICKET_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}
const initialStateDatVe = {
    mess: null,
    isOpenAlert: false,
    isErr: true
}
export const DatVeReducer = (state = initialStateDatVe, action) => {
    switch (action.type) {
        case ActionType.DAT_VE_SUCCESS:
            state.mess = action.payload;
            state.isOpenAlert = true;
            state.isErr = false;
            return { ...state }
        case ActionType.DAT_VE_FAILED:
            state.mess = action.payload;
            state.isOpenAlert = true;
            state.isErr = true;
            return { ...state }
        case "CLOSE_ALERT":
            state.isOpenAlert = false;
            return { ...state }
        case 'RESET_STATE_DATVE':
            state.mess= null;
            state.isOpenAlert= false;
            state.isErr= true;
        default:
            return { ...state }
    }
}
const initialStateBill = {
    infoUser:{
        taiKhoan:"",
        email:"",
        SDT:""
    },
}
export const BillReducer = (state = initialStateBill, action) => {
    switch (action.type) {
        case 'INFO_CUSTOMER':
            state.infoUser=action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}