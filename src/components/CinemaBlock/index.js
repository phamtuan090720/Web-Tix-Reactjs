import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import NavBar from './NavBar';
import TabContentCiema from './TabContentCinema';
import TabContentListMovie from './TabContentMovie';
import {actCallApiGetInfoCinemaSytem,actCallApiGetListCinemaPost} from '../../container/HomeTemplate/HomePage/modules/action';
function CinemaBlock(props) {
    const {dataCinemaSytem,dataListCinema,maHeThongRap,group} = props;
    useEffect(()=>{
        async function fetchDataCinema(){
           await props.fetchListSytemCinema();
        }
        fetchDataCinema();
        // console.log('fetchListSytemCinema');
    },[group]);
    useEffect(()=>{
        if(dataCinemaSytem&&dataCinemaSytem.length>0){
            let x=dataCinemaSytem[0];
            props.fetchListCinema(x.maHeThongRap,group.group);
        }
    },[dataCinemaSytem,group]);
    useEffect(()=>{
        props.fetchListCinema(maHeThongRap,group.group);
    },[maHeThongRap,group]);
    return (
        <>
            <div id='cinema_block_tix'></div>
            <section className="cinema_block">
                <div className="cinema_block_container">
                    <div className="bg-img-top_container">
                        <div className="bg-img-top" />
                    </div>
                    <NavBar dataCinemaSytem={dataCinemaSytem} />
                    <TabContentCiema dataCinemaSytem={dataCinemaSytem} dataListCinema={dataListCinema} />
                    <TabContentListMovie dataListCinema={dataListCinema} />
                    <div className="clear" />
                </div>
            </section>
        </>

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
        group:state.LocationState.location,
        
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        fetchListSytemCinema:()=>{
            dispatch(actCallApiGetInfoCinemaSytem());
        },
        fetchListCinema:(maHeThongRap,group)=>{
            dispatch(actCallApiGetListCinemaPost(maHeThongRap,group));
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(CinemaBlock);
