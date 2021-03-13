import React from 'react'

export default function CinemaItem(props) {
    const { data,logo } = props;
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
            return <button className="btn"><span>{getTimeIsoDate(item.ngayChieuGioChieu)}</span>~{getTimeEnd(item.ngayChieuGioChieu,114)}
            </button>
        })
    }
    const renderHTML = () => {
        if (data) {
            return data.map((item) => {
                let dataLichChieu = cutData(item.lichChieuPhim,7);
                return (
                    <div className="list_cinema_item">
                        <div className="cinemaList">
                            <div className="cinemaItem">
                                <div className="cinemaInfor d-flex">
                                    <img src={logo}/>
                                    <div className="cinema_info">
                                        <p type='button' className="cinema-name" data-target={`#${item.maCumRap}`}>{item.tenCumRap}</p>
                                    </div>
                                </div>
                                <div className="movie_screening" id={item.maCumRap}>
                                    <p className="movie_version mb-2">2D Digital</p>
                                    {/* <button className="btn"><span>15:15</span> ~ 17:04
        </button>
                                    <button className="btn"><span>17:00</span> ~ 18:49
        </button>
                                    <button className="btn"><span>19:10</span> ~ 20:59
        </button>
                                    <button className="btn"><span>19:10</span> ~ 20:59
        </button>
                                    <button className="btn"><span>19:10</span> ~ 20:59
        </button>
                                    <button className="btn"><span>19:10</span> ~ 20:59
        </button> */}
        {RenderLichChieu(dataLichChieu)}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
       <>
        {renderHTML()}
       </>
    )
}
