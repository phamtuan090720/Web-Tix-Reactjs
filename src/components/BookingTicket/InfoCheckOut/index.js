import React from 'react'
import { connect } from 'react-redux';
function index(props) {
    const {listSeatSelector,total} = props;
    const RenderListSeat=(Arr)=>{
        if(Arr.length){
            return Arr.map((item)=>{
                return `${item.name},`
            })
        }
        else{
            return `Bạn Chưa Chọn Ghế`;
        }
    }
    return (
        <div className="info-check-out row m-0" id="InfoCheckOut">
            <div className="col-12">
                <div className="list-seat">Ghế: {RenderListSeat(listSeatSelector)}</div>
                <div className="total">Tổng Tiền: {total}đ</div>
            </div>
            <div className="col-12 p-0 row justify-content-end">
                <div className="btn next" onClick={()=>{
                    document.getElementById('CheckOutRight').style.right='0';
                }}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Tiếp
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