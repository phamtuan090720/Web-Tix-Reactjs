import React from 'react'

export default function ItemContentChild(props) {
    const {infoCinema,addClass} = props;
    const openCity = (e) =>{
       
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(`${infoCinema.maCumRap}`).style.display = "block";
        e.currentTarget.className += " active";
    }
    // check mã cụm rạp để đổi màu
    return (
        <div className={addClass} onClick={openCity}>
            <div className="cinema_info">
                <p className="cinema-name"><span className="bhd">{infoCinema.tenCumRap}</span></p>
                <p className="cinema-address">{infoCinema.diaChi}</p>
                <p><a href="https://tix.vn/rap-chieu-phim/28-bhd-star-cineplex-icon-68">[chi tiết]</a></p>
            </div>
        </div>
    )
}
