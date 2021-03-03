import * as ActionType from './constans';
export const actImportDataShowingMovie=(data)=>{
    return{
        type:ActionType.DATA_LIST_MOVIE_SHOWING,
        payload:data
    }
}
export const actImportDataComingMovie=(data)=>{
    return{
        type:ActionType.DATA_LIST_MOVIE_COMING,
        payload:data
    }
}