import React, { useCallback, useState,useEffect } from 'react'
import { connect } from 'react-redux';
import * as Action from './modules/action';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
function Index(props) {
    const { actFetchApiListMovie, listMovie, actFetchApiListCinema, infoMovie, heThongRap,actResetState,group } = props;
    React.useEffect(()=>{
        actResetState();
    },[]);
    React.useEffect(() => {
        actFetchApiListMovie(group.group);
    }, [group]);
    const [Film, setFilm] = useState({
        tenPhim: "Phim",
        maPhim: null,
    });
  
    const [cinema, setCinema] = useState({
        tenCumRap: "Rạp",
        maCumRap: null,
    });
    const [ngayChieu, setNgayChieu] = useState('Ngày Xem');
    const [suatChieu,setSuatChieu] = useState({
        title: "Suất Chiếu", 
        maLichChieu:null
    })
    // useEffect(() => {
    //     setCinema({
    //    tenCumRap: "Rạp",
    //    maCumRap: null,
    //    })
    // }, [Film]);
    const CallAPIFilm = (e) => {
        actFetchApiListCinema(e.target.id);
    }
    console.log("Hệ Thống Rạp", heThongRap);
    const Cinema = () => {
        let list = [];
        if (heThongRap) {
            for (let i = 0; i < heThongRap.length; i++) {
                for (let j = 0; j < heThongRap[i].cumRapChieu.length; j++) {
                    list.push(heThongRap[i].cumRapChieu[j]);
                }
            }
        }
        return list;
    }
    const RenderListFilm = useCallback(
        () => {
            if (listMovie) {
                return listMovie.map((item) => {
                    return <span className="dropdown-item" id={item.maPhim} onClick={(e) => {
                        CallAPIFilm(e);
                        setFilm({
                            tenPhim: item.tenPhim,
                            maPhim: e.target.id,
                        });
                        if(!null){
                            setCinema({
                                tenCumRap: "Rạp",
                                maCumRap: null,
                            })
                        };
                        if(!null){
                            setNgayChieu("Ngày Xem");
                        }
                        if(!null){
                            setSuatChieu({
                                title: "Suất Chiếu", 
                                maLichChieu:null
                            })
                        }
                    }}>{item.tenPhim}</span>
                })
            }
        }, [listMovie]
    );

    const RenderCumRap = useCallback(() => {
        
        if (heThongRap) {
            if(Cinema().length>0){
                return Cinema().map((item) => {
                    return <span className="dropdown-item" onClick={() => {
                        setCinema(item);
                        console.log(item);
                        if(ngayChieu==="Ngày Xem"){
                            setNgayChieu("Ngày Xem");
                        }
                    }}>{item.tenCumRap}</span>
                })
            }
            else   return <span className="dropdown-item" >Không Tìm Thấy Rạp Chiếu Phim </span>
        }
        else {
            return <span className="dropdown-item" >Vui Lòng Chọn Phim</span>
        }
    }, [heThongRap]);
    const buyTicket = useCallback(() => {
        if (Film.maPhim && cinema.maCumRap && ngayChieu!=="Ngày Xem" && suatChieu.maLichChieu) {
            return <Link to={`/booking-ticket/${suatChieu.maLichChieu}`}><button className="btn_small btn_confirm">MUA VÉ NGAY</button></Link>
        }
        else {
            return <button style={{ backgroundColor: '#4a4a4a' }} className="btn_small btn_confirm" disabled>MUA VÉ NGAY</button>
        }
    }, [Film, cinema,ngayChieu,suatChieu]);
    const getLichChieu = useCallback(() => {
        if (cinema.maCumRap) {
            let listDate = [];
            const getListNgayChieu = (formArr) => {
                return formArr.filter((item,index)=>{
                    return formArr.indexOf(item)===index;
                })
            };
            cinema.lichChieuPhim.forEach((item) => {
                listDate.push(new Date(item.ngayChieuGioChieu).setHours(0, 0, 0, 0));
            });
           return getListNgayChieu(listDate);
        }
    }, [cinema])
    const RederLichChieu = useCallback(() => {
        if (cinema.maCumRap) {
          let listNgayXem = getLichChieu();
          if(listNgayXem.length>0){
            return listNgayXem.map((item)=>{
                return  <span className="dropdown-item" onClick={()=>{
                    setNgayChieu(item)
                }}>{new Date(item).toLocaleDateString()}</span>
            })
          }
          else{
              return <span className="dropdown-item">Không Có Xuất Chiếu Cho Phim</span>
          }
        }
        else {
            return <span className="dropdown-item">Vui Lòng Chọn Rạp Và Phim</span>
        }
    }, [cinema]);
    const getXuatChieu=useCallback(
        ()=>{
            let listGioChieu = [];  
          
                    cinema.lichChieuPhim.forEach((item)=>{
                        if(new Date(item.ngayChieuGioChieu).setHours(0,0,0,0)===new Date(ngayChieu).setHours(0,0,0,0)){
                            listGioChieu.push(item);
                        }
                    })
            return listGioChieu;
        },[cinema,ngayChieu]
    )
    const fromatTime=(date)=>{
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    const RenderXuatChieu = useCallback(()=>{
        if(cinema.maCumRap){
            // console.log(getXuatChieu());
        //    let listXuatChieu = getXuatChieu(ngayChieu);
        //    console.log(listXuatChieu);

            if(getXuatChieu().length>0){
                return getXuatChieu().map((item)=>{
                    return <span className="dropdown-item" onClick={()=>{
                        setSuatChieu(
                            {
                                title:fromatTime(new Date(item.ngayChieuGioChieu)),
                                maLichChieu:item.maLichChieu
                            }
                        )
                    }}>{fromatTime(new Date(item.ngayChieuGioChieu))}</span>
                })
            }
            else{
                return <span className="dropdown-item">Không Có Lịch Chiếu</span>
            } 
        }
        else {
            return <span className="dropdown-item">Vui Lòng Chọn Ngày Chiếu</span>
        }
    },[cinema,ngayChieu]);
    const fromatDate=()=>{
        if(ngayChieu==="Ngày Xem"){
            return ngayChieu;
          
        }
        else{
            return new Date(ngayChieu).toLocaleDateString();
        }
    }
    return (
        <div className="schedule_bar">
            <div className="drop_btn btn_movie dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {Film.tenPhim}
                    <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {/* <a className="dropdown-item" href="#">Tiệc Trăng Máu - Blood Moon Party</a>
                    <a className="dropdown-item" href="#">Quill, Chú Chó Dẫn Đường - Quill: The Life of a Guide Dog (P)</a>
                    <a className="dropdown-item" href="#">Trại Xác Sống - The Clearing (C18)</a> */}
                    {
                        RenderListFilm()
                    }
                </div>
            </div>
            <div className="drop_btn btn_small dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {cinema.tenCumRap}
                    <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {RenderCumRap()}
                </div>
            </div>
            <div className="drop_btn btn_small dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {fromatDate()}
                <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {/* <a className="dropdown-item" href="#">Vui lòng chọn phim, rạp và ngày xem</a> */}
                    {RederLichChieu()}
                </div>
            </div>
            <div className="drop_btn btn_small dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {suatChieu.title}
                <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {RenderXuatChieu()}
                </div>
            </div>
            {buyTicket()}
        </div>
    )
}
const mapStateToProp = (state) => {
    return {
        listMovie: state.ScheduleReducer.listMovie,
        infoMovie: state.ScheduleReducer.infoMovie,
        heThongRap: state.ScheduleReducer.heThongRap,
        group:state.LocationState.location,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchApiListCinema: (id) => {
            dispatch(Action.actListInfoMovie(id))
        },
        actFetchApiListMovie: (nhom) => {
            dispatch(Action.actListMovieAPI(nhom));
        },
        actResetState:()=>{
            dispatch(Action.actResetSate());
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Index);