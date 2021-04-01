import React, { useEffect, Suspense, useCallback } from 'react';
import { connect } from 'react-redux';
import Carousel from '../../../components/CarouselMovie';
// import ListMovie from '../../../components/ListMovie';
import { actListMovieAPI, actCallApiGetInfoCinemaSytem, actCallApiGetListCinemaPost, actHandleChangePage } from './modules/action';
import App from '../../../components/App';
import Footer from '../../../components/Footer';
import New from '../../../components/New';
// import Cinema from '../../../components/CinemaBlock';
import ModalTrailer from '../../../components/ModalTrailer';
import Loader from '../../../components/Loader';
import Loading from '../../../components/Backdrop';
const ListMovie = React.lazy(() => import('../../../components/ListMovie'));
const Cinema = React.lazy(() => import('../../../components/CinemaBlock'));
function HomePage(props) {
    const { group } = props;
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [group]);
    const RenderHTML = useCallback(() => {
        if (isLoading) return <Loader />
        return <>
            <Carousel />
            <Suspense fallback={!isLoading?"":<Loading/>}>
                <ListMovie />
                <Cinema />
            </Suspense>
                <New />
                <App />
                <Footer />
            <ModalTrailer />
        </>
    }, [group, isLoading]);
    return (
        <div>
            {RenderHTML()}
            
        </div>
    )
}
const mapStateToProp = state => {
    return {
        Loading: state.listMovieReducer.loading,
        dataListMovie: state.listMovieReducer.dataListMovie,
        totalPages: state.listMovieReducer.totalPages,
        dataCinemaSytem: state.listSytemCinemaReducer.dataCinemaSytem,
        dataListCinema: state.listCinemaReducer.dataListCinema,
        maHeThongRap: state.listCinemaReducer.maHeThongRap,
        dataListMovieSchedule: state.listCinemaReducer.dataListMovieSchedule,
        count: state.listMovieReducer.count,
        currentPage: state.listMovieReducer.currentPage,
        group: state.LocationState.location,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchListMovie: (count, currentPage) => {
            dispatch(actListMovieAPI(count, currentPage));
        },
        fetchListSytemCinema: () => {
            dispatch(actCallApiGetInfoCinemaSytem());
        },
        fetchListCinema: (maHeThongRap) => {
            dispatch(actCallApiGetListCinemaPost(maHeThongRap));
        },
        changeIndexPage: (currentPage) => {
            dispatch(actHandleChangePage(currentPage));
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(HomePage);