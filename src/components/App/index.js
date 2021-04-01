import React from 'react';
import Slider from "react-slick";
import { DataCarousel } from './dataCarousel';
import CarouselItem from './itemCarouselApp';
import backapp from '../../img/app/backapp.jpg';
import mobile from '../../img/app/mobile.png';
export default function index() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"

    };
    const renderSlider = () => {
        if (DataCarousel && DataCarousel.length) {
            return DataCarousel.map((item, index) => {
                return <div key={index} className='item'>
                    <CarouselItem img={item}></CarouselItem>
                </div>
            });
        }
    }
    return (
        <>
            <div id='app_tix'></div>
            <section style={{backgroundImage:`url(${backapp})`}} className="app">
                <div className="app_movie row">
                    <div className="app_link container col-12 col-lg-6">
                        <h3>Ứng dụng tiện lợi dành cho</h3>
                        <h3>người yêu điện ảnh</h3>
                        <br />
                        <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                        <br />
                        <button className="btn btn-danger">App miễn phí - Tải về ngay!</button>
                        <p style={{ paddingTop: 10 }}>TIX có hai phiên bản <a href="#">iOS</a> &amp; <a href="#">Android</a></p>
                    </div>
                    <div className="app_content col-12 col-lg-6">
                          {/* background-image: url('../../img/app/mobile.png'); */}
                        <div style={{backgroundImage:`url(${mobile})`}} className="app_content_slider">
                            {/* <img class="mobile_bg" src="./img/app/mobile.png" alt=""> */}
                            <Slider {...settings} className='app_carousel'>

                                {renderSlider()}
                            </Slider>
                            {/* <div className="app_carousel owl-carousel owl-theme">
                            <div className="item">
                                <div className="bg_img item1" />
                            </div>
                            <div className="item">
                                <div className="bg_img item2" />
                            </div>
                            <div className="item">
                                <div className="bg_img item3" />
                            </div>
                        </div> */}
                            {/* 
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                        
                      </div>
                      <div class="carousel-item">
                        
                      </div>
                      <div class="carousel-item">
                          
                      </div>
                  </div>
              </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
