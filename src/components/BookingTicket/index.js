import React from 'react'
import CheckOutInfo from './InfoCheckOut';
import CheckOutRight from './CheckOutRinght';
import ChoiseTicketLeft from './ChoiseTicketLeft';
import ModalCheckOut from './RebookTicket';
// import {data} from './data';

export default function index(props) {
    const {data,handelRebookTicket}=props;
    console.log(data);
    return (
        <section className="Booking_Movie">
            <div className='wrapper'>
                <div className='overlay'>
                    <CheckOutRight data={data.thongTinPhim}/>
                    <ChoiseTicketLeft data={data.danhSachGhe}/>
                    <CheckOutInfo />
                    <ModalCheckOut handelRebookTicket={handelRebookTicket}/>
                </div>
            </div>
        </section>
    )
}
