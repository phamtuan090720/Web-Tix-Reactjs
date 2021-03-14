import * as ActionType from './constants';

const initialStateInfoCheckOut={
    total:0,
    listSeatSelector:[],
}
export const InfoCheckOutReducer = (state=initialStateInfoCheckOut,action)=>{
    switch(action.type){
        case ActionType.ADD_SEAT:
            let arr = [...state.listSeatSelector];
            arr.push(action.payload);
            state.listSeatSelector = arr;
            state.total = 0;
            state.listSeatSelector.forEach((item)=>{
                state.total = state.total +item.giaTien;
            })
            return {...state};
        case ActionType.REMOVE_SEAT:
            let arr1 = [...state.listSeatSelector];
            arr1 = arr1.filter((seat)=>{
                return seat.id !== action.payload.id;
            });
            state.listSeatSelector = arr1;
            state.total = 0;
            state.listSeatSelector.forEach((item)=>{
                state.total = state.total +item.giaTien;
            })
        default:
            return{...state};
    }
}
