import * as ActionType from "./constants.js";
let initalState = {
    loading: true,
    data: null,
    err: null,
}
const detailMovieReducer = (state = initalState, action) => {
    switch (action.type) {
        case ActionType.DETAIL_MOVIE_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state }
        case ActionType.DETAIL_MOVIE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state }
        case ActionType.DETAIL_MOVIE_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}
export default detailMovieReducer;