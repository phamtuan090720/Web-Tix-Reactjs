import React from 'react'

export default function index() {
    return (
        <div className="cinema_block_mobile">
            <div className="panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading" data-toggle="collapse" data-target="#list_cinema_bhd">
                        <div className="panel-title">
                            <img src="./img/icon/f32670fd0eb083c9c4c804f0f3a252ed.png" alt className="mr-2" />
                            <div className="wrap_info_cinema">
                                <p className="cinema_name">BHD Star Cineplex</p>
                                <p className="cinema_promo"><img src="./img/Icon/3b044b88f751ba77406f7ebc15090514.png" alt />x3 vé BHD Star 59k/vé</p>
                            </div>
                        </div>
                    </div>
                    <div className="list_cinema">
                        <div id="list_cinema_bhd" className="collapse">
                            <div className="list_cinema_item">
                                <div className="cinemaList">
                                    <div className="cinemaItem">
                                        <div className="cinemaInfor d-flex">
                                            <img src="./img/DetailPage/bhd-star-bitexco-15379552241200.jpg" alt />
                                            <div className="cinema_info">
                                                <p className="cinema-name"><span className="bhd">BHD Star</span> - Vincom Lê Văn Việt</p>
                                                <p className="cinema-address" data-toggle="collapse" data-target="#bhdStar_bitexco_CoCo">
                                                    L4-Vincom Plaza, 50 Lê Văn Việt, Q.9</p>
                                            </div>
                                        </div>
                                        <div className="movie_screening collapse show" id="bhdStar_bitexco_CoCo">
                                            <p className="movie_version mb-2">2D Digital</p>
                                            <button className="btn"><span>15:15</span> ~ 17:04
          </button>
                                            <button className="btn"><span>17:00</span> ~ 18:49
          </button>
                                            <button className="btn"><span>19:10</span> ~ 20:59
          </button>
                                            <button className="btn"><span>19:10</span> ~ 20:59
          </button>
                                            <button className="btn"><span>19:10</span> ~ 20:59
          </button>
                                            <button className="btn"><span>19:10</span> ~ 20:59
          </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
