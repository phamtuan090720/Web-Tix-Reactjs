import React from 'react';
import Movie from './MovieItem';
export default function ConentChild(props) {
    const {infoMovie,className}=props;
    const Render=()=>{
        if(infoMovie.danhSachPhim.length>0){
           return infoMovie.danhSachPhim.map((item,index)=>{
              return <Movie key={index} dataMovie={item}/>
           })
        }
    }
    return (
        <div id={infoMovie.maCumRap} className={className}>
          {Render()}
        </div>
    )
}
