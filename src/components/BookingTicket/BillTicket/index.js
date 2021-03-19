import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WeekendIcon from '@material-ui/icons/Weekend';
import MovieIcon from '@material-ui/icons/Movie';
import TheatersIcon from '@material-ui/icons/Theaters';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Styled from 'styled-components';
import BackGround from '../../../img/BookingTicket/movie-details-bg.jpg';
import { Link } from 'react-router-dom';
import * as Action from '../../../container/HomeTemplate/BookingTicket/modules/action';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { connect } from 'react-redux';
import Seat from './Seat';

function Index(props) {
    const {isOpen,resetSateCheckOut,infoUser,total,infoLichChieu,listSeat,handelRebookTicket} = props;
    const [open,setOpen] = React.useState({
        display:"none",opacity:1
    });
    React.useEffect(()=>{
        if(isOpen===true){
            setOpen({
                display:"flex",opacity:1
            });
        }
    },[isOpen]);
    
    const Bg = Styled.div`
    background-image: url(${BackGround});
    `;
    console.log(listSeat);
    const RenderListSeat=()=>{
        if(listSeat){
            return listSeat.map((item)=>{
                return <Seat  name={item.name}/>
            })
        }

    }
    return (
        <div className="ListVe" style={open}>
            <Bg className="container">
                <div className="row">
                    <div className="title col-12">Đặt Vé Thành Công</div>
                    <div className='Info col-12'>
                        <div className="row">
                            <div className="Icon"><AccountCircleIcon className="IconChild" /></div>
                            <div className="Profile">
                                <div>
                                    <span>Tài Khoản: {infoUser.taiKhoan}</span>
                                </div>
                                <div>
                                    <span>Email: {infoUser.email}</span>
                                </div>
                                <div>
                                    <span>Số Điện Thoại: {infoUser.SDT}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='NameFilm col-12'>
                        <div className="row">
                            <div className="Icon"><MovieIcon className="IconChild" /></div>
                            <div className="Profile">
                                <div>
                                    <span>Tên Phim: {infoLichChieu.thongTinPhim.tenPhim}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Cinema col-12'>
                        <div className="row">
                            <div className="Icon"><TheatersIcon className="IconChild" /></div>
                            <div className="Profile">
                                <div>
                                    <span>Rạp: {infoLichChieu.thongTinPhim.tenCumRap}-{infoLichChieu.thongTinPhim.tenCumRap}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Date col-12'>
                        <div className="row">
                            <div className="Icon"><ScheduleIcon className="IconChild" /></div>
                            <div className="Profile">
                                <div>
                                    <span>Ngày-Giờ: {infoLichChieu.thongTinPhim.ngayChieu}-{infoLichChieu.thongTinPhim.gioChieu}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ListSeats col-12'>
                        <div className="row">
                            <div className="Icon"><WeekendIcon className="IconChild" /></div>
                            <div className="Profile">
                                    <span>Danh Sách Ghế:</span>
                                    {<>
                                        {RenderListSeat()}
                                    </>}
                            </div>
                        </div>
                    </div>
                    <div className='Total col-12'>
                        <div className="row">
                            <div className="Icon"><LocalAtmIcon className="IconChild" /></div>
                            <div className="Profile">
                                <div>
                                    <span>Tổng Tiền: {total} VNĐ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Action col-12'>
                        <div className="row">
                            <Link to='/' onClick={()=>{
                                resetSateCheckOut();
                            }}>
                                <Button
                                    variant="contained"
                                    // color="secondary"
                                    className={"button"}
                                    startIcon={<HomeIcon />}
                                >Về Trang Chủ</Button>
                            </Link>
                           
                            <Button
                                variant="contained"
                                // color="secondary"
                                onClick={handelRebookTicket}
                                className={'button'}
                                startIcon={<BookmarkIcon />}
                            >Đặt Vé Mới </Button>
                        </div>
                    </div>
                </div>
            </Bg>
        </div>
    )
    console.log(infoLichChieu);
}

const mapStateToProp=(state)=>{
    return{
        infoUser:state.BillReducer.infoUser,
        infoLichChieu:state.bookingTicketReducer.data,
        total:state.InfoCheckOutReducer.total,
        listSeat:state.InfoCheckOutReducer.listSeatSelector,
    }
}
const mapDispatchToProp = (dispatch)=>{
    return {
        resetSateCheckOut:()=>{
            dispatch(Action.actResetStateReducer());
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Index);
