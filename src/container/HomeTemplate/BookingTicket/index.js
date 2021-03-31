import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import BookingTicket from '../../../components/BookingTicket';
import * as Action from './modules/action';
import Loading from '../../../components/Loader';
import { Redirect } from 'react-router';
function Index(props) {
    const {fetchAPIBookingMovie,data,loading,resetStateCheckOut,user,restStateDatVe} = props;
    const id = props.match.params.id;
    useEffect(()=>{
        fetchAPIBookingMovie(id);
        resetStateCheckOut();
    },[]);
    const RebookTicket=()=>{
        fetchAPIBookingMovie(id);
        document.getElementById("rebookTicket").style.display="none";
        resetStateCheckOut();
        restStateDatVe();
    }
    if(!user) return <Redirect to='/login'/>
    if(loading) return <Loading/>
    return (
        <BookingTicket malichChieu={id} user={user} handelRebookTicket = {RebookTicket} data={data}/>
    )
}
const mapStateToProp = state =>{
    return{
        total : state.InfoCheckOutReducer.total,
        data: state.bookingTicketReducer.data,
        loading: state.bookingTicketReducer.loading,
        user: state.AuthReducer.data,
    }
}
const mapDispatchToProp = (dispatch)=>{
    return {
        fetchAPIBookingMovie : (id)=>{
            dispatch(Action.actBookingTicketAPI(id));
        },
        resetStateCheckOut:()=>{
            dispatch(Action.actResetStateReducer());
        },
        restStateDatVe:()=>{
            dispatch(Action.ResetStateDatVe());
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Index);