import React from 'react'
import NavBar from './NavBar';
import TabContentCiema from './TabContentCinema';
export default function index(props) {
    const {dataCinemaSytem,dataListCinema}=props;
    console.log(dataListCinema)
    return (
        <section className="cinema_block">
            <div className="cinema_block_container">
                <div className="bg-img-top_container">
                    <div className="bg-img-top" />
                </div>
                <NavBar dataCinemaSytem={dataCinemaSytem}/>
                <TabContentCiema dataCinemaSytem={dataCinemaSytem} dataListCinema={dataListCinema}/>
                <div className="tab-content listMovies">
                    {/* bhdStar */}
                    <div id="bhdStar_bitexco" className="tabcontent">
                        {/* Coco */}
                        <div className="col-12 movie_item">
                            <div className="movie_info d-flex mb-3">
                                <img src="./img/Phim/phi-vu-hoan-luong-honest-thief-c16-16018821184337_60x60.png" alt />
                                <div className="wrapInfo
                            pl-3">
                                    <p><span className="mr-1 age_type_c">C16</span>Phi Vụ Hoàn Lương - Honest Thief </p>
                                    <p data-toggle="collapse" data-target="#bhdStar_bitexco_HonestThief-">99 phút - TIX 6 - IMDb 0</p>
                                </div>
                            </div>
                            <div className="movie_screening collapse show" id="bhdStar_bitexco_HonestThief-">
                                <p className="movie_version mb-2">2D Digital</p>
                                <button className="btn"><span>09:20</span> ~ 10:59
                  </button>
                                <button className="btn"><span>12:35</span> ~ 17:39
                  </button>
                                <button className="btn"><span>16:00</span> ~ 17:39
                  </button>
                                <button className="btn"><span>18:00</span> ~ 19:39
                  </button>
                                <button className="btn"><span>22:00</span> ~ 23:39
                  </button>
                            </div>
                        </div>
                        {/* Trại Xác Sống - The Clearing  */}
                        <div className="col-12 movie_item">
                            <div className="movie_info d-flex mb-3">
                                <img src="./img/Phim/trai-xac-song-the-clearing-c18-16018860556392_60x60.png" alt />
                                <div className="wrapInfo
                            pl-3">
                                    <p><span className="mr-1 age_type_c">C16</span>Phi Vụ Hoàn Lương - Honest Thief </p>
                                    <p data-toggle="collapse" data-target="#bhdStar_bitexco_TheClearing-">88 phút - TIX 5.2 - IMDb 0</p>
                                </div>
                            </div>
                            <div className="movie_screening collapse show" id="bhdStar_bitexco_TheClearing-">
                                <p className="movie_version mb-2">2D Digital</p>
                                <button className="btn"><span>12:35</span> ~ 17:39
                  </button>
                                <button className="btn"><span>16:00</span> ~ 17:39
                  </button>
                                <button className="btn"><span>18:00</span> ~ 19:39
                  </button>
                                <button className="btn"><span>22:00</span> ~ 23:39
                  </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear" />
            </div>
        </section>
    )
}
