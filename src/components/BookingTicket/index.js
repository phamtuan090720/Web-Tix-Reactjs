import React from 'react'
import CheckOutInfo from './InfoCheckOut';
import CheckOutRight from './CheckOutRinght';
import ChoiseTicketLeft from './ChoiseTicketLeft';
import {data} from './data';

export default function index() {
    return (
        <section className="Booking_Movie">
            <div className='wrapper'>
                <div className='overlay'>
                    <CheckOutRight data={data.thongTinPhim}/>
                    <ChoiseTicketLeft data={data.danhSachGhe}/>
                    <CheckOutInfo />
                </div>
            </div>
        </section>
    )
}
