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
    const {dataListMovie,count,currentPage,totalPages,dataCinemaSytem,dataListCinema,maHeThongRap} = props;
    useEffect(()=>{
        async function fetchDataCinema(){
           await props.fetchListSytemCinema();
        }
        fetchDataCinema();
        console.log('fetchListSytemCinema');
    },[]);
    
    useEffect(()=>{
        props.fetchListMovie(count,currentPage);
    },[currentPage]);
    useEffect(()=>{
        if(dataCinemaSytem&&dataCinemaSytem.length>0){
            let x=dataCinemaSytem[0];
            props.fetchListCinema(x.maHeThongRap);
        }
    },[dataCinemaSytem]);
    useEffect(()=>{
        props.fetchListCinema(maHeThongRap);
    },[maHeThongRap]);
    return (
        <div>
            <Carousel/>
            <ListMovie dataListMovie={dataListMovie}/>
            <Cinema dataCinemaSytem={dataCinemaSytem} dataListCinema={dataListCinema}/>
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
        count:state.listMovieReducer.count,
        currentPage:state.listMovieReducer.currentPage,
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