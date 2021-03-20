import * as ActionType from "./constants";
let initalStateMovie = {
    loading: true,
    dataListMovie: null,
    err: null,
    currentPage: 1,
    count: 8,
    totalPages: null,
    totalCount: null,
}
let initalStateCinemaSytem = {
    dataCinemaSytem: null,
    err: null,
    loading:true,
}
let initialStateListCinema = {
    maHeThongRap: null,
    err: null,
    dataListCinema: null,
    loading:true,
}
export const listCinemaReducer = (state = initialStateListCinema, action) => {
    switch (action.type) {
        case ActionType.LIST_CINEMA_REQUEST:
            state.loading=true;
            state.dataListCinema = null;
            state.err = null;
            return { ...state }
        case ActionType.LIST_CINEMA_SUCCESS:
            state.loading=false;
            state.dataListCinema = action.payload;
            return { ...state }
        case ActionType.LIST_CINEMA_FAILED:
            state.loading=false;
            state.err = action.payload;
            return { ...state }
        case ActionType.CHANGE_SYSTEM_CINEMA:
            state.maHeThongRap=action.payload;
        default:
            return { ...state }
    }
}
// Sai Chính tả nhớ sửa 
export const listSytemCinemaReducer = (state = initalStateCinemaSytem, action) => {
    switch (action.type) {
        case ActionType.LIST_SYSTEM_CINEMA_REQUEST:
            state.loading = true;
            state.dataCinemaSytem = null;
            state.err = null;
            return { ...state }
        case ActionType.LIST_SYSTEM_CINEMA_SUCCESS:
            state.loading = false;
            state.dataCinemaSytem = action.payload;
            return { ...state }
        case ActionType.LIST_SYSTEM_CINEMA_FAILED:
            state.loading = false;
            state.err = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}
export const listMovieReducer = (state = initalStateMovie, action) => {
    switch (action.type) {
        case ActionType.LIST_MOVIE_REQUEST:
            state.loading = true;
            state.dataListMovie = null;
            state.err = null;
            return { ...state }
        case ActionType.LIST_MOVIE_SUCCESS:
            state.loading = false;
            state.dataListMovie = action.payload.items;
            state.totalPages = action.payload.totalPages;
            state.totalCount = action.payload.totalCount;
            state.err = null;
            return { ...state }
        case ActionType.LIST_MOVIE_FAILED:
            state.loading = false;
            state.dataListMovie = null;
            state.err = action.payload;
            return { ...state }
        case ActionType.LIST_MOVIE_CHANGE_PAGE_POST:
            state.currentPage = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}