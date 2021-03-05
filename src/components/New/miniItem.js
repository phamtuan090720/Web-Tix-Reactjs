import React from 'react'

export default function miniItem(props) {
    const {dataItem} = props
    return (
        <div className="col-12 new_mini_item pl-3 mt-3">
            <a href="#">
                <img src={dataItem.hinhAnh}/>
                <p className="new_title">{dataItem.title}</p>
            </a>
        </div>
    )
}
