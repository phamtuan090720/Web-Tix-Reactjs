import React from 'react'
import TabContentLichChieu from './TabConTentLichChieu';
import TabContentLichChieuMoblie from './TabContentLichChieuMoblie';
export default function index(props) {
    const {data}=props;
    const RenderCinema=()=>{
            return  data.heThongRapChieu.map((item,index)=>{
                if(index===0){
                    return  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href={`#${item.maHeThongRap}`}>
                        <img src={item.logo}/>
                        <div className="cinemaInfor">
                            <p className="cinema-name">{item.tenHeThongRap}</p>
                        </div>
                    </a>
                    </li>
                }
                return  <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href={`#${item.maHeThongRap}`}>
                    <img src={item.logo}/>
                    <div className="cinemaInfor">
                        <p className="cinema-name">{item.tenHeThongRap}</p>
                    </div>
                </a>
                </li>
            })
    }
    return (
        <>
            <div id="lichChieu1" className='mt-5' />
            <div className="body-content">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#lichChieu">Lịch Chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#thongTin">Thông Tin</a>
                    </li>
                    <li className="nav-item d-none">
                        <a className="nav-link" data-toggle="tab" href="#danhGia">Đánh Giá</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active container" id="lichChieu">
                        <div id="lichChieuDes">
                            <ul className="nav nav-tabs listCinema">
                                {RenderCinema()}
                            </ul>
                            <TabContentLichChieu data={data}/>
                        </div>
                        <div id="lichChieuMobile">
                            <TabContentLichChieuMoblie data={data}/>
                        </div>
                    </div>
                    <div className="tab-pane container" id="thongTin">
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <p className="contentTitle">Ngày Công Chiếu:</p>
                                    <p className="contentInfo">{new Date(data.ngayKhoiChieu).toLocaleDateString()}</p>
                                </div>
                                <div className="row">
                                    <p className="contentTitle">Tên Phim:</p>
                                    <p className="contentInfo">{data.tenPhim}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="description">
                                    <p className="contentInfo">Mô Tả:</p>
                                    <p>{data.moTa}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container" id="danhGia">Đánh Giá</div>
                </div>
            </div>
        </>
    )
}
