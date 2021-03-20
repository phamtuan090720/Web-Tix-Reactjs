import React,{useState} from 'react'
import { connect } from 'react-redux';
import * as Action from './modules/action';
function Index(props) {
    const {actFetchApiListMovie,listMovie,actFetchApiListCinema,infoMovie,heThongRap} = props;
    React.useEffect(()=>{
        actFetchApiListMovie("GP04");
    },[]);
    const CallAPI=(e)=>{
        actFetchApiListCinema(e.target.id);
    }
    console.log("Hệ Thống Rạp",heThongRap);
    const Cinema = ()=>{
        let list=[];
        if(heThongRap){
           for(let i = 0;i<heThongRap.length;i++){
              for(let j = 0;j<heThongRap[i].cumRapChieu.length;j++){
                 list.push(heThongRap[i].cumRapChieu[j]); 
              }
           }
        }  
        return list;
    }
  
    const RenderCumRap = ()=>{
        if(heThongRap){
           return Cinema().map((item)=>{
                return  <span className="dropdown-item" id={item.maCumRap}>{item.tenCumRap}</span>
            })
        }
        else{
            return <span className="dropdown-item" >Không Có Rạp Chiếu</span>
        }

    }
    if(heThongRap){
        console.log("cinema",Cinema());
    }
    // const RenderCinema=()=>{
    //     if(infoMovie){
    //        return infoMovie.heThongRapChieu.map((item)=>{
    //            return <span className="dropdown-item" id={item.maPhim}>{item.tenPhim}</span>
    //        });
    //     }
    // }
    const RenderListFilm=()=>{
        if(listMovie){
            return listMovie.map((item)=>{
                return  <span className="dropdown-item" id={item.maPhim} onClick={CallAPI}>{item.tenPhim}</span>
            })
        }
    }
    return (
        <div className="schedule_bar">
            <div className="drop_btn btn_movie dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Phim
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
                    Rạp
                <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {RenderCumRap()}
                </div>
            </div>
            <div className="drop_btn btn_small dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ngày xem
                <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                </div>
            </div>
            <div className="drop_btn btn_small dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Suất chiếu
                <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                </div>
            </div>
            <button className="btn_small btn_confirm">MUA VÉ NGAY</button>
        </div>
    )
}
const mapStateToProp=(state)=>{
    return{
        listMovie:state.ScheduleReducer.listMovie,
        infoMovie:state.ScheduleReducer.infoMovie,
        heThongRap:state.ScheduleReducer.heThongRap,
        
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        actFetchApiListCinema:(id)=>{
            dispatch(Action.actListInfoMovie(id))
        },
        actFetchApiListMovie:(nhom)=>{
            dispatch(Action.actListMovieAPI(nhom));
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(Index);