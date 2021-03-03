import * as ActionType from "./constants";
let initalState={
    loading:false,
    dataListMovie:null,
    err:null
}
const listMovieReducer=(state=initalState,action)=>{
    switch(action.type){
        case ActionType.LIST_MOVIE_REQUEST:
            state.loading = true;
            state.dataListMovie = null;
            state.err = null;
            return{...state}
        case ActionType.LIST_MOVIE_SUCCESS:
            state.loading = false;
            state.dataListMovie = action.payload;
            state.err = null;
            return{...state}
        case ActionType.LIST_MOVIE_FAILED:
            state.loading = false;
            state.dataListMovie = null;
            state.err = action.payload;
            return{...state}
        default:
            return{...state}
    }

}
export default listMovieReducer;