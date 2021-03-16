import React from 'react'
import Seat from './Seat';
export default function index(props) {
    const { data } = props;
    const DanhSachGheVip = (data) => {
        let Ds = [];
        if (data) {
            Ds = data.filter((item) => {
                return item.loaiGhe === "Vip";
            }).slice(0, 28);
        }
        return Ds;
    }
    console.log(DanhSachGheVip(data));
    const DanhSachGheThuong = (data) => {
        let Ds = [];
        if (data) {
            Ds = data.filter((item) => {
                return item.loaiGhe === "Thuong";
            }).slice(0, 84);
        }
        return Ds;
    }
    console.log(DanhSachGheThuong(data));
    const RenderSeatLine = (nameLine, IndexStart, IndexEnd, Array) => {
        let data = [];
        data = Array.slice(IndexStart, IndexEnd);
        console.log(data);
        return <li class="seat-line row">
            <span className="col-1">{nameLine}</span>
                <ul className="seat--area col-10" >

                <li class="front-seat row">
                    <ul class="row col-12">
                        {
                            data.map((item, index) => {
                                if (index < 4) {
                                    return <Seat data={item} name={`${nameLine}${index+1}`} className={"single-seat col-3"} />
                                }
                            })
                        }

                    </ul>
                </li>
                <li class="front-seat row">
                    <ul class="row col-12">
                        {
                            data.map((item, index) => {
                                if (index >= 4 && index < 10) {
                                    return <Seat data={item} name={`${nameLine}${index+1}`} className={"single-seat col-2"} />
                                }
                            })
                        }

                    </ul>
                </li>
                <li class="front-seat row">
                    <ul class="row col-12">
                        {
                            data.map((item, index) => {
                                if (index >= 10 && index < 14) {
                                    return <Seat data={item} name={`${nameLine}${index+1}`} className={"single-seat col-3"} />
                                }
                            })
                        }

                    </ul>
                </li>



            </ul>
            <span className="col-1">{nameLine}</span>
        </li>
    }
    return (
        <div className="screen-wrapper">
             <ul className="seat-area">
                    {RenderSeatLine("A", 0, 14, DanhSachGheThuong(data))}
                    {RenderSeatLine("B", 14, 28, DanhSachGheThuong(data))}

                </ul>
                <div className="way">
                    <h5 className="way-1">Lối Đi</h5>
                </div>
                <ul className="seat-area">
                    {RenderSeatLine("C", 28, 42, DanhSachGheThuong(data))}
                    {RenderSeatLine("D", 42, 56, DanhSachGheThuong(data))}
                    {RenderSeatLine("E", 56, 70, DanhSachGheThuong(data))}
                    {RenderSeatLine("F", 70, 84, DanhSachGheThuong(data))}
                </ul>
                <div className="way">
                    <h5 className="way-1">VIP</h5>
                </div>
                <ul className="seat-area">
                    {RenderSeatLine("V1", 0, 14, DanhSachGheVip(data))}
                    {RenderSeatLine("V2", 14, 28, DanhSachGheVip(data))}
                </ul>
                <div className="way-end">
                    <h5 className="way-1">Hết</h5>
                </div>
        </div>
    )
}
