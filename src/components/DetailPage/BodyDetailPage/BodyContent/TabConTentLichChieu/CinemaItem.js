import React from 'react'
import { Link } from 'react-router-dom';

export default function CinemaItem(props) {
    const {data,logo} = props;
    const cutData = (dataLichChieu,soLuong) =>{
        let x  = [];
        if(dataLichChieu.length>soLuong){
            for(let i = 0;i<soLuong;i++){
                x.push(dataLichChieu[i]);
            }
        }
        else{
            x = dataLichChieu;
        }
        return x;
    }
    const getTimeIsoDate=(date)=>{
        let result = date.match(/\d\d:\d\d/);
        return result[0];
   }
   let getTimeEnd=(DateTime,Time)=>{
      let date = new Date(DateTime);
      const hours = Math.floor(Time / 60);  
      const minutes = Time % 60;
      date.setMinutes(date.getMinutes()+minutes);
      date.setHours(date.getHours()+hours);
      return `${date.getHours()}:${date.getMinutes()}`;
   }
    const RenderLichChieu = (data)=>{
        return data.map((item)=>{
            return <Link to={`/booking-ticket/${item.maLichChieu}`}><button className="btn"><span>{getTimeIsoDate(item.ngayChieuGioChieu)}</span>~{getTimeEnd(item.ngayChieuGioChieu,114)}
            </button></Link>
        })
    }
    const RenderCinemaItem = ()=>{
        if(data){
           return data.map((item,index)=>{
            let dataLichChieu = cutData(item.lichChieuPhim,7);
               return   <div className="cinemaItem">
               <div className="cinemaInfor d-flex">
                   <img src={logo} alt />
                   <div className="cinema_info">
                       <p className="cinema-name" data-toggle="collapse" data-target={`#${item.maCumRap}`}>{item.tenCumRap}</p>
                   </div>
               </div>
               <div className="movie_screening collapse show" id={item.maCumRap}>
                   <p className="movie_version mb-2">2D Digital</p>
                   {/* <button className="btn"><span>15:15</span> ~ 17:04
   </button>
                   <button className="btn"><span>17:00</span> ~ 18:49
   </button>
                   <button className="btn"><span>19:10</span> ~ 20:59
   </button> */}
   {RenderLichChieu(dataLichChieu)}
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
