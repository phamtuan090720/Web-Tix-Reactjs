import React from 'react'

export default function CinemaItem(props) {
    const {data} = props;
    const RenderCinemaItem = ()=>{
        if(data){
           return data.map((item)=>{
               return   <div className="cinemaItem">
               <div className="cinemaInfor d-flex">
                   <img src={item.hinhAnh} alt />
                   <div className="cinema_info">
                       <p className="cinema-name" data-toggle="collapse" data-target={`#${item.maCumRap}`}>{item.tenCumRap}</p>
                   </div>
               </div>
               <div className="movie_screening collapse show" id={item.maCumRap}>
                   <p className="movie_version mb-2">2D Digital</p>
                   <button className="btn"><span>15:15</span> ~ 17:04
   </button>
                   <button className="btn"><span>17:00</span> ~ 18:49
   </button>
                   <button className="btn"><span>19:10</span> ~ 20:59
   </button>
               </div>
           </div>
           });
        }
    }
    return (
        <>
        {RenderCinemaItem()}
        </>
    )
}
