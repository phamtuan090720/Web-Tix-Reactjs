import * as ActionsType from './constant';
import api from '../../../../api/index';
import apiPost from '../../../../api/apiPost';
import * as ActionLogin from '../../../AdminTemplate/AuthPage/modules/actions';
export const actCallAPIInforUserRequest = (maNhom,tuKhoa)=>{
    return (dispatch) => {
        dispatch(actInforUserRequest());
        setTimeout(() => {
            api.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${tuKhoa}`)
                .then((rs) => {
                    dispatch(actInforUserSuccess(rs.data[0]));
                    // console.log(rs.data[0]);
                }).catch((err) => {
                    dispatch(actInforUserFailed(err?.response?.data));
                    console.log(err?.response?.data);
                })
        }, 2000);
    }
}
const actInforUserRequest = ()=>{
    return{
        type: ActionsType.FIND_USER_REQUEST,
    }
}
const actInforUserSuccess = (data)=>{
    return{
        type: ActionsType.FIND_USER_SUCCESS,
        payload:data
    }
}
const actInforUserFailed = (err)=>{
    return{
        type: ActionsType.FIND_USER_FAILED,
        payload:err
    }
}
export const actUpdateInfoUser = (dataUser,type)=>{
    if(dataUser){
        console.log(dataUser);
        if(JSON.parse(sessionStorage.getItem("USER"))){
            return async (dispatch)=>{
                dispatch(actUpdateInfoUserReqest());
                apiPost({
                    headers:{
                        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("USER")).accessToken}` 
                     },
                    url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                    method:"PUT",
                    data:dataUser,
                }).then((rs) => {
                        let user = {
                            taiKhoan:rs.data.taiKhoan,
                            matKhau:rs.data.matKhau
                        }
                        dispatch(actUpdateInfoUserSuccess(type));
                        dispatch(ActionLogin.actLogin(user));
                        dispatch(actCallAPIInforUserRequest(dataUser?.maNhom,dataUser?.taiKhoan));
                    alert("Đổi Thành Công ");
                }).catch((err) => {
                    console.log(err);
                    dispatch(actUpdateInfoUserFailed(err?.response?.data));
                    alert("Đổi Thất Bại");
                });
            }
        }
    }
}
export const actUpdateInfoUserReqest = ()=>{
    return {
        type:ActionsType.UPDATE_USER_REQUEST,
    }
}
const actUpdateInfoUserSuccess = (type)=>{
    sessionStorage.removeItem("USER");
    return {
        type:"UPDATE_USER_SUCCESS",
        payload:type
    }
}
const actUpdateInfoUserFailed = (err)=>{
    return {
        type:'UPDATE_USER_FAILED',
        payload:err
    }
}
export const CallApiGetInfoAccount = (account)=>{
    return (dispatch)=>{
        dispatch(actGetInfoAccountReqest());
        api.post('/QuanLyNguoiDung/ThongTinTaiKhoan',account).then((rs)=>{
            dispatch(actGetInfoAccountSuccess(rs.data));
            console.log(rs.data);
        }).catch(err=>{
            dispatch(actGetInfoAccountFailed(err?.response?.data));
            alert(err?.response?.data);
        });
    }
}
const actGetInfoAccountReqest = ()=>{
    return {
        type:ActionsType.GET_DATA_USER_POST_REQUEST,
    }
}
const actGetInfoAccountSuccess = (data)=>{
    return {
        type:ActionsType.GET_DATA_USER_POST_SUCCESS,
        payload:data,
    }
}
const actGetInfoAccountFailed = (err)=>{
    return {
        type:ActionsType.GET_DATA_USER_POST_REQUEST,
        payload:err,
    }
}