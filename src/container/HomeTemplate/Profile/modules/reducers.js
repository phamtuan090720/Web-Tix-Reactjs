import * as ActionsType from './constant';
const initialStateInforUser = {
    data: null,
    err: null,
    loading: true,
}
export const FindUserReuder = (state = initialStateInforUser, action) => {
    switch (action.type) {
        case ActionsType.FIND_USER_REQUEST:
            state.data = null;
            state.err = null;
            state.loading = true;
            return { ...state }
        case ActionsType.FIND_USER_SUCCESS:
            state.data = action.payload;
            state.loading = false;
        case ActionsType.FIND_USER_FAILED:
            state.err = action.payload;
            state.loading = false;
            return { ...state }
        default:
            return { ...state }
    }
}
const intialStateAlerUpdateInfo={
    isErr:null,
    mess:null,
    isAler:false
}
export const AlerUpdateInfoReducer =(state=intialStateAlerUpdateInfo,action)=>{
    switch(action.type){
        case ActionsType.UPDATE_USER_REQUEST:
            state.isErr=null;
            state.mess=null;
            state.isAler=false;
            return {...state}
        case 'UPDATE_USER_SUCCESS':
            state.isErr = false;
            state.mess = "Đã Thay Đổi Thông Tin Thành Công!";
            state.isAler=true;
            return {...state}
        case 'UPDATE_USER_FAILED':
            state.isErr = true;
            state.mess = action.payload;
            state.isAler=true;
            return {...state}
        default:
            return {...state}
    }
}