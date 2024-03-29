import React from 'react'
import Avata from '../../../img/AvataUser.jpg';
import Thumb from '../../../img/BookingTicket/screen-thumb.png';
import SreenWrapper from './Screen-wrapper';
import CountDown from '../CountDownTime';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Action from '../../../container/HomeTemplate/BookingTicket/modules/action';
 function Index(props) {
    const{data,user} = props;
    return (
        <div className='choose_tickets_left'>
            <div className="nav" id="navBar">
                <CountDown/>
                <Link onClick={()=>{
                    props.resetSateCheckOut();
                }} to='/home' className="cancel">X</Link>
                <div className="InfoUser">
                    <img src={Avata} />
                    <span className="username">{user.taiKhoan}</span>
                </div>
            </div>
            <div className="cinema-chart" >
                <div className="screen-area">
                    <h4 className="screen">Màn Hình</h4>
                </div>
                <div className="screen-thumb">
                    <img src={Thumb} alt="movie" />
                </div>
                <div className="way">
                    <h5 className="way-1">Lối Đi Trước Màn Ảnh</h5>
                </div>
                <SreenWrapper data={data}/>
            </div>

        </div>

    )
}
const mapDispatchToProp = (dispatch)=>{
    return {
        resetSateCheckOut:()=>{
            dispatch(Action.actResetStateReducer());
        }
    }
}
export default connect(null,mapDispatchToProp)(Index);