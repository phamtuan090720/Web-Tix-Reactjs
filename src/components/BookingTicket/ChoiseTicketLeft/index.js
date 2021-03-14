import React,{useState} from 'react'
import Avata from '../../../img/Icon/avatar.png';
import Thumb from '../../../img/BookingTicket/screen-thumb.png';
import SreenWrapper from './Screen-wrapper';
export default function Index(props) {
    const{data} = props;
    return (
        <div className='choose_tickets_left'>
            <div className="nav" id="nav">
                <div className="cancel">X</div>
                <div className="InfoUser">
                    <img src={Avata} />
                    <span className="username">Tuân Phạm</span>
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
