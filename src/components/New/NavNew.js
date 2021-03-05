import React from 'react'

export default function NavNew() {
    return (
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#dienAnh">Điện Ảnh 24h</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#review">Review</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#khuyenMai">Khuyến Mãi</a>
            </li>
        </ul>
    )
}
