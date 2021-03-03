import React ,{useEffect}from 'react';
import { connect } from 'react-redux';
import Carousel from '../../../components/CarouselMovie';
import Lich from '../../../components/ScheduleMovie';
import {actListMovieAPI} from './modules/action';
 function HomePage(props) {
    const {dataListMovie} = props;
    console.log(dataListMovie);
    useEffect(()=>{
        props.fetchListMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>
            <Carousel/>
            <Lich dataListMovie={dataListMovie}/>
        </div>
    )
}
const mapStateToProp = state =>{
    return{
        Loading:state.listMovieReducer.loading,
        dataListMovie:state.listMovieReducer.dataListMovie,

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchListMovie:()=>{
            dispatch(actListMovieAPI());
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(HomePage);