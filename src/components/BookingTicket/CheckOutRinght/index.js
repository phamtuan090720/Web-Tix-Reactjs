import React from 'react'
import { connect } from 'react-redux';

 function index(props) {
    const {data,listSeatSelector,total} = props;
    console.log(listSeatSelector);
    const RenderListSeat=(Arr)=>{
        if(Arr){
            return Arr.map((item)=>{
                return `${item.name},`
            })
        }
    }
    return (
        <div className="checkOutRight" id='CheckOutRight'>
            <div className="row total">
                <p className="cash">{total} đ</p>
            </div>
            <div className="row film_name">
                <span className="col-12 movie_name">{data.tenPhim}</span>
                <div className="contentcinema col-12">
                    <div className="address">
                        <p>{data.tenCumRap}</p>
                        <p>{`Ngày Chiếu: ${data.ngayChieu} - ${data.gioChieu} - ${data.tenRap}`}
        </p>
                    </div>
                </div>
            </div>
            <div className="row chair">
                <span className="chair_content">Ghế :{RenderListSeat(listSeatSelector)} </span><span>0đ</span>
            </div>
            <div className="inputUser">
                <div className="row">
                    <input id="emailCheckout" type="email" />
                    <label className="lableInputUser" htmlFor="emailCheckout">Email</label>
                </div>
            </div>
            <div className="inputUser">
                <div className="row">
                    <input id="phoneCheckout" type="tel" />
                    <label className="lableInputUser" htmlFor="phoneCheckout">Phone</label>
                </div>
            </div>
            <div className="button-group-checkOut">
                <div className="btn back" onClick={()=>{
                    document.getElementById("CheckOutRight").style.right='-100%';
                }}>
                    <span />
                    <span />
                    <span />
                    <span />
      Quay Lại
    </div>
                <div className="btn success">
                    <span />
                    <span />
                    <span />
                    <span />
      Đặt Vé
    </div>
            </div>
        </div>
    )
}
const mapStateToProp = state =>{
    return{
        listSeatSelector : state.InfoCheckOutReducer.listSeatSelector,
        total : state.InfoCheckOutReducer.total,
    }
}
export default connect(mapStateToProp,null)(index);