import {combineReducers} from 'redux';
import LocationState from '../../components/NavbarHome/modules/reducers';
import BannerState from '../../components/CarouselMovie/modules/reduces';
import {listMovieReducer,listSytemCinemaReducer,listCinemaReducer} from '../../container/HomeTemplate/HomePage/modules/reducer';
import ContainerMovieState from '../../components/ListMovie/Content/modules/reducers';
const rootReducer  = combineReducers({
    LocationState,
    BannerState,
    listMovieReducer,
    ContainerMovieState,
    listSytemCinemaReducer,
    listCinemaReducer
});
export default rootReducer;