import * as AtctionTypes from "./constant.js";
const initialState = {
    listMovie: [],
    err: null,
    infoMovie: [],
    heThongRap:null,
    errListCinema: null,
}
export const ScheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case AtctionTypes.GET_LIST_SUCCESSS:
            state.listMovie = action.payload;
            return { ...state };
        case AtctionTypes.GET_LIST_REQUEST:
            state.listMovie = [];
            return { ...state };
        case AtctionTypes.GET_LIST_FAILED:
            state.err = null;
            return { ...state };
        case AtctionTypes.GET_LIST_CINEMA_REQUEST:
            state.infoMovie = [];
            return { ...state };
        case AtctionTypes.GET_LIST_CINEMA_SUCCESSS:
            state.infoMovie = action.payload;
            state.heThongRap = action.payload.heThongRapChieu;
            return { ...state };
        case AtctionTypes.GET_LIST_CINEMA_FAILED:
            state.errListCinema = action.payload;
            return { ...state };
        case AtctionTypes.RESET_SATE:
            state.heThongRap = null;
        default:
            return { ...state };
    }
}