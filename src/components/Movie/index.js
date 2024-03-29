import React from 'react';
import start1 from '../../img/Icon/star1.png';
import start12 from '../../img/Icon/star1.2.png';
import PlayIcon from '../../img/Icon/play-video.png';
import { actOpenTrailer } from '../CarouselMovie/modules/actions';
import { connect } from 'react-redux';
import DefaultPicMovie from '../../img/default-film.webp';
import { Link } from 'react-router-dom';
function Movie(props) {
    const { data,openTrailer } = props;
    // console.log(data);
    let Open = ()=>{
       openTrailer(data.trailer);
    }
    const calculatePoint=(point)=>{
        let a = Number(point)/2;
        return a;
    }
    // console.log(calculatePoint(9));
    const checkDouble = (point)=>{
        if(Math.abs(point- parseInt(point))){
            return true;
        }
        else{
            return false;
        }
    }
    const RenderStart = React.useCallback((point)=>{
        if(checkDouble(point)){
                switch(parseInt(point)){
                    case 1:
                        return<>
                            <img src={start1} alt='start1'/>
                            <img src={start12} alt="start1/2" />
                        </>
                    case 2:
                        return<>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img src={start12} alt="start1/2" />
                    </>
                    case 3:
                        return<>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img src={start12} alt="start1/2" />
                    </>
                    case 4:
                        return<>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img src={start12} alt="start1/2" />
                    </>
                }
        }
        else{
            switch(parseInt(point)){
                case 1:
                    return<>
                    <img src={start1} alt='start1'/>
                    
                </>
                case 2:
                    return<>
                    <img src={start1} alt='start1'/>
                    <img src={start1} alt='start1'/>
                </>
                case 3:
                    return<>
                     <img src={start1} alt='start1'/>
                    <img src={start1} alt='start1'/>
                    <img src={start1} alt='start1'/>
                </>
                case 4:
                    return<>
                    <img src={start1} alt='start1'/>
                    <img src={start1} alt='start1'/>
                   <img src={start1} alt='start1'/>
                   <img src={start1} alt='start1'/>
               </>
                case 5:
                    return<>
                      <img src={start1} alt='start1'/>
                    <img src={start1} alt='start1'/>
                    <img src={start1} alt='start1'/>
                   <img src={start1} alt='start1'/>
                   <img src={start1} alt='start1'/>
               </>
            }
        }
    });
    if(data){
        return (
            <div className="movie_item">
                <div className="movie_pic">
                    <img src={data.hinhAnh} alt="Film" />
                    <button onClick={Open} className="play_btn button_trailer_movie" data-toggle="modal" data-target="#modal_trailer"><img id="play_img" alt="playTrailer" src={PlayIcon}/></button>
                </div>
                <div className="movie_description">
                    <p><b>{data.tenPhim}</b></p>
                    <p className="movie_duration">114 phút</p>
                </div>
                <div className="movie_overlay">
                    <Link to={`/detail-movie/${data.maPhim}`} id="buy_btn">MUA VÉ</Link>
                </div>
                <div className="movie_icon">
                    <div className="rating">
                        <p className="rating_point">{data.danhGia}</p>
                        <p className="rating_star">
                            {RenderStart(calculatePoint(Number(data.danhGia)))}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="movie_item">
            <div className="movie_pic">
                <img src={DefaultPicMovie} alt='DefaultPicMovie' />
                <button onClick={Open} className="play_btn button_trailer_movie" data-toggle="modal" data-target="#modal_trailer"><img id="play_img" src={PlayIcon}/></button>
            </div>
            <div className="movie_description">
                <p><b><span className="movie_age_c">C18</span>Movie name</b></p>
                <p className="movie_duration">114 phút</p>
            </div>
            <div className="movie_overlay">
                <button id="buy_btn">MUA VÉ</button>
            </div>
            <div className="movie_icon">
                <div className="rating">
                    <p className="rating_point">rating</p>
                    <p className="rating_star">
                          <img src={start1} alt ="start1" />
                          <img src={start1} alt ="start1" />
                          <img src={start1} alt ="start1" />
                          <img src={start1} alt ="start1" />
                          <img src={start12} alt ="start12" />
                    </p>
                </div>
            </div>
        </div>
        )
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        openTrailer: (link) => {
            dispatch(actOpenTrailer(link));
        }
    }
}
export default connect(null, mapDispatchToProps)(Movie);