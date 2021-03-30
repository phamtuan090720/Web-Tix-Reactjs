import React from 'react'
import { connect } from 'react-redux';
import AvatarAdmin from '../../../../img/AvataUser.jpg';
import AppBar from '../AppBar';
import Styled from 'styled-components';
import bgDefault from '../../../../img/backGround/movie-details-bg.jpg';
function Index(props) {
    const {user}=props;
    const Background = Styled.div`
        background-image: url(${bgDefault});
        background-size: cover;
    `;
    const render = React.useCallback(
        () => {
            // console.log("userAppBar",user);
            return (
                <section className="body-profile">
                    <Background className="container header">
                        <div className="avata">
                            <img src={AvatarAdmin}></img>
                        </div>
                    </Background>
                    <div className="accout-user">
                        <div className="account">
                            <p className="name">{user?.hoTen}</p>
                            <p className="maLoaiNguoiDung">{user?.maLoaiNguoiDung==="QuanTri"?"Quản Trị Viên":"Khách Hàng"}</p>
                        </div>
                    </div>
                    <div className="app-bar">
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