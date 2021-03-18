import React ,{useEffect}from 'react';
import { connect } from 'react-redux';
import Carousel from '../../../components/CarouselMovie';
import ListMovie from '../../../components/ListMovie';
import {actListMovieAPI,actCallApiGetInfoCinemaSytem,actCallApiGetListCinemaPost} from './modules/action';
import App from '../../../components/App';
import Footer from '../../../components/Footer';
import New from '../../../components/New';
import Cinema from '../../../components/CinemaBlock';
 function HomePage(props) {
    return (
        <div>
            <Carousel/>
            <ListMovie/>
            <Cinema/>
            <New/>
            <App/>
            <Footer/>
        </div>
    )
}
const mapStateToProp = state =>{
    return{
        Loading:state.listMovieReducer.loading,
        dataListMovie:state.listMovieReducer.dataListMovie,
        totalPages:state.listMovieReducer.totalPages,
        dataCinemaSytem:state.listSytemCinemaReducer.dataCinemaSytem,
        dataListCinema:state.listCinemaReducer.dataListCinema,
        maHeThongRap:state.listCinemaReducer.maHeThongRap,
        dataListMovieSchedule:state.listCinemaReducer.dataListMovieSchedule,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchListMovie:(count,currentPage)=>{
            dispatch(actListMovieAPI(count,currentPage));
        },
        fetchListSytemCinema:()=>{
            dispatch(actCallApiGetInfoCinemaSytem());
        },
        fetchListCinema:(maHeThongRap)=>{
            dispatch(actCallApiGetListCinemaPost(maHeThongRap));
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(HomePage);