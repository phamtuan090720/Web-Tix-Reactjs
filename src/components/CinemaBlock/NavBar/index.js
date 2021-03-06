import React from 'react'
import NavItem from './NavItem';
export default function index(props) {
    const {dataCinemaSytem}=props;
    const renderListCinemaSytem=()=>{
        if(dataCinemaSytem&&dataCinemaSytem.length>0){
            return dataCinemaSytem.map((Item,index)=>{
                if(index===0){
                    return<NavItem key={index} dataCinemaSytem={Item} addClass={'nav-link active'}/>
                }
                else{
                    return <NavItem key={index} dataCinemaSytem={Item} addClass={'nav-link'}/>
                }
               
            })
        }
    }
    return (
        <ul className="nav nav-tabs listCinema">
            {renderListCinemaSytem()}
        </ul>
    )
}
