import React from 'react'
import start1 from '../../../../img/Icon/star1.png';
import start12 from '../../../../img/Icon/star1.2.png'
import clockIcon from '../../../../img/DetailPage/5a0973abd092d00001df9c0e_clock.svg'
import TicketICon from '../../../../img/DetailPage/icons8-ticket-50.png'
import styled from "styled-components";
import MovieDefault from '../../../../img/default-film.webp';
import * as Action from '../../../ModalTrailer/modules/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function Index(props) {
    const {data} = props;
    const MovieImg = styled.div`
    `;
    const Open=()=>{
        props.openTrailer(data.trailer);
    }
    const calculatePoint=(point)=>{
        let a = Number(point)/2;
        return a;
    }
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
                            <img style={{width: '20px'}} src={start12} alt="start1/2" />
                        </>
                    case 2:
                        return<>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img style={{width: '20px'}} src={start12} alt="start1/2" />
                    </>
                    case 3:
                        return<>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img style={{width: '20px'}} src={start12} alt="start1/2" />
                    </>
                    case 4:
                        return<>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img src={start1} alt='start1'/>
                        <img style={{width: '20px'}} src={start12} alt="start1/2" />
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
    return (
        <div className="header-content row">
            <MovieImg className='img-movie col-6 col-lg-3 col-md-4'>
            <div className="point">{parseFloat(data?.danhGia)}</div>
                <img src={data?.hinhAnh}></img>
            </MovieImg>
        <div className="detail-movie col-12 col-md-6">
            <h1 className="title-movie">{data?.tenPhim}</h1>
            <div className="ratting mb-1">
                <div className="star">
                    {RenderStart(calculatePoint(Number(data?.danhGia)))}
                </div>
                <div className="date">
                    <img src={clockIcon} /><span>{new Date(data?.ngayKhoiChieu).toLocaleDateString()}</span>
                </div>
            </div>
            <p>115 phút - 0 IMDb - 2D/Digital</p>
            <div className="button-group">
                <button className="btn btn-danger"><a href="#lichChieu1">Mua Vé <img src={TicketICon}/></a></button>
                <button className="btn btn-danger" data-toggle="modal" data-target="#modal_trailer" onClick={Open}>Xem Trailer</button>
            </div>
        </div>
    </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        openTrailer:(link)=>{
            dispatch(Action.actOpenTrailer(link));
        }
    }
}
export default connect(null,mapDispatchToProps)(Index);