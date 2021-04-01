import React,{useState} from 'react'
import CheckOutInfo from './InfoCheckOut';
import CheckOutRight from './CheckOutRinght';
import ChoiseTicketLeft from './ChoiseTicketLeft';
import ModalCheckOut from './RebookTicket';
import AlertDatVe from './AlertDatVe';
import { connect } from 'react-redux';
import BillTicket from './BillTicket';
import bgBookingTicket from '../../img/BookingTicket/movie-details-bg.jpg';
import {actCloseAlret} from '../../container/HomeTemplate/BookingTicket/modules/action';

function Index(props) {
    const {data,handelRebookTicket,user,malichChieu,isOpen,mess,isErr,closeAlert}=props;
    // console.log(isOpen,mess,isErr);
    const handleClose = ()=>{
        closeAlert();
    }
    const handleOpenBill=()=>{
        setIsOpenBill(true);
    }
    const [isOpenBbill,setIsOpenBill] = useState(false);
    return (
        <section style={{backgroundImage:`url(${bgBookingTicket})`}} className="Booking_Movie">
            <div className='wrapper'>
                <div className='overlay'>
                    <CheckOutRight handleOpenBill={handleOpenBill} user={user} malichChieu={malichChieu} data={data?data.thongTinPhim:""}/>
                    <ChoiseTicketLeft user={user} data={data?data.danhSachGhe:[]}/>
                    <CheckOutInfo />
                    <ModalCheckOut handelRebookTicket={handelRebookTicket}/>
                    {AlertDatVe(isOpen,mess,isErr,handleClose,handleOpenBill,props)}
                    <BillTicket isOpen={isOpenBbill} handelRebookTicket={handelRebookTicket}/>
                </div>
            </div>
        </section>
    )
}
const mapStateToProp = (state)=>{
    return{
        isOpen:state.DatVeReducer.isOpenAlert,
        mess:state.DatVeReducer.mess,
        isErr:state.DatVeReducer.isErr
    }
}
const mapDispatchToProp=(disptach)=>{
    return {
        closeAlert:()=>{
            disptach(actCloseAlret());
        },
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Index);