import { combineReducers } from 'redux';
import LocationState from '../../components/NavbarHome/modules/reducers';
import BannerState from '../../components/CarouselMovie/modules/reduces';
import { listMovieReducer, listSytemCinemaReducer, listCinemaReducer } from '../../container/HomeTemplate/HomePage/modules/reducer';
import ContainerMovieState from '../../components/ListMovie/Content/modules/reducers';
import detailMovieReducer from '../../container/HomeTemplate/DetailPage/modules/reducer';
import ModalReducer from '../../components/ModalTrailer';
import { InfoCheckOutReducer, bookingTicketReducer, DatVeReducer, BillReducer } from '../../container/HomeTemplate/BookingTicket/modules/reducer';
import AuthReducer from "../../container/AdminTemplate/AuthPage/modules/reducer";
import { ScheduleReducer } from '../../components/ListMovie/ScheduleBar/modules/reducer';
import { FindUserReuder, AlerUpdateInfoReducer, infoAccountReducer } from '../../container/HomeTemplate/Profile/modules/reducers';
import RegisterUserReducer from "../../container/AdminTemplate/RegisterPage/modules/reducers";
import {
    UserReducer,
    addNewUserReduce,
    findUserReducer,
} from "../../container/AdminTemplate/UserManager/modules/reducers";
import ChangeUserReducer from "../../components/AdminComponent/PopUp/DialogUpdateUser/modules/reducers";
import DeleteUserReducer from "../../components/AdminComponent/Table/UserTable/modules/reducers";
import {
    getListMovieReducer,
    getListMovieByDateReducer,
    addNewMovieReducer,
} from "../../container/AdminTemplate/MovieManager/modules/reducers";
import {
    DeleteMovieReducer,
    ChangeInfoMovieReducer,
} from "../../components/AdminComponent/Table/MovieTable/modules/reducers";
import {
    GetListCinemaReducer,
    getMovieOfCinemaReducer,
    layDanhSachPhongVeReducer,
    createShowTimesReducer,
  } from "../../container/AdminTemplate/BookingManager/modules/reducers";
  import {infoTheaterReducer,theaterToSystemReducer} from "../../container/AdminTemplate/TheaterManager/modules/reducers";

const rootReducer = combineReducers({
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
    DatVeReducer,
    BillReducer,
    ScheduleReducer,
    FindUserReuder,
    AlerUpdateInfoReducer,
    infoAccountReducer,
    //Admin
    AuthReducer,
    RegisterUserReducer,
    UserReducer,
    addNewUserReduce,
    findUserReducer,
    ChangeUserReducer,
    DeleteUserReducer,
    getListMovieReducer,
    getListMovieByDateReducer,
    addNewMovieReducer,
    DeleteMovieReducer,
    ChangeInfoMovieReducer,
    GetListCinemaReducer,
    getMovieOfCinemaReducer,
    layDanhSachPhongVeReducer,
    createShowTimesReducer,
    infoTheaterReducer,
	theaterToSystemReducer,
});
export default rootReducer;