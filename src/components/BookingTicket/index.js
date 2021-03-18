import React from 'react'
import CheckOutInfo from './InfoCheckOut';
import CheckOutRight from './CheckOutRinght';
import ChoiseTicketLeft from './ChoiseTicketLeft';
import ModalCheckOut from './RebookTicket';
import ModalNoti from './ModalNotification';
// import {data} from './data';

export default function index(props) {
    const {data,handelRebookTicket,user}=props;
    console.log(data);
    return (
        <section className="Booking_Movie">
            <div className='wrapper'>
                <div className='overlay'>
                    <CheckOutRight data={data.thongTinPhim}/>
                    <ChoiseTicketLeft user={user} data={data.danhSachGhe}/>
                    <CheckOutInfo />
                    <ModalCheckOut handelRebookTicket={handelRebookTicket}/>
                </div>
            </div>
        </section>
    )
}
