import React,{useState} from 'react'
import { connect } from 'react-redux';
import imgSeat from '../../../../../img/BookingTicket/seat01.png';
import imgSeatSelected from '../../../../../img/BookingTicket/seat01-free.png';
import * as Action from '../../../../../container/HomeTemplate/BookingTicket/modules/action';
import ModalErr from '../../../ModalErr';
function Index(props) {
    const { className, data, addSeat, name, listSeatSelector, removeSeat } = props;
    const [img,setImg] = useState(imgSeat);
    const Click = () => {
        let Seat = {
            id: data.maGhe,
            name: name,
            giaTien: data.giaVe,
        }
        let isHave = false;
        listSeatSelector.map((item) => {
            if (item.id === Seat.id) {
                isHave = true;
            }
        })
        if (isHave === true) {
            removeSeat(Seat);
            setImg(imgSeat);
        }
        else {
            addSeat(Seat);
            setImg(imgSeatSelected);
        }
        // var x = document.getElementById(`${name}`);
        // if (x.style.display === 'block') {
        //     x.style.display = 'none';
        //     setImg(imgSeat);
        // } else {
        //     x.style.display = 'block';
        //     setImg(imgSeatSelected);
        // }
    }
    const [isOpen,setIsOpen] = React.useState(false);
    const [messErr,setMessErr] = React.useState("");
    const handleSCloseModal = () =>{
        setIsOpen(false);
    }
    if(data.daDat===true){
        return (
            <>
              <li className={className} onClick={()=>{
                  setIsOpen(true);
                  setMessErr("Ghế đã có người chọn bạn vui lòng chọn ghế khác");
              }}>
                <img src={img} alt="Seat" />
                <span id={name} style={{display:'block',fontWeight:'bold',fontSize:20}} className='sit-num'>X</span>
            </li>
            {
                ModalErr(isOpen,messErr,handleSCloseModal)
            }
            </>
        )
    }
    return (
        <li className={className} onClick={Click}>
            <img src={img} alt="Seat" />
            <span id={name} className='sit-num'>{name}</span>
        </li>
    )
}
const mapStateToProp = state => {
    return {
        listSeatSelector: state.InfoCheckOutReducer.listSeatSelector
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSeat: (data) => {
            dispatch(Action.actAdd(data));
        },
        removeSeat: (data) => {
            dispatch(Action.actRemove(data));
        },
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Index);