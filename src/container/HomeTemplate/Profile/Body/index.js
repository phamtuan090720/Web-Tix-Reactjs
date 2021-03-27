import React from 'react'
import { connect } from 'react-redux';
import AvatarAdmin from '../../../../img/AvataUser.jpg';
import AppBar from '../AppBar';
function Index(props) {
    const {user}=props;
    const render = React.useCallback(
        () => {
            console.log("userAppBar",user);
            return (
                <section className="body-profile">
                    <div className="container header">
                        <div className="avata">
                            <img src={AvatarAdmin}></img>
                        </div>
                    </div>
                    <div className="accout-user">
                        <div className="account">
                            <p className="name">{user?.hoTen}</p>
                            <p className="maLoaiNguoiDung">{user?.maLoaiNguoiDung==="QuanTri"?"Quản Trị Viên":"Khách Hàng"}</p>
                        </div>
                    </div>
                    <div className="container app-bar">
                        <AppBar />
                    </div>
        
                </section>
            )
        },
        [user],
    )
    return <>
        {render()}
    </>
    
}
const mapStateToProp = (state) => {
    return {
        user:state.AuthReducer.data,
    }
}
export default connect(mapStateToProp, null)(Index);