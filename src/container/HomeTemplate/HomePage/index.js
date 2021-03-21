import React, { useEffect, Suspense, LazyLoad, useCallback } from 'react';
import { connect } from 'react-redux';
// import Carousel from '../../../components/CarouselMovie';
// import ListMovie from '../../../components/ListMovie';
import { actListMovieAPI, actCallApiGetInfoCinemaSytem, actCallApiGetListCinemaPost,actHandleChangePage} from './modules/action';
// import App from '../../../components/App';
// import Footer from '../../../components/Footer';
// import New from '../../../components/New';
// import Cinema from '../../../components/CinemaBlock';
import Loader from '../../../components/Loader';
const Carousel = React.lazy(() => import('../../../components/CarouselMovie'));
const ListMovie = React.lazy(() => import('../../../components/ListMovie'));
const Cinema = React.lazy(() => import('../../../components/CinemaBlock'));
const New = React.lazy(() => import('../../../components/New'));
const Footer = React.lazy(() => import('../../../components/Footer'));
const App = React.lazy(() => import('../../../components/App'));
function HomePage(props) {
    // console.log(props.group);
    // // const { count, currentPage, Loading } = props;
    // useEffect(() => {
    // }, [props])
    const {group} = props;
    const [isLoading,setIsLoading]=React.useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false);
        },2000);
       
    }, []);
    const RenderHTML = useCallback(() => {
        // setIsLoading(false);
        if (isLoading) return <Loader />
        return <Suspense fallback={<Loader />}>
            <Carousel />
            <ListMovie />
            <Cinema />
            <New />
            <App />
            <Footer />
        </Suspense>

    }, [group,isLoading]);
    return (
        <div>
            {RenderHTML()}
        </div>
    )
    //  if(Loading) return <Loader/>
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