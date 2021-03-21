import React,{useEffect,lazy,Suspense} from 'react'
import DropdownIcon from '../../img/Icon/dropdown-icon.png';
import Loading from '../Loader';
import ShedulesBar from './ScheduleBar';
import Content from './Content';

import { connect } from 'react-redux';
// const ShedulesBar = React.lazy(() => import('./ScheduleBar'));
// const Content = React.lazy(() => import('./Content'));
function Index(props) {
    // const {currentPage,totalPages}=props;
    return (
        <>
            <div id='movie_schedule_tix'></div>
            <section className="movie_schedule">
                <Suspense fallback={<Loading/>}>  
                    <ShedulesBar DropdownIcon={DropdownIcon} />
                    <Content/>
                </Suspense>
            </section>
        </>

    )
}
const mapStateToProp = state =>{
    return{
        currentPage:state.listMovieReducer.currentPage,
        totalPages:state.listMovieReducer.totalPages,
        count:state.listMovieReducer.count,
    }
}
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         // fetchListMovie:(count,currentPage)=>{
//         //     dispatch(actListMovieAPI(count,currentPage));
//         // }
//     }
// }
export default connect(mapStateToProp,null)(Index);