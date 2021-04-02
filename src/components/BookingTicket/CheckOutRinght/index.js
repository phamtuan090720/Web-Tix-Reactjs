import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux';
import ModalErr from '../ModalErr';
import Alert from '@material-ui/lab/Alert';
import ModalNoti from '../ModalNotification';
import Styled from "styled-components";
import { useForm } from "react-hook-form";
import BgCheckOut from '../../../img/BookingTicket/movie-details-bg.jpg';
import { actDatVe, getInfoCustomer } from '../../../container/HomeTemplate/BookingTicket/modules/action';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FromInforUser from './FormInfoUser'
function Index(props) {

    const { data, listSeatSelector, total, user, malichChieu, actBookTicket, actGetInfoCustomer } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenNoti, setIsOpenNoti] = useState(false);

    const [stateModalErr, setStateModalErr] = useState({
        mess: '',
    });
    // const { register, handleSubmit, errors } = useForm({
    //     mode: "onBlur"
    // });
    const [sateDataDatVe, setSateDataDatVe] = useState(
        {
            "maLichChieu": 0,
            "danhSachVe": [],
            "taiKhoanNguoiDung": "string"
        }
    );
    const [stateInfoCustomer, setStateInfoCustomer] = useState({
        taiKhoan: null,
        email: null,
        SDT: null,
    });
    const BackgroundCheckOutRight = Styled.div`
        @media (max-width:1105px){
            background-image: url(${BgCheckOut});
        }
    `;
    const danhSachGheChon = () => {
        if (listSeatSelector) {
            return listSeatSelector.map((item) => {
                return {
                    "maGhe": parseInt(item.id),
                    "giaVe": parseInt(item.giaTien),
                }
            })
        }
    };
    const handelDatVe = () => {
        actBookTicket(sateDataDatVe);
        setIsOpenNoti(false);
        actGetInfoCustomer(stateInfoCustomer);
    }
    React.useEffect(() => {
        if (listSeatSelector.length > 6) {
            setIsOpen(true);
            setStateModalErr({ mess: "Không Được Chọn Quá 6 Ghế Bạn Nhé!" });
        }
    }, [listSeatSelector]);
    const handleSCloseModal = () => {
        setIsOpen(false);
        setIsOpenNoti(false);
    }
    // console.log( 'dataVe',sateDataDatVe);
    // console.log("inforUser",stateInfoCustomer); 
    // // const onSubmit = (data) => {
    // //     console.log('data',data);
    // //     // if (handleCheckErrListSeatSelector(listSeatSelector)) {
    // //     //     if (handleCheckErrFrom()) {
    // //     //         setIsOpenNoti(true);
    // //     //         setSateDataDatVe({
    // //     //             ...state,
    // //     //             "maLichChieu": parseInt(malichChieu),
    // //     //             "danhSachVe": danhSachGheChon(),
    // //     //             "taiKhoanNguoiDung": user.taiKhoan
    // //     //         });
    // //     //         setStateInfoCustomer({
    // //     //             taiKhoan: user.taiKhoan,
    // //     //             email: state.values.email,
    // //     //             SDT: state.values.phone,
    // //     //         });
    // //     //     }

    // //     // };
    // // }
    // console.log(user);
    const handleCheckErrListSeatSelector = () => {
        if (listSeatSelector?.length === 0) {
            setIsOpen(true);
            setStateModalErr({ mess: 'Danh Sách Ghế Của Bạn Đang Trống,Vui Lòng Chọn Ghế' });
            return false;
        }
        if (listSeatSelector?.length > 6) {
            setIsOpen(true);
            setStateModalErr({ mess: "Không Được Chọn Quá 6 Ghế Bạn Nhé!" });
            return false;
        }
        return true;
    }
    // const handleCheckErrFrom = () => {
    //     if (state.formValid === false) {
    //         setIsOpen(true);
    //         setStateModalErr({ mess: "Vui Lòng Điền Thông Tin Phù Hợp Bạn Nhé" });
    //         return false;
    //     }
    //     return true;
    // }
    const RenderListSeat = useCallback((Arr) => {
        if (Arr) {
            return Arr.map((item) => {
                return `${item.name},`
            })
        }
    },[listSeatSelector]);
    const ListSeatNormal = useCallback(() => {
        if (listSeatSelector) {
            let listSeat = listSeatSelector.filter((item) => {
                return item.loaiGhe === "Thuong"
            })
            return listSeat;
        }
    }, [listSeatSelector]);
    const ListSeatVip = useCallback(() => {
        if (listSeatSelector) {
            let listSeat = listSeatSelector.filter((item) => {
                return item.loaiGhe === "Vip"
            })
            return listSeat;
        }
    }, [listSeatSelector]);
    return (
        <>
            <BackgroundCheckOutRight className="checkOutRight" id='CheckOutRight'>
                    <div className="row film_name">
                        <span className="col-12 movie_name">{data.tenPhim}</span>
                        <div className="contentcinema col-12">
                            <div className="address">
                                <p>{data.tenCumRap}</p>
                                <p>{`Ngày Chiếu: ${data.ngayChieu} - ${data.gioChieu} - ${data.tenRap}`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row chair row">
                        <div style={{ textAlign: "left" }} className="col-12 d-flex justify-content-between">
                            <span className="chair_content">Ghế Thường :{RenderListSeat(ListSeatNormal())} </span><span>{ListSeatNormal().length > 0 ? ListSeatNormal()[0].giaTien : "0"}đ</span>
                        </div>
                        <div style={{ textAlign: "left" }} className="col-12 d-flex justify-content-between">
                            <span className="chair_content">Ghế Vip :{RenderListSeat(ListSeatVip())} </span><span>{ListSeatVip().length > 0 ? ListSeatVip()[0].giaTien : "0"}đ</span>
                        </div>
                    </div>
                    <div className="row total">
                        <p className="cash">Tổng: {total} đ</p>
                    </div>
                    <FromInforUser handleCheckErrListSeatSelector={handleCheckErrListSeatSelector} setSateDataDatVe={setSateDataDatVe} setStateInfoCustomer={setStateInfoCustomer} setIsOpenNoti={setIsOpenNoti} danhSachGheChon={danhSachGheChon} malichChieu={malichChieu} />
            </BackgroundCheckOutRight>
            {ModalErr(isOpen, stateModalErr.mess, handleSCloseModal)}
            {ModalNoti(isOpenNoti, handleSCloseModal, handelDatVe)}
        </>
    )
}
const mapStateToProp = state => {
    return {
        listSeatSelector: state.InfoCheckOutReducer.listSeatSelector,
        total: state.InfoCheckOutReducer.total,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        actBookTicket: (data) => {
            dispatch(actDatVe(data));
        },
        actGetInfoCustomer: (data) => {
            dispatch(getInfoCustomer(data))
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Index);