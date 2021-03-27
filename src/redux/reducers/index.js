import {combineReducers} from 'redux';
import LocationState from '../../components/NavbarHome/modules/reducers';
import BannerState from '../../components/CarouselMovie/modules/reduces';
import {listMovieReducer,listSytemCinemaReducer,listCinemaReducer} from '../../container/HomeTemplate/HomePage/modules/reducer';
import ContainerMovieState from '../../components/ListMovie/Content/modules/reducers';
import detailMovieReducer from '../../container/HomeTemplate/DetailPage/modules/reducer';
import ModalReducer from '../../components/ModalTrailer';
import {InfoCheckOutReducer,bookingTicketReducer,DatVeReducer,BillReducer} from '../../container/HomeTemplate/BookingTicket/modules/reducer';
import AuthReducer from "../../container/AdminTemplate/AuthPage/modules/reducer";
import {ScheduleReducer} from '../../components/ListMovie/ScheduleBar/modules/reducer';
import {FindUserReuder,AlerUpdateInfoReducer} from '../../container/HomeTemplate/Profile/modules/reducers';
const rootReducer  = combineReducers({
    LocationState,
    BannerState,
    listMovieReducer,
    ContainerMovieState,
    listSytemCinemaReducer,
    listCinemaReducer,
    detailMovieReducer,
    ModalReducer,
    InfoCheckOutReducer,
    bookingTicketReducer,
    AuthReducer,
    DatVeReducer,
    BillReducer,
    ScheduleReducer,
    FindUserReuder,
    AlerUpdateInfoReducer

});
export default rootReducer;