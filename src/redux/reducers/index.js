import {combineReducers} from 'redux';
import LocationState from '../../components/NavbarHome/modules/reducers';
import BannerState from '../../components/CarouselMovie/modules/reduces';
import listMovieReducer from '../../container/HomeTemplate/HomePage/modules/reducer';
import {sheduleReuducer} from '../../components/ScheduleMovie/modules/reducer';
const rootReducer  = combineReducers({
    LocationState,
    BannerState,
    listMovieReducer,
    sheduleReuducer
});
export default rootReducer;