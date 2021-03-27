import dataLocation from '../location.json';
const initialState = {
    listLocation:dataLocation,
    location:dataLocation[0]
}
 const LocationState  = (state=initialState,action)=>{
    switch(action.type){
        case "CHANGE_LOCATION":
            state.location = action.payload;
            return {...state};
        case "SET_LOCATION_LOGIN":
           let location = state.listLocation.filter((item)=>{
                return item.group === action.payload;
            });
            state.location = location[0];
        default:
            return{...state};
    }
}
export default LocationState;