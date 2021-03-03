import * as ActionType from './constans';
let initialState = {
    dataShowingMovie:null,
    dataComingMovie:null,
}
export const sheduleReuducer=(state=initialState,action)=>
{
    switch(action.type){
        case ActionType.DATA_LIST_MOVIE_SHOWING:
            state.dataShowingMovie=action.payload;
            return{...state}
        case ActionType.DATA_LIST_MOVIE_COMING:
            state.dataComingMovie=action.payload;
            return {...state}
        default:
            return {...state}
    }
}