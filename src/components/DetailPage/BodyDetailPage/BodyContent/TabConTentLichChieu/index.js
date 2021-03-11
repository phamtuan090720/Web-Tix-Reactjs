import React from 'react'
import CinemaList from './CinemaList';
export default function index(props) {
    const { data } = props;
    const Render = () => {
        if (data) {
           return data.heThongRapChieu.map((item, index) => {
                if (index === 0) {
                    return <div className="tab-pane active container" id={item.maHeThongRap}>
                        <CinemaList data={item.cumRapChieu} />
                    </div>
                }
                 return <div className="tab-pane container" id={item.maHeThongRap}> <CinemaList data={item.cumRapChieu} /></div>
            })
        }
    }
    return (
        <div className="tab-content">
            {Render()}
        </div>
    )
}
