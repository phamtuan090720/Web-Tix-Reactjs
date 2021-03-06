import React from 'react'

export default function ItemContentChild(props) {
    const {infoCinema} = props
    // check mã cụm rạp để đổi màu
    return (
        <div className="tablinks" onclick="openCity(event, 'bhdStar_bitexco')" id="defaultOpen_bhd_cinema">
            <div className="cinema_info">
                <p className="cinema-name"><span className="bhd">{infoCinema.tenCumRap}</span></p>
                <p className="cinema-address">{infoCinema.diaChi}</p>
                <p><a href="https://tix.vn/rap-chieu-phim/28-bhd-star-cineplex-icon-68">[chi tiết]</a></p>
            </div>
        </div>
    )
}
