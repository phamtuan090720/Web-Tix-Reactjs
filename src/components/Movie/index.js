import React from 'react';
import start1 from '../../img/Icon/star1.png';
import start12 from '../../img/Icon/star1.2.png';
import PlayIcon from'../../img/Icon/play-video.png';
import DefaultPicMovie from '../../img/default-film.webp'
export default function Movie() {
    return (
        <div className="movie_item">
            <div className="movie_pic">
                <img src={DefaultPicMovie} alt />
                <button className="play_btn button_trailer_movie" data-toggle="modal" data-target="#modal_trailer" onclick="openModal('https://www.youtube.com/embed/FFu_Yjw9N7A')"><img id="play_img" src={PlayIcon} alt /></button>
            </div>
            <div className="movie_description">
                <p><b><span className="movie_age_c">C18</span>Quái Vật Săn Đêm - Sputnik (C18)</b></p>
                <p className="movie_duration">114 phút</p>
            </div>
            <div className="movie_overlay">
                <button id="buy_btn">MUA VÉ</button>
            </div>
            <div className="movie_icon">
                <div className="rating">
                    <p className="rating_point">5.6</p>
                    <p className="rating_star">
                        <img src={start1} alt />
                        <img src={start1} alt />
                        <img src={start12} alt />
                    </p>
                </div>
            </div>
        </div>
    )
}
