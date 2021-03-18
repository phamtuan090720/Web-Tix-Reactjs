import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import AuthPage from './AuthPage';
function Index(props) {
    const {user} = props;
    console.log(user);
    if(!user) return <Redirect to='/signin'/>
    if(user.maLoaiNguoiDung==="QuanTri")
    {
        return (
            <div>
                Admin
            </div>
        )
    }
    else{
        return <div>
            User
        </div>
    }
  
}
const mapStateToprop = (state)=>{
    return{
        user:state.AuthReducer.data,
    }
}
export default connect(mapStateToprop,null)(Index);