import React, { useState } from 'react'
import { connect } from 'react-redux';
import ModalErr from '../ModalErr';
import Alert from '../Alert';
import ModalNoti from '../ModalNotification';
import Styled from "styled-components";
import BgCheckOut from '../../../img/BookingTicket/movie-details-bg.jpg';
import { actDatVe, getInfoCustomer } from '../../../container/HomeTemplate/BookingTicket/modules/action';
function Index(props) {
    const { data, listSeatSelector, total, user, malichChieu, actBookTicket, actGetInfoCustomer } = props;
    // console.log(user, parseInt(malichChieu));
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenNoti, setIsOpenNoti] = useState(false);

    const [stateModalErr, setStateModalErr] = useState({
        mess: '',
    });
    const [state, setState] = useState({
        errors: {
            phone: '',
            email: '',
        },
        values: {
            phone: '',
            email: '',
        },
        emailValid: false,
        phoneValid: false,
        formValid: false,
    });
    const [sateDataDatVe, setSateDataDatVe] = useState(
        {
            "maLichChieu": 0,
            "danhSachVe": [
                {
                    "maGhe": 0,
                    "giaVe": 0
                }
            ],
            "taiKhoanNguoiDung": "string"
        }
    );
    const [stateInfoCustomer, setStateInfoCustomer] = useState({
        taiKhoan: null,
        email: null,
        SDT: null,
    });
    const BackgroundCheckOutRight = Styled.div`
        @media (max-width:1105px) and (min-width: 320px) {
            background-image: url(${BgCheckOut});
        }
    `;
    // console.log(user.taiKhoan);
    console.log(listSeatSelector);
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
    // console.log(stateInfoCustomer);
    // console.log(sateDataDatVe);
    // console.log(state.values);
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleCheckErrListSeatSelector(listSeatSelector)) {
            if (handleCheckErrFrom()) {
                setIsOpenNoti(true);
                setSateDataDatVe({
                    ...state,
                    "maLichChieu": parseInt(malichChieu),
                    "danhSachVe": danhSachGheChon(),
                    "taiKhoanNguoiDung": user.taiKhoan
                });
                setStateInfoCustomer({
                    taiKhoan: user.taiKhoan,
                    email: state.values.email,
                    SDT: state.values.phone,
                });
            }

        };
    }

    const handleCheckErrListSeatSelector = (ls) => {
        if (ls.length === 0) {
            setIsOpen(true);
            setStateModalErr({ mess: 'Danh Sách Ghế Của Bạn Đang Trống,Vui Lòng Chọn Ghế' });
            return false;
        }
        if (ls.length > 6) {
            setIsOpen(true);
            setStateModalErr({ mess: "Không Được Chọn Quá 6 Ghế Bạn Nhé!" });
            return false;
        }
        return true;
    }
    const handleCheckErrFrom = () => {
        if (state.formValid === false) {
            setIsOpen(true);
            setStateModalErr({ mess: "Vui Lòng Điền Thông Tin Phù Hợp Bạn Nhé" });
            return false;
        }
        return true;
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            values: { ...state.values, [name]: value },
        });
    };
    const handleCheckErr = (e) => {
        const { name, value } = e.target;
        let mess = value === "" ? "Vui lòng nhập đầy đủ thông tin" : "";
        let { phoneValid, emailValid } = state;
        switch (name) {
            case "phone":
                emailValid = mess !== "" ? false : true;
                if (value && !value.match(/^\d{10}$/)) {
                    mess = 'SĐT Không hợp lệ'
                }
                break;
            case "email":
                phoneValid = mess !== "" ? false : true;
                if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    mess = "Email không đúng định dạng";
                }
                break;
            default:
                break;
        }
        setState(
            {
                ...state,
                errors: { ...state.errors, [name]: mess },
                phoneValid,
                emailValid,
                formValid: phoneValid && emailValid,
            }
        );
    }

    const RenderListSeat = (Arr) => {
        if (Arr) {
            return Arr.map((item) => {
                return `${item.name},`
            })
        }
    }
    console.log(listSeatSelector);
    const ListSeatNormal = (Arr) => {
        if (Arr) {
            let listSeat = Arr.filter((item) => {
                return item.loaiGhe === "Thuong"
            })
            return listSeat;
        }
    }
    const ListSeatVip = (Arr) => {
        if (Arr) {
            let listSeat = Arr.filter((item) => {
                return item.loaiGhe === "Vip"
            })
            return listSeat;
        }
    }
    let width = window.innerWidth
    console.log('Ghế Thường', ListSeatNormal(listSeatSelector));
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
                    <div style={{textAlign:"left"}} className="col-12 d-flex justify-content-between">
                        <span className="chair_content">Ghế Thường :{RenderListSeat(ListSeatNormal(listSeatSelector))} </span><span>{ListSeatNormal(listSeatSelector).length>0?ListSeatNormal(listSeatSelector)[0].giaTien:"0"}đ</span>
                    </div>
                    <div style={{textAlign:"left"}} className="col-12 d-flex justify-content-between">
                        <span className="chair_content">Ghế Vip :{RenderListSeat(ListSeatVip(listSeatSelector))} </span><span>{ListSeatVip(listSeatSelector).length>0?ListSeatVip(listSeatSelector)[0].giaTien:"0"}đ</span>
                    </div>
                </div>
                <form>
                    <div className="inputUser">
                        <div className="row">
                            <input id="emailCheckout" type="text"
                                name="email"
                                onChange={handleOnChange}
                                onBlur={handleCheckErr}
                            />
                            <label className="lableInputUser" htmlFor="emailCheckout">Email</label>
                            {state.errors.email ? (
                                <Alert mess={state.errors.email} />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="inputUser">
                        <div className="row">
                            <input id="phoneCheckout" type="text"
                                name="phone"
                                onChange={handleOnChange}
                                onBlur={handleCheckErr}
                                type='text' />
                            <label className="lableInputUser" htmlFor="phoneCheckout">Phone</label>
                            {state.errors.phone ? (
                                <Alert mess={state.errors.phone}>
                                </Alert>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="row total">
                        <p className="cash">Tổng: {total} đ</p>
                    </div>
                    <div className="button-group-checkOut">
                        <div className="btn back" onClick={() => {
                            document.getElementById("CheckOutRight").style.right = '-100%';
                        }}>
                            <span />
                            <span />
                            <span />
                            <span />
      Quay Lại
    </div>
                        <div className="btn success" type="submit"
                            onClick={handleSubmit}
                        >
                            <span />
                            <span />
                            <span />
                            <span />
      Đặt Vé
    </div>

                    </div>
                </form>

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