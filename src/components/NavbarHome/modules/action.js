export const actChangeLocation= (location) =>{
    return {
        type:"CHANGE_LOCATION",
        payload:location,
    };
} 
export const actSetLocationLogin= (maNhom) =>{
    return {
        type:"SET_LOCATION_LOGIN",
        payload:maNhom,
    };
} 