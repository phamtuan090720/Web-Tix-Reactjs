import React from 'react'
import { connect } from 'react-redux';
import BookingTicket from '../../../components/BookingTicket';
function index(props) {
    const {total} = props;
    console.log(total);
    return (
        <BookingTicket/>
    )
}
const mapStateToProp = state =>{
    return{
        total : state.InfoCheckOutReducer.total,
    }
}
export default connect(mapStateToProp,null)(index);