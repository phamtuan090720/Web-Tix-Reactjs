import * as ActionTypes from './constants';
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