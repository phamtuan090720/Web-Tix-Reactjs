import {combineReducers} from 'redux';
import LocationState from '../../components/NavbarHome/modules/reducers';
import BannerState from '../../components/CarouselMovie/modules/reduces';
const rootReducer  = combineReducers({
    LocationState,
    BannerState
});
export default rootReducer;