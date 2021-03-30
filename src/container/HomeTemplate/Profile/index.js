import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Body from './Body';
import * as Action from './modules/action';
import Nav from './Nav';
function Profile(props) {
    const {user,userLogin,callApiFindUser}=props;
    React.useEffect(()=>{
        callApiFindUser(userLogin?.maNhom,userLogin?.taiKhoan);
    },[]);
    return (
        <>
            <Nav/>
            <Body></Body>
        </>
    )
}
const mapStateToProp=(state)=>{
    return{
        user:state.FindUserReuder.data,
        userLogin: state.AuthReducer.data,
    }
}
const mapDispatchToProp=(dispatch)=>{
    return{
        callApiFindUser:(maNhom,taiKhoan)=>{
            dispatch(Action.actCallAPIInforUserRequest(maNhom,taiKhoan));
        }
    }

}
export default connect (mapStateToProp,mapDispatchToProp)(Profile);