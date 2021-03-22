import React from 'react'
import { Link } from 'react-router-dom';

export default function MovieItem(props) {
    const {dataMovie}=props;
    const cutData=(soLuong)=>{
        let data = []
        if(dataMovie.lstLichChieuTheoPhim.length>soLuong){
            for (let i = 0; i < soLuong; i ++) {
                data.push(dataMovie.lstLichChieuTheoPhim[i])
            }
        }
        else{
            for (let i = 0; i < dataMovie.lstLichChieuTheoPhim.length; i ++) {
                data.push(dataMovie.lstLichChieuTheoPhim[i])
            }
        }
        return data;
    }
   let dataLichChieu = cutData(7);
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
   const renderGioChieu = ()=>{
       if(dataLichChieu&&dataLichChieu.length>0){
           return dataLichChieu.map((item)=>{
            return <Link to={`/booking-ticket/${item.maLichChieu}`}> <button className="btn"><span>{getTimeIsoDate(item.ngayChieuGioChieu)}</span>~{getTimeEnd(item.ngayChieuGioChieu,109)}
            </button> </Link>
           })
       }
   }
    return (
        <div className="col-12 movie_item">
            <div className="movie_info d-flex mb-3">
                <img src={dataMovie.hinhAnh} alt="hinhAnh" />
                <div className="wrapInfo
      pl-3">
                    <p><span className="mr-1 age_type_p">P</span>{dataMovie.tenPhim}</p>
                    <p data-toggle="collapse" data-target={`#ID${dataMovie.maPhim}`}>109 phút - TIX 9.4 - IMDb 8.7</p>
                </div>
            </div>
            <div className="movie_screening collapse show" id={`ID${dataMovie.maPhim}`}>
                <p className="movie_version mb-2">2D Digital</p>
                {/* <button className="btn"><span>15:15</span> ~ 17:04
    </button>
                <button className="btn"><span>17:00</span> ~ 18:49
    </button>
                <button className="btn"><span>19:10</span> ~ 20:59
    </button> */}
    {renderGioChieu()}
            </div>
        </div>

    )
}
