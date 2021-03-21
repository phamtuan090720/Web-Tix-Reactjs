import React from 'react';
import { connect } from 'react-redux';
import {actChangeLocation} from './modules/action';
import {actHandleChangePage} from '../../container/HomeTemplate/HomePage/modules/action'; 
 function DropdownItem(props) {
    const closeModalLocation=()=>{
        document.getElementById("modal-locaition").style.display="none";
        let close =  document.getElementsByClassName("modal-backdrop");
        if(close.length>0)
        {
            close[0].style.display="none";
        }
    }
    const {setDefaltCurentPage} = props;
   const changeLocation = ()=>{
        closeModalLocation();
        props.changeLCT(props.location);
   } 
    return (
        <span className="dropdown-item" onClick={()=>{
            changeLocation();
            setDefaltCurentPage(1);
        }}>{props.location.city}</span>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        changeLCT:(lc)=>{
            dispatch(actChangeLocation(lc));
        },
        setDefaltCurentPage:(index)=>{
            dispatch(actHandleChangePage(index));
        }

    }
}
export default connect(null,mapDispatchToProps)(DropdownItem);
