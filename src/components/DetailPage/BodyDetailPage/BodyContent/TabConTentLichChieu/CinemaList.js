import React from 'react'
import CinemaItem from './CinemaItem';
export default function CinemaList(props) {
    return (
        <div className="cinemaList">
            <CinemaItem data={props.data}/>
        </div>
    )
}
