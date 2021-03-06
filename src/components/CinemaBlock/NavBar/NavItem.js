import React from 'react'
import { connect } from 'react-redux';
import {actChangeSyTemCinema} from '../../../container/HomeTemplate/HomePage/modules/action';
 function NavItem(props) {
    const {dataCinemaSytem,addClass}=props;
    const changeSytemCinema = ()=>{
      props.handelChangeSystemCinema(dataCinemaSytem.maHeThongRap);
    }
    return (
        <li className="nav-item">
            <a onClick={changeSytemCinema} className={addClass} data-toggle="tab" href={`#${dataCinemaSytem.maHeThongRap}`}><img src={dataCinemaSytem.logo} alt={dataCinemaSytem.tenHeThongRap} /></a>
        </li>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        handelChangeSystemCinema:(maHeThongRap)=>{
           dispatch(actChangeSyTemCinema(maHeThongRap));
        }
    }
}
export default connect(null,mapDispatchToProps)(NavItem)
