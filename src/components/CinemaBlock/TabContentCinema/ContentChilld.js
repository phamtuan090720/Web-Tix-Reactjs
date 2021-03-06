import React from 'react'
import Content from './ItemContentChild';
export default function ContentChilld(props) {
    const {dataListCinema} = props;
    const render=()=>{
        if(dataListCinema&&dataListCinema.length>0){
            return dataListCinema.map((item,index)=>{
               return <Content key={index} infoCinema={item} />
            })
        }
    }
    return (
        <div class="cinema_address_list">
            {render()}
        </div>
    )
}
