import React from 'react'
import styled from 'styled-components';
export default function index(props) {
    const {handelRebookTicket} = props;
    const Modal = styled.div`
        width: 100%;
        height: 100%;
        display: block;
        text-align: center;
        position: fixed;
        z-index: 12;
        background-color: rgba(0,0,0,.85);
        top:0;
        display:none;
    }
    `;
    const Content = styled.div`
        text-align: center;
        border-radius: 4px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 40px;
        font-size: 16px;
        background: transparent;
        box-shadow: 0 0 15px black;
    `;
        const LinkHome = styled.div`
            color:#03e9f4;
            font-weight: bold;
            cursor: pointer;
    `;

    return (
        <Modal id="rebookTicket" className="CheckOutModal">
            <Content className="content">Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút. <LinkHome onClick={handelRebookTicket} className="LinkHome">Đặt Vé Lại</LinkHome></Content>
        </Modal>
    )
}
