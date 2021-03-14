import {combineReducers} from 'redux';
import LocationState from '../../components/NavbarHome/modules/reducers';
import BannerState from '../../components/CarouselMovie/modules/reduces';
import {listMovieReducer,listSytemCinemaReducer,listCinemaReducer} from '../../container/HomeTemplate/HomePage/modules/reducer';
import ContainerMovieState from '../../components/ListMovie/Content/modules/reducers';
import detailMovieReducer from '../../container/HomeTemplate/DetailPage/modules/reducer';
import ModalReducer from '../../components/ModalTrailer';
import {InfoCheckOutReducer} from '../../container/HomeTemplate/BookingTicket/modules/reducer';
const rootReducer  = combineReducers({
    LocationState,
    BannerState,
    listMovieReducer,
    ContainerMovieState,
    listSytemCinemaReducer,
    listCinemaReducer,
    detailMovieReducer,
    ModalReducer,
    InfoCheckOutReducer

});
export default rootReducer;