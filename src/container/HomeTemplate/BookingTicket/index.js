import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import BookingTicket from '../../../components/BookingTicket';
import * as Action from './modules/action';
import Loading from '../../../components/Loader';
function Index(props) {
    const {fetchAPIBookingMovie,data,loading,resetStateCheckOut} = props;
    const id = props.match.params.id;
    useEffect(()=>{
        fetchAPIBookingMovie(id);
    },[]);
    const RebookTicket=()=>{
        fetchAPIBookingMovie(id);
        document.getElementById("rebookTicket").style.display="none";
        resetStateCheckOut();
    }
    const {total} = props;
    console.log(total);
    console.log(data);
    if(loading) return <Loading/>
    return (
        <BookingTicket handelRebookTicket = {RebookTicket} data={data}/>
    )
}
const mapStateToProp = state =>{
    return{
        total : state.InfoCheckOutReducer.total,
        data: state.bookingTicketReducer.data,
        loading: state.bookingTicketReducer.loading
    }
}
const mapDispatchToProp = (dispatch)=>{
    return {
        fetchAPIBookingMovie : (id)=>{
            dispatch(Action.actBookingTicketAPI(id));
        },
        resetStateCheckOut:()=>{
            dispatch(Action.actResetStateReducer());
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Index);