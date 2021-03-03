import React from 'react'
import Slider from "react-slick";
import NextIcon from '../../../img/Icon/next-session.png';
import BackIcon from '../../../img/Icon/back-session.png';
import Movie from '../../Movie';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    let Class=`${className} Next`
    console.log(Class);
    return (
        <div
            className={Class}
            style={{ ...style,
                display: "block", position: 'absolute',
                backgroundImage:`url(${NextIcon})`,
                width:'50px',
                height:'100px',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'contain',
                right:'-70px',
                top:'45%'}}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block",backgroundImage:`url(${BackIcon})`,
            width:'50px',
            height:'100px',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            left:'-70px',
            top:'45%'}}
            onClick={onClick}
        />
    );
}
export default function index(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="movie_schedule_content">
            <div className='movie_panel'>
                <div className="nav_btn">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active showing" data-toggle="tab" href="#showing">Đang Chiếu</a>
                            {/* id="showing" */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link coming" data-toggle="tab" href="#coming">Sắp Chiếu</a>
                        </li>
                    </ul>
                </div>
                <div className='tab-content'>
                    <div className='tab-pane active' id='showing'>
                        <Slider {...settings} className='schedule_carousel'>
                            <div className='schedule_carousel_container'>
                                <div className="row">
                                    <div className='col-3'>
                                        <Movie/>
                                    </div>
                                    <div className='col-3'>
                                        <Movie/>
                                    </div>
                                    <div className='col-3'>
                                        <Movie/>
                                    </div>
                                    <div className='col-3'>
                                        <Movie/>
                                    </div>
                                </div>
                                <div className="row">
                                <div className='col-3'>
                                        <Movie/>
                                    </div>
                                    <div className='col-3'>
                                        <Movie/>
                                    </div>
                                    <div className='col-3'>
                                        <Movie/>
                                    </div>
                                    <div className='col-3'>
                                        <Movie/>
                                    </div>
                                </div>
                            </div>
                            <div className='schedule_carousel_container'>
                                Showing
                            </div>
                        </Slider>
                    </div>
                    <div className='tab-pane fade' id='coming'>
                        <div className='schedule_carousel'>
                            <div className='schedule_carousel_container'>
                                Coming
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
