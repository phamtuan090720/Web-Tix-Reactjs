import React from 'react'
import CinemaList from './CinemaList';
export default function index(props) {
    const {data}= props;
    return (
        <div className="cinema_block_mobile">
           <CinemaList data={data}/>
        </div>
    )
}
