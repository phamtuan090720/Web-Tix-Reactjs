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
const intialStateAlerUpdateInfo = {
    isErr: null,
    mess: null,
    isAler: false
}
export const AlerUpdateInfoReducer = (state = intialStateAlerUpdateInfo, action) => {
    switch (action.type) {
        case ActionsType.UPDATE_USER_REQUEST:
            state.isErr = null;
            state.mess = null;
            state.isAler = false;
            return { ...state }
        case 'UPDATE_USER_SUCCESS':
            state.isErr = false;
            if (action.payload === "ChangeInfo") {
                state.mess = "Đã Thay Đổi Thông Tin Thành Công!";
            }
            if (action.payload === "changePassword") {
                state.mess = "Đổi Mật Khẩu Thành Công!";
            }
            state.isAler = true;
            return { ...state }
        case 'UPDATE_USER_FAILED':
            state.isErr = true;
            state.mess = action.payload;
            state.isAler = true;
            return { ...state }
        default:
            return { ...state }
    }
}
const initialStateInfoAccount = {
    isLoading: true,
    err: null,
    data: null,
}
export const infoAccountReducer = (state = initialStateInfoAccount, action) => {
    switch (action.type) {
        case ActionsType.GET_DATA_USER_POST_REQUEST:
            state.isLoading = true;
            state.err = null;
            state.data = null;
            return { ...state }
        case ActionsType.GET_DATA_USER_POST_SUCCESS:
            state.isLoading = false;
            state.data = action.payload;
            return { ...state }
        case ActionsType.FIND_USER_FAILED:
            state.isLoading = false;
            state.err = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}