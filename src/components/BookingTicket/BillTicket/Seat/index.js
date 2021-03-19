import React from 'react'
import imgSeatSelected from '../../../../img/BookingTicket/seat01.png';
export default function index(props) {
    const {name} = props;
    return (
        <div className="seat">
            <img src={imgSeatSelected}/>
            <span id={name} className='sit-num'>{name}</span>
        </div>
    )
}
