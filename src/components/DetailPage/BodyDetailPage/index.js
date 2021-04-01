import React from 'react'
// import '../../../scss/layout/_DetailPage.scss';
import HeaderContent from './HeaderContent';
import BodyContent from './BodyContent';
import Modal from '../../ModalTrailer';
import backgroundWapperContent from '../../../img/DetailPage/movie-details-bg.jpg';
export default function index(props) {
    const {data} = props; 
    return (
        <div style={{backgroundImage:`url(${backgroundWapperContent})`}} className="warper-content">
            <div className="warper-film">
                <div className="overlay_movie">
                    <div className="container container-info-movie">
                        <HeaderContent data={data}/>
                        <BodyContent data={data}/>
                    </div>
                </div>
            </div>
            <Modal/>
        </div>

    )
}
