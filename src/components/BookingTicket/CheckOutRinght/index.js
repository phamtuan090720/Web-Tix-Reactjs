import React, { useState } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
function Index(props) {
    const Alert = styled.div`
        width: 100%;
        padding: 5px;
        margin-bottom: 0;
    `;
    const { data, listSeatSelector, total } = props;
    const [state, setState] = useState({
        values: {
            phone: '',
            email: '',
        },
        errors: {
            phone: '',
            email: '',
        },
        emailValid: false,
        phoneValid: false,
        formValid: false,
    });
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
                emailValid = mess !== "" ? false : true;
                if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    mess = "Email không đúng định dạng";
                    emailValid = false;
                }
                break;
            default:
                break;
        }
        setState(
            {
                errors: {...state.errors,[name]: mess },
                phoneValid: phoneValid,
                emailValid: emailValid,
                formValid: phoneValid && emailValid,
            }
        );
    }
    console.log(state.errors);
    const handleSubmit = (e) => {

    }
    const RenderListSeat = (Arr) => {
        if (Arr) {
            return Arr.map((item) => {
                return `${item.name},`
            })
        }
    }
    return (
        <div className="checkOutRight" id='CheckOutRight'>
            <div className="row total">
                <p className="cash">Tổng: {total} đ</p>
            </div>
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
            <div className="row chair">
                <span className="chair_content">Ghế :{RenderListSeat(listSeatSelector)} </span><span>0đ</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputUser">
                    <div className="row">
                        <input id="emailCheckout" type="text"
                            name="email"
                            onChange={handleOnChange}
                            onBlur={handleCheckErr}
                        />
                        <label className="lableInputUser" htmlFor="emailCheckout">Email</label>
                        {state.errors.email ? (
                            <Alert className="alert alert-danger">
                                {state.errors.email}
                            </Alert>
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
                            <Alert className="alert alert-danger">
                                {state.errors.phone}
                            </Alert>
                        ) : (
                            ""
                        )}
                    </div>
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
                     disabled={!state.formValid}
                    >
                        <span />
                        <span />
                        <span />
                        <span />
      Đặt Vé
    </div>
                </div>
            </form>

        </div>
    )
}
const mapStateToProp = state => {
    return {
        listSeatSelector: state.InfoCheckOutReducer.listSeatSelector,
        total: state.InfoCheckOutReducer.total,
    }
}
export default connect(mapStateToProp, null)(Index);